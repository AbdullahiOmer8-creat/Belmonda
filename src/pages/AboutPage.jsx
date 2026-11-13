import PageHero from '../components/common/PageHero.jsx'
import Container from '../components/common/Container.jsx'
import Photo from '../components/common/Photo.jsx'
import { aboutContent } from '../data/home.js'
import { getImage } from '../data/images.js'
import { useI18n } from '../hooks/useI18n.js'

export default function AboutPage() {
  const { text } = useI18n()

  return (
    <>
      <PageHero
        kicker={{ en: 'Our house', so: 'Gurigeenna' }}
        title={aboutContent.intro}
        lede={aboutContent.lede}
        imageKey="hotel.courtyard"
      />
      <div className="bg-paper">
        {aboutContent.sections.map((section, index) => (
          <section key={section.id} className={index % 2 ? 'bg-ivory' : 'bg-paper'}>
            <Container className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
              <div className={`overflow-hidden rounded-[2rem] ${index % 2 ? 'lg:order-2' : ''}`}>
                <Photo image={getImage(section.imageKey)} className="aspect-[5/4] w-full object-cover" />
              </div>
              <div className={index % 2 ? 'lg:order-1' : ''}>
                <h2 className="text-4xl leading-tight sm:text-5xl">{text(section.title)}</h2>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{text(section.body)}</p>
              </div>
            </Container>
          </section>
        ))}
      </div>
      <section className="bg-[#111111] py-20 text-white lg:py-28 dark:bg-[#242424]">
        <Container>
          <h2 className="text-4xl text-white sm:text-5xl">{text(aboutContent.reasonsTitle)}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {aboutContent.reasons.map((reason) => (
              <article key={reason.title.en} className="rounded-3xl border border-white/15 p-6">
                <h3 className="text-2xl text-white">{text(reason.title)}</h3>
                <p className="mt-3 leading-relaxed text-white/75">{text(reason.body)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
