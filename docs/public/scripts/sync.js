// scripts/sync.js
// 把 src/ 下的 CSS 同步到 docs/public/，让 VitePress 能引用
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const files = ['nova-style.css', 'nova-style.min.css']

for (const name of files) {
  const src  = path.join(root, 'src', name)
  const dest = path.join(root, 'docs/public', name)

  fs.mkdirSync(path.dirname(dest), { recursive: true })
  fs.copyFileSync(src, dest)

  console.log(`✓ Synced: src/${name} → docs/public/${name}`)
}