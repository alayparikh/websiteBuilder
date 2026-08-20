import { Head } from 'vite-react-ssg'
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_LOCALE,
  SITE_NAME,
  absoluteUrl,
  ogImageFor,
  pageMeta,
} from '../config/site'

function Seo({ path, jsonLd, ogType = 'website', article }) {
  const meta = pageMeta[path] || pageMeta['/']
  const url = absoluteUrl(path)
  const ogImage = ogImageFor(path)

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content={OG_IMAGE_WIDTH} />
      <meta property="og:image:height" content={OG_IMAGE_HEIGHT} />
      <meta property="og:image:alt" content={`${meta.title} — ${SITE_NAME}`} />

      {/* Article timestamps let crawlers date the post without parsing the body. */}
      {article?.published && (
        <meta property="article:published_time" content={article.published} />
      )}
      {article?.updated && (
        <meta property="article:modified_time" content={article.updated} />
      )}
      {article?.tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Head>
  )
}

export default Seo
