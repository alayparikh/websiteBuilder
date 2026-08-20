/* Articles live here as structured data rather than MDX so the same objects can
   feed the /blog index, each /blog/<slug> page, the sitemap, llms.txt, and the
   BlogPosting JSON-LD without a second source of truth. */

export const blogPosts = [
  {
    slug: 'what-a-small-business-website-costs',
    title: 'What a small business website actually costs',
    h1: 'What a small business website actually costs',
    metaTitle: 'What a Small Business Website Actually Costs',
    metaDescription:
      'Published web design prices range from $150 to $5,500 for similar-sounding work. Here is what drives the difference, and which costs are recurring.',
    excerpt:
      'Published prices for the same-sounding job range from a few hundred dollars to several thousand. The spread is real, and it is explainable.',
    published: '2026-08-20',
    updated: '2026-08-20',
    readingMinutes: 6,
    tags: ['Pricing'],
    intro: [
      'Ask what a small business website costs and you get answers between $150 and $15,000, often for work described in almost identical words. That range is not evidence that somebody is lying. It is evidence that "a website" describes at least four different products with the same name.',
      'This is what actually drives the number, what published figures say, and which costs keep arriving after launch.',
    ],
    sections: [
      {
        heading: 'What the published numbers say',
        paras: [
          'Upwork lists a median hourly rate of about $21 for web designers, with a typical band of roughly $15 to $30. Thervo puts freelance design for a simple site at $1,000 to $5,000 for fewer than ten pages. Mooninvoice puts freelance project pricing at $550 to $5,500. Agencies routinely quote several times those figures.',
          'None of these contradict each other. An hourly rate multiplied by hours is a project fee, and the hours vary enormously depending on how much is custom, how much content someone else has to write, and how many people sit between you and the person doing the work.',
        ],
      },
      {
        heading: 'The four things that actually move the price',
        paras: [
          'Almost every quote you receive is a function of the same four variables. Once you can see them, wildly different numbers stop being mysterious.',
        ],
        list: [
          'Page count. Each page is design, copy, and testing. Five pages is not five times one page, but it is not one page either.',
          'Who writes the words. Copywriting is often the largest hidden line. A quote that assumes you supply text is a different product from one that does not.',
          'How custom the design is. A template adjusted to your brand and a layout designed from scratch differ by an order of magnitude in hours.',
          'Who is in the room. A freelancer bills their time. An agency bills their time plus a project manager, an account manager, and an office.',
        ],
      },
      {
        heading: 'The costs that keep coming',
        paras: [
          'The build fee is the part everyone compares. The recurring costs are the part that decides what you actually pay over three years, and they are much less consistently disclosed.',
          'Hosting is unavoidable and usually modest — a small business site can be hosted for free to a few dollars a month on modern platforms. Domain registration runs roughly $10 to $20 a year. Those are real but small.',
          'The item worth reading carefully is the platform or maintenance subscription. A $49 monthly plan is $1,764 over three years, on top of the build. That can be entirely reasonable if it covers real ongoing work. It is not reasonable when it is rent for a site you already paid to have built.',
        ],
      },
      {
        heading: 'Cheap, and the two different things it can mean',
        paras: [
          'A low price sometimes means low overhead — one person, no office, no account layer, working efficiently on a well-understood job. That is a genuinely cheaper way to buy the same outcome.',
          'It can also mean the work is thin: a stock template with your logo dropped in, stock copy nobody adapted, no mobile testing, and no handoff, so you cannot change anything without going back to the same person.',
          'The price alone does not tell you which one you are being offered. Two questions do. Ask what happens if you want to change the text yourself in six months. Ask what you receive at handoff. Anyone selling the second kind will answer both vaguely.',
        ],
      },
      {
        heading: 'What to check before you agree to anything',
        paras: [
          'Regardless of who you hire or what they charge, get these in writing before money changes hands. Every one of them is a question that becomes expensive after the fact.',
        ],
        list: [
          'Exactly which pages the price covers, and what an extra page costs',
          'Who writes the copy, and who sources the images',
          'How many revision rounds are included before extras are billed',
          'What you receive at handoff — every credential, or a login to someone else account',
          'Whether the domain is registered in your name',
          'What recurring charges exist, and what happens to the site if you stop paying them',
        ],
      },
      {
        heading: 'Where BuildWise Webs sits',
        paras: [
          'For transparency, since this article is on a web design site: a single-page build is $150 and a multi-page build of up to five pages is $300, both one-time, both with two revision rounds and full credential handoff. Hosting is paid to your own provider, so there is nothing recurring to BuildWise Webs.',
          'That is at the low end of every published range above, for the reasons in the overhead section — one person, no account layer, and a build process that has done this specific job many times. It is not the right choice for everyone. If you need ongoing strategy, a content team, or a large custom application, you should be paying agency rates to an agency.',
        ],
      },
    ],
    relatedServices: ['landing-page-design', 'business-website'],
    relatedPosts: ['one-time-payment-vs-monthly-website-subscriptions', 'single-page-vs-multi-page-website'],
  },
  {
    slug: 'one-time-payment-vs-monthly-website-subscriptions',
    title: 'One-time payment vs monthly website subscriptions',
    h1: 'One-time payment vs monthly website subscriptions',
    metaTitle: 'One-Time Website Payment vs Monthly Subscription',
    metaDescription:
      'Monthly website plans and one-time builds cost very different amounts over three years. Here is the arithmetic, and when each one wins.',
    excerpt:
      'A $49 monthly plan is $1,764 over three years. Sometimes that is good value. Here is how to tell which case you are in.',
    published: '2026-08-20',
    updated: '2026-08-20',
    readingMinutes: 5,
    tags: ['Pricing'],
    intro: [
      'There are two ways to buy a small business website. Pay once and own it, or pay monthly and keep access to it. Both are legitimate. They suit different situations, and the difference over a few years is larger than most people expect when they sign.',
      'This is the arithmetic, plus the question that actually decides which one fits.',
    ],
    sections: [
      {
        heading: 'The three-year arithmetic',
        paras: [
          'Take a common subscription offer: a build included, then $49 a month for hosting, support, and updates. Over three years that is $1,764, and the site typically remains on the provider platform.',
          'Compare a $300 one-time build hosted on a modern platform free or near-free tier, with a $15 domain renewal each year. Three-year total: roughly $345.',
          'The gap is about $1,400 for what looks like the same website. Whether that gap is waste or value depends entirely on what the monthly fee is actually buying.',
        ],
      },
      {
        heading: 'When a subscription genuinely earns it',
        paras: [
          'Recurring fees are fair when recurring work happens. There are real cases where the monthly model is the better buy.',
        ],
        list: [
          'Your content changes constantly — a menu, a class schedule, stock, events — and somebody else updating it is worth more than the fee',
          'You want a named person accountable when something breaks at an inconvenient hour',
          'The site is genuinely complex, with integrations that need active maintenance',
          'You have no appetite for touching anything technical and would rather rent the outcome, which is a perfectly rational preference',
        ],
      },
      {
        heading: 'When it does not',
        paras: [
          'The subscription stops being value when nothing recurring is happening. A five-page brochure site that has not changed since launch does not consume $49 of anyone time each month.',
          'Watch for two patterns specifically. The first is a plan where the "build included" is amortised into the monthly fee — you never stop paying for a build that finished long ago. The second is a plan where you cannot export or move the site, so cancelling means starting over rather than relocating.',
        ],
      },
      {
        heading: 'The question that decides it',
        paras: [
          'Ask what happens to the website if you stop paying. There are only two answers, and they describe completely different products.',
          'If the site goes offline, you were renting. That may still be a fine deal, but price it as rent and compare it to rent — not to a purchase.',
          'If the site keeps running and you simply lose support, you bought something and are paying separately for a service. That is a cleaner arrangement, and it lets you evaluate the service on its own merits each year.',
        ],
      },
      {
        heading: 'Ownership is a practical matter, not a philosophical one',
        paras: [
          'Owning a website is not an abstract principle. It is a specific list of things you hold: the domain registered in your name, the hosting account in your name, the files, and the credentials to all of it.',
          'The reason it matters is leverage. If the person who built your site becomes unreachable, doubles their price, or stops replying, ownership is the difference between a bad afternoon and losing the site entirely. Every business that has been on the wrong side of this describes it the same way — the problem was never the fee, it was having no way out.',
        ],
      },
      {
        heading: 'A reasonable middle position',
        paras: [
          'You do not have to choose between renting forever and being entirely on your own. Buy the build outright, hold the domain and hosting in your own name, and pay for help per request when you actually need it.',
          'That keeps the ongoing cost proportional to the ongoing work, which is the fair version of the arrangement. It is how BuildWise Webs projects are structured: one-time build, credentials transferred at handoff, later changes quoted per request, no retainer to sign.',
        ],
      },
      {
        heading: 'Five questions to ask before signing a monthly plan',
        paras: [
          'If you are considering a subscription, these are the questions that separate a fair service from an expensive lock-in. Ask them in writing, and read the answers for specifics rather than reassurance.',
        ],
        list: [
          'If I cancel, does the website stay online, and in whose account does it live?',
          'Can I export the site and host it elsewhere, and has anyone actually done that?',
          'Is the domain registered in my name, or in yours on my behalf?',
          'What is included in the monthly fee in a month where I request nothing?',
          'What does a change request cost if I am not on a plan at all?',
        ],
        after: [
          'A provider running an honest service answers all five plainly, because none of the answers embarrass them. Vagueness on the first three in particular is the signal worth acting on.',
        ],
      },
    ],
    relatedServices: ['business-website', 'website-redesign'],
    relatedPosts: ['what-a-small-business-website-costs', 'what-to-prepare-before-hiring-a-web-designer'],
  },
  {
    slug: 'single-page-vs-multi-page-website',
    title: 'Single-page vs multi-page: which one does your business need?',
    h1: 'Single-page vs multi-page: which one does your business need?',
    metaTitle: 'Single-Page vs Multi-Page Website — Which You Need',
    metaDescription:
      'One page or five? The answer depends on how many things you sell and how many search queries you need to answer. A practical way to decide.',
    excerpt:
      'The honest test is not how big your business is. It is how many different questions your visitors arrive with.',
    published: '2026-08-20',
    updated: '2026-08-20',
    readingMinutes: 5,
    tags: ['Strategy'],
    intro: [
      'Most advice on this question is really advice about budget — one page is cheaper, so one page gets recommended to anyone who flinches at a number. That is not a structural answer, and it leads plenty of businesses to a site shape that works against them.',
      'The useful test has nothing to do with company size. It is how many distinct questions people arrive with, and whether each one deserves its own address.',
    ],
    sections: [
      {
        heading: 'What a single page is genuinely good at',
        paras: [
          'A single page removes every decision except the one you want made. There is no navigation to explore and no wrong turn to take. The visitor scrolls through an argument in the order you chose and arrives at a form.',
          'That is a real advantage for paid traffic, where every extra click loses a measurable share of visitors, and for launches, where you have one thing to say and a deadline to say it by. It is also the fastest way to test whether an offer has any pull at all before committing to a full structure.',
        ],
      },
      {
        heading: 'What a single page cannot do',
        paras: [
          'A page has one title tag, one H1, and one topic. It can compete for one tight cluster of search queries. It cannot compete for four different services at once, because there is nowhere to put four different focused arguments without diluting all of them.',
          'It also gives you nothing specific to send. If a prospect asks about one particular service, the best you can do is a link with an anchor and a hope they scroll past everything else first. Over a year of enquiries, that friction adds up in ways that are invisible in analytics.',
        ],
      },
      {
        heading: 'The test that actually decides it',
        paras: [
          'Write down every distinct question a prospect arrives with. Not topics you would like to cover — questions people actually ask you before they buy.',
          'If they all reduce to one question with variations, you want one page. If there are three or four genuinely different questions, each from a slightly different kind of buyer, you want a page per question. That is the whole test, and it does not care what your revenue is.',
        ],
        list: [
          'One page: a single service, one audience, one clear action',
          'Multiple pages: several services, or several audiences who need different arguments',
          'Multiple pages: prospects who ask for pricing, proof, or credentials as separate concerns',
          'One page: an offer you are still testing and may change entirely next month',
        ],
      },
      {
        heading: 'Why separate URLs matter for search',
        paras: [
          'Search engines index and rank pages, not businesses. Four services described in four paragraphs on one page give a search engine one document that is partly about each. Four pages give it four documents that are each entirely about one thing.',
          'The second shape wins for a straightforward reason: relevance is measured per page. A dedicated page can carry a matching title, a matching heading, and several hundred words that stay on topic. A shared page cannot do that four times over.',
        ],
      },
      {
        heading: 'You can start with one and grow',
        paras: [
          'This is not a permanent decision if the first build is done sensibly. A single page built on the same foundation as a multi-page site can have pages added later without starting over — you pay for the new pages, not for the work already done.',
          'What does cause a rebuild is starting on a platform you cannot extend, or with a builder who hands over nothing. Which is the real reason to ask about handoff before you ask about page count.',
        ],
      },
      {
        heading: 'The long single page, and where it falls short',
        paras: [
          'There is a middle option people reach for: one very long page with anchor links in the navigation, so it behaves like a multi-page site without being one. Visually this can work well, and for a brochure site it is often a reasonable choice.',
          'It does not solve the search problem, though, and it is worth being clear about why. Anchor links point at sections of a single document. There is still one title, one description, and one topic as far as a search engine is concerned, so a long page competes for exactly as many queries as a short one.',
          'It also gets slow. Everything on every section loads for a visitor who wanted one of them, which on a phone means paying the loading cost of five pages to read one. If the goal is appearance, anchors are fine. If the goal is search visibility or speed, they are not a substitute for real pages.',
        ],
      },
    ],
    relatedServices: ['landing-page-design', 'business-website'],
    relatedPosts: ['what-a-small-business-website-costs', 'what-to-prepare-before-hiring-a-web-designer'],
  },
  {
    slug: 'what-to-prepare-before-hiring-a-web-designer',
    title: 'What to prepare before hiring a web designer',
    h1: 'What to prepare before hiring a web designer',
    metaTitle: 'What to Prepare Before Hiring a Web Designer',
    metaDescription:
      'Most delayed website projects stall on missing content, not on design. The checklist that keeps a build inside its timeline.',
    excerpt:
      'Almost every website project that runs late runs late for the same reason, and it is not the design.',
    published: '2026-08-20',
    updated: '2026-08-20',
    readingMinutes: 6,
    tags: ['Process'],
    intro: [
      'Website projects rarely stall on design. They stall waiting for content — the paragraph about the business nobody has written, the photos that are on somebody phone, the service descriptions that exist only in the owner head.',
      'None of that is hard. It is just unglamorous, and it tends to get postponed until it is the only thing left. Preparing it first is the single largest thing a client can do to keep a build inside its timeline.',
    ],
    sections: [
      {
        heading: 'The one paragraph everything else hangs on',
        paras: [
          'Before anything else, write one paragraph: what you do, who you do it for, and what makes somebody choose you over the obvious alternative. Plain language, no marketing register.',
          'This paragraph becomes the homepage headline, the meta description, the social preview, and the opening of every service page. Written badly, it makes all of those weak at once. Written well, most of the rest of the site follows from it.',
        ],
      },
      {
        heading: 'Decide the pages before you look at designs',
        paras: [
          'The page list is the highest-leverage decision in the project and the one most often made by default. Choose it from the questions people actually ask you, not from a template.',
          'For each page, write the single sentence describing what it exists to do. If you cannot write that sentence, the page probably should not exist — and if two pages produce the same sentence, they are one page.',
        ],
      },
      {
        heading: 'Gather assets in the state they are actually in',
        paras: [
          'Perfect assets are not required. Present ones are. Collect what exists now rather than waiting for a photoshoot that keeps slipping.',
        ],
        list: [
          'Logo files, ideally vector, but a large PNG will do',
          'Brand colours, or an existing thing you want colours pulled from',
          'Photos of real work, premises, or people — imperfect real beats polished stock',
          'Any existing copy: brochures, proposals, even long emails you have sent prospects',
          'Testimonials with permission to publish them and a real name attached',
          'Logins for your domain registrar and any existing hosting',
        ],
      },
      {
        heading: 'The credentials conversation, held early',
        paras: [
          'Find out now who controls your domain. Not who set it up — who can log in today. Surprisingly often the answer is a former contractor, a nephew, or nobody at all, and discovering that on launch day turns a one-hour task into a multi-week recovery.',
          'If the domain is registered to someone else, fix that before the build rather than after. A domain in your own name in your own account is the one asset that makes everything else recoverable.',
        ],
      },
      {
        heading: 'Two or three examples, and why they help',
        paras: [
          'Send two or three websites you like, with a sentence each on what specifically you like about them. "This one, because the pricing is clear without scrolling" is worth more than a page of adjectives.',
          'Examples of sites you dislike are equally useful, for the same reason. Both narrow the space faster than any amount of describing a feeling, and they prevent the expensive version of this conversation, which happens after a design already exists.',
        ],
      },
      {
        heading: 'Agree how feedback will work',
        paras: [
          'Revision rounds exist to protect the timeline for both sides. The failure mode is not too much feedback — it is feedback arriving in a trickle, one thought at a time over a week, with each note restarting work that had just been finished.',
          'Batch it. Look at the whole preview, collect every change into one list, send it once. Most projects that include two revision rounds finish comfortably within them when feedback is batched, and blow through them when it is not.',
        ],
      },
      {
        heading: 'What you do not need to prepare',
        paras: [
          'The list above is short on purpose, and it is worth naming what is not on it — because waiting on these is how projects lose weeks for no benefit.',
          'You do not need finished copy. A structure with prompts per section is far easier to write into than a blank document, and that structure only exists once the build has started. You do not need a professional photoshoot; real photographs of real work outperform stock, and better ones can be swapped in after launch without touching the layout.',
          'You do not need to have chosen a colour palette, picked fonts, or decided anything about the design. Those are decisions the build is for. And you do not need to know what your competitors are doing — a couple of examples you like says more about what will suit you than any competitive survey.',
        ],
      },
    ],
    relatedServices: ['business-website', 'landing-page-design'],
    relatedPosts: ['single-page-vs-multi-page-website', 'one-time-payment-vs-monthly-website-subscriptions'],
  },
]

export const postBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]))

export const blogPaths = blogPosts.map((post) => `/blog/${post.slug}`)

export const BLOG_UPDATED = blogPosts
  .map((post) => post.updated)
  .sort()
  .at(-1)
