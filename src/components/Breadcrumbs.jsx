import { Link } from 'react-router-dom'

/* Visible trail that mirrors the BreadcrumbList in the page schema. `trail` is
   every level above the current page; the current page renders as plain text
   because linking a page to itself helps nobody. */
function Breadcrumbs({ trail, current }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li>
          <Link to="/">Home</Link>
        </li>
        {trail.map((crumb) => (
          <li key={crumb.path}>
            <Link to={crumb.path}>{crumb.name}</Link>
          </li>
        ))}
        <li aria-current="page">{current}</li>
      </ol>
    </nav>
  )
}

export default Breadcrumbs
