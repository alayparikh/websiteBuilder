import { useState } from 'react'
import Seo from '../components/Seo'
import { contactSchema } from '../config/schema'
import { CONTACT_EMAIL } from '../config/site'

const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CONTACT_EMAIL}`

const AUTORESPONSE =
  "Thanks for reaching out to BuildWise Webs. Your project details came through and you'll get a reply with a quote within 24 hours."

function ContactPage() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const formData = new FormData(event.target)
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setStatus('success')
        event.target.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="page-content">
      <Seo path="/contact" jsonLd={contactSchema} />

      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Contact</p>
          <h1>Send your project details and get a fast quote</h1>
          <p>
            Use the form below to share your website needs. This form is connected to a live form service and sends messages directly.
          </p>
        </div>
      </section>

      <section className="section contact-page" id="contact-form">
        <div className="contact-panel contact-panel-page">
          <div>
            <h2>Ready to launch your website?</h2>
            <p>
              I provide full handoff with credentials, hosting guidance, and up to 2 rounds of revisions to make sure you launch with confidence.
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New website inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_autoresponse" value={AUTORESPONSE} />
            <input
              type="text"
              name="_honey"
              className="honeypot-field"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
            />

            <label>
              Name
              <input name="name" type="text" placeholder="Your name" autoComplete="name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Your email" autoComplete="email" required />
            </label>
            <label>
              <span>Phone <span className="label-optional">(optional)</span></span>
              <input
                name="phone"
                type="tel"
                placeholder="Your phone or WhatsApp number"
                autoComplete="tel"
                inputMode="tel"
              />
            </label>
            <label>
              Project details
              <textarea name="message" placeholder="Tell me about your website needs" rows="5" required />
            </label>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Request'}
            </button>

            {status === 'success' && <p className="form-status success">Message sent successfully.</p>}
            {status === 'error' && (
              <p className="form-status error">
                Something went wrong sending that. Email{' '}
                <a href={`mailto:${CONTACT_EMAIL}?subject=New%20website%20inquiry`}>{CONTACT_EMAIL}</a>{' '}
                directly and your message will still reach me.
              </p>
            )}
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
