export const portfolioProjects = [
  {
    name: 'Radiant Control Systems',
    description: 'SEO and GEO optimized website revamp that closed security loopholes and improved keyword visibility.',
    details: 'Revamped a frequently hacked client website into a secure, SEO and GEO optimized site built for stronger keyword rankings.',
    img: '/portfolio-radiant-control-systems.png',
    url: 'https://radiantcontrolsystems.com/',
    displayUrl: 'radiantcontrolsystems.com',
    tag: 'Security + SEO Revamp',
  },
  {
    name: 'mySanstha',
    description: 'Full platform for temple and nonprofit management — donations, events, and reporting.',
    details: 'Full platform for temple and nonprofit management — donations, events, POS, and compliance reporting.',
    img: '/portfolio-mysanstha.jpg',
    url: 'https://info.mysanstha.com',
    displayUrl: 'info.mysanstha.com',
    tag: 'Organization Platform',
  },
  {
    name: "Alay's Portfolio",
    description: 'A polished personal portfolio site showcasing design skills, case studies, and service packages.',
    details: 'A polished personal portfolio site showcasing case studies, services, and a modern brand identity.',
    img: '/portfolio-alay.jpg',
    url: 'https://alay-s-portfolio.vercel.app',
    displayUrl: 'alay-s-portfolio.vercel.app',
    tag: 'Personal Portfolio',
  },
  {
    name: 'Airways World Travel',
    description: 'Premium travel agency site with services, gallery, and lead capture for a 25-year-old brand.',
    details: 'Premium travel agency website with services, gallery, testimonials, and lead capture — built for a 25-year-old brand.',
    img: '/portfolio-airways.jpg',
    url: 'https://airwaysworldtravel.vercel.app',
    displayUrl: 'airwaysworldtravel.vercel.app',
    tag: 'Travel Agency',
  },
]

export const portfolioPlaceholders = [
  {
    name: 'Your Website',
    description: 'Ready to launch your own? Get a fast, modern site built and handed over in under a week.',
    details: 'Ready to be built. Get a fast, modern, mobile-friendly site delivered with full handoff in under a week.',
    img: null,
    url: null,
    displayUrl: null,
    tag: 'Coming Soon',
  },
]

export const portfolioItems = [...portfolioProjects, ...portfolioPlaceholders]

export const heroMockupSlides = portfolioProjects.filter(project => project.img && project.url)
