import { useState } from 'react'

function ContactPage() {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    const formData = new FormData(event.target)
    try {
      const response = await fetch('https://formsubmit.co/ajax/parikhalay1@gmail.com', {
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
      <section className="section page-header">
        <div className="section-intro">
          <p className="eyebrow">Contact</p>
          <h1>Send your project details and get a fast quote</h1>
          <p>
            Use the form below to share your website needs. This form is connected to a live form service and sends messages directly.
          </p>
        </div>
      </section>

      <section className="section contact-page">
        <div className="contact-panel contact-panel-page">
          <div>
            <h2>Ready to launch your website?</h2>
            <p>
              I provide full handoff with credentials, hosting guidance, and up to 2 rounds of revisions to make sure you launch with confidence.
            </p>
            <div className="contact-info">
              <span>📞 408-483-1223</span>
              <span>✉️ parikhalay1@gmail.com</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="New website inquiry" />
            <input type="hidden" name="_captcha" value="false" />

            <label>
              Name
              <input name="name" type="text" placeholder="Your name" required />
            </label>
            <label>
              Email
              <input name="email" type="email" placeholder="Your email" required />
            </label>
            <label>
              Project details
              <textarea name="message" placeholder="Tell me about your website needs" rows="5" required />
            </label>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send Request'}
            </button>

            {status === 'success' && <p className="form-status success">Message sent successfully.</p>}
            {status === 'error' && <p className="form-status error">Something went wrong. Try again later.</p>}
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactPage
