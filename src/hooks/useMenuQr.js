import { useEffect, useState } from 'react'
import { createQrDataUrl } from '../utils/qr.js'

export function useMenuQr(value) {
  const [dataUrl, setDataUrl] = useState('')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!value) return undefined

    let active = true
    createQrDataUrl(value)
      .then((url) => {
        if (active) {
          setDataUrl(url)
          setError(null)
        }
      })
      .catch((nextError) => {
        if (active) setError(nextError)
      })

    return () => {
      active = false
    }
  }, [value])

  return { dataUrl, error }
}
