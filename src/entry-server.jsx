import { renderToString } from 'react-dom/server'
import Home from '@/pages/Home.jsx'
import PageNotFound from '@/lib/PageNotFound.jsx'

// Used at build time by scripts/prerender.mjs to produce static HTML for "/".
export function render() {
  return renderToString(<Home />)
}

export function render404() {
  return renderToString(<PageNotFound />)
}
