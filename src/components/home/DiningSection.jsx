import { homeContent } from '../../data/home.js'
import { getImage } from '../../data/images.js'
import { menuItems } from '../../data/menu.js'
import { useI18n } from '../../hooks/useI18n.js'
import ButtonLink from '../common/ButtonLink.jsx'
import Container from '../common/Container.jsx'
import Photo from '../common/Photo.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

const featuredIds = ['breakfast-platter', 'grilled-chicken', 'evening-plate']

export default function DiningSection() {
  const { t, text } = useI18n()
  const image = getImage('restaurant.fineTable')
  const featured = featuredIds
    .map((id) => menuItems.find((item) => item.id === id))
    .filter(Boolean)

  return (
    <section className="bg-paper py-20 lg:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem]">
          <Photo image={image} className="aspect-[4/5] w-full object-cover" />
        </div>
        <div>
          <SectionHeading
            kicker={homeContent.dining.kicker}
            title={homeContent.dining.title}
            body={homeContent.dining.body}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {featured.map((item) => {
              const food = getImage(item.imageKey)
              return (
                <article key={item.id} className="overflow-hidden rounded-2xl ring-1 ring-line">
                  <Photo image={food} className="aspect-square w-full object-cover" />
                  <h3 className="px-3 py-3 text-lg">{text(item.name)}</h3>
                </article>
              )
            })}
          </div>
          <div className="mt-8">
            <ButtonLink to="/menu">{t('actions.discoverMenu')}</ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
