import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App.jsx'
import '@/index.css'

const container = document.getElementById('root')

// Production builds ship pre-rendered HTML (see scripts/prerender.mjs), so
// hydrate it. In `vite dev` the root is empty, so render from scratch.
if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(container, <App />)
} else {
  ReactDOM.createRoot(container).render(<App />)
}
