export const faqCategoryOrder = [
  { id: 'pricing', title: 'Pricing & payment' },
  { id: 'process', title: 'Process & timeline' },
  { id: 'technical', title: 'Technical & SEO' },
  { id: 'support', title: 'Support & ownership' },
]

export const faqs = [
  {
    question: 'How much does a website cost?',
    answer:
      'A single-page website from BuildWise Webs starts at $150. A multi-page business website of up to 5 pages starts at $300. Both are one-time payments with no subscriptions, and you own the finished site.',
    category: 'pricing',
    showOn: ['home'],
  },
  {
    question: 'How does payment work — do I pay everything upfront?',
    answer:
      'BuildWise Webs takes 50% upfront to begin the project and the remaining 50% on delivery, before final handoff. Payment is one-time, with no retainers or monthly fees. Hosting charges from your provider and any add-ons beyond the agreed package are billed separately.',
    category: 'pricing',
    showOn: [],
  },
  {
    question: "What's included in the single-page website package?",
    answer:
      'The $150 single-page package includes responsive design, a working contact form, domain setup guidance, up to 2 rounds of revisions, and full handoff with credentials.',
    category: 'pricing',
    showOn: ['services'],
  },
  {
    question: 'What is the difference between the single-page and multi-page packages?',
    answer:
      'The single-page package ($150) is a focused one-page site, ideal for landing pages or brochure sites. The multi-page package ($300) covers up to 5 pages with custom design, contact and booking forms, and SEO basics — better suited to a full business website.',
    category: 'pricing',
    showOn: ['services'],
  },
  {
    question: 'What if I need more than 5 pages?',
    answer:
      'The multi-page package covers up to 5 pages. Additional pages are quoted individually based on how much custom design and content each one needs, and are agreed in writing before work starts so the final price never moves.',
    category: 'pricing',
    showOn: ['services'],
  },
  {
    question: 'Can you add e-commerce or payment features?',
    answer:
      'Yes. E-commerce setup is available as an add-on, covering product showcases, payment links, and order-ready landing pages. It is quoted separately from the base package.',
    category: 'pricing',
    showOn: ['services'],
  },
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most BuildWise Webs projects are delivered in under 7 days from the point content and requirements are shared. Larger multi-page sites and e-commerce add-ons can take longer, and you get a firm timeline before work begins.',
    category: 'process',
    showOn: ['home'],
  },
  {
    question: 'What do you need from me to get started?',
    answer:
      'To start, BuildWise Webs needs your business name and description, the pages you want, any logo and brand colors, your text and images, and two or three examples of websites you like. If you do not have copy or images ready, that is fine — content guidance is included, and the project can begin with what you have.',
    category: 'process',
    showOn: ['home'],
  },
  {
    question: 'How many revisions are included?',
    answer:
      'Every package includes up to 2 rounds of revisions, so the final site matches what you had in mind before launch. Revisions are collected as a single round of feedback each time, which keeps delivery inside the 7-day window.',
    category: 'process',
    showOn: ['home'],
  },
  {
    question: 'I already have a website — can you redesign it?',
    answer:
      'Yes. Redesigns are one of the most common BuildWise Webs projects. Existing content, images, and your domain carry over, and the rebuilt site is priced with the same packages as a new build — $150 for a single page, $300 for up to 5 pages.',
    category: 'process',
    showOn: [],
  },
  {
    question: 'How do we communicate during the project?',
    answer:
      'Projects run over email or WhatsApp, whichever you prefer, with replies typically within 24 hours on business days. You get a preview link as soon as there is something to look at, so you can follow progress rather than wait for a single reveal at the end.',
    category: 'process',
    showOn: [],
  },
  {
    question: 'Do you work with clients outside your area?',
    answer:
      'Yes. BuildWise Webs works remotely with clients worldwide. Everything — briefing, previews, revisions, and handoff — happens online, so location makes no difference to the timeline or the price.',
    category: 'process',
    showOn: [],
  },
  {
    question: 'What kind of websites do you build?',
    answer:
      'BuildWise Webs builds single-page landing sites, multi-page business websites, portfolio sites, and simple e-commerce storefronts, all with responsive, performance-focused code.',
    category: 'process',
    showOn: ['services'],
  },
  {
    question: 'Is the website mobile-friendly and optimized for search engines?',
    answer:
      'Yes. Every BuildWise Webs site is built mobile-first and responsive, and the multi-page package includes SEO basics such as clean heading structure, page metadata, and fast load times.',
    category: 'technical',
    showOn: [],
  },
  {
    question: 'Do you handle hosting and domain setup?',
    answer:
      'Domain and hosting guidance is included with every project, so you know exactly how to get your site live and who controls it. Hosting fees themselves are paid to your chosen provider and are separate from the build price.',
    category: 'technical',
    showOn: [],
  },
  {
    question: 'Do I own my website after it is built?',
    answer:
      'Yes. Every project ends with full handoff including all credentials, so you have complete ownership and control of the site after launch. There is no lock-in and nothing stays in BuildWise Webs’ name.',
    category: 'support',
    showOn: ['home'],
  },
  {
    question: 'Can I update the site myself after handoff?',
    answer:
      'Yes. At handoff you receive every credential plus a short written walkthrough of how to edit your text and images. If you would rather not touch it, BuildWise Webs can handle updates for you as a separate, per-request charge.',
    category: 'support',
    showOn: [],
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer:
      'Launch support is included with every project — content guidance, domain setup, and hosting advice — plus up to 2 rounds of revisions before handoff. Integrations or add-ons requested after the initial build are quoted separately.',
    category: 'support',
    showOn: ['services'],
  },
]

export const homeFaqs = faqs.filter((faq) => faq.showOn.includes('home'))
export const servicesFaqs = faqs.filter((faq) => faq.showOn.includes('services'))

export const faqCategories = faqCategoryOrder.map((category) => ({
  ...category,
  items: faqs.filter((faq) => faq.category === category.id),
}))

export const FAQ_UPDATED = 'August 18, 2026'
