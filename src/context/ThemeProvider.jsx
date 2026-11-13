import { useCallback, useLayoutEffect, useMemo, useState } from 'react'
import { preferenceKeys, readStorage, writeStorage } from '../utils/storage.js'
import { ThemeContext } from './theme-context.js'

const themes = ['light', 'dark']

function readTheme() {
  const stored = readStorage(preferenceKeys.theme)
  return themes.includes(stored) ? stored : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(readTheme)

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme
    writeStorage(preferenceKeys.theme, theme)
  }, [theme])

  const setTheme = useCallback((next) => {
    setThemeState((current) => (themes.includes(next) ? next : current))
  }, [])

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === 'dark' ? 'light' : 'dark'))
  }, [])

  const value = useMemo(
    () => ({ theme, setTheme, toggleTheme }),
    [theme, setTheme, toggleTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
