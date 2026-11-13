export const preferenceKeys = {
  theme: 'restaurant-theme',
  language: 'restaurant-language',
}

export function readStorage(key) {
  try {
    return window.localStorage.getItem(key)
  } catch {
    return null
  }
}

export function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value)
  } catch {
    // Private browsing can block storage. The in-memory choice still applies.
  }
}
