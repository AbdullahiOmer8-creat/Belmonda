import { getImage } from './images.js'

export const services = [
  {
    id: 'weddings',
    imageKey: 'services.weddings.ballroom',
    supportImageKey: 'services.weddings.tables',
    title: { en: 'Wedding & Events', so: 'Arooska iyo munaasabadaha' },
    summary: {
      en: 'A composed setting for wedding celebrations, receptions, and family occasions.',
      so: 'Goob deggan oo loogu talagalay dabaaldegga arooska, soo dhaweynta, iyo munaasabadaha qoyska.',
    },
    body: {
      en: 'Belmonde receives weddings and private celebrations with the same care given to an overnight guest. Tables are dressed, the room is prepared, and the evening is allowed to unfold without hurry.',
      so: 'Belmonde waxay soo dhaweysaa aroosyada iyo dabaaldegga gaarka ah isla taxaddarka lagu siiyo martida hoyga. Miisaska waa la diyaariyaa, qolka waa la habeeyaa, habeenkiina waa loo oggolaanayaa inuu si deggan u socdo.',
    },
    points: [
      { en: 'Wedding celebrations', so: 'Dabaaldegga arooska' },
      { en: 'Wedding receptions', so: 'Soo dhaweynta arooska' },
      { en: 'Event decoration', so: 'Qurxinta munaasabadda' },
      { en: 'Family celebrations', so: 'Dabaaldegga qoyska' },
    ],
  },
  {
    id: 'accommodation',
    imageKey: 'hotel.guestRoom',
    supportImageKey: 'hotel.suite',
    title: { en: 'Hotel Accommodation', so: 'Hoyga hudheelka' },
    summary: {
      en: 'Rooms prepared for rest, with a calm interior and room to settle in.',
      so: 'Qolal loo diyaariyay nasasho, oo gudaha degan iyo meel lagu nastay leh.',
    },
    body: {
      en: 'Accommodation at Belmonde is for guests who want a comfortable night in Mogadishu. The stay is kept simple: a restful room, a quiet arrival, and the dining room close by when a meal is wanted.',
      so: 'Hoyga Belmonde waa loogu talagalay martida doonaysa habeen raaxo leh oo Muqdisho ah. Hoygu waa mid fudud: qol nasasho leh, soo gal deggan, iyo qolka cuntada oo u dhow marka cunto la doonayo.',
    },
    points: [
      { en: 'Comfortable guest rooms', so: 'Qolal marti oo raaxo leh' },
      { en: 'A calm place to rest', so: 'Meel degan oo lagu nasto' },
      { en: 'Dining close to the room', so: 'Cunto u dhow qolka' },
      { en: 'An unhurried arrival', so: 'Soo gal aan degdeg lahayn' },
    ],
  },
  {
    id: 'dining',
    imageKey: 'restaurant.diningRoom',
    supportImageKey: 'restaurant.fineTable',
    title: { en: 'Restaurant & Dining', so: 'Makhaayadda iyo cuntada' },
    summary: {
      en: 'Breakfast, lunch, dinner, and drinks in a dining room set for conversation.',
      so: 'Quraac, qado, casho, iyo cabitaanno ku yaal qol cunto oo loo diyaariyay sheekaysi.',
    },
    body: {
      en: 'The restaurant is the heart of the house. Guests come for a full meal or for coffee, and the room is arranged so the table feels considered rather than crowded. The published menu on this site is a sample until the kitchen confirms the live list.',
      so: 'Makhaayaddu waa wadnaha guriga. Martidu waxay u timaadaa cunto buuxda ama kafee, qolkana waa loo habeeyaa si miisku u ekaado mid la tixgeliyay, ee aanu u ekaan buuq. Liiska boggan ku yaal waa tusaale ilaa jikadu xaqiijiso liiska shaqaynaya.',
    },
    points: [
      { en: 'Breakfast through dinner', so: 'Quraac ilaa casho' },
      { en: 'Coffee and cold drinks', so: 'Kafee iyo cabitaanno qabow' },
      { en: 'A room set for the table', so: 'Qol loo habeeyay miiska' },
      { en: 'A sample menu, clearly marked', so: 'Liis tusaale ah, oo si cad loo calaamadeeyay' },
    ],
  },
  {
    id: 'tourism',
    imageKey: 'services.tourism.terrace',
    supportImageKey: 'services.tourism.landscape',
    title: { en: 'Tourism & Leisure', so: 'Dalxiiska iyo madadaalada' },
    summary: {
      en: 'A comfortable base for guests taking time in the city, without fixed packages listed here.',
      so: 'Saldhig raaxo leh oo loogu talagalay martida wakhti ku qaadanaysa magaalada, iyada oo aan boggan lagu qorin xirmooyin go\'an.',
    },
    body: {
      en: 'Some guests are in Mogadishu to see the city, and some simply want a day with nothing scheduled. Belmonde offers the pause between those hours. This site does not publish tour routes, prices, or destinations.',
      so: 'Martida qaar waxay Muqdisho u joogaan inay magaalada arkaan, qaarna waxay rabaan maalin aan wax jadwal ah lahayn. Belmonde waxay bixisaa hakadka u dhexeeya saacadahaas. Boggan kuma qoran jidad dalxiis, qiimo, ama meelo la aado.',
    },
    points: [
      { en: 'Time to rest between the day', so: 'Wakhti nasasho oo maalinta u dhexeeya' },
      { en: 'A stay close to the table', so: 'Hoyo u dhow miiska cuntada' },
      { en: 'Leisure without a fixed itinerary', so: 'Madadaalo aan jadwal go\'an lahayn' },
      { en: 'Plans discussed with the hotel', so: 'Qorshe lala yeelanayo hudheelka' },
    ],
  },
  {
    id: 'meetings',
    imageKey: 'services.conferences.boardroom',
    supportImageKey: 'services.conferences.meeting',
    title: { en: 'Meetings & Conferences', so: 'Shirarka iyo kulamada' },
    summary: {
      en: 'A professional room for business meetings, presentations, and corporate gatherings.',
      so: 'Qol xirfad leh oo loogu talagalay shirarka ganacsiga, bandhigyada, iyo kulamada shirkadaha.',
    },
    body: {
      en: 'Belmonde can host a working meeting away from a noisy lobby. The room is arranged for conversation and presentation, with hospitality close at hand when the session breaks for coffee or a meal.',
      so: 'Belmonde waxay qaban kartaa shir shaqo oo ka fog hol buuq badan. Qolka waxaa loo habeeyaa sheekaysi iyo bandhig, martigelintuna waa u dhow marka fadhiigu u kala go\'o kafee ama cunto.',
    },
    points: [
      { en: 'Business meetings', so: 'Shirar ganacsi' },
      { en: 'Presentations', so: 'Bandhigyo' },
      { en: 'Corporate gatherings', so: 'Kulamo shirkadeed' },
      { en: 'Coffee and meals nearby', so: 'Kafee iyo cunto oo u dhow' },
    ],
  },
  {
    id: 'banquets',
    imageKey: 'services.events.banquet',
    supportImageKey: 'services.weddings.tables',
    title: { en: 'Banquets & Special Events', so: 'Cashooyinka xafladda iyo munaasabadaha gaarka ah' },
    summary: {
      en: 'Private tables for group gatherings, banquets, and occasions that deserve a prepared room.',
      so: 'Miisas gaar ah oo loogu talagalay kulamada kooxda, cashooyinka xafladda, iyo munaasabadaha u baahan qol la diyaariyay.',
    },
    body: {
      en: 'A banquet at Belmonde is a private gathering with the room and the table prepared in advance. It may be a family meal, a hosted dinner, or an occasion that needs more than a single restaurant table.',
      so: 'Casho xafladeed oo Belmonde ah waa kulan gaar ah oo qolka iyo miiska horay loogu diyaariyay. Waxay noqon kartaa cunto qoys, casho la martiqaaday, ama munaasabad u baahan wax ka badan hal miis makhaayad.',
    },
    points: [
      { en: 'Private celebrations', so: 'Dabaaldeg gaar ah' },
      { en: 'Group gatherings', so: 'Kulamo kooxeed' },
      { en: 'Banquet arrangements', so: 'Diyaarinta cashada xafladda' },
      { en: 'Special occasions', so: 'Munaasabado gaar ah' },
    ],
  },
]

for (const service of services) {
  getImage(service.imageKey)
  getImage(service.supportImageKey)
}
