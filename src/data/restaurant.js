import { galleryImages } from './gallery.js'
import { getImage } from './images.js'
import { menuCategories, menuItems } from './menu.js'
import { offers } from './offers.js'
import { services } from './services.js'

getImage('logo')
getImage('hero')

export const restaurant = {
  id: 'belmonde-hotel-restaurant',
  name: 'BELMONDE HOTEL & RESTAURANT',
  shortName: 'Belmonde',
  publicSiteUrl: '',
  menuPath: '/menu',
  logoKey: 'logo',
  heroKey: 'hero',
  logoNote: {
    en: 'The mark shown here is the supplied Belmonde Coffee logo, used until the hotel logo is available.',
    so: 'Astaanta halkan muuqata waa astaanta Belmonde Coffee ee la keenay, waxaana la isticmaalayaa ilaa astaanta hudheelka la helo.',
  },
  tagline: {
    en: 'Stay, dine, and gather in Mogadishu.',
    so: 'Ku hoyo, ku cun, oo ku kulma Muqdisho.',
  },
  description: {
    en: 'Belmonde Hotel & Restaurant is a hospitality house in Mogadishu for accommodation, dining, celebrations, and meetings.',
    so: 'Belmonde Hotel & Restaurant waa guri marti-soor oo ku yaal Muqdisho, loogu talagalay hoyga, cuntada, dabaaldegga, iyo shirarka.',
  },
  contact: {
    phone: '+252771826681',
    phoneHref: 'tel:+252771826681',
    email: 'belamonde.som@gmail.com',
    emailHref: 'mailto:belamonde.som@gmail.com',
    whatsapp: '+252771826681',
    whatsappUrl: 'https://wa.me/252771826681',
    address: {
      line1: '28P2+3GF Belmonde Hotel and Restaurant',
      city: 'Mogadishu',
      country: 'Somalia',
    },
    mapsEmbedUrl:
      'https://www.google.com/maps?q=28P2%2B3GF%20Belmonde%20Hotel%20and%20Restaurant%2C%20Mogadishu&output=embed',
    mapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=28P2%2B3GF%20Belmonde%20Hotel%20and%20Restaurant%2C%20Mogadishu',
  },
  hoursStatus: 'unconfirmed',
  social: {},
  menu: {
    sample: true,
    categories: menuCategories,
    items: menuItems,
  },
  services,
  gallery: galleryImages,
  offers,
}
