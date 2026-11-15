import { renderToString } from 'react-dom/server'
import Home from '@/pages/Home.jsx'

// Used at build time by scripts/prerender.mjs to produce static HTML for "/".
export function render() {
  return renderToString(<Home />)
}
