import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../config/site'

/* Shared Instagram call-out. `title` is per page so the copy matches what that
   page is about rather than repeating one line across the site. */
function InstagramPromo({ title, body, heading = true }) {
  const Heading = heading ? 'h2' : 'p'

  return (
    <section className="section instagram-promo">
      <div className="cta-box instagram-promo-box">
        <div>
          <p className="eyebrow">Instagram</p>
          <Heading className={heading ? undefined : 'instagram-promo-title'}>{title}</Heading>
          <p>{body}</p>
        </div>
        <a
          className="btn btn-primary"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          @{INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  )
}

export default InstagramPromo
