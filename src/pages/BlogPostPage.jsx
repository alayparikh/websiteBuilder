import { Link } from 'react-router-dom'
import Breadcrumbs from '../components/Breadcrumbs'
import Seo from '../components/Seo'
import { postBySlug } from '../data/blogPosts'
import { serviceBySlug } from '../data/serviceDetails'
import { blogPostSchema } from '../config/schema'

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })

function BlogPostPage({ post }) {
  const path = `/blog/${post.slug}`
  const services = post.relatedServices.map((slug) => serviceBySlug[slug]).filter(Boolean)
  const posts = post.relatedPosts.map((slug) => postBySlug[slug]).filter(Boolean)

  return (
    <div className="page-content blog-post">
      <Seo
        path={path}
        jsonLd={blogPostSchema(post)}
        ogType="article"
        article={{ published: post.published, updated: post.updated, tags: post.tags }}
      />

      <article className="section page-header">
        <Breadcrumbs trail={[{ name: 'Blog', path: '/blog' }]} current={post.title} />
        <div className="section-intro">
          <p className="eyebrow">{post.tags.join(' · ')}</p>
          <h1>{post.h1}</h1>
          <p className="blog-meta">
            <time dateTime={post.published}>{formatDate(post.published)}</time>
            {' · '}
            {post.readingMinutes} min read
            {post.updated !== post.published && ` · updated ${formatDate(post.updated)}`}
          </p>
        </div>

        <div className="prose">
          {post.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="lead">{paragraph}</p>
          ))}

          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paras.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              {section.list && (
                <ul className="checklist">
                  {section.list.map((entry) => (
                    <li key={entry}>{entry}</li>
                  ))}
                </ul>
              )}
              {section.after?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </article>

      <section className="section">
        <h2>Services mentioned in this guide</h2>
        <div className="grid grid-2">
          {services.map((service) => (
            <article key={service.slug} className="feature-card">
              <h3>{service.cardTitle}</h3>
              <p>{service.cardDescription}</p>
              <Link to={`/services/${service.slug}`} className="portfolio-link">
                {service.priceLabel} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Keep reading</h2>
        <div className="grid grid-2">
          {posts.map((other) => (
            <article key={other.slug} className="feature-card blog-card">
              <h3>
                <Link to={`/blog/${other.slug}`}>{other.title}</Link>
              </h3>
              <p>{other.excerpt}</p>
            </article>
          ))}
        </div>
        <p className="section-footnote">
          <Link to="/blog">All guides →</Link> · <Link to="/faq">Frequently asked questions →</Link>
        </p>
      </section>

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Want this applied to your own project?</h2>
          <p>
            Send your details and get a quote plus a straight recommendation on which option fits —
            one-time pricing from $150, delivered in under 7 days.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Get a quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage
