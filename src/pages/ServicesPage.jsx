import { Link } from 'react-router-dom'
import { servicesFaqs } from '../data/faqData'
import { serviceDetails } from '../data/serviceDetails'
import FaqSection from '../components/FaqSection'
import InstagramPromo from '../components/InstagramPromo'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import { servicesSchema } from '../config/schema'

/* Rows are ordered by the questions people actually ask in that order: what it
   costs, what it covers, how fast, and what happens afterwards. */
const comparisonRows = [
  { label: 'Up-front price', single: '$150 one-time', multi: '$300 one-time', monthly: 'Often $0–$500' },
  { label: 'Ongoing cost', single: 'Hosting only', multi: 'Hosting only', monthly: '$25–$99 every month' },
  { label: 'Pages', single: 'One', multi: 'Up to five', monthly: 'Varies by plan tier' },
  { label: 'Typical delivery', single: 'Under 7 days', multi: 'Under 7 days', monthly: 'Days to weeks' },
  { label: 'Revision rounds', single: 'Two included', multi: 'Two included', monthly: 'Varies by plan tier' },
  { label: 'Who owns the site', single: 'You', multi: 'You', monthly: 'Usually the provider' },
  { label: 'If you stop paying', single: 'Nothing happens', multi: 'Nothing happens', monthly: 'Site often goes offline' },
  { label: 'Three-year total', single: '~$195', multi: '~$345', monthly: '~$900–$3,600' },
]

const process = [
  {
    title: 'Tell me what you need',
    body: 'Your business, the pages you have in mind, and anything you already have — a logo, old copy, photos. A rough idea is enough to quote from.',
  },
  {
    title: 'Get a fixed quote',
    body: 'A written price against a written scope, usually within 24 hours. The number does not move later unless you add something and agree to it first.',
  },
  {
    title: 'Build, with a live preview',
    body: 'Half up front to begin. You get a preview link as soon as there is something to see, rather than waiting for one reveal at the end.',
  },
  {
    title: 'Two revision rounds',
    body: 'Feedback batched into two rounds, which is what keeps delivery inside a week. Forms are tested with real submissions before anything goes live.',
  },
  {
    title: 'Handoff, then it is yours',
    body: 'Balance on delivery, then every credential transfers to you along with a written walkthrough. Nothing stays in my name and there is no retainer.',
  },
]

function ServicesPage() {
  return (
    <div className="page-content">
      <Seo path="/services" jsonLd={servicesSchema} />

      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Services</p>
          <h1>Complete web design and development services</h1>
          <p>
            Two packages cover most of what small businesses need — a focused single page at $150, or a
            multi-page business site of up to five pages at $300. Both are one-time payments, both are
            usually delivered in under 7 days, and both end with every credential in your hands.
          </p>
        </div>
        <div className="hero-actions">
          <Link to="/contact#contact-form" className="btn btn-primary">Get a quote</Link>
          <Link to="/portfolio" className="btn btn-secondary">See recent work</Link>
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Compare</p>
          <h2>How the packages compare</h2>
          <p>
            The third column is a typical monthly website plan, included because it is the alternative
            most people are weighing these against — and because the up-front price is the part that
            makes them look similar.
          </p>
        </div>
        <div className="table-scroll">
          <table className="compare-table">
            <caption className="visually-hidden">
              Single-page, multi-page, and typical monthly website plans compared
            </caption>
            <thead>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Single page</th>
                <th scope="col">Multi-page</th>
                <th scope="col">Typical monthly plan</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>{row.single}</td>
                  <td>{row.multi}</td>
                  <td className="compare-other">{row.monthly}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="pricing-footnote">
          Three-year totals assume hosting on a free or near-free tier plus a $15 domain renewal each
          year. Monthly plan figures are typical published ranges, not a specific provider quote —
          the arithmetic is walked through in{' '}
          <Link to="/blog/one-time-payment-vs-monthly-website-subscriptions">
            one-time payment vs monthly subscriptions
          </Link>
          .
        </p>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">What I build</p>
          <h2>Services in detail</h2>
          <p>
            Each of these has its own page with what is included, what is not, how the work runs, and
            what it costs. No quotes hidden behind a call.
          </p>
        </div>
        <div className="grid grid-3">
          {serviceDetails.map((service) => (
            <article key={service.slug} className="feature-card service-card">
              <span className="card-icon card-icon-tile"><ServiceIcon name={service.icon} /></span>
              <h3>
                <Link to={`/services/${service.slug}`}>{service.cardTitle}</Link>
              </h3>
              <p>{service.cardDescription}</p>
              <p className="plan-note">{service.priceLabel}</p>
              <Link to={`/services/${service.slug}`} className="portfolio-link">
                What is included →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Process</p>
          <h2>How a project actually runs</h2>
          <p>
            Five steps, the same on every project. Payment is split 50% to begin and 50% on delivery
            before handoff, so neither of us is carrying the whole risk.
          </p>
        </div>
        <ol className="process-list">
          {process.map((step, i) => (
            <li key={step.title}>
              <span className="process-number" aria-hidden="true">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <div className="section-intro">
          <p className="eyebrow">Every package</p>
          <h2>What is included regardless of which you choose</h2>
        </div>
        <div className="prose">
          <p>
            Some things are not upsells because leaving them out would make the site worse. Every build,
            at either price, is responsive and built mobile-first, uses modern image formats with
            dimensions set so the layout does not jump while loading, and ships with a real page title,
            meta description, and a heading structure that does not skip levels.
          </p>
          <p>
            Every build also ends the same way. Two rounds of revisions, forms tested with live
            submissions, and a handoff that includes every credential plus a short written walkthrough
            of how to change your own text and images. Your domain stays registered in your name
            throughout, and hosting is paid to your own provider — so there is nothing recurring owed
            to BuildWise Webs, and nothing to cancel if you decide to move on.
          </p>
          <p>
            What is deliberately not included is a retainer. Changes after launch are quoted per
            request, which keeps what you pay proportional to work that actually happens. If you would
            like to know what a specific change would cost before committing, ask — you will get a
            number, not a plan.
          </p>
        </div>
      </section>

      <FaqSection
        id="services"
        title="Frequently asked questions"
        items={servicesFaqs}
        defaultOpen={-1}
      >
        <Link to="/faq" className="faq-see-all">See all 18 questions →</Link>
      </FaqSection>

      <InstagramPromo
        heading={false}
        title="Recent builds, posted as they launch"
        body="Work in progress, finished projects, and the occasional note on what changed and why."
      />

      <section className="section cta-panel">
        <div className="cta-box">
          <h2>Need help picking the right option?</h2>
          <p>
            Describe the business and what you want the site to do, and you will get a recommendation
            with a reason attached — including when the cheaper option is the right one. Still weighing
            it up? <Link to="/blog/single-page-vs-multi-page-website">Single page vs multi-page</Link> walks
            through the decision.
          </p>
          <Link to="/contact#contact-form" className="btn btn-primary">
            Request Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
