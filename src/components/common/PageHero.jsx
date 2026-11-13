import { getImage } from '../../data/images.js'
import { useI18n } from '../../hooks/useI18n.js'
import Container from './Container.jsx'
import Photo from './Photo.jsx'

export default function PageHero({ kicker, title, lede, imageKey = 'hotel.courtyard' }) {
  const { text } = useI18n()
  const image = getImage(imageKey)

  return (
    <section className="relative isolate min-h-[52svh] overflow-hidden bg-ink text-white">
      <Photo
        image={image}
        priority
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-black/25" />
      <Container className="relative flex min-h-[52svh] flex-col justify-end py-16 sm:py-20">
        {kicker ? (
          <p className="text-xs font-medium tracking-[0.28em] text-latte uppercase">{text(kicker)}</p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-4xl leading-tight text-white sm:text-6xl">{text(title)}</h1>
        {lede ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{text(lede)}</p> : null}
      </Container>
    </section>
  )
}
