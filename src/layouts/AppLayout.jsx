import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { navigation } from '../data/navigation.js'
import { restaurant } from '../data/restaurant.js'
import { useI18n } from '../hooks/useI18n.js'
import FloatingActions from '../components/layout/FloatingActions.jsx'
import SiteFooter from '../components/layout/SiteFooter.jsx'
import SiteHeader from '../components/layout/SiteHeader.jsx'

export default function AppLayout() {
  const { pathname, hash } = useLocation()
  const { t } = useI18n()

  useEffect(() => {
    const current = navigation.find((item) => item.to === pathname)
    const label = current ? t(current.labelKey) : t('pages.notFound.title')
    document.title = `${label} · ${restaurant.name}`
  }, [pathname, t])

  useEffect(() => {
    if (hash) return
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-svh flex-col bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t('nav.skip')}
      </a>
      <SiteHeader />
      <main id="content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
