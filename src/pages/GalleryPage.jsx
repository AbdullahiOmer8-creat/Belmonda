import { X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import Photo from '../components/common/Photo.jsx'
import { galleryCategories, galleryImages } from '../data/gallery.js'
import { getImage } from '../data/images.js'
import { useI18n } from '../hooks/useI18n.js'

export default function GalleryPage() {
  const { t, text } = useI18n()
  const [category, setCategory] = useState('all')
  const [activeId, setActiveId] = useState('')

  const visible = useMemo(
    () => (category === 'all' ? galleryImages : galleryImages.filter((item) => item.categoryId === category)),
    [category],
  )
  const activeIndex = visible.findIndex((item) => item.id === activeId)
  const active = activeIndex >= 0 ? visible[activeIndex] : null

  useEffect(() => {
    if (!active) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setActiveId('')
      if (event.key === 'ArrowRight') {
        setActiveId(visible[(activeIndex + 1) % visible.length].id)
      }
      if (event.key === 'ArrowLeft') {
        setActiveId(visible[(activeIndex - 1 + visible.length) % visible.length].id)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, activeIndex, visible])

  return (
    <>
      <PageHero
        kicker={{ en: 'Photographs', so: 'Sawirro' }}
        title={t('pages.gallery.title')}
        lede={t('pages.gallery.lede')}
        imageKey="gallery.restaurantEvening"
      />
      <section className="bg-paper py-14 lg:py-20">
        <Container>
          <div className="flex gap-2 overflow-x-auto pb-1" role="group" aria-label={t('gallery.filter')}>
            {galleryCategories.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={category === item.id}
                onClick={() => setCategory(item.id)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm ${
                  category === item.id ? 'bg-ink text-paper' : 'border border-line text-muted'
                }`}
              >
                {t(item.labelKey)}
              </button>
            ))}
          </div>

          {visible.length ? (
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {visible.map((item) => {
                const image = getImage(item.imageKey)
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className="overflow-hidden rounded-[1.5rem] text-left"
                  >
                    <Photo image={image} className="aspect-[4/5] w-full object-cover transition duration-700 hover:scale-105" />
                  </button>
                )
              })}
            </div>
          ) : (
            <p className="mt-16 text-center font-serif text-3xl">{t('gallery.empty')}</p>
          )}
        </Container>
      </section>

      {active ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={t('gallery.dialog')}
          onClick={() => setActiveId('')}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActiveId('')}
              className="absolute -top-12 right-0 grid h-10 w-10 place-items-center rounded-full bg-white text-ink"
              aria-label={t('actions.close')}
            >
              <X size={18} />
            </button>
            <Photo
              image={getImage(active.imageKey)}
              priority
              className="max-h-[78svh] w-full rounded-3xl object-contain"
            />
            <p className="mt-4 text-center text-sm text-white">{text(active.caption)}</p>
            <div className="mt-4 flex justify-center gap-3">
              <button
                type="button"
                className="rounded-full border border-white/30 px-4 py-2 text-sm text-white"
                onClick={() => setActiveId(visible[(activeIndex - 1 + visible.length) % visible.length].id)}
              >
                {t('actions.previous')}
              </button>
              <button
                type="button"
                className="rounded-full border border-white/30 px-4 py-2 text-sm text-white"
                onClick={() => setActiveId(visible[(activeIndex + 1) % visible.length].id)}
              >
                {t('actions.next')}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
