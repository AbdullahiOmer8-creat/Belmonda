import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import ButtonLink from '../components/common/ButtonLink.jsx'
import { restaurant } from '../data/restaurant.js'
import { useI18n } from '../hooks/useI18n.js'

export default function ContactPage() {
  const { t } = useI18n()
  const { contact } = restaurant
  const address = `${contact.address.line1}, ${contact.address.city}, ${contact.address.country}`

  const cards = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: contact.phone,
      href: contact.phoneHref,
      action: t('actions.call'),
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: contact.whatsapp,
      href: contact.whatsappUrl,
      action: t('actions.whatsapp'),
      external: true,
    },
    {
      icon: Mail,
      label: t('contact.email'),
      value: contact.email,
      href: contact.emailHref,
      action: t('actions.email'),
    },
  ]

  return (
    <>
      <PageHero
        kicker={{ en: 'Mogadishu', so: 'Muqdisho' }}
        title={t('pages.contact.title')}
        lede={t('pages.contact.lede')}
        imageKey="hotel.guestRoom"
      />
      <section className="bg-paper py-16 lg:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {cards.map((card) => (
              <article key={card.label} className="rounded-[1.75rem] bg-ivory p-6">
                <card.icon className="text-caramel" size={22} aria-hidden="true" />
                <h2 className="mt-5 text-2xl">{card.label}</h2>
                <p className="mt-3 text-sm text-muted">{card.value}</p>
                <a
                  href={card.href}
                  className="mt-6 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper"
                  {...(card.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  {card.action}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-12 overflow-hidden rounded-[2rem] bg-ivory">
            <div className="flex flex-col gap-4 px-6 py-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-caramel uppercase">
                  <MapPin size={14} aria-hidden="true" />
                  {t('contact.location')}
                </p>
                <h2 className="mt-3 text-3xl sm:text-4xl">{address}</h2>
              </div>
              <ButtonLink href={contact.mapsDirectionsUrl} variant="caramel">
                {t('actions.getDirections')}
              </ButtonLink>
            </div>
            <iframe
              title={t('contact.mapTitle')}
              src={contact.mapsEmbedUrl}
              className="h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">{t('contact.hours')}</p>
        </Container>
      </section>
    </>
  )
}
