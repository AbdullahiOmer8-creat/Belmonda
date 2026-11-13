import { translations } from './translations.js'

export const languages = [
  { id: 'en', label: 'English', htmlLang: 'en' },
  { id: 'so', label: 'Soomaali', htmlLang: 'so' },
]

const languageIds = new Set(languages.map((language) => language.id))

function lookup(dictionary, key) {
  return key.split('.').reduce((node, part) => {
    if (!node || typeof node !== 'object') return undefined
    return node[part]
  }, dictionary)
}

export function isLanguage(value) {
  return languageIds.has(value)
}

export function translate(language, key, vars = {}) {
  const selected = isLanguage(language) ? language : 'en'
  const value = lookup(translations[selected], key) ?? lookup(translations.en, key) ?? key

  return String(value).replace(/\{\{(\w+)\}\}/g, (_, name) => String(vars[name] ?? ''))
}
