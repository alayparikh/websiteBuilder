import { createHash } from 'node:crypto'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { faqCategories } from '../src/data/faqData.js'
import { serviceDetails } from '../src/data/serviceDetails.js'
import { blogPosts } from '../src/data/blogPosts.js'
import { INSTAGRAM_URL, indexableRoutes, pageMeta } from '../src/config/site.js'

const SITE_URL = 'https://buildwisewebs.vercel.app'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const url = (path) => (path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`)
const today = new Date().toISOString().split('T')[0]

function write(relativePath, contents) {
  writeFileSync(resolve(root, 'public', relativePath), contents)
  writeFileSync(resolve(root, 'dist', relativePath), contents)
}

/* --------------------------------- lastmod ---------------------------------- */
/* A build-date lastmod on every route resets all five dates on every deploy,
   which trains crawlers to ignore the field. Instead each route is hashed from
   the content that actually renders it, and the stored date only advances when
   that hash changes. The manifest is committed so the history survives CI. */

const MANIFEST_PATH = resolve(root, 'seo-lastmod.json')
const previous = existsSync(MANIFEST_PATH)
  ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  : {}

/* Hash the rendered page rather than the data behind it, so a change made in a
   component's JSX bumps the date just as a change to a data file does. Script
   and stylesheet tags are stripped first: their filenames carry a build hash
   that changes whenever any bundle changes, which would otherwise mark every
   route as modified on every deploy — the exact problem this replaces. */
function renderedText(path) {
  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  const full = resolve(root, 'dist', file)
  if (!existsSync(full)) return null

  return readFileSync(full, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<link[^>]*>/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

const manifest = {}
let changed = 0
let missing = 0

for (const path of indexableRoutes) {
  const content = renderedText(path)
  if (content === null) {
    /* Page was not rendered — keep whatever date we already had rather than
       inventing a new one for a file that may not exist. */
    missing += 1
    if (previous[path]) manifest[path] = previous[path]
    else manifest[path] = { hash: 'unrendered', lastmod: today }
    continue
  }

  const hash = createHash('sha256').update(content).digest('hex').slice(0, 16)
  const prior = previous[path]
  if (prior?.hash === hash) {
    manifest[path] = prior
  } else {
    manifest[path] = { hash, lastmod: today }
    changed += 1
  }
}

writeFileSync(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`)

/* ---------------------------------- sitemap --------------------------------- */

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexableRoutes
  .map((path) => `  <url>\n    <loc>${url(path)}</loc>\n    <lastmod>${manifest[path].lastmod}</lastmod>\n  </url>`)
  .join('\n')}
</urlset>
`

write('sitemap.xml', sitemap)

/* ---------------------------------- llms.txt -------------------------------- */
/* Generated from the same data the site renders, so the two cannot drift.
   This is the one artifact AI crawlers read with no JS rendering step. */

const faqBlock = faqCategories
  .map(
    (category) =>
      `### ${category.title}\n\n` +
      category.items.map((item) => `**${item.question}**\n${item.answer}`).join('\n\n'),
  )
  .join('\n\n')

const serviceBlock = serviceDetails
  .map(
    (service) =>
      `### ${service.cardTitle} — ${service.priceLabel}\n` +
      `${url(`/services/${service.slug}`)}\n` +
      `${service.metaDescription}\n` +
      `Included: ${service.included.join('; ')}.\n` +
      `Not included: ${service.notIncluded.join('; ')}.`,
  )
  .join('\n\n')

const blogBlock = blogPosts
  .map(
    (post) =>
      `### ${post.title}\n${url(`/blog/${post.slug}`)}\n${post.excerpt}\nUpdated ${post.updated}.`,
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

## Service pages

${serviceBlock}

## Guides

${blogBlock}

## Frequently asked questions

${faqBlock}

## Contact
- Email: prkh392@gmail.com
- Instagram: ${INSTAGRAM_URL}
- Quote request form: ${SITE_URL}/contact

## Pages
${indexableRoutes.map((path) => `- ${pageMeta[path]?.title ?? path}: ${url(path)}`).join('\n')}
`

write('llms.txt', llms)

console.log(
  `SEO files written — sitemap.xml (${indexableRoutes.length} URLs, ${changed} with a new lastmod` +
    `${missing ? `, ${missing} not rendered` : ''}), llms.txt`,
)
