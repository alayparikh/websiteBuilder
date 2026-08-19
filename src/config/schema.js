import { ORG_ID, SITE_NAME, SITE_URL, absoluteUrl, pageMeta } from './site'

export function breadcrumbSchema(path, name) {
  return {
    '@type': 'BreadcrumbList',
    '@id': `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name, item: absoluteUrl(path) },
    ],
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

export const contactSchema = graph([
  pageSchema('ContactPage', '/contact'),
  breadcrumbSchema('/contact', 'Contact'),
])

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

export function faqSectionSchema(id, items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq-${id}`,
    name: `${SITE_NAME} frequently asked questions`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
