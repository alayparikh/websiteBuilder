const portfolioItems = [
  {
    name: 'Premium Agency',
    details: 'A modern service website with clear calls to action and polished brand styling.',
  },
  {
    name: 'Startup Launch',
    details: 'A fast-loading landing page optimized for email capture and product launches.',
  },
  {
    name: 'Consultant Page',
    details: 'A personal brand website emphasizing credibility, reviews, and service packages.',
  },
]

function PortfolioPage() {
  return (
    <div className="page-content">
      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Portfolio</p>
          <h1>Demo projects that show design quality and clarity</h1>
          <p>Each sample is tailored for a different audience, showing the range of websites I can build.</p>
        </div>
      </section>

      <section className="section">
        <div className="grid grid-3">
          {portfolioItems.map((item) => (
            <article key={item.name} className="portfolio-card">
              <div className="portfolio-image" />
              <h3>{item.name}</h3>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default PortfolioPage
