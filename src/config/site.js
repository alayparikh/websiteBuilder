export const SITE_URL = 'https://buildwisewebs.vercel.app'
export const SITE_NAME = 'BuildWise Webs'
export const SITE_LOCALE = 'en_US'
export const CONTACT_EMAIL = 'prkh392@gmail.com'
export const INSTAGRAM_URL = 'https://www.instagram.com/build_wisewebs'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`
export const OG_IMAGE_WIDTH = '1200'
export const OG_IMAGE_HEIGHT = '630'

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export function absoluteUrl(path = '/') {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

export const pageMeta = {
  '/': {
    title: 'BuildWise Webs — Professional Web Design from $150',
    description:
      'BuildWise Webs builds fast, responsive, SEO-friendly websites. Single-page sites from $150, multi-page business sites from $300. One-time payment, delivered in under 7 days.',
  },
  '/services': {
    title: 'Website Design Services & Pricing — BuildWise Webs',
    description:
      'Website design, multi-page builds, e-commerce setup, performance optimization, and launch support. One-time pricing from $150, with full handoff and up to 2 revisions.',
  },
  '/portfolio': {
    title: 'Website Portfolio & Client Projects — BuildWise Webs',
    description:
      'See live websites BuildWise Webs has built for real clients — responsive layouts, clean code, and full credential handoff on every project.',
  },
  '/contact': {
    title: 'Get a Free Website Quote — BuildWise Webs',
    description:
      'Send your project details to BuildWise Webs and get a fast quote. One-time pricing from $150, delivery in under 7 days, full ownership at handoff.',
  },
  '/faq': {
    title: 'Website Design FAQ — Pricing, Timeline & Process',
    description:
      'Answers to common questions about BuildWise Webs: what a website costs, how long it takes, how payment works, what you own after launch, and what happens after handoff.',
  },
}
