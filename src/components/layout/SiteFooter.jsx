import { Link, NavLink } from 'react-router-dom'
import Container from '../common/Container.jsx'
import { getImage } from '../../data/images.js'
import { navigation } from '../../data/navigation.js'
import { restaurant } from '../../data/restaurant.js'
import { services } from '../../data/services.js'
import { useI18n } from '../../hooks/useI18n.js'

export default function SiteFooter() {
  const { t, text } = useI18n()
  const logo = getImage(restaurant.logoKey)
  const address = `${restaurant.contact.address.line1}, ${restaurant.contact.address.city}, ${restaurant.contact.address.country}`

  return (
    <footer className="border-t border-line bg-ivory">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white p-2">
            <img src={logo.src} alt={text(logo.alt)} className="h-full w-full object-contain" />
          </div>
          <p className="mt-4 font-serif text-xl">{restaurant.shortName}</p>
          <p className="mt-1 text-xs tracking-[0.16em] text-muted uppercase">{t('brand.line')}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{text(restaurant.logoNote)}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.18em] text-caramel uppercase">
            {t('footer.navigate')}
          </h2>
          <ul className="mt-4 grid gap-2">
            {navigation.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end className="text-sm text-muted hover:text-ink">
                  {t(item.labelKey)}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.18em] text-caramel uppercase">
            {t('footer.services')}
          </h2>
          <ul className="mt-4 grid gap-2">
            {services.map((service) => (
              <li key={service.id}>
                <Link to={`/services#${service.id}`} className="text-sm text-muted hover:text-ink">
                  {text(service.title)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-[0.18em] text-caramel uppercase">
            {t('footer.contact')}
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-muted">
            <li>
              <a href={restaurant.contact.phoneHref} className="hover:text-ink">
                {restaurant.contact.phone}
              </a>
            </li>
            <li>
              <a href={restaurant.contact.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-ink">
                {t('contact.whatsapp')}
              </a>
            </li>
            <li>
              <a href={restaurant.contact.emailHref} className="hover:text-ink">
                {restaurant.contact.email}
              </a>
            </li>
            <li>{address}</li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5 text-xs leading-relaxed text-muted">
          <p>{t('footer.photography')}</p>
        </Container>
      </div>
    </footer>
  )
}
