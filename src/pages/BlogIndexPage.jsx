import { Link } from 'react-router-dom'
import InstagramPromo from '../components/InstagramPromo'
import Seo from '../components/Seo'
import { blogPosts } from '../data/blogPosts'
import { blogIndexSchema } from '../config/schema'

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

function BlogIndexPage() {
  return (
    <div className="page-content">
      <Seo path="/blog" jsonLd={blogIndexSchema(blogPosts)} />

      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Guides</p>
          <h1>Straight answers about building a small business website</h1>
          <p>
            What things cost, why quotes vary so much, and what to sort out before you hire anyone.
            Written for business owners buying a website, not for other web designers.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="visually-hidden">All articles</h2>
        <div className="grid grid-2">
          {blogPosts.map((post) => (
            <article key={post.slug} className="feature-card blog-card">
              <p className="eyebrow">{post.tags.join(' · ')}</p>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <p className="blog-meta">
                <time dateTime={post.published}>{formatDate(post.published)}</time>
                {' · '}
                {post.readingMinutes} min read
              </p>
              <Link to={`/blog/${post.slug}`} className="portfolio-link">
                Read the guide →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <InstagramPromo
        title="Follow us on Instagram for SEO tips and tricks"
        body="Short, practical posts on search visibility, page speed, and what actually moves rankings for a small business site — plus new guides as they go up."
      />

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Would you rather just ask?</h2>
          <p>
            Send your project details and get a specific answer for your situation, usually within 24 hours.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Ask a question
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogIndexPage
