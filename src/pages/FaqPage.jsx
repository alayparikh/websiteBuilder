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
        </div>
      </section>

      {faqCategories.map((category) => (
        <FaqSection
          key={category.id}
          id={category.id}
          eyebrow="Questions"
          title={category.title}
          items={category.items}
          emitSchema={false}
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
