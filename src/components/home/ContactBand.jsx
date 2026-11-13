import { MapPin, MessageCircle, Phone } from 'lucide-react'
import { homeContent } from '../../data/home.js'
import { restaurant } from '../../data/restaurant.js'
import { useI18n } from '../../hooks/useI18n.js'
import ButtonLink from '../common/ButtonLink.jsx'
import Container from '../common/Container.jsx'

export default function ContactBand() {
  const { t, text } = useI18n()
  const { contact } = restaurant
  const address = `${contact.address.line1}, ${contact.address.city}, ${contact.address.country}`

  const items = [
    { icon: Phone, label: t('contact.phone'), value: contact.phone, href: contact.phoneHref },
    { icon: MessageCircle, label: t('contact.whatsapp'), value: contact.whatsapp, href: contact.whatsappUrl, external: true },
    { icon: MapPin, label: t('contact.location'), value: address, href: contact.mapsDirectionsUrl, external: true },
  ]

  return (
    <section className="bg-[#111111] py-20 text-white lg:py-28 dark:bg-[#242424]">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="text-xs font-medium tracking-[0.28em] text-latte uppercase">
            {text(homeContent.contact.kicker)}
          </p>
          <h2 className="mt-3 text-4xl text-white sm:text-5xl">{text(homeContent.contact.title)}</h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
            {text(homeContent.contact.body)}
          </p>
          <div className="mt-8">
            <ButtonLink href={contact.mapsDirectionsUrl} variant="caramel">
              {t('actions.getDirections')}
            </ButtonLink>
          </div>
        </div>
        <ul className="grid gap-4 sm:grid-cols-3">
          {items.map((item) => (
            <li key={item.label} className="rounded-3xl border border-white/15 p-5">
              <item.icon size={18} className="text-latte" aria-hidden="true" />
              <p className="mt-4 text-xs tracking-[0.18em] text-latte uppercase">{item.label}</p>
              <a
                href={item.href}
                className="mt-2 block text-sm leading-relaxed text-white hover:text-latte"
                {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
