import { Link } from 'react-router-dom'
import { Head } from 'vite-react-ssg'

function NotFoundPage() {
  return (
    <div className="page-content">
      <Head>
        <title>Page not found — BuildWise Webs</title>
        <meta name="robots" content="noindex, follow" />
      </Head>

      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">404</p>
          <h1>That page does not exist</h1>
          <p>
            The link may be out of date or mistyped. Everything on BuildWise Webs is one click away below.
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn btn-secondary">Contact</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <nav className="footer-nav" aria-label="Site pages">
          <Link to="/services" className="footer-link">Services</Link>
          <Link to="/portfolio" className="footer-link">Portfolio</Link>
          <Link to="/faq" className="footer-link">FAQ</Link>
          <Link to="/contact" className="footer-link">Contact</Link>
        </nav>
      </section>
    </div>
  )
}

export default NotFoundPage
