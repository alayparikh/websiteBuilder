import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import CustomCursor from './components/CustomCursor'
import './styles.css'

const routeMeta = {
  '/': {
    title: 'WebsByAlay — Professional Web Design',
    description: 'Launch a responsive, SEO-friendly website with professional design, fast delivery, and transparent handoff.',
  },
  '/services': {
    title: 'Website Services — WebsByAlay',
    description: 'Explore professional website design, e-commerce setup, performance optimization, and site launch support.',
  },
  '/portfolio': {
    title: 'Portfolio — WebsByAlay',
    description: 'View sample website projects showing modern layouts, responsive design, and business-focused pages.',
  },
  '/contact': {
    title: 'Contact — WebsByAlay',
    description: 'Send your website project details to get a fast quote and launch a professional online presence.',
  },
}

function PageMeta() {
  const location = useLocation()

  useEffect(() => {
    const meta = routeMeta[location.pathname] || routeMeta['/']
    const currentUrl = `https://your-site-url.vercel.app${location.pathname}`

    document.title = meta.title

    const descriptionTag = document.querySelector('meta[name="description"]')
    const ogTitleTag = document.querySelector('meta[property="og:title"]')
    const ogDescTag = document.querySelector('meta[property="og:description"]')
    const urlTag = document.querySelector('meta[property="og:url"]')
    const twitterTitleTag = document.querySelector('meta[name="twitter:title"]')
    const twitterDescTag = document.querySelector('meta[name="twitter:description"]')
    const canonicalTag = document.querySelector('link[rel="canonical"]')

    if (descriptionTag) descriptionTag.setAttribute('content', meta.description)
    if (ogTitleTag) ogTitleTag.setAttribute('content', meta.title)
    if (ogDescTag) ogDescTag.setAttribute('content', meta.description)
    if (urlTag) urlTag.setAttribute('content', currentUrl)
    if (twitterTitleTag) twitterTitleTag.setAttribute('content', meta.title)
    if (twitterDescTag) twitterDescTag.setAttribute('content', meta.description)

    if (canonicalTag) {
      canonicalTag.setAttribute('href', currentUrl)
    } else {
      const link = document.createElement('link')
      link.rel = 'canonical'
      link.href = currentUrl
      document.head.appendChild(link)
    }
  }, [location.pathname])

  return null
}

function Logo() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="34" height="34" rx="10" fill="#3c5cff"/>
      <polyline
        points="6,11 11,23 17,15 23,23 28,11"
        fill="none"
        stroke="white"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/contact', label: 'Contact' },
]

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('site-theme')
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('site-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
  }

  return (
    <BrowserRouter>
      <PageMeta />
      <CustomCursor />
      <div className="app-shell">
        <header className="site-header">
          <div className="brand">
            <Logo />
            WebsByAlay
          </div>
          <nav className="site-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' nav-link-active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>Fast & responsive • Mobile friendly • Secure & reliable • Built to grow your business</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
