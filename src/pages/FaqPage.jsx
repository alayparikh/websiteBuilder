import { Link } from 'react-router-dom'
import FaqSection from '../components/FaqSection'
import Seo from '../components/Seo'
import { FAQ_UPDATED, faqCategories, faqs } from '../data/faqData'
import { faqPageSchema } from '../config/schema'

function FaqPage() {
  return (
    <div className="page-content faq-page">
      <Seo path="/faq" jsonLd={faqPageSchema(faqs)} />

      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">FAQ</p>
          <h1>Website design questions, answered</h1>
          <p>
            Everything people ask BuildWise Webs before starting a project — what a website costs, how long
            it takes, how payment works, and what you own once it launches.
          </p>
          <p className="faq-updated">Last updated {FAQ_UPDATED}</p>
          <p className="section-footnote">
            Looking for detail on a specific service? <Link to="/services">Every package and what it
            includes</Link> is listed separately, and the <Link to="/blog">guides</Link> go deeper on{' '}
            <Link to="/blog/what-a-small-business-website-costs">what a website costs</Link> and{' '}
            <Link to="/blog/what-to-prepare-before-hiring-a-web-designer">what to prepare first</Link>.
          </p>
        </div>
      </section>

      {faqCategories.map((category) => (
        <FaqSection
          key={category.id}
          id={category.id}
          eyebrow="Questions"
          title={category.title}
          items={category.items}
          defaultOpen={-1}
        />
      ))}

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Still have a question?</h2>
          <p>
            Send your project details and get a straight answer, plus a quote, usually within 24 hours.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Ask a Question
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FaqPage
