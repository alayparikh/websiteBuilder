import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/portfolioProjects'
import { serviceDetails } from '../data/serviceDetails'
import Seo from '../components/Seo'
import { portfolioSchema } from '../config/schema'

function PortfolioPage() {
  return (
    <div className="page-content">
      <Seo path="/portfolio" jsonLd={portfolioSchema(portfolioItems)} />

      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Portfolio</p>
          <h1>Real websites built for real clients</h1>
          <p>Each project is built from scratch! Tailored design, clean code, and full handoff with credentials.</p>
        </div>
      </section>

      <section className="section">
        {/* An H2 before the project cards so the outline runs H1 → H2 → H3
            rather than jumping a level straight into the card headings. */}
        <div className="section-intro">
          <p className="eyebrow">Recent work</p>
          <h2>Live client websites</h2>
          <p>
            Every site below is online and reachable — no mockups. Each one was delivered on the same
            terms as any other project: one-time price, two revision rounds, and full credential handoff.
          </p>
        </div>
        <div className="grid grid-3">
          {portfolioItems.map((item) => (
            <article key={item.name} className="portfolio-card">
              {item.img ? (
                <img
                  className="portfolio-img"
                  src={item.img}
                  alt={`${item.name} website built by BuildWise Webs`}
                  width={item.imgWidth}
                  height={item.imgHeight}
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="portfolio-image">
                  {item.url ? 'Live site preview' : 'Project preview coming soon'}
                </div>
              )}
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>{item.tag}</p>
              <h3>{item.name}</h3>
              <p>{item.details}</p>
              {item.url ? (
                <a className="portfolio-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  View live site →
                </a>
              ) : (
                <Link to="/contact#contact-form" className="portfolio-link">Start your project →</Link>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Services</p>
          <h2>The work behind these projects</h2>
          <p>Each project used one or more of these. Every service page lists what is included and what it costs.</p>
        </div>
        <div className="grid grid-3">
          {serviceDetails.map((service) => (
            <article key={service.slug} className="feature-card">
              <h3>
                <Link to={`/services/${service.slug}`}>{service.cardTitle}</Link>
              </h3>
              <p>{service.cardDescription}</p>
              <p className="plan-note">{service.priceLabel}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Want something like these?</h2>
          <p>
            Send your project details for a fixed quote, usually within 24 hours. If you are still
            deciding on scope, <Link to="/services">compare the packages</Link> or read{' '}
            <Link to="/blog/what-to-prepare-before-hiring-a-web-designer">what to prepare first</Link>.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">Start your project</Link>
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
