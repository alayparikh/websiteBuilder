import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { heroMockupSlides, portfolioItems } from '../data/portfolioProjects'
import { homeFaqs } from '../data/faqData'
import FaqSection from '../components/FaqSection'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import { homeSchema } from '../config/schema'

const stats = [
  { number: '12+', label: 'Live Sites Built' },
  { number: '< 7', label: 'Days to Deliver' },
  { number: '100%', label: 'Full Handoff' },
  { number: '$0', label: 'Hidden Fees' },
]

/* Each card points at the service page that covers it in full, so the homepage
   feeds the deeper pages instead of dead-ending at the contact form. */
const serviceItems = [
  {
    icon: 'landing',
    title: 'Landing Pages',
    description: 'Fast, modern single-page websites for startups, agencies, and product launches.',
    href: '/services/landing-page-design',
  },
  {
    icon: 'business',
    title: 'Business Websites',
    description: 'Multi-page sites with About, Services, Portfolio, Contact and conversion-focused sections.',
    href: '/services/business-website',
  },
  {
    icon: 'ecommerce',
    title: 'E-commerce Basics',
    description: 'Product catalogs, cart setup, payment links, and store-ready landing pages.',
    href: '/services/ecommerce-setup',
  },
  {
    icon: 'brand',
    title: 'Brand Refresh',
    description: 'Complete website redesigns that improve trust, clarity, and customer engagement.',
    href: '/services/website-redesign',
  },
]

const testimonials = [
  {
    quote: 'The new site looked clean, professional, and launched in under a week. Our inquiry rate doubled in the first month.',
    name: 'Rahul M.',
    role: 'Founder, Consulting Agency',
  },
  {
    quote: 'I needed a site fast for a product launch. Got exactly what I wanted — mobile-ready, fast, and polished.',
    name: 'Sara T.',
    role: 'Startup Founder',
  },
  {
    quote: 'Full handoff with all credentials, no back-and-forth. Best experience hiring a web developer.',
    name: 'James K.',
    role: 'Small Business Owner',
  },
]

