import { imageLibrary } from './image-sources.js'

export const images = {}

for (const item of imageLibrary) {
  const parts = item.key.split('.')
  let node = images
  for (let index = 0; index < parts.length - 1; index += 1) {
    node[parts[index]] ??= {}
    node = node[parts[index]]
  }
  node[parts.at(-1)] = {
    src: item.src,
    alt: item.alt,
    width: item.width,
    height: item.height,
    source: item.source,
    license: item.license,
  }
}

export function getImage(path) {
  const image = String(path)
    .split('.')
    .reduce((node, key) => node?.[key], images)

  if (!image?.src) {
    throw new Error(`Unknown image key: ${path}`)
  }

  return image
}

export function listImages() {
  return imageLibrary.map((item) => ({
    key: item.key,
    src: item.src,
    source: item.source,
    license: item.license,
    note: item.note || '',
  }))
}
