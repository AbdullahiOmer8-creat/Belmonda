import { useContext } from 'react'
import { I18nContext } from '../context/i18n-context.js'

export function useI18n() {
  const value = useContext(I18nContext)
  if (!value) {
    throw new Error('useI18n must be used within I18nProvider')
  }

  const text = (entry) => {
    if (entry == null) return ''
    if (typeof entry === 'string') return entry
    return entry[value.language] || entry.en || ''
  }

  return { ...value, text }
}
