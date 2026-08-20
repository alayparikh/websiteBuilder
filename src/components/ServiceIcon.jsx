/* Stroke icons drawn on a 24x24 grid with a shared 1.6 stroke weight, coloured
   via currentColor so they follow the theme with no per-theme rules. Kept as
   inline SVG rather than emoji: emoji render as full-colour cartoons that fight
   the dark palette, and differ across macOS, Windows and Android. */

const icons = {
  // Page with a lightning bolt — a single fast-loading page.
  landing: (
    <>
      <rect x="3.5" y="3" width="17" height="18" rx="2.5" />
      <path d="M3.5 7.5h17" />
      <path d="M13 11l-3 4h3l-1 3.5 3.5-4.5H12l1-3z" />
    </>
  ),
  // Multi-storey building — a larger business site.
  business: (
    <>
      <path d="M4 20.5V6l7-3 7 3v14.5" />
      <path d="M2.5 20.5h19" />
      <path d="M8 9.5h2M13 9.5h2M8 13.5h2M13 13.5h2" />
      <path d="M10 20.5v-3.5h4v3.5" />
    </>
  ),
  // Shopping bag — storefront and checkout.
  ecommerce: (
    <>
      <path d="M4 8h16l-1.2 12.2a1 1 0 0 1-1 .8H6.2a1 1 0 0 1-1-.8L4 8z" />
      <path d="M9 10.5V6.5a3 3 0 0 1 6 0v4" />
    </>
  ),
  // Sparkles — a refresh of an existing brand.
  brand: (
    <>
      <path d="M12 3.5l1.7 4.3 4.3 1.7-4.3 1.7L12 15.5l-1.7-4.3L6 9.5l4.3-1.7L12 3.5z" />
      <path d="M18 15l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
    </>
  ),

  // Palette — custom design work.
  design: (
    <>
      <path d="M12 3.2c-4.9 0-8.8 3.7-8.8 8.4 0 4.7 3.9 8.4 8.8 8.4 1.4 0 2.2-.9 2.2-1.9 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.9 1.9-1.9h1.3c2.4 0 4.4-1.9 4.4-4.2 0-3.6-3.7-6.4-8.8-6.4z" />
      <circle cx="7.8" cy="11.2" r="1.05" />
      <circle cx="11.2" cy="7.6" r="1.05" />
      <circle cx="15.6" cy="8.6" r="1.05" />
    </>
  ),
  // Stacked layers — multi-page builds.
  layers: (
    <>
      <path d="M12 3.2 3.2 7.6 12 12l8.8-4.4L12 3.2z" />
      <path d="m3.2 12 8.8 4.4 8.8-4.4" />
      <path d="m3.2 16.4 8.8 4.4 8.8-4.4" />
    </>
  ),
  // Speed gauge — performance optimization.
  performance: (
    <>
      <path d="M3.6 17.5a9 9 0 1 1 16.8 0" />
      <path d="m12 13.8 4-4.3" />
      <circle cx="12" cy="14.6" r="1.15" />
    </>
  ),
  // Rocket — content and launch support.
  launch: (
    <>
      <path d="M12 3.2c2.8 2.1 4.3 5.3 4.3 8.8v3.6l-2.2 2.2H9.9l-2.2-2.2V12c0-3.5 1.5-6.7 4.3-8.8z" />
      <circle cx="12" cy="10.2" r="1.5" />
      <path d="M9.9 17.8 8.4 21m7.2-3.2L17.1 21" />
    </>
  ),
  // Wand with spark — branding add-ons.
  wand: (
    <>
      <path d="m4 20 10.5-10.5" />
      <path d="m13 6.4 4.6 4.6" />
      <path d="M17.2 3.4l.7 1.7 1.7.7-1.7.7-.7 1.7-.7-1.7-1.7-.7 1.7-.7.7-1.7z" />
      <path d="M20.4 13.6l.5 1.1 1.1.5-1.1.5-.5 1.1-.5-1.1-1.1-.5 1.1-.5.5-1.1z" />
    </>
  ),
}

function ServiceIcon({ name }) {
  const paths = icons[name]
  if (!paths) return null

  return (
    <svg
      className="card-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths}
    </svg>
  )
}

export default ServiceIcon
