/* Renders one Open Graph image per route so every shared link previews with its
   own title instead of a single generic cover. Run via `npm run og`, not on
   every build — the output is committed to public/ and only needs regenerating
   when a page title changes.

   Delegates the drawing to a Python/Pillow helper because that is the only
   image toolchain available here without adding a dependency. */

import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'
import { indexableRoutes, pageMeta } from '../src/config/site.js'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

/* Headline shown on the card. The <title> tag carries a brand suffix that would
   only waste space in a 1200x630 image, so it is stripped here. */
const cards = indexableRoutes.map((path) => ({
  path,
  slug: path === '/' ? 'home' : path.slice(1).replace(/\//g, '-'),
  title: (pageMeta[path]?.title ?? '').replace(/\s*[—–-]\s*BuildWise Webs\s*$/, ''),
  kicker:
    path === '/' ? 'buildwisewebs.vercel.app'
    : path.startsWith('/blog/') ? 'Guide'
    : path.startsWith('/services/') ? 'Service'
    : path.slice(1).replace(/^\w/, (c) => c.toUpperCase()),
}))

execFileSync('python3', [resolve(root, 'scripts/render-og.py'), JSON.stringify({ root, cards })], {
  stdio: 'inherit',
})
