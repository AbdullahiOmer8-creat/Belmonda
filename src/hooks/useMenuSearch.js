import { useMemo, useState } from 'react'

export function filterMenuItems(items = [], query = '') {
  const source = Array.isArray(items) ? items : []
  const normalized = String(query ?? '').trim().toLowerCase()
  if (!normalized) return source

  return source.filter((item) => {
    const haystack = [
      item.name?.en,
      item.name?.so,
      item.description?.en,
      item.description?.so,
      item.categoryId,
      ...(item.tags ?? []),
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()

    return haystack.includes(normalized)
  })
}

export function useMenuSearch(items) {
  const [query, setQuery] = useState('')
  const results = useMemo(() => filterMenuItems(items, query), [items, query])
  return { query, setQuery, results }
}
