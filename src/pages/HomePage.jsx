import ContactBand from '../components/home/ContactBand.jsx'
import DiningSection from '../components/home/DiningSection.jsx'
import GalleryPreview from '../components/home/GalleryPreview.jsx'
import HeroSection from '../components/home/HeroSection.jsx'
import ServicesPreview from '../components/home/ServicesPreview.jsx'
import SplitStory from '../components/home/SplitStory.jsx'
import { homeContent } from '../data/home.js'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SplitStory content={homeContent.welcome} imageKey="hotel.courtyard" to="/about" actionKey="actions.explore" />
      <ServicesPreview />
      <DiningSection />
      <SplitStory
        content={homeContent.accommodation}
        imageKey="hotel.suite"
        reverse
        ivory
        to="/services#accommodation"
      />
      <SplitStory content={homeContent.weddings} imageKey="services.weddings.ballroom" to="/services#weddings" />
      <SplitStory
        content={homeContent.meetings}
        imageKey="services.conferences.meeting"
        reverse
        ivory
        to="/services#meetings"
      />
      <SplitStory content={homeContent.tourism} imageKey="services.tourism.landscape" to="/services#tourism" />
      <GalleryPreview />
      <ContactBand />
    </>
  )
}
