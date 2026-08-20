import { ORG_ID, SITE_URL, absoluteUrl, pageMeta } from './site'

/* Crumbs are [{ name, path }] for every level above the current page. The
   current page is appended automatically, so a nested route passes its parents
   and nothing has to track positions by hand. */
export function breadcrumbSchema(path, name, crumbs = []) {
  const trail = [{ name: 'Home', path: '/' }, ...crumbs, { name, path }]
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  }
}

function pageSchema(type, path, extra = {}) {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: pageMeta[path].title,
    description: pageMeta[path].description,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': ORG_ID },
    ...extra,
  }
}

export function graph(nodes) {
  return { '@context': 'https://schema.org', '@graph': nodes }
}

export const homeSchema = graph([pageSchema('WebPage', '/')])

/* The hub page describes the two packages people actually buy. Each individual
   service page carries its own Service node, so these two stay here rather than
   being repeated per sub-page. */
export const servicesSchema = graph([
  pageSchema('WebPage', '/services'),
  breadcrumbSchema('/services', 'Services'),
  {
    '@type': 'Service',
    '@id': `${SITE_URL}/services#single-page`,
    name: 'Single-Page Website Design',
    serviceType: 'Website design and development',
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    description:
      'A one-page responsive website with contact form, domain setup guidance, up to 2 revisions, and full handoff with credentials.',
    offers: {
      '@type': 'Offer',
      price: '150',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
  {
    '@type': 'Service',
    '@id': `${SITE_URL}/services#multi-page`,
    name: 'Multi-Page Business Website Design',
    serviceType: 'Website design and development',
    provider: { '@id': ORG_ID },
    areaServed: 'Worldwide',
    description:
      'A custom website of up to 5 pages with contact and booking forms, SEO basics, up to 2 revisions, and full handoff with credentials.',
    offers: {
      '@type': 'Offer',
      price: '300',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  },
])

export function serviceDetailSchema(service) {
  const path = `/services/${service.slug}`
  return graph([
    pageSchema('WebPage', path),
    breadcrumbSchema(path, service.navLabel, [{ name: 'Services', path: '/services' }]),
    {
      '@type': 'Service',
      '@id': `${absoluteUrl(path)}#service`,
      name: service.cardTitle,
      serviceType: 'Website design and development',
      provider: { '@id': ORG_ID },
      areaServed: 'Worldwide',
      description: service.metaDescription,
      /* Only services with a fixed published price get an Offer. The quoted
         ones would need an invented number to satisfy the shape, so they are
         left off rather than marked up with a guess. */
      ...(service.price
        ? {
            offers: {
              '@type': 'Offer',
              price: service.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              url: absoluteUrl(path),
            },
          }
        : {}),
    },
    /* These questions are written for this page and appear nowhere else, so the
       markup describes content that is genuinely unique to this URL. */
    {
      '@type': 'FAQPage',
      '@id': `${absoluteUrl(path)}#faq`,
      mainEntity: service.faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
  ])
}

export function portfolioSchema(items) {
  return graph([
    pageSchema('CollectionPage', '/portfolio', {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: items.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          description: item.details,
          ...(item.url ? { url: item.url } : {}),
        })),
      },
    }),
    breadcrumbSchema('/portfolio', 'Portfolio'),
  ])
}

export function blogIndexSchema(posts) {
  return graph([
    pageSchema('CollectionPage', '/blog', {
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: posts.map((post, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: post.title,
          url: absoluteUrl(`/blog/${post.slug}`),
        })),
      },
    }),
    breadcrumbSchema('/blog', 'Blog'),
  ])
}

export function blogPostSchema(post) {
  const path = `/blog/${post.slug}`
  return graph([
    {
      '@type': 'BlogPosting',
      '@id': `${absoluteUrl(path)}#post`,
      headline: post.title,
      description: post.metaDescription,
      url: absoluteUrl(path),
      datePublished: post.published,
      dateModified: post.updated,
      inLanguage: 'en',
      keywords: post.tags.join(', '),
      author: { '@id': ORG_ID },
      publisher: { '@id': ORG_ID },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      mainEntityOfPage: absoluteUrl(path),
    },
    breadcrumbSchema(path, post.title, [{ name: 'Blog', path: '/blog' }]),
  ])
}

export const contactSchema = graph([
  pageSchema('ContactPage', '/contact'),
  breadcrumbSchema('/contact', 'Contact'),
])

/* /faq is the only URL that carries FAQPage markup for the shared question set.
   The home and services teasers render shortened, different wording and emit no
   schema, so the same Q&A is never marked up on three pages at once. */
export function faqPageSchema(items) {
  return graph([
    pageSchema('FAQPage', '/faq', {
      mainEntity: items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    }),
    breadcrumbSchema('/faq', 'FAQ'),
  ])
}
