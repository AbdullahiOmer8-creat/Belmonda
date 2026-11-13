export function buildWhatsAppUrl(phone, message = '') {
  const digits = String(phone ?? '').replace(/\D/g, '')
  if (!digits) return ''

  const url = new URL(`https://wa.me/${digits}`)
  const text = String(message ?? '').trim()
  if (text) url.searchParams.set('text', text)
  return url.toString()
}
