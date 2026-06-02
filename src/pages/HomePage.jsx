import { Link } from 'react-router-dom'

const serviceItems = [
  {
    title: 'Landing Pages',
    description: 'Fast, modern single-page websites for startups, agencies, and product launches.',
  },
  {
    title: 'Business Websites',
    description: 'Multi-page sites with About, Services, Portfolio, Contact and conversion-focused sections.',
  },
  {
    title: 'E-commerce Basics',
    description: 'Product catalogs, cart setup, payment links, and store-ready landing pages.',
  },
  {
    title: 'Brand Refresh',
    description: 'Complete website redesigns that improve trust, clarity, and customer engagement.',
  },
]

const testimonials = [
  {
    quote: 'Alay delivered a clean, professional site in under a week. Our inquiry rate doubled in the first month.',
    name: 'Rahul M.',
    role: 'Founder, R**Consulting',
  },
  {
    quote: 'I needed a site fast for a product launch. Got exactly what I wanted mobile-ready, fast, and polished.',
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
  {
    name: 'Your Website',
    description: 'Ready to launch your own? Get a fast, modern site built and handed over in under a week.',
    img: null,
    url: null,
  },
]

function HomePage() {
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
        <div className="hero-card">
          <div className="pricing-card">
            <div className="pricing-row">
              <div className="plan plan-single">
                <h2>Single Page</h2>
                <p className="price">$150</p>
                <p className="plan-note">One-time</p>
              </div>
              <div className="plan plan-multi">
                <h2>Multi Page</h2>
                <p className="price">$300</p>
                <p className="plan-note">One-time</p>
              </div>
            </div>
            <p className="pricing-footnote">Hosting charges may apply. Integrations and add-ons charged extra.</p>
          </div>
        </div>
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
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section portfolio-preview">
        <div className="section-intro">
          <p className="eyebrow">Portfolio</p>
          <h2>Sample demos included in this website</h2>
        </div>
        <div className="grid grid-3">
          {portfolioItems.map((item) => (
            <article key={item.name} className="portfolio-card">
              {item.img ? (
                <img className="portfolio-img" src={item.img} alt={item.name} loading="lazy" />
              ) : (
                <div className="portfolio-image" />
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
              I build fast, modern websites for small businesses, startups, and consultants who want a
              professional online presence without the agency price tag.
            </p>
            <p>
              Every site I build comes with full handoff — you get all credentials, admin access, and
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
