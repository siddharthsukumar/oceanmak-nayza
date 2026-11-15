// Injects server-rendered HTML for "/" into dist/index.html, then removes the SSR bundle.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const ssrDir = path.join(root, 'dist-ssr')
const htmlPath = path.join(root, 'dist', 'index.html')
const marker = '<div id="root"></div>'

try {
  const { render, render404 } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')))
  const template = await readFile(htmlPath, 'utf8')
  if (!template.includes(marker)) throw new Error(`"${marker}" not found in dist/index.html`)
  const appHtml = render()
  if (!appHtml || appHtml.length < 1000) throw new Error('Prerendered HTML is suspiciously small')
  await writeFile(htmlPath, template.replace(marker, () => `<div id="root">${appHtml}</div>`))
  // Static 404 page: Netlify serves dist/404.html with a real 404 status for
  // any URL that doesn't match a file. No client script, so it never hydrates.
  const notFound = template
    .replace(marker, () => `<div id="root">${render404()}</div>`)
    .replace(/<script\b[^>]*type="module"[^>]*><\/script>/g, '')
    .replace(/<link\b[^>]*rel="modulepreload"[^>]*>/g, '')
    .replace(/<link\b[^>]*rel="canonical"[^>]*>/g, '')
    .replace(/<title>[\s\S]*?<\/title>/, '<title>Page Not Found | Oceanmak</title>')
    .replace('</head>', '    <meta name="robots" content="noindex" />\n  </head>')
  await writeFile(path.join(root, 'dist', '404.html'), notFound)
  console.log(`Prerendered / (${appHtml.length} bytes)`)
} catch (err) {
  console.error('Prerender failed:', err)
  process.exitCode = 1
} finally {
  await rm(ssrDir, { recursive: true, force: true })
}
