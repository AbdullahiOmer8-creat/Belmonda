import { getImage } from '../../data/images.js'
import { homeContent } from '../../data/home.js'
import { restaurant } from '../../data/restaurant.js'
import { useI18n } from '../../hooks/useI18n.js'
import ButtonLink from '../common/ButtonLink.jsx'
import Container from '../common/Container.jsx'
import Photo from '../common/Photo.jsx'

export default function HeroSection() {
  const { t, text } = useI18n()
  const image = getImage(restaurant.heroKey)
  const { hero } = homeContent

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden bg-ink text-white">
      <Photo image={image} priority className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/45 to-black/30" />
      <Container className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-end pb-16 pt-28 sm:pb-20">
        <p className="text-xs font-medium tracking-[0.32em] text-latte uppercase">{text(hero.kicker)}</p>
        <h1 className="mt-4 max-w-4xl text-5xl leading-[1.05] text-white sm:text-7xl">
          {restaurant.name}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">{text(hero.lede)}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink to="/services" variant="caramel">
            {t('actions.exploreServices')}
          </ButtonLink>
          <ButtonLink to="/menu" variant="light">
            {t('actions.discoverMenu')}
          </ButtonLink>
          <ButtonLink to="/contact" variant="light">
            {t('actions.contactUs')}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
