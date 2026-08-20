import { useState } from 'react'

/* Renders question/answer accordions only. FAQPage markup deliberately lives
   with the page that owns the canonical answers (/faq, and each service page
   for its own unique questions) so the same Q&A is never marked up twice. */
function FaqSection({ id, eyebrow = 'FAQ', title, items, defaultOpen = 0, children }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <section className="section faq-section" id={id ? `faq-${id}` : undefined}>
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
