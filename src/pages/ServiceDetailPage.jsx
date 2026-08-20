import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import FaqSection from '../components/FaqSection'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import { serviceBySlug } from '../data/serviceDetails'
import { portfolioProjects } from '../data/portfolioProjects'
import { serviceDetailSchema } from '../config/schema'

function ServiceDetailPage({ service }) {
  const path = `/services/${service.slug}`
  const related = service.relatedServices.map((slug) => serviceBySlug[slug]).filter(Boolean)
  const projects = service.relatedProjects
    .map((name) => portfolioProjects.find((project) => project.name === name))
    .filter(Boolean)

  return (
    <div className="page-content service-detail">
      <Seo path={path} jsonLd={serviceDetailSchema(service)} />

      <section className="section page-header">
        <Breadcrumbs trail={[{ name: 'Services', path: '/services' }]} current={service.navLabel} />
        <div className="section-intro">
          <p className="eyebrow">{service.eyebrow}</p>
          <h1>{service.h1}</h1>
          <p className="service-price-line">
            <strong>{service.priceLabel}</strong> — {service.priceNote}
          </p>
        </div>
        <div className="prose">
          {service.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
        <div className="hero-actions">
          <Link to="/contact#contact-form" className="btn btn-primary">
            Get a quote
          </Link>
          <Link to="/services" className="btn btn-secondary">
            All services
          </Link>
        </div>
      </section>

      {service.sections.map((section) => (
        <section className="section service-section" key={section.heading}>
          <h2>{section.heading}</h2>
          <div className="prose">
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            {section.list && (
              <ul className="checklist">
                {section.list.map((entry) => (
                  <li key={entry}>{entry}</li>
                ))}
              </ul>
            )}
            {section.bodyAfter?.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="section">
        <h2>What is included</h2>
        <div className="grid grid-2 included-grid">
          <article className="feature-card">
            <span className="card-icon card-icon-tile"><ServiceIcon name={service.icon} /></span>
            <h3>Included in the price</h3>
            <ul className="checklist">
              {service.included.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>
          <article className="feature-card">
            <h3>Not included</h3>
            <ul className="checklist checklist-plain">
              {service.notIncluded.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
            <p className="plan-note">
              {service.upgradeNote}{' '}
              <Link to={service.upgradeLink}>See that option →</Link>
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>How the project runs</h2>
        <ol className="process-list">
          {service.process.map((step, i) => (
            <li key={step.title}>
              <span className="process-number" aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {projects.length > 0 && (
        <section className="section">
          <h2>Related work</h2>
          <div className="grid grid-3">
            {projects.map((project) => (
              <article key={project.name} className="portfolio-card">
                <img
                  className="portfolio-img"
                  src={project.img}
                  alt={`${project.name} website built by BuildWise Webs`}
                  width={project.imgWidth}
                  height={project.imgHeight}
                  loading="lazy"
                  decoding="async"
                />
                <h3>{project.name}</h3>
                <p>{project.details}</p>
                <a className="portfolio-link" href={project.url} target="_blank" rel="noopener noreferrer">
                  View live site →
                </a>
              </article>
            ))}
          </div>
          <p className="section-footnote">
            <Link to="/portfolio">See every project in the portfolio →</Link>
          </p>
        </section>
      )}

      <FaqSection
        id={service.slug}
        title={`Questions about ${service.navLabel.toLowerCase()}`}
        items={service.faqs}
        defaultOpen={-1}
      >
        <Link to="/faq" className="faq-see-all">See all questions →</Link>
      </FaqSection>

      <section className="section">
        <h2>Other services</h2>
        <div className="grid grid-2">
          {related.map((other) => (
            <article key={other.slug} className="feature-card">
              <span className="card-icon card-icon-tile"><ServiceIcon name={other.icon} /></span>
              <h3>{other.cardTitle}</h3>
              <p>{other.cardDescription}</p>
              <Link to={`/services/${other.slug}`} className="portfolio-link">
                {other.priceLabel} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Ready to start?</h2>
          <p>
            Send your project details and get a straight answer plus a quote, usually within 24 hours.
            Not sure which option fits? Say so and you will get a recommendation rather than an upsell.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Request a quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetailPage
