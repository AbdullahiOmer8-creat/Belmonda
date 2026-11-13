import QRCode from 'qrcode'

const toDataUrl = QRCode.toDataURL ?? QRCode.default?.toDataURL

export function createQrDataUrl(value, options = {}) {
  if (typeof toDataUrl !== 'function') {
    return Promise.reject(new Error('QRCode.toDataURL is unavailable'))
  }

  return toDataUrl(String(value), {
    errorCorrectionLevel: 'M',
    margin: 1,
    width: 320,
    ...options,
  })
}
