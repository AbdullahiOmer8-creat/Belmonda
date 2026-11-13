import { Menu, MessageCircle, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Container from '../common/Container.jsx'
import { getImage } from '../../data/images.js'
import { navigation } from '../../data/navigation.js'
import { restaurant } from '../../data/restaurant.js'
import { languages } from '../../i18n/index.js'
import { useI18n } from '../../hooks/useI18n.js'
import { useTheme } from '../../hooks/useTheme.js'

function linkClassName({ isActive }) {
  return isActive
    ? 'text-sm font-semibold text-caramel'
    : 'text-sm text-muted transition hover:text-ink'
}

export default function SiteHeader() {
  const { t, language, setLanguage, text } = useI18n()
  const { theme, toggleTheme } = useTheme()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [openPath, setOpenPath] = useState(pathname)
  const logo = getImage(restaurant.logoKey)

  if (pathname !== openPath) {
    setOpenPath(pathname)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-3">
        <NavLink to="/" className="flex min-w-0 items-center gap-3" aria-label={restaurant.name}>
          <span className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1">
            <img
              src={logo.src}
              alt={text(logo.alt)}
              className="h-full w-full object-contain"
            />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block font-serif text-base tracking-wide">Belmonde</span>
            <span className="block text-[10px] tracking-[0.18em] text-muted uppercase">
              {t('brand.line')}
            </span>
          </span>
        </NavLink>

        <nav aria-label={t('nav.label')} className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className={linkClassName}>
                  {t(item.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <div
            className="flex rounded-full border border-line p-0.5"
            role="group"
            aria-label={t('language.label')}
          >
            {languages.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={language === item.id}
                onClick={() => setLanguage(item.id)}
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
                  language === item.id ? 'bg-ink text-paper' : 'text-muted'
                }`}
              >
                {item.id.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t('theme.toLight') : t('theme.toDark')}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href={restaurant.contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={t('actions.whatsapp')}
            className="hidden h-10 w-10 place-items-center rounded-full bg-ink text-paper sm:grid"
          >
            <MessageCircle size={16} />
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
            aria-expanded={open}
            aria-label={open ? t('nav.close') : t('nav.open')}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </Container>

      {open ? (
        <nav aria-label={t('nav.label')} className="border-t border-line bg-paper lg:hidden">
          <Container className="py-4">
            <ul className="grid gap-1">
              {navigation.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end
                    className={({ isActive }) =>
                      `block rounded-2xl px-3 py-3 text-base ${isActive ? 'bg-ivory font-semibold text-espresso' : 'text-ink'}`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}
