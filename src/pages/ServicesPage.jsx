const services = [
  {
    icon: 'design',
    title: 'Website Design',
    description: 'Custom design work with responsive layouts, brand style, and strong visual hierarchy.',
  },
  {
    icon: 'layers',
    title: 'Multi-Page Builds',
    description: 'Company websites with About, Services, Portfolio, Pricing, and Contact pages.',
  },
  {
    icon: 'performance',
    title: 'Performance Optimization',
    description: 'Fast loading pages, clean code, mobile-first design, and modern browser support.',
  },
  {
    icon: 'ecommerce',
    title: 'E-commerce Setup',
    description: 'Simple shop pages, product showcases, payment links, and order-ready landing experiences.',
  },
  {
    icon: 'launch',
    title: 'Content & Launch Support',
    description: 'Content guidance, domain setup, hosting advice, and full handoff with credentials.',
  },
  {
    icon: 'wand',
    title: 'Branding Add-ons',
    description: 'Logo and color direction, messaging polish, and page structure for stronger conversions.',
  },
]

import { Link } from 'react-router-dom'
import { servicesFaqs } from '../data/faqData'
import FaqSection from '../components/FaqSection'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import { servicesSchema } from '../config/schema'

function ServicesPage() {
  return (
    <div className="page-content">
      <Seo path="/services" jsonLd={servicesSchema} />

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
              <span className="card-icon card-icon-tile"><ServiceIcon name={service.icon} /></span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>
      <FaqSection
        id="services"
        title="Frequently asked questions"
        items={servicesFaqs}
      >
        <Link to="/faq" className="faq-see-all">See all questions →</Link>
      </FaqSection>

      <section className="section instagram-promo">
        <div className="cta-box instagram-promo-box">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2>Follow us on Instagram to stay updated on SEO optimization techniques</h2>
            <p>Tips, updates, and behind-the-scenes on building fast, search-friendly websites.</p>
          </div>
          <a
            className="btn btn-primary"
            href="https://www.instagram.com/build_wisewebs"
            target="_blank"
            rel="noopener noreferrer"
          >
            @build_wisewebs
          </a>
        </div>
      </section>

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Need help picking the right option?</h2>
          <p>
            I can help you choose the best website structure for your business, timeline, and budget.
            Book a free consultation and get a custom recommendation.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
