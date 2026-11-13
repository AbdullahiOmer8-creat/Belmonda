import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { isLanguage, languages, translate } from '../i18n/index.js'
import { preferenceKeys, readStorage, writeStorage } from '../utils/storage.js'
import { I18nContext } from './i18n-context.js'

function readLanguage() {
  const stored = readStorage(preferenceKeys.language)
  return isLanguage(stored) ? stored : 'en'
}

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(readLanguage)

  const setLanguage = useCallback((next) => {
    setLanguageState((current) => (isLanguage(next) ? next : current))
  }, [])

  const t = useCallback((key, vars) => translate(language, key, vars), [language])

  useLayoutEffect(() => {
    const current = languages.find((item) => item.id === language)
    document.documentElement.lang = current?.htmlLang ?? 'en'
    writeStorage(preferenceKeys.language, language)
  }, [language])

  const value = useMemo(
    () => ({ language, setLanguage, t }),
    [language, setLanguage, t],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
