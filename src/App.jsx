import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import FaqPage from './pages/FaqPage'
import BlogIndexPage from './pages/BlogIndexPage'
import BlogPostPage from './pages/BlogPostPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import NotFoundPage from './pages/NotFoundPage'
import { serviceDetails } from './data/serviceDetails'
import { blogPosts } from './data/blogPosts'
import CustomCursor from './components/CustomCursor'
import ScrollToTop from './components/ScrollToTop'
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from './config/site'
import './styles.css'

function Logo({ theme, onNavigate }) {
  return (
    <Link to="/" className="brand-link" aria-label="BuildWise Webs — home" onClick={onNavigate('/')}>
      <img
        className="logo-mark"
        src={theme === 'dark' ? '/buildWiseWebsDark.webp' : '/buildWiseWebs.webp'}
        alt="BuildWise Webs"
        width="160"
        height="40"
      />
    </Link>
  )
}

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/blog', label: 'Guides' },
  { href: '/faq', label: 'FAQ' },
  // Styled as a CTA so it stays the visual endpoint of the nav now that there
  // are five items competing for attention.
  { href: '/contact', label: 'Contact', cta: true },
]

function Layout() {
  const { pathname } = useLocation()

  /* Clicking the link for the page you are already on is a no-op for the
     router, so handle it here: cancel the navigation and scroll to the top.
     Smooth here (unlike ScrollToTop) because nothing is re-rendering. */
  const handleNavClick = (href) => (event) => {
    if (pathname !== href) return
    event.preventDefault()
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, left: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  // Starts null, not 'dark': the inline script in index.html has already applied
  // the saved theme before first paint, and writing a default here before
  // localStorage is read would flash light-mode users back to dark for a frame.
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem('site-theme')
    setTheme(savedTheme === 'light' ? 'light' : 'dark')
  }, [])

  useEffect(() => {
    if (!theme) return
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('site-theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
      <ScrollToTop />
      <CustomCursor />
      <div className="app-shell">
        <header className="site-header">
          <div className="brand">
            <Logo theme={theme ?? 'dark'} onNavigate={handleNavClick} />
          </div>
          <nav className="site-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' nav-link-active' : ''}${link.cta ? ' nav-link-cta' : ''}`
                }
                onClick={handleNavClick(link.href)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="footer">
          <a
            className="footer-social"
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow BuildWise Webs on Instagram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth="1.8" />
              <circle cx="17.35" cy="6.65" r="1.15" fill="currentColor" />
            </svg>
            @{INSTAGRAM_HANDLE}
          </a>
          <nav className="footer-nav" aria-label="Footer">
            <NavLink to="/services" className="footer-link" onClick={handleNavClick('/services')}>Services</NavLink>
            <NavLink to="/portfolio" className="footer-link" onClick={handleNavClick('/portfolio')}>Portfolio</NavLink>
            <NavLink to="/blog" className="footer-link" onClick={handleNavClick('/blog')}>Guides</NavLink>
            <NavLink to="/faq" className="footer-link" onClick={handleNavClick('/faq')}>FAQ</NavLink>
            <NavLink to="/contact" className="footer-link" onClick={handleNavClick('/contact')}>Contact</NavLink>
          </nav>
          <p>Fast &amp; responsive • Mobile friendly • Secure &amp; reliable • Built to grow your business</p>
          <p className="footer-copyright">© {new Date().getFullYear()} BuildWise Webs. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

export const routes = [
  {
    path: '/',
    element: <Layout />,
    entry: 'src/App.jsx',
    children: [
      { index: true, element: <HomePage />, entry: 'src/pages/HomePage.jsx' },
      { path: 'services', element: <ServicesPage />, entry: 'src/pages/ServicesPage.jsx' },
      /* Explicit routes rather than a `:slug` param: every service and post is
         known at build time, so the SSG pass needs no getStaticPaths hook and
         each URL is a real prerendered file. */
      ...serviceDetails.map((service) => ({
        path: `services/${service.slug}`,
        element: <ServiceDetailPage service={service} />,
        entry: 'src/pages/ServiceDetailPage.jsx',
      })),
      { path: 'blog', element: <BlogIndexPage />, entry: 'src/pages/BlogIndexPage.jsx' },
      ...blogPosts.map((post) => ({
        path: `blog/${post.slug}`,
        element: <BlogPostPage post={post} />,
        entry: 'src/pages/BlogPostPage.jsx',
      })),
      { path: 'portfolio', element: <PortfolioPage />, entry: 'src/pages/PortfolioPage.jsx' },
      { path: 'contact', element: <ContactPage />, entry: 'src/pages/ContactPage.jsx' },
      { path: 'faq', element: <FaqPage />, entry: 'src/pages/FaqPage.jsx' },
      { path: '*', element: <NotFoundPage />, entry: 'src/pages/NotFoundPage.jsx' },
    ],
  },
]

export default Layout
