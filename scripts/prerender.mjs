// Injects server-rendered HTML for "/" into dist/index.html, then removes the SSR bundle.
import { readFile, writeFile, rm } from 'node:fs/promises'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const ssrDir = path.join(root, 'dist-ssr')
const htmlPath = path.join(root, 'dist', 'index.html')
const marker = '<div id="root"></div>'

try {
  const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')))
  const template = await readFile(htmlPath, 'utf8')
  if (!template.includes(marker)) throw new Error(`"${marker}" not found in dist/index.html`)
  const appHtml = render()
  if (!appHtml || appHtml.length < 1000) throw new Error('Prerendered HTML is suspiciously small')
  await writeFile(htmlPath, template.replace(marker, () => `<div id="root">${appHtml}</div>`))
  console.log(`Prerendered / (${appHtml.length} bytes)`)
} catch (err) {
  console.error('Prerender failed:', err)
  process.exitCode = 1
} finally {
  await rm(ssrDir, { recursive: true, force: true })
}
