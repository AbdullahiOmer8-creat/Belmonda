import { ArrowUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { restaurant } from '../../data/restaurant.js'
import { useI18n } from '../../hooks/useI18n.js'

export default function FloatingActions() {
  const { t } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {visible ? (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper text-ink shadow-sm"
          aria-label={t('actions.backToTop')}
        >
          <ArrowUp size={18} />
        </button>
      ) : null}
      <a
        href={restaurant.contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="grid h-12 w-12 place-items-center rounded-full bg-caramel text-white shadow-md"
        aria-label={t('actions.whatsapp')}
      >
        <MessageCircle size={20} />
      </a>
    </div>
  )
}
