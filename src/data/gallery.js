import { getImage } from './images.js'

export const galleryCategories = [
  { id: 'all', labelKey: 'gallery.categories.all' },
  { id: 'hotel', labelKey: 'gallery.categories.hotel' },
  { id: 'restaurant', labelKey: 'gallery.categories.restaurant' },
  { id: 'food', labelKey: 'gallery.categories.food' },
  { id: 'weddings', labelKey: 'gallery.categories.weddings' },
  { id: 'events', labelKey: 'gallery.categories.events' },
  { id: 'conferences', labelKey: 'gallery.categories.conferences' },
  { id: 'tourism', labelKey: 'gallery.categories.tourism' },
]

export const galleryImages = [
  {
    id: 'hotel-exterior',
    categoryId: 'hotel',
    imageKey: 'gallery.hotelExterior',
    caption: { en: 'Hotel exterior', so: 'Bannaanka hudheelka' },
  },
  {
    id: 'hotel-evening',
    categoryId: 'hotel',
    imageKey: 'gallery.hotelEvening',
    caption: { en: 'Sunlit guest room', so: 'Qol marti oo qorrax leh' },
  },
  {
    id: 'restaurant-evening',
    categoryId: 'restaurant',
    imageKey: 'gallery.restaurantEvening',
    caption: { en: 'Evening dining room', so: 'Qolka cuntada ee fiidkii' },
  },
  {
    id: 'place-setting',
    categoryId: 'restaurant',
    imageKey: 'gallery.placeSetting',
    caption: { en: 'Breakfast table', so: 'Miiska quraacda' },
  },
  {
    id: 'plated-meal',
    categoryId: 'food',
    imageKey: 'gallery.platedMeal',
    caption: { en: 'Plated meal', so: 'Cunto la saxan-geliyay' },
  },
  {
    id: 'shared-table',
    categoryId: 'food',
    imageKey: 'gallery.sharedTable',
    caption: { en: 'Shared table', so: 'Miis la wadaago' },
  },
  {
    id: 'celebration',
    categoryId: 'weddings',
    imageKey: 'gallery.celebration',
    caption: { en: 'Wedding bouquet', so: 'Ubaxa arooska' },
  },
  {
    id: 'wedding-detail',
    categoryId: 'weddings',
    imageKey: 'gallery.weddingDetail',
    caption: { en: 'Joined hands', so: 'Gacmo is haysta' },
  },
  {
    id: 'event-tables',
    categoryId: 'events',
    imageKey: 'gallery.eventTables',
    caption: { en: 'Outdoor celebration', so: 'Dabaaldeg bannaanka ah' },
  },
  {
    id: 'evening-gathering',
    categoryId: 'events',
    imageKey: 'gallery.eveningGathering',
    caption: { en: 'An evening drink', so: 'Cabitaan fiidkii ah' },
  },
  {
    id: 'presentation',
    categoryId: 'conferences',
    imageKey: 'gallery.presentation',
    caption: { en: 'Presentation', so: 'Bandhig' },
  },
  {
    id: 'discussion',
    categoryId: 'conferences',
    imageKey: 'gallery.discussion',
    caption: { en: 'Business discussion', so: 'Wadahadal ganacsi' },
  },
  {
    id: 'coast',
    categoryId: 'tourism',
    imageKey: 'gallery.coast',
    caption: { en: 'Coastal atmosphere', so: 'Jawiga xeebta' },
  },
  {
    id: 'hills',
    categoryId: 'tourism',
    imageKey: 'gallery.hills',
    caption: { en: 'Open landscape', so: 'Muuqaal bannaan' },
  },
]

const categoryIds = new Set(galleryCategories.map((category) => category.id))

for (const image of galleryImages) {
  getImage(image.imageKey)
  if (!categoryIds.has(image.categoryId)) {
    throw new Error(`Gallery image ${image.id} uses unknown category ${image.categoryId}`)
  }
}
