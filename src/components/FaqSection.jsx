import { useState } from 'react'
import { Head } from 'vite-react-ssg'
import { faqSectionSchema } from '../config/schema'

function FaqSection({ id, eyebrow = 'FAQ', title, items, emitSchema = true, defaultOpen = 0, children }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <section className="section faq-section">
      {emitSchema && (
        <Head>
          <script type="application/ld+json">
            {JSON.stringify(faqSectionSchema(id, items))}
          </script>
        </Head>
      )}

      <div className="section-intro">
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <div className="faq-list">
        {items.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.question} className={`faq-item${isOpen ? ' faq-item-open' : ''}`}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span>{item.question}</span>
                <span className="faq-toggle" aria-hidden="true">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="faq-answer">{item.answer}</p>}
            </div>
          )
        })}
      </div>
      {children && <div className="faq-section-footer">{children}</div>}
    </section>
  )
}

export default FaqSection
