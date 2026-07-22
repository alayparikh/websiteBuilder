import { Link } from 'react-router-dom'
import { portfolioItems } from '../data/portfolioProjects'

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
