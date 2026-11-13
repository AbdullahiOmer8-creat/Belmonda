import { Link } from 'react-router-dom'
import { galleryImages } from '../../data/gallery.js'
import { homeContent } from '../../data/home.js'
import { getImage } from '../../data/images.js'
import { useI18n } from '../../hooks/useI18n.js'
import Container from '../common/Container.jsx'
import Photo from '../common/Photo.jsx'
import SectionHeading from '../common/SectionHeading.jsx'

export default function GalleryPreview() {
  const { t } = useI18n()
  const preview = galleryImages.slice(0, 6)

  return (
    <section className="bg-ivory py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            kicker={homeContent.gallery.kicker}
            title={homeContent.gallery.title}
            body={homeContent.gallery.body}
          />
          <Link to="/gallery" className="shrink-0 text-sm font-medium text-espresso">
            {t('actions.viewGallery')}
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {preview.map((item, index) => (
            <Link
              key={item.id}
              to="/gallery"
              className={`overflow-hidden rounded-[1.5rem] ${index === 0 ? 'col-span-2 md:col-span-1 md:row-span-2' : ''}`}
            >
              <Photo
                image={getImage(item.imageKey)}
                className={`w-full object-cover ${index === 0 ? 'aspect-[16/10] md:aspect-[3/4] md:h-full' : 'aspect-[4/3]'}`}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
