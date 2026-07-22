import { Link } from 'react-router-dom'

const portfolioItems = [
  {
    name: 'Radiant Control Systems',
    details: 'Revamped a frequently hacked client website into a secure, SEO and GEO optimized site built for stronger keyword rankings.',
    img: '/portfolio-radiant-control-systems.png',
    url: 'https://radiantcontrolsystems.com/',
    tag: 'Security + SEO Revamp',
  },
  {
    name: 'mySanstha',
    details: 'Full platform for temple and nonprofit management — donations, events, POS, and compliance reporting.',
    img: '/portfolio-mysanstha.jpg',
    url: 'https://info.mysanstha.com',
    tag: 'Organization Platform',
  },
  {
    name: "Alay's Portfolio",
    details: 'A polished personal portfolio site showcasing case studies, services, and a modern brand identity.',
    img: '/portfolio-alay.jpg',
    url: 'https://alay-s-portfolio.vercel.app',
    tag: 'Personal Portfolio',
  },
  {
    name: 'Airways World Travel',
    details: 'Premium travel agency website with services, gallery, testimonials, and lead capture — built for a 25-year-old brand.',
    img: '/portfolio-airways.jpg',
    url: 'https://airwaysworldtravel.vercel.app',
    tag: 'Travel Agency',
  },
  {
    name: 'Your Website',
    details: 'Ready to be built. Get a fast, modern, mobile-friendly site delivered with full handoff in under a week.',
    img: null,
    url: null,
    tag: 'Coming Soon',
  },
]

function PortfolioPage() {
  return (
    <div className="page-content">
      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Portfolio</p>
          <h1>Real websites built for real clients</h1>
          <p>Each project is built from scratch — tailored design, clean code, and full handoff with credentials.</p>
        </div>
      </section>

      <section className="section">
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
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>{item.tag}</p>
              <h3>{item.name}</h3>
              <p>{item.details}</p>
              {item.url ? (
                <a className="portfolio-link" href={item.url} target="_blank" rel="noopener noreferrer">
                  View live site →
                </a>
              ) : (
                <Link to="/contact" className="portfolio-link">Start your project →</Link>
              )}
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
