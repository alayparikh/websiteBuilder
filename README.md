# Website Builder Demo

A React + Vite landing site for a website building service, ready to deploy on Vercel.

## What this repo contains

- `package.json` — Vite + React dependencies and scripts
- `vite.config.js` — React plugin configuration
- `src/main.jsx` — app entry point
- `src/App.jsx` — application router and layout
- `src/pages` — home, services, portfolio, and contact pages
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

## SEO optimization

- Unique titles and meta descriptions for each page.
- Structured data via JSON-LD for the business/service.
- `robots.txt` and `sitemap.xml` included in `public/`.
- Fast page speed and mobile-friendly design.
- Use descriptive H1/H2 headings and keyword-rich page copy.
- Add alt text to every image and keep page content focused around your services.

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
- Update `src/pages/ContactPage.jsx` with your live site URL in the `_next` hidden input for better form flow.
