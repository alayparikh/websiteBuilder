/* One entry per /services/<slug> page. Everything here is rendered by the
   shared ServiceDetailPage template, and the same list drives the /services
   hub cards, the sitemap, and the Service nodes in the JSON-LD graph — so a
   new service is added in exactly one place. */

export const serviceDetails = [
  {
    slug: 'landing-page-design',
    icon: 'landing',
    navLabel: 'Landing Page Design',
    cardTitle: 'Landing Page Design',
    cardDescription:
      'A single, focused page built to turn one campaign, product, or pitch into enquiries.',
    h1: 'Landing page design that converts a single visit',
    eyebrow: 'Single-page websites',
    metaTitle: 'Landing Page Design from $150 — BuildWise Webs',
    metaDescription:
      'A focused one-page website built to convert: responsive design, working contact form, two revisions, full handoff. $150 one-time, live in a week.',
    price: '150',
    priceLabel: '$150 one-time',
    priceNote: 'One payment. No subscription. You own the result.',
    intro: [
      'A landing page has one job: take somebody who just arrived and give them exactly enough to act. No navigation to wander through, no second-guessing which link matters. One argument, one proof, one form. That constraint is why a good single page often outperforms a five-page site for a launch, an ad campaign, or a service you want to sell right now.',
      'Every BuildWise Webs landing page is hand-built rather than assembled from a template, delivered in under 7 days from the point your content is ready, and handed over with every credential so it is genuinely yours the day it launches.',
    ],
    sections: [
      {
        heading: 'When a single page beats a full website',
        body: [
          'Not every business needs five pages. A single page is the stronger choice when you have one offer and one audience, and when splitting the story across multiple URLs would only add clicks between a visitor and your contact form.',
          'It is also the fastest way to test an idea. If you are not yet sure which service will sell, a landing page lets you put one in front of real traffic in a week, read the results, and decide what to build next — instead of committing to a full site structure before you know which parts matter.',
        ],
        list: [
          'A product, service, or event launch that needs a home before a deadline',
          'A destination for paid ads, where every extra click costs conversions',
          'A freelancer or consultant selling one clearly defined service',
          'A business that mostly closes over WhatsApp or email and needs a credible link to send',
          'An early-stage idea you want in front of real visitors before investing in more',
        ],
      },
      {
        heading: 'How the page is structured',
        body: [
          'The layout follows the order a sceptical visitor actually reads in. A headline that states what you do and who it is for. A short section of supporting detail. Proof — work, numbers, or client quotes. What it costs or how it works. Then the form, placed where the reader is most likely to be convinced rather than only at the bottom.',
          'Every section earns its place. If a block does not move somebody closer to contacting you, it comes out. That discipline is most of the difference between a page that reads as professional and one that reads as filler.',
        ],
      },
      {
        heading: 'Built to load fast on a phone',
        body: [
          'Most visitors from social or ads arrive on a mobile connection, and a page that stalls loses them before the headline renders. Pages are built mobile-first, images are converted to modern formats and sized so nothing jumps as it loads, and the markup stays lean enough that the first screen paints quickly on an ordinary connection.',
          'Clean heading structure, real page metadata, and descriptive image alt text are included as a matter of course — not because they are upsells, but because leaving them out would make the page worse.',
        ],
      },
    ],
    included: [
      'Custom responsive design, built to your brand rather than a stock template',
      'A working contact form that delivers straight to your inbox',
      'Mobile-first layout tested across phone, tablet, and desktop widths',
      'Optimized images in modern formats with correct dimensions set',
      'Page title, meta description, and heading structure set up properly',
      'Domain setup guidance so you know exactly how to point your name at it',
      'Up to 2 rounds of revisions before launch',
      'Full handoff with every credential — nothing stays in my name',
    ],
    notIncluded: [
      'Hosting fees, which you pay to your own provider and keep control of',
      'Copywriting from scratch, though content guidance is included',
      'Ongoing monthly maintenance — there is no retainer to sign',
    ],
    upgradeNote:
      'If it turns out you need room for separate service, about, or portfolio pages, the multi-page package covers up to five for $300.',
    upgradeLink: '/services/business-website',
    process: [
      {
        title: 'Send the brief',
        body: 'You describe the offer, who it is for, and what a visitor should do. Two or three pages you like tells me more about your taste than a paragraph of adjectives.',
      },
      {
        title: 'Structure before pixels',
        body: 'You get the section order and the headline first, in plain text. Arguing about the argument is cheap at this stage and expensive after it is designed.',
      },
      {
        title: 'Design and build',
        body: 'The page is built to the agreed structure, with a preview link you can open at any point rather than a single reveal at the end.',
      },
      {
        title: 'Revise, then hand over',
        body: 'Two rounds of feedback, each collected as one batch. Then the form is tested live and every credential is transferred to you.',
      },
    ],
    faqs: [
      {
        question: 'Can a single page rank in search?',
        answer:
          'It can rank for one tight topic — usually your business name and a specific phrase that matches the page. What a single page cannot do is compete for several different services at once, because it only has one title, one H1, and one topic to offer. If you need three services to rank independently, you need three pages.',
      },
      {
        question: 'Can I add pages later without rebuilding?',
        answer:
          'Yes. The page is built on the same foundation as the multi-page package, so extra pages are added on top rather than started over. You pay the difference for the new pages, not for the work already done.',
      },
      {
        question: 'What if I do not have copy or photos yet?',
        answer:
          'The project can still start. Content guidance is included, which means a structure to write into and specific prompts for each section rather than a blank document. Most clients find writing to a defined slot far easier than writing a website from nothing.',
      },
    ],
    relatedProjects: ['Creative Portfolio'],
    relatedServices: ['business-website', 'performance-optimization'],
  },
  {
    slug: 'business-website',
    icon: 'business',
    navLabel: 'Business Websites',
    cardTitle: 'Multi-Page Business Websites',
    cardDescription:
      'Up to five pages, so every service, proof point, and audience gets a URL of its own.',
    h1: 'Multi-page business websites, built in under a week',
    eyebrow: 'Multi-page builds',
    metaTitle: 'Small Business Website Design from $300 — BuildWise Webs',
    metaDescription:
      'Up to five custom pages with contact and booking forms, SEO basics, two revisions, and full credential handoff. $300 one-time, delivered in under 7 days.',
    price: '300',
    priceLabel: '$300 one-time',
    priceNote: 'Covers up to five pages. Extra pages quoted in writing before work starts.',
    intro: [
      'A multi-page site is what you want when one page can no longer carry the load — when you sell more than one thing, serve more than one audience, or need a page you can send a specific prospect to without making them scroll past everything else first.',
      'The $300 package covers up to five custom pages, contact and booking forms, and SEO basics, delivered in under 7 days once your content is in hand and handed over with full credentials.',
    ],
    sections: [
      {
        heading: 'Why separate pages matter more than they look',
        body: [
          'Search engines rank pages, not businesses. A single page crammed with four services competes for all four terms at once and rarely wins any of them cleanly. Give each service its own URL, its own heading, and its own paragraph of real detail, and each one gets a fair chance to answer the query it was written for.',
          'The same logic applies to people. A prospect who asked about one specific service should land on a page about that service — not on a homepage where they have to hunt. Separate pages let you send a link that answers the question that was actually asked.',
        ],
      },
      {
        heading: 'A structure that fits most small businesses',
        body: [
          'Five pages is not an arbitrary number. It is close to the smallest structure that covers what a business site needs to do, without padding it out with pages nobody visits.',
        ],
        list: [
          'Home — what you do, who you do it for, and the strongest reason to keep reading',
          'Services — each offering with enough detail to price and qualify itself',
          'Portfolio or work — proof, with real projects rather than stock imagery',
          'About — the credibility page, which more visitors read than most owners expect',
          'Contact — a form that works, plus every other way to reach you',
        ],
        bodyAfter: [
          'That is a starting point, not a rule. If your business needs a pricing page more than an about page, or a booking page more than a portfolio, the five slots go where they do the most good.',
        ],
      },
      {
        heading: 'Forms, bookings, and what happens after somebody submits',
        body: [
          'Every build includes a working contact form that delivers to your inbox, and the multi-page package adds booking-style forms where the enquiry needs more structure than a message box — dates, service type, budget range, whatever qualifies a lead before you reply.',
          'Forms are tested before launch with real submissions, because a silently broken form is the single most expensive bug a small business website can have. You see the test arrive in your own inbox before handoff.',
        ],
      },
      {
        heading: 'SEO basics, included rather than sold separately',
        body: [
          'Each page gets its own title tag and meta description written for what that page is about, a single clear H1, and a heading hierarchy that does not skip levels. Internal links connect the pages so a crawler can reach everything, and a sitemap and robots file are generated and submitted.',
          'This will not outrank a national competitor with a decade of backlinks, and nobody honest will tell you otherwise. What it does is make sure that when somebody searches your business name, or a long and specific phrase that matches what you actually wrote, there is nothing structurally in the way.',
        ],
      },
    ],
    included: [
      'Up to five custom-designed pages, each written and laid out for its own purpose',
      'Contact form plus booking-style forms where the enquiry needs structure',
      'Per-page titles, meta descriptions, and clean heading hierarchy',
      'Sitemap and robots.txt generated and submitted to search engines',
      'Internal linking between pages so nothing is orphaned',
      'Mobile-first responsive layouts across every page',
      'Domain and hosting setup guidance',
      'Up to 2 rounds of revisions before launch',
      'Full handoff with every credential and a written walkthrough for editing text and images',
    ],
    notIncluded: [
      'Hosting fees, paid to your own provider so you keep control',
      'Pages beyond the fifth, which are quoted individually in writing first',
      'E-commerce checkout, available as a separate add-on',
    ],
    upgradeNote:
      'Need to sell directly from the site? E-commerce setup is quoted as an add-on to this package.',
    upgradeLink: '/services/ecommerce-setup',
    process: [
      {
        title: 'Agree the page map',
        body: 'Before anything is designed we settle which five pages exist and what each one is for. This is the decision that shapes everything after it.',
      },
      {
        title: 'Content slot by slot',
        body: 'You fill a defined structure rather than a blank page — a prompt per section, so writing the site is a series of small answers instead of one large task.',
      },
      {
        title: 'Build with a live preview',
        body: 'Pages go up on a preview link as they are finished, so you follow the build rather than wait for it. Forms are wired and tested as each page lands.',
      },
      {
        title: 'Two revision rounds, then handoff',
        body: 'Feedback is batched into two rounds to protect the 7-day window. Handoff includes every credential plus a written walkthrough of editing your own text and images.',
      },
    ],
    faqs: [
      {
        question: 'Which five pages should I choose?',
        answer:
          'Start from what people ask you before they buy. If prospects always ask what something costs, a pricing page beats an about page. If they always ask whether you have done this before, a portfolio page earns its slot. The default structure is a starting point, not a requirement.',
      },
      {
        question: 'How long until the site shows up in Google?',
        answer:
          'Indexing usually takes days to a few weeks after the sitemap is submitted. Ranking for anything competitive takes considerably longer and depends on factors outside a build — how long the domain has existed, who links to it, and how much content sits behind it. What the build guarantees is that nothing structural is blocking you.',
      },
      {
        question: 'Can I edit the pages myself afterwards?',
        answer:
          'Yes. Handoff includes a written walkthrough covering how to change text and swap images. If you would rather not, updates can be handled for you as a separate per-request charge — there is still no retainer and no lock-in.',
      },
    ],
    relatedProjects: ['HariTech Automations', 'Airways World Travel', 'mySanstha'],
    relatedServices: ['ecommerce-setup', 'website-redesign'],
  },
  {
    slug: 'ecommerce-setup',
    icon: 'ecommerce',
    navLabel: 'E-commerce Setup',
    cardTitle: 'E-commerce Setup',
    cardDescription:
      'Product showcases, payment links, and order-ready pages, added to either package.',
    h1: 'E-commerce setup for small catalogues',
    eyebrow: 'Add-on service',
    metaTitle: 'Small Business E-commerce Setup — BuildWise Webs',
    metaDescription:
      'Product showcases, payment links, and order-ready landing pages added to your site. Quoted as an add-on, agreed in writing before work starts.',
    price: null,
    priceLabel: 'Quoted as an add-on',
    priceNote: 'Priced against your catalogue size and checkout needs, agreed in writing up front.',
    intro: [
      'Not every business that sells online needs a full storefront platform. If you have a handful of products, a service with a fixed price, or a booking you want paid for in advance, a full e-commerce system is more machinery — and more monthly cost — than the job requires.',
      'E-commerce setup from BuildWise Webs adds selling to a site without that overhead: product showcases that present what you sell properly, payment links that take money reliably, and landing pages built to carry an order from interest to paid.',
    ],
    sections: [
      {
        heading: 'What this covers, and what it deliberately does not',
        body: [
          'This is built for small catalogues and simple checkouts. Product pages with real images, descriptions, and prices. Payment links from a provider you already trust. Order-ready landing pages where a single product or package gets its own focused pitch and its own buy button.',
          'What it is not is a replacement for a full inventory platform. If you are running hundreds of variants, live stock counts across warehouses, or complex tax and shipping rules per region, you want a dedicated system, and I will tell you that rather than sell you something that will strain within a year.',
        ],
      },
      {
        heading: 'Why payment links work better than they sound',
        body: [
          'A payment link is a hosted checkout page from your payment provider that you point a button at. The provider handles the card details, the security, and the compliance — none of which ever touches your site. That is the point: the most sensitive part of the transaction stays with the people who specialise in it.',
          'For a small catalogue this is faster to launch, cheaper to run, and considerably harder to get wrong than a self-hosted checkout. You keep the payment relationship, the payout account, and every setting, exactly as with the rest of the handoff.',
        ],
      },
      {
        heading: 'Product pages that actually sell',
        body: [
          'A product page fails for predictable reasons: images too small to judge the item, descriptions that list features without saying what they are for, no price until checkout, and no answer to the obvious question about delivery or returns.',
          'Each product page gets images sized and compressed properly, a description written to answer the question a buyer is actually holding, a visible price, and the delivery and returns detail near the button rather than buried in a policy page. Product information is also marked up in structured data, so search engines can read your prices and availability directly.',
        ],
      },
      {
        heading: 'What you avoid by not running a platform',
        body: [
          'A hosted store platform charges a monthly fee whether or not you sell anything that month, and the fee scales with features you may never touch. For a business shifting a handful of orders a week, that subscription can quietly cost more per year than the entire build.',
          'There is a second cost that shows up later. A platform store is difficult to leave — the product data, the theme, and often the customer list live inside the platform, and moving means rebuilding. Payment links keep the pieces separable: your site is yours, your payment account is yours, and neither one holds the other hostage.',
        ],
      },
    ],
    included: [
      'Product showcase pages with optimized images and real descriptions',
      'Payment links wired to your own payment provider account',
      'Order-ready landing pages for individual products or packages',
      'Product structured data so search engines can read prices and availability',
      'Mobile-first layouts, since most product browsing happens on a phone',
      'Test transactions run before launch',
      'Full handoff of every credential, including the payment provider connection',
    ],
    notIncluded: [
      'Payment provider transaction fees, which you pay directly',
      'Large multi-variant inventory systems with live stock synchronisation',
      'Ongoing catalogue updates after handoff, quoted per request',
    ],
    upgradeNote:
      'E-commerce setup is added to a single-page or multi-page build rather than sold alone — start with the package that fits your catalogue.',
    upgradeLink: '/services/business-website',
    process: [
      {
        title: 'Scope the catalogue',
        body: 'How many products, how many variants, and how you want to be paid. This determines whether payment links are the right answer or whether you genuinely need a platform.',
      },
      {
        title: 'Connect your payment provider',
        body: 'Links are created against your own provider account, opened in your name. The payout relationship is yours from the first transaction onward.',
      },
      {
        title: 'Build the product pages',
        body: 'Images sized and compressed, descriptions written to answer buying questions, prices visible, delivery and returns detail placed near the button.',
      },
      {
        title: 'Test with real transactions',
        body: 'A live test purchase is run end to end before launch, so you watch money arrive in your account rather than take my word for it.',
      },
    ],
    faqs: [
      {
        question: 'Do you take a cut of my sales?',
        answer:
          'No. The payment provider charges its own transaction fee directly to you, and BuildWise Webs charges a one-time setup fee. There is no commission, no revenue share, and nothing recurring.',
      },
      {
        question: 'How many products is too many for this approach?',
        answer:
          'Roughly, once you are past a few dozen products, or once stock levels change faster than you can update them by hand, a dedicated platform starts paying for itself. Below that, payment links are cheaper to run and considerably simpler to hand over.',
      },
      {
        question: 'Is my site handling card details?',
        answer:
          'No, and that is deliberate. Card entry happens on the payment provider hosted checkout, so sensitive details never touch your site. That removes the largest security and compliance burden from a small business site entirely.',
      },
    ],
    relatedProjects: ['mySanstha'],
    relatedServices: ['business-website', 'performance-optimization'],
  },
  {
    slug: 'website-redesign',
    icon: 'brand',
    navLabel: 'Website Redesign',
    cardTitle: 'Website Redesign',
    cardDescription:
      'Rebuild an ageing or insecure site on modern foundations, keeping your domain and content.',
    h1: 'Website redesigns that keep what works',
    eyebrow: 'Rebuilds and refreshes',
    metaTitle: 'Website Redesign from $150 — BuildWise Webs',
    metaDescription:
      'Rebuild an outdated, slow, or insecure site on modern foundations. Your domain and content carry over. From $150 single page, $300 up to five pages.',
    price: '150',
    priceLabel: 'From $150 one-time',
    priceNote: 'Priced with the same packages as a new build — $150 single page, $300 up to five pages.',
    intro: [
      'Most websites do not fail all at once. They drift — a platform stops getting updates, the design starts to read as dated, the mobile layout was never quite right, and one day the site is actively costing credibility rather than building it.',
      'A redesign rebuilds the site on current foundations while keeping what already earns its place: your domain, your content, your images, and any search visibility the existing URLs have built up. Redesigns are priced with the same packages as a new build.',
    ],
    sections: [
      {
        heading: 'Signs a rebuild is overdue',
        body: [
          'You rarely need an audit to know. The symptoms are usually the ones already irritating you.',
        ],
        list: [
          'The site is slow, especially on a phone over mobile data',
          'It has been hacked, defaced, or flagged, or runs on plugins nobody updates',
          'The layout breaks or requires pinch-zoom on a phone',
          'You are paying a monthly fee for a site you cannot edit or move',
          'The design no longer matches how the business actually presents itself',
          'Nobody can find the login, and the person who built it is unreachable',
        ],
      },
      {
        heading: 'Keeping your search visibility through the move',
        body: [
          'The most expensive redesign mistake is silently discarding rankings the old site had earned. If a page that ranks moves to a new address with no redirect, the visibility attached to the old address is simply lost.',
          'So the existing URLs are inventoried before anything is rebuilt. Pages that stay keep their addresses. Pages that move get permanent redirects from the old address to the new one, so both visitors and crawlers follow the change. Titles and descriptions that are already working are kept rather than rewritten for the sake of it.',
        ],
      },
      {
        heading: 'Security, and why old sites get hacked',
        body: [
          'Sites built on stacks of third-party plugins get compromised through the plugins, not usually through the host. Every add-on is another codebase that has to stay patched, and on a site nobody logs into for a year, none of them do.',
          'A rebuild removes that surface. Pages are built as static files with no admin panel to brute-force and no plugin layer to exploit, served over HTTPS. There is far less to attack, and far less to keep patched after you take ownership.',
        ],
      },
      {
        heading: 'What carries over and what gets rewritten',
        body: [
          'Your domain stays yours throughout — it is pointed at the new site rather than transferred away, and you keep the registrar account. Content, images, and testimonials carry over, with copy tightened where it has gone stale but not replaced wholesale.',
          'What does get rebuilt is the structure underneath: heading hierarchy, page metadata, image formats and sizing, internal linking, and the mobile layout. That is where the actual gains are, and it is invisible in a screenshot — which is why plenty of redesigns look better and perform no differently.',
        ],
      },
    ],
    included: [
      'Full inventory of existing URLs before any rebuild begins',
      'Permanent redirects from old addresses to new ones for every moved page',
      'Existing content, images, and testimonials migrated across',
      'Your domain pointed at the new site, with the registrar account staying yours',
      'Rebuilt heading structure, metadata, and internal linking',
      'Modern image formats, correct sizing, and mobile-first layouts',
      'Static build with no plugin layer and no admin panel to attack',
      'Up to 2 rounds of revisions, and full credential handoff',
    ],
    notIncluded: [
      'Recovering a domain you have genuinely lost access to',
      'Cleaning malware from an existing site — the rebuild replaces it instead',
      'Migrating a large database-driven application',
    ],
    upgradeNote:
      'If the old site is slow rather than broken, a targeted performance pass may be the cheaper fix.',
    upgradeLink: '/services/performance-optimization',
    process: [
      {
        title: 'Inventory the existing site',
        body: 'Every current URL is listed before anything changes, so no page quietly disappears and no earned visibility is thrown away by accident.',
      },
      {
        title: 'Decide what stays',
        body: 'Content that still works carries over. Pages nobody visits get merged or dropped on purpose rather than by omission, and moved pages get their redirects planned here.',
      },
      {
        title: 'Rebuild on modern foundations',
        body: 'Static pages, no plugin layer, no admin panel to attack. Heading structure, metadata, image formats, and mobile layout are rebuilt underneath the visible design.',
      },
      {
        title: 'Switch over and verify',
        body: 'The domain is pointed at the new site, redirects are checked one by one, and the sitemap is resubmitted so crawlers pick up the new structure quickly.',
      },
    ],
    faqs: [
      {
        question: 'Will a redesign hurt my current rankings?',
        answer:
          'It can, if URLs move without redirects — that is the single most common way redesigns lose traffic. Handled properly, with an inventory first and permanent redirects for every moved page, rankings carry across. Expect a short period of fluctuation while crawlers re-process the site.',
      },
      {
        question: 'Do I have to move my domain?',
        answer:
          'No. The domain stays in your registrar account under your control and is simply pointed at the new site. Nothing is transferred away from you at any stage.',
      },
      {
        question: 'My site was hacked — can you clean it?',
        answer:
          'A rebuild replaces it rather than cleaning it, which is usually both cheaper and safer. Cleaning a compromised site means being confident you found every injected file; rebuilding means there is nothing left of the compromised install to miss.',
      },
    ],
    relatedProjects: ['Radiant Control Systems', 'HariTech Automations'],
    relatedServices: ['performance-optimization', 'business-website'],
  },
  {
    slug: 'performance-optimization',
    icon: 'performance',
    navLabel: 'Performance Optimization',
    cardTitle: 'Performance Optimization',
    cardDescription:
      'Make an existing site load fast on a phone, without rebuilding it from scratch.',
    h1: 'Website performance optimization',
    eyebrow: 'Speed and Core Web Vitals',
    metaTitle: 'Website Speed Optimization — BuildWise Webs',
    metaDescription:
      'Make an existing site load fast on mobile. Image, layout-shift, and render-blocking fixes, measured before and after. Quoted per site.',
    price: null,
    priceLabel: 'Quoted per site',
    priceNote: 'Scoped after a measurement pass, so the quote reflects real problems rather than a guess.',
    intro: [
      'Speed is the one website quality every visitor notices and almost nobody credits. Nobody praises a fast site. They just stay on it. A slow one loses people silently, before they have read a word, and the analytics rarely make it obvious that is what happened.',
      'A performance pass fixes what is actually slowing your site down, on the site you already have, with measurements taken before and after so the improvement is a number rather than a claim.',
    ],
    sections: [
      {
        heading: 'What gets measured first',
        body: [
          'Optimization without measurement is guesswork, and guesswork usually targets whatever is easiest rather than whatever is worst. The pass starts with a baseline on a simulated mobile connection, because that is the condition most of your visitors are actually in.',
          'The three numbers that matter are how long the largest visible element takes to appear, how much the layout jumps around while loading, and how quickly the page responds to a first tap. Those correspond to the Core Web Vitals search engines report, and each has different causes and different fixes.',
        ],
      },
      {
        heading: 'Where the time usually goes',
        body: [
          'The causes are boringly consistent across small business sites, which is good news — the common problems have well-understood fixes.',
        ],
        list: [
          'Oversized images served at full resolution and scaled down in the browser',
          'Images with no width and height set, so the page jumps as each one loads',
          'Fonts that block the first render while the browser waits to download them',
          'Analytics, chat widgets, and tracking scripts loading before the content',
          'Everything loading at once instead of the visible part loading first',
          'Stylesheets and scripts that were never split, so every page ships all of it',
        ],
      },
      {
        heading: 'What actually gets changed',
        body: [
          'Images are converted to modern formats, resized to the largest dimension they are ever displayed at, given explicit width and height so nothing shifts, and set to load lazily below the fold while the main image above the fold is prioritised.',
          'Render-blocking resources are moved out of the critical path, third-party scripts are deferred so they cannot delay your own content, and font loading is adjusted so text is readable while a custom face is still arriving rather than after.',
        ],
      },
      {
        heading: 'Honest limits',
        body: [
          'Some sites cannot be fixed at this level. If a site is built on a heavy platform with a dozen plugins injecting scripts, a performance pass will shave the edges and leave the underlying problem intact. When that is the case, a rebuild is the cheaper answer over any reasonable timeframe, and that is what you will be told.',
          'Speed also is not a ranking shortcut. It is a tiebreaker and a conversion factor — a fast page keeps more of the people who already arrived. Anybody promising that speed alone will move you up a competitive results page is selling something.',
        ],
      },
    ],
    included: [
      'Baseline measurement on a simulated mobile connection before any change',
      'Image conversion, resizing, and explicit dimensions to stop layout shift',
      'Lazy loading below the fold with the main above-fold image prioritised',
      'Render-blocking scripts and styles moved off the critical path',
      'Third-party and analytics scripts deferred behind your own content',
      'Font loading adjusted so text stays readable while fonts download',
      'After measurement, with the before and after numbers side by side',
    ],
    notIncluded: [
      'Server or hosting upgrades, which stay under your account and billing',
      'Rewriting a heavy third-party platform — a rebuild is quoted instead',
      'Guaranteed ranking improvements, which nobody can honestly promise',
    ],
    upgradeNote:
      'If measurement shows the platform itself is the bottleneck, a redesign is usually the cheaper long-term fix.',
    upgradeLink: '/services/website-redesign',
    process: [
      {
        title: 'Measure the baseline',
        body: 'The site is tested on a simulated mobile connection first, so every later claim has a number behind it and nothing is fixed on a hunch.',
      },
      {
        title: 'Rank the problems by cost',
        body: 'Findings are ordered by how much time each one actually costs, not by how easy it is to fix. You see the list and what each item is worth before work starts.',
      },
      {
        title: 'Apply the fixes',
        body: 'Images, layout shift, render-blocking resources, and third-party scripts, worked through in order of impact rather than convenience.',
      },
      {
        title: 'Measure again',
        body: 'The same test is re-run and you get before and after side by side. If a change did not help, it is reported as not having helped.',
      },
    ],
    faqs: [
      {
        question: 'Will a faster site rank higher?',
        answer:
          'Somewhat, and mostly as a tiebreaker. Speed is a confirmed but modest ranking signal — it will not move you past a competitor with far stronger content and links. The reliable gain is conversion: a fast page keeps more of the visitors you already paid to attract.',
      },
      {
        question: 'What counts as fast enough?',
        answer:
          'The common targets are the largest visible element appearing within about 2.5 seconds, near-zero layout movement while loading, and a response to the first tap within about 200 milliseconds. Those are thresholds rather than perfection — passing them matters far more than chasing a perfect score.',
      },
      {
        question: 'Can you optimize a site you did not build?',
        answer:
          'Yes, that is the usual case. What matters is whether the platform allows the necessary changes. If it does not — some hosted builders lock the parts that need fixing — you will be told during the measurement pass, before you have paid for work that cannot be done.',
      },
    ],
    relatedProjects: ['Radiant Control Systems'],
    relatedServices: ['website-redesign', 'landing-page-design'],
  },
]

export const serviceBySlug = Object.fromEntries(
  serviceDetails.map((service) => [service.slug, service]),
)

export const servicePaths = serviceDetails.map((service) => `/services/${service.slug}`)
