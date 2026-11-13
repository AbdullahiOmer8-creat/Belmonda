import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { imageLibrary } from '../src/data/image-sources.js'

const root = path.resolve('public/images')
const jobs = imageLibrary.filter((item) => item.unsplashId)

async function download(item) {
  const url = `${item.source}?auto=format&fit=crop&w=${item.width}&h=${item.height}&q=75&fm=webp`
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      Accept: 'image/webp,image/*',
      'User-Agent': 'Mozilla/5.0',
    },
  })
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`)
  }
  const type = response.headers.get('content-type') || ''
  const bytes = Buffer.from(await response.arrayBuffer())
  if (!type.includes('image') || bytes.length < 20000) {
    throw new Error(`unexpected payload ${type} ${bytes.length}`)
  }
  const target = path.join(root, item.src.replace(/^\/images\//, ''))
  await mkdir(path.dirname(target), { recursive: true })
  await writeFile(target, bytes)
  return { file: item.src, bytes: bytes.length, type }
}

const failures = []
const limit = 6
let index = 0

async function worker() {
  while (index < jobs.length) {
    const current = jobs[index]
    index += 1
    try {
      const result = await download(current)
      console.log(`OK ${result.file} ${result.bytes}`)
    } catch (error) {
      failures.push(`${current.src}: ${error.message}`)
      console.error(`FAIL ${current.src}: ${error.message}`)
    }
  }
}

await Promise.all(Array.from({ length: limit }, () => worker()))

if (failures.length) {
  console.error(`\n${failures.length} downloads failed`)
  process.exitCode = 1
} else {
  console.log(`\nDownloaded ${jobs.length} images`)
}
