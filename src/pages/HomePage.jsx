import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const mockupSlides = [
  { img: '/portfolio-airways.jpg', url: 'airwaysworldtravel.vercel.app' },
  { img: '/portfolio-mysanstha.jpg', url: 'info.mysanstha.com' },
]

const stats = [
  { number: '12+', label: 'Live Sites Built' },
  { number: '< 7', label: 'Days to Deliver' },
  { number: '100%', label: 'Full Handoff' },
  { number: '$0', label: 'Hidden Fees' },
]

const serviceItems = [
  {
    icon: '⚡',
    title: 'Landing Pages',
    description: 'Fast, modern single-page websites for startups, agencies, and product launches.',
  },
  {
    icon: '🏛️',
    title: 'Business Websites',
    description: 'Multi-page sites with About, Services, Portfolio, Contact and conversion-focused sections.',
  },
  {
    icon: '🛍️',
    title: 'E-commerce Basics',
    description: 'Product catalogs, cart setup, payment links, and store-ready landing pages.',
  },
  {
    icon: '🎨',
    title: 'Brand Refresh',
    description: 'Complete website redesigns that improve trust, clarity, and customer engagement.',
  },
]

const testimonials = [
  {
    quote: 'Alay delivered a clean, professional site in under a week. Our inquiry rate doubled in the first month.',
    name: 'Rahul M.',
    role: 'Founder, RMConsulting',
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

const portfolioItems = [
  {
    name: 'mySanstha',
    description: 'Full platform for temple and nonprofit management — donations, events, and reporting.',
    img: '/portfolio-mysanstha.jpg',
    url: 'https://info.mysanstha.com',
  },
  {
    name: 'Airways World Travel',
    description: 'Premium travel agency site with services, gallery, and lead capture for a 25-year-old brand.',
    img: '/portfolio-airways.jpg',
    url: 'https://airwaysworldtravel.vercel.app',
  },
  // {
  //   name: "Alay's Portfolio",
  //   description: 'A polished personal portfolio site showcasing design skills, case studies, and service packages.',
  //   img: null,
  //   url: 'https://alay-s-portfolio.vercel.app',
  // },
  {
    name: 'Your Website',
    description: 'Ready to launch your own? Get a fast, modern site built and handed over in under a week.',
    img: null,
    url: null,
  },
]

function HomePage() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActiveIdx(i => (i + 1) % mockupSlides.length), 3500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="page-content">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Professional Websites.</p>
          <h1>Powerful presence for your business</h1>
          <p className="hero-text">
            Modern, fast, responsive websites designed to grow your brand and convert visitors into customers.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link to="/contact" className="btn btn-secondary">
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
              <div className="browser-addr">{mockupSlides[activeIdx].url}</div>
            </div>
            <div className="browser-img-wrap">
              {mockupSlides.map((slide, i) => (
                <img
                  key={slide.url}
                  src={slide.img}
                  alt={slide.url}
                  className={`browser-screenshot${i === activeIdx ? ' active' : ''}`}
                  loading={i === 0 ? 'eager' : 'lazy'}
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
            <p className="price-large">$150</p>
            <p className="plan-note">One-time · Full ownership</p>
            <ul className="checklist">
              <li>Responsive design</li>
              <li>Contact form</li>
              <li>Domain setup guidance</li>
              <li>Up to 2 revisions</li>
              <li>Full handoff with credentials</li>
            </ul>
            <Link to="/contact" className="btn btn-secondary">Get Started</Link>
          </article>
          <article className="feature-card pricing-card-new pricing-highlighted">
            <span className="plan-badge">Most Popular</span>
            <h3>Multi Page</h3>
            <p className="price-large">$300</p>
            <p className="plan-note">One-time · Full ownership</p>
            <ul className="checklist">
              <li>Up to 5 pages</li>
              <li>Custom design</li>
              <li>Contact + booking forms</li>
              <li>SEO basics included</li>
              <li>Up to 2 revisions</li>
              <li>Full handoff with credentials</li>
            </ul>
            <Link to="/contact" className="btn btn-primary">Get Started</Link>
          </article>
        </div>
        <p className="pricing-footnote">Hosting charges may apply. Integrations and add-ons charged extra.</p>
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
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
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
                <img className="portfolio-img" src={item.img} alt={item.name} loading="lazy" />
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
                <Link to="/contact" className="portfolio-link">Get started →</Link>
              )}
            </article>
          ))}
        </div>
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

      <section className="section about-section">
        <div className="about-panel">
          <div className="about-text">
            <p className="eyebrow">About</p>
            <h2>Hi, I'm Alay</h2>
            <p>
              A software and data professional with 5+ Years of experience and who likes creativity. For which, I build fast, modern websites for small businesses, startups, and consultants who want a
              professional online presence without the agency price tag.
            </p>
            <p>
              Every site I build comes with full handoff. You get all credentials, admin access, and
              up to 2 rounds of revisions so you launch with confidence.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Work With Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
