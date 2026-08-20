# Website Builder Demo

A React + Vite landing site for a website building service, ready to deploy on Vercel.

## What this repo contains

- `package.json` — Vite + React dependencies and scripts
- `vite.config.js` — React plugin configuration
- `src/main.jsx` — app entry point
- `src/App.jsx` — application router and layout
- `src/pages` — home, services (hub + 5 detail pages), portfolio, blog, FAQ, and contact pages
- `src/data` — content as data: FAQ entries, portfolio projects, service detail pages, blog posts
- `src/config/site.js` — page titles, meta descriptions, and the canonical list of indexable routes
- `src/config/schema.js` — JSON-LD builders for every page type
- `scripts/generate-seo-files.mjs` — sitemap.xml and llms.txt, generated after each build
- `scripts/generate-og-images.mjs` — per-page Open Graph cards (`npm run og`)
- `src/styles.css` — theme-aware styling, layout, and responsive design
- `vercel.json` — Vercel rewrite config for client-side routes

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Build production output:
   ```bash
   npm run build
   ```

## Vercel deployment

1. Push this repo to GitHub.
2. Import the repository into Vercel.
3. Vercel detects the app as a Vite React project automatically.
4. Build command: `npm run build`
5. Output directory: `dist`

## SEO

Titles and descriptions live in `src/config/site.js`; service and blog pages derive theirs from
`src/data/serviceDetails.js` and `src/data/blogPosts.js`, so adding a page adds its metadata,
sitemap entry, llms.txt entry, and JSON-LD in one place.

- Unique title (<= 60 chars) and meta description (<= 155 chars) per page, self-referencing canonicals.
- JSON-LD per page type: Organization/ProfessionalService sitewide, plus WebPage, Service, Offer,
  BreadcrumbList, CollectionPage, ItemList, BlogPosting, and FAQPage where each applies.
- **FAQPage markup appears on `/faq` and on each service page only.** The home and services teasers
  render shortened `shortAnswer` text and emit no schema, so the same Q&A is never marked up twice.
  Keep it that way when adding questions — see the comment in `src/data/faqData.js`.
- `sitemap.xml` carries a real per-route `lastmod`. `scripts/generate-seo-files.mjs` hashes each
  rendered page (scripts and stylesheets stripped, since their filenames carry build hashes) and only
  advances the date when the page actually changed. State lives in `seo-lastmod.json`, which is
  **committed on purpose** — deleting it resets every date to today.
- Open Graph cards are per page. Regenerate with `npm run og` after changing any page title; output
  lands in `public/` and is copied into `dist/` by the build.
- Headings run H1 -> H2 -> H3 with no skipped levels on every route. Keep new sections consistent.

### Adding a service page

Add an entry to `src/data/serviceDetails.js`. The route, hub card, metadata, sitemap entry, schema,
llms.txt block, and OG image all follow from it. Run `npm run og` afterwards.

### Adding a blog post

Add an entry to `src/data/blogPosts.js`, same deal. `relatedPosts` and `relatedServices` are slug
references — they are resolved at render time, so a typo silently drops the link rather than failing
the build. Check the rendered page.

### Not done, and why

- **Custom domain.** The site runs on `buildwisewebs.vercel.app`, a subdomain on the Public Suffix
  List, so no domain authority accrues to the brand. This is the single largest constraint on
  ranking, and no on-page work substitutes for it.
- **Review / aggregateRating schema.** The homepage testimonials are attributed to initials only.
  Marking up unverifiable reviews risks a structured-data manual action. Add real names with
  permission first, then the schema.
- **Organization `telephone`, `address`, `founder`.** Not in the repo, and not safe to invent.

## What’s included

- Multi-page navigation using React Router
- Services page with detailed offerings
- Portfolio gallery page for demo projects
- Contact page with live form integration
- Dark / Light theme toggle persisted in browser storage
- Responsive layout and pricing showcase
- SEO metadata, site schema, sitemap, and robots file

## Monetization ideas

- Offer website packages with add-ons like SEO, e-commerce, and maintenance plans.
- Sell premium templates or niche landing page bundles.
- Provide managed website support subscriptions for updates and backups.
- Use the flyer-style pricing and trust messaging to attract leads.

## Notes

- The contact form sends submissions through a real form service.
- `npm run indexnow` pings Bing and other IndexNow participants after a deploy. Google does not
  participate — submit the sitemap in Search Console instead.
- Update `src/pages/ContactPage.jsx` with your live site URL in the `_next` hidden input for better form flow.
