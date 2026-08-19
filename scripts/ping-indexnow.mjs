/* Notifies Bing (and other IndexNow participants) that pages changed.
   Run after a deploy: `npm run indexnow`. Google does not participate. */

const HOST = 'buildwisewebs.vercel.app'
const KEY = '5991103c2a1770b5d6fc59a3a19d3b5d'
const ROUTES = ['/', '/services', '/portfolio', '/contact', '/faq']

const body = {
  host: HOST,
  key: KEY,
  keyLocation: `https://${HOST}/${KEY}.txt`,
  urlList: ROUTES.map((route) => (route === '/' ? `https://${HOST}/` : `https://${HOST}${route}`)),
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
})

console.log(`IndexNow responded ${response.status} ${response.statusText}`)
if (response.status !== 200 && response.status !== 202) {
  console.log(await response.text())
  process.exitCode = 1
}
