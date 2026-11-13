import { getImage } from '../../data/images.js'
import { useI18n } from '../../hooks/useI18n.js'
import ButtonLink from '../common/ButtonLink.jsx'
import Container from '../common/Container.jsx'
import Photo from '../common/Photo.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function SplitStory({
  content,
  imageKey,
  reverse = false,
  to,
  actionKey = 'actions.explore',
  ivory = false,
}) {
  const { t, text } = useI18n()
  const image = getImage(imageKey)

  return (
    <section className={ivory ? 'bg-ivory' : 'bg-paper'}>
      <Container className="grid items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div className={`overflow-hidden rounded-[2rem] ${reverse ? 'lg:order-2' : ''}`}>
          <Photo image={image} className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]" />
        </div>
        <div className={reverse ? 'lg:order-1' : ''}>
          <SectionHeading kicker={content.kicker} title={content.title} body={content.body} />
          {to ? (
            <div className="mt-8">
              <ButtonLink to={to} variant="ghost">
                {text(content.action) || t(actionKey)}
              </ButtonLink>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}
