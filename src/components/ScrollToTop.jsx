import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/* React Router keeps the previous scroll position across route changes, so
   navigating from halfway down one page drops you halfway down the next.

   Also handles in-page anchors: the browser resolves `#hash` against the
   document at load time, but on a client-side navigation the target element
   does not exist yet when the URL changes, so nothing happens without this. */
function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1))
      if (target) {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' })
        return
      }
    }

    // 'instant' is required to override `html { scroll-behavior: smooth }`,
    // but older engines throw TypeError on the unrecognised enum value.
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    } catch {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}

export default ScrollToTop
