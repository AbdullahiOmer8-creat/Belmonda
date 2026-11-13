import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import Photo from '../components/common/Photo.jsx'
import { getImage } from '../data/images.js'
import { services } from '../data/services.js'
import { useI18n } from '../hooks/useI18n.js'
import { serviceIcons } from '../components/services/service-icons.js'

export default function ServicesPage() {
  const { text } = useI18n()

  return (
    <>
      <PageHero
        kicker={{ en: 'Hospitality', so: 'Martigelinta' }}
        title={{ en: 'Services', so: 'Adeegyada' }}
        lede={{
          en: 'Rooms, a dining table, celebrations, and meetings, each received in its own way.',
          so: 'Qolal, miis cunto, dabaaldeg, iyo shirar, mid walba si u gaar ah ayaa loo qaabila.',
        }}
        imageKey="services.weddings.ballroom"
      />
      {services.map((service, index) => {
        const Icon = serviceIcons[service.id]
        const image = getImage(service.imageKey)
        const reversed = index % 2 === 1
        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-28 ${index % 2 ? 'bg-ivory' : 'bg-paper'}`}
          >
            <Container className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
              <div className={`overflow-hidden rounded-[2rem] ${reversed ? 'lg:order-2' : ''}`}>
                <Photo image={image} className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]" />
              </div>
              <div className={reversed ? 'lg:order-1' : ''}>
                <Icon className="text-caramel" size={22} aria-hidden="true" />
                <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{text(service.title)}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{text(service.body)}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.points.map((point) => (
                    <li
                      key={point.en}
                      className="rounded-2xl border border-line bg-paper/60 px-4 py-3 text-sm text-ink"
                    >
                      {text(point)}
                    </li>
                  ))}
                </ul>
              </div>
            </Container>
          </section>
        )
      })}
    </>
  )
}
