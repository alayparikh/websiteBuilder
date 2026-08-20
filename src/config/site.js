import { serviceDetails } from '../data/serviceDetails.js'
import { blogPosts } from '../data/blogPosts.js'

export const SITE_URL = 'https://buildwisewebs.vercel.app'
export const SITE_NAME = 'BuildWise Webs'
export const SITE_LOCALE = 'en_US'
export const CONTACT_EMAIL = 'prkh392@gmail.com'
export const INSTAGRAM_HANDLE = 'buildwise_webs'
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}`
export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-cover.jpg`

/* One card per route, produced by `npm run og`. Falls back to the shared cover
   for anything not in the generated set. */
export function ogImageFor(path) {
  if (!indexableRoutes.includes(path)) return DEFAULT_OG_IMAGE
  const slug = path === '/' ? 'home' : path.slice(1).replaceAll('/', '-')
  return `${SITE_URL}/og-${slug}.jpg`
}
export const OG_IMAGE_WIDTH = '1200'
export const OG_IMAGE_HEIGHT = '630'

export const ORG_ID = `${SITE_URL}/#organization`
export const WEBSITE_ID = `${SITE_URL}/#website`

export function absoluteUrl(path = '/') {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`
}

/* Descriptions are kept at or under 155 characters so they survive the SERP
   truncation point instead of being cut mid-sentence. */
const staticMeta = {
  '/': {
    title: 'BuildWise Webs — Professional Web Design from $150',
    description:
      'Fast, responsive, SEO-friendly websites for small businesses. Single-page sites from $150, multi-page from $300. One-time payment, live in under 7 days.',
  },
  '/services': {
    title: 'Website Design Services & Pricing — BuildWise Webs',
    description:
      'Landing pages, business sites, e-commerce, redesigns, and speed work. One-time pricing from $150, full handoff, two revision rounds included.',
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
      'What a website costs, how long it takes, how payment works, and what you own after launch — 18 answers from BuildWise Webs.',
  },
  '/blog': {
    title: 'Website Guides & Pricing Advice — BuildWise Webs',
    description:
      'Plain-English guides to what a website costs, one-time builds versus monthly plans, and getting a small business site launched without surprises.',
  },
}

const serviceMeta = Object.fromEntries(
  serviceDetails.map((service) => [
    `/services/${service.slug}`,
    { title: service.metaTitle, description: service.metaDescription },
  ]),
)

const blogMeta = Object.fromEntries(
  blogPosts.map((post) => [
    `/blog/${post.slug}`,
    { title: post.metaTitle, description: post.metaDescription },
  ]),
)

export const pageMeta = { ...staticMeta, ...serviceMeta, ...blogMeta }

/* Every indexable route, in the order they should appear in the sitemap. The
   build script imports this so a new service or post cannot be added without
   the sitemap picking it up. */
export const indexableRoutes = [
  '/',
  '/services',
  ...serviceDetails.map((service) => `/services/${service.slug}`),
  '/portfolio',
  '/blog',
  ...blogPosts.map((post) => `/blog/${post.slug}`),
  '/faq',
  '/contact',
]
