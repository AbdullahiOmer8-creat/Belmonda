import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import Photo from '../components/common/Photo.jsx'
import { getImage } from '../data/images.js'
import { menuCategories, menuItems } from '../data/menu.js'
import { restaurant } from '../data/restaurant.js'
import { useI18n } from '../hooks/useI18n.js'
import { useMenuQr } from '../hooks/useMenuQr.js'
import { useMenuSearch } from '../hooks/useMenuSearch.js'
import { getPrintableMenuUrl } from '../utils/site-url.js'

export default function MenuPage() {
  const { t, text } = useI18n()
  const [category, setCategory] = useState('all')
  const { query, setQuery, results } = useMenuSearch(menuItems)
  const printableUrl = getPrintableMenuUrl(restaurant.publicSiteUrl)
  const { dataUrl, error } = useMenuQr(printableUrl)

  const visible = useMemo(
    () => (category === 'all' ? results : results.filter((item) => item.categoryId === category)),
    [category, results],
  )

  return (
    <>
      <PageHero
        kicker={{ en: 'Digital menu', so: 'Liiska dhijitaalka ah' }}
        title={t('pages.menu.title')}
        lede={t('pages.menu.lede')}
        imageKey="restaurant.diningRoom"
      />
      <section className="bg-paper py-14 lg:py-20">
        <Container>
          <p className="rounded-3xl border border-latte bg-ivory px-5 py-4 text-sm leading-relaxed text-espresso">
            {t('menu.sample')}
          </p>

          <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <label className="relative block w-full max-w-md">
              <span className="sr-only">{t('menu.searchLabel')}</span>
              <Search className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-muted" size={16} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={t('menu.searchPlaceholder')}
                className="w-full rounded-full border border-line bg-paper py-3 pr-4 pl-11 text-sm text-ink outline-none focus:border-caramel"
              />
            </label>
            <p className="text-sm text-muted">{t('menu.count', { count: visible.length })}</p>
          </div>

          <div className="mt-5 flex gap-2 overflow-x-auto pb-1" role="group" aria-label={t('menu.searchLabel')}>
            <FilterButton active={category === 'all'} onClick={() => setCategory('all')}>
              {t('menu.categories.all')}
            </FilterButton>
            {menuCategories.map((item) => (
              <FilterButton
                key={item.id}
                active={category === item.id}
                onClick={() => setCategory(item.id)}
              >
                {t(item.labelKey)}
              </FilterButton>
            ))}
          </div>

          {visible.length ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((item) => (
                <article key={item.id} className="overflow-hidden rounded-[1.75rem] bg-paper shadow-sm ring-1 ring-line">
                  <Photo image={getImage(item.imageKey)} className="aspect-[4/5] w-full object-cover" />
                  <div className="p-5">
                    <p className="text-[11px] font-medium tracking-[0.2em] text-caramel uppercase">
                      {t(`menu.categories.${item.categoryId}`)}
                    </p>
                    <h2 className="mt-2 text-2xl">{text(item.name)}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{text(item.description)}</p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p className="mt-16 text-center font-serif text-3xl">{t('menu.empty')}</p>
          )}

          <aside className="mt-16 grid items-center gap-8 rounded-[2rem] bg-ivory p-6 sm:p-10 lg:grid-cols-[180px_1fr]">
            <div className="grid h-44 w-44 place-items-center rounded-3xl bg-white">
              {dataUrl ? (
                <img src={dataUrl} alt={t('menu.qrTitle')} className="h-40 w-40" />
              ) : (
                <p className="px-4 text-center text-xs tracking-[0.16em] text-espresso uppercase">/menu</p>
              )}
            </div>
            <div>
              <h2 className="text-3xl">{t('menu.qrTitle')}</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                {error ? t('menu.qrError') : dataUrl ? t('menu.qrReady') : t('menu.qrWaiting')}
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  )
}

function FilterButton({ active, children, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 rounded-full px-4 py-2 text-sm ${
        active ? 'bg-ink text-paper' : 'border border-line text-muted'
      }`}
    >
      {children}
    </button>
  )
}
