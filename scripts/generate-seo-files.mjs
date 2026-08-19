import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { faqCategories } from '../src/data/faqData.js'

const SITE_URL = 'https://buildwisewebs.vercel.app'
const ROUTES = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/faq', label: 'FAQ' },
  { path: '/contact', label: 'Contact' },
]

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const lastmod = new Date().toISOString().split('T')[0]
const url = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)

function write(relativePath, contents) {
  writeFileSync(resolve(root, 'public', relativePath), contents)
  writeFileSync(resolve(root, 'dist', relativePath), contents)
}

/* ---------------------------------- sitemap --------------------------------- */

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map((r) => `  <url>\n    <loc>${url(r.path)}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`

write('sitemap.xml', sitemap)

/* ---------------------------------- llms.txt -------------------------------- */
/* Generated from the same FAQ data the site renders, so the two cannot drift.
   This is the one artifact AI crawlers read with no JS rendering step. */

const faqBlock = faqCategories
  .map(
    (category) =>
      `### ${category.title}\n\n` +
      category.items.map((item) => `**${item.question}**\n${item.answer}`).join('\n\n'),
  )
  .join('\n\n')

const llms = `# BuildWise Webs

> Professional website design and development studio. BuildWise Webs builds fast, responsive, SEO-friendly websites for small businesses, startups, and agencies, with full ownership handoff after launch. Works remotely with clients worldwide.

## Services
- Single-page websites: $150 one-time — responsive design, contact form, domain setup guidance, up to 2 revisions, full handoff with credentials.
- Multi-page websites, up to 5 pages: $300 one-time — custom design, contact and booking forms, SEO basics, up to 2 revisions, full handoff with credentials.
- E-commerce setup: product showcases, payment links, order-ready landing pages. Quoted as an add-on.
- Website redesigns of existing sites, priced with the same packages as a new build.
- Performance optimization, brand refreshes, and launch support (content guidance, domain setup, hosting advice).

## Key facts
- Typical delivery time: under 7 days from the point content and requirements are shared.
- Pricing: one-time payment, no subscriptions or retainers. The client owns the finished website.
- Payment terms: 50% upfront to begin, 50% on delivery before handoff.
- Revisions: up to 2 rounds included with every package.
- Service area: worldwide, fully remote.
- Communication: email or WhatsApp, replies typically within 24 hours on business days.
- Hosting fees are paid to the client's chosen provider and are separate from the build price.

## Frequently asked questions

${faqBlock}

## Contact
- Email: prkh392@gmail.com
- Instagram: https://www.instagram.com/build_wisewebs
- Quote request form: ${SITE_URL}/contact

## Pages
${ROUTES.map((r) => `- ${r.label}: ${url(r.path)}`).join('\n')}
`

write('llms.txt', llms)

console.log(`SEO files written — sitemap.xml (${ROUTES.length} URLs), llms.txt (lastmod ${lastmod})`)