function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveIdx(i => (i + 1) % heroMockupSlides.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="page-content">
      <Seo path="/" jsonLd={homeSchema} />

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Professional Websites.</p>
          <h1>Website design for small businesses, from $150</h1>
          <p className="hero-text">
            A powerful presence for your business! Modern, fast, responsive websites designed to grow
            your brand and convert visitors into customers. One time payment, live in under a week.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/contact#contact-form" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
          <div className="hero-notes">
            <span>Fast delivery</span>
            <span>Clean design</span>
            <span>100% satisfaction</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="browser-mockup">
            <div className="browser-bar">
              <div className="browser-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>
              <div className="browser-addr">{heroMockupSlides[activeIdx].displayUrl}</div>
            </div>
            <div className="browser-img-wrap">
              {heroMockupSlides.map((slide, i) => (
                <img
                  key={slide.name}
                  src={slide.img}
                  alt={`${slide.name} website built by BuildWise Webs`}
                  className={`browser-screenshot${i === activeIdx ? ' active' : ''}`}
                  width={slide.imgWidth}
                  height={slide.imgHeight}
                  decoding="async"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchpriority={i === 0 ? 'high' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="stats-strip">
        {stats.map(s => (
          <div key={s.label} className="stat-item">
            <div className="stat-number">{s.number}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <section className="section pricing-standalone">
        <div className="section-intro">
          <p className="eyebrow">Pricing</p>
          <h2>Simple, one-time pricing</h2>
          <p>No subscriptions, no surprises. You own everything after delivery.</p>
        </div>
        <div className="grid grid-2 pricing-grid">
          <article className="feature-card pricing-card-new">
            <h3>Single Page</h3>
            <p className="price-large">$100</p>
            <p className="plan-note">One-time · Full ownership</p>
            <ul className="checklist">
              <li>Responsive design</li>
              <li>Contact form</li>
              <li>Domain setup guidance</li>
              <li>Up to 2 revisions</li>
              <li>Full handoff with credentials</li>
            </ul>
            <Link to="/contact#contact-form" className="btn btn-secondary">Get Started</Link>
          </article>
          <article className="feature-card pricing-card-new pricing-highlighted">
            <span className="plan-badge">Most Popular</span>
            <h3>Multi Page</h3>
            <p className="price-large">$300</p>
            <p className="plan-note">One-time · Full ownership</p>
            <ul className="checklist">
              <li>Up to 8 pages</li>
              <li>Custom design</li>
              <li> WhatsApp integration + booking forms</li>
              <li>SEO basics included</li>
              <li>Up to 3 revisions</li>
              <li>Full handoff with credentials</li>
            </ul>
            <Link to="/contact#contact-form" className="btn btn-primary">Get Started</Link>
          </article>
        </div>
        <p className="pricing-footnote">
          Hosting charges may apply. Integrations and add-ons charged extra. Payment terms, revisions,
          and what happens at handoff are covered in the <Link to="/faq">FAQ</Link>, and{' '}
          <Link to="/blog/what-a-small-business-website-costs">what a website actually costs</Link>{' '}
          explains why quotes vary so widely.
        </p>
      </section>

      <section className="section intro-block">
        <div className="section-intro">
          <p className="eyebrow">Offerings</p>
          <h2>Website packages that help you win more clients</h2>
          <p>
            From launch-ready landing pages to full business sites with booking and e-commerce support,
            I build websites that look premium and work smoothly.
          </p>
        </div>
        <div className="grid grid-4">
          {serviceItems.map((item) => (
            <article key={item.title} className="feature-card">
              <span className="card-icon card-icon-tile"><ServiceIcon name={item.icon} /></span>
              <h3>
                <Link to={item.href}>{item.title}</Link>
              </h3>
              <p>{item.description}</p>
              <Link to={item.href} className="portfolio-link">What is included →</Link>
            </article>
          ))}
        </div>
        <p className="section-footnote">
          Not sure which fits? <Link to="/blog/single-page-vs-multi-page-website">Single page vs
          multi-page</Link> walks through the decision, or see <Link to="/services">every service and
          what it costs</Link>.
        </p>
      </section>

      <section className="section portfolio-preview">
        <div className="section-intro">
          <p className="eyebrow">Portfolio</p>
          <h2>Real websites built for real clients</h2>
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
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              {item.url ? (
                <a className="portfolio-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  View site →
                </a>
              ) : (
                <Link to="/contact#contact-form" className="portfolio-link">Get started →</Link>
              )}
            </article>
          ))}
        </div>
        <p className="section-footnote">
          <Link to="/portfolio">See the full portfolio with project details →</Link>
        </p>
      </section>

      <section className="section testimonials-section">
        <div className="section-intro">
          <p className="eyebrow">Testimonials</p>
          <h2>What clients say</h2>
        </div>
        <div className="grid grid-3">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-author">
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <FaqSection
        id="home"
        title="Common questions before you start"
        items={homeFaqs}
      >
        <Link to="/faq" className="faq-see-all">See all questions →</Link>
      </FaqSection>

      <section className="section about-section">
        <div className="about-panel">
          <div className="about-text">
            <p className="eyebrow">About</p>
            <h2>Websites built with clarity, speed, and a little spark</h2>
            <p>
              This studio blends clean engineering with sharp visual direction, turning rough ideas
              into websites that feel polished, credible, and easy to use from the first click.
            </p>
            <p>
              Each project is shaped around what matters most: a clear message, smooth mobile
              experience, fast load times, and a launch process that does not feel complicated.
            </p>
            <Link to="/contact#contact-form" className="btn btn-primary">
              Work With Me
            </Link>
          </div>
          <div className="about-highlights" aria-label="Website build highlights">
            <span>Clear layout</span>
            <span>Fast loading</span>
            <span>Easy handoff</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
