const services = [
  {
    icon: '🎨',
    title: 'Website Design',
    description: 'Custom design work with responsive layouts, brand style, and strong visual hierarchy.',
  },
  {
    icon: '📋',
    title: 'Multi-Page Builds',
    description: 'Company websites with About, Services, Portfolio, Pricing, and Contact pages.',
  },
  {
    icon: '⚡',
    title: 'Performance Optimization',
    description: 'Fast loading pages, clean code, mobile-first design, and modern browser support.',
  },
  {
    icon: '🛍️',
    title: 'E-commerce Setup',
    description: 'Simple shop pages, product showcases, payment links, and order-ready landing experiences.',
  },
  {
    icon: '🚀',
    title: 'Content & Launch Support',
    description: 'Content guidance, domain setup, hosting advice, and full handoff with credentials.',
  },
  {
    icon: '✨',
    title: 'Branding Add-ons',
    description: 'Logo and color direction, messaging polish, and page structure for stronger conversions.',
  },
]

import { Link } from 'react-router-dom'

function ServicesPage() {
  return (
    <div className="page-content">
      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Services</p>
          <h1>Complete web design and development services</h1>
          <p>
            Choose the package that fits your goals, from a polished single-page brochure website to a full multi-page business experience.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="grid grid-3">
          {services.map((service) => (
            <article key={service.title} className="feature-card service-card">
              <span className="card-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Need help picking the right option?</h2>
          <p>
            I can help you choose the best website structure for your business, timeline, and budget.
            Book a free consultation and get a custom recommendation.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
