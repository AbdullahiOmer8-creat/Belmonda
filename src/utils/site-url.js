export function isLocalHostname(hostname) {
  const host = String(hostname || '').toLowerCase().replace(/^\[|\]$/g, '')
  if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0' || host === '::1') {
    return true
  }
  if (host.endsWith('.local')) return true
  if (/^10\./.test(host)) return true
  if (/^192\.168\./.test(host)) return true
  if (/^172\.(1[6-9]|2\d|3[0-1])\./.test(host)) return true
  return false
}

export function getPrintableMenuUrl(configuredUrl = '') {
  const value = String(configuredUrl || import.meta.env?.VITE_PUBLIC_SITE_URL || '').trim()
  if (!value) return ''

  try {
    const url = new URL(value)
    if (url.protocol !== 'https:' && url.protocol !== 'http:') return ''
    if (isLocalHostname(url.hostname)) return ''
    return new URL('/menu', url).href
  } catch {
    return ''
  }
}
