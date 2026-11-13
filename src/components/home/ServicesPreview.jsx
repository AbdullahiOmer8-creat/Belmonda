import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { homeContent } from '../../data/home.js'
import { getImage } from '../../data/images.js'
import { services } from '../../data/services.js'
import { useI18n } from '../../hooks/useI18n.js'
import Container from '../common/Container.jsx'
import Photo from '../common/Photo.jsx'
import SectionHeading from '../common/SectionHeading.jsx'
import { serviceIcons } from '../services/service-icons.js'

export default function ServicesPreview() {
  const { t, text } = useI18n()

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <Container>
        <SectionHeading
          kicker={homeContent.services.kicker}
          title={homeContent.services.title}
          body={homeContent.services.body}
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = serviceIcons[service.id]
            const image = getImage(service.imageKey)
            return (
              <article
                key={service.id}
                className="group overflow-hidden rounded-[1.75rem] bg-paper shadow-sm ring-1 ring-line"
              >
                <div className="overflow-hidden">
                  <Photo
                    image={image}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Icon className="text-caramel" size={20} aria-hidden="true" />
                  <h3 className="mt-4 text-2xl">{text(service.title)}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{text(service.summary)}</p>
                  <Link
                    to={`/services#${service.id}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-espresso"
                  >
                    {t('actions.explore')}
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
