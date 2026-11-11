import type { GalleryImage } from '../components/ui/react-tailwind-image-gallery'

export const ME_HOME_ROUTE = '/maverick-epoxy'

export const ME_PHONE_DISPLAY = '704-222-6483'
export const ME_PHONE_TEL = 'tel:7042226483'
export const ME_EMAIL = 'installations@maverickepoxy.com'
export const ME_LOCATION = 'Robbins, NC'
export const ME_MAPS_URL =
  'https://www.google.com/maps/place/Maverick+Epoxy/@35.1705075,-79.86097,17z'

export const ME_NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#other-services' },
  { label: 'Areas', href: '#locations' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const

export const ME_SERVICE_AREAS = [
  'Carthage',
  'Southern Pines',
  'Pinehurst',
  'Aberdeen',
  'Vass',
  'Cameron',
] as const

export const ME_CONTACT_AREAS = ['Robbins', ...ME_SERVICE_AREAS] as const

export const ME_CONTACT_SERVICES = [
  'Flake Epoxy',
  'Metallic Epoxy',
  'Solid Color Epoxy',
  'Quartz',
  'Concrete Polish',
  'Garage Floor Coating',
  'Patio and Pool Deck',
  'Basement Floor',
  'Commercial Floor',
  'Industrial Coating',
] as const

const serviceAreaList = `${ME_SERVICE_AREAS.slice(0, -1).join(', ')}, and ${ME_SERVICE_AREAS[ME_SERVICE_AREAS.length - 1]}`

export const ME_FAQS = [
  {
    q: 'What epoxy flooring do you install in Robbins, North Carolina?',
    a: 'Flake, metallic, solid color, quartz, and polished concrete. The same systems go on garage floors, basements, patios, pool decks, showrooms, and industrial slabs around Robbins.',
  },
  {
    q: 'Which nearby towns do you serve?',
    a: `Robbins is home base. We also coat floors in ${serviceAreaList}, across Moore County.`,
  },
  {
    q: 'Do you offer a warranty on garage floor coatings?',
    a: 'Yes. Maverick Epoxy includes a 5-year adhesion and delamination warranty. Epoxy is not a lifetime product, and we say that up front. With a proper grind and a polyaspartic topcoat, floors typically wear in the 10 to 20 year range, sooner in heavy-use spaces.',
  },
  {
    q: 'Is polyaspartic better than epoxy?',
    a: 'They do different jobs. Epoxy is the base coat for adhesion and build. Polyaspartic is the UV-stable topcoat for gloss, chemical resistance, and long-term color. We install them as one system.',
  },
  {
    q: 'How long does a garage floor coating take?',
    a: 'A standard garage is usually finished in one day. Larger commercial or industrial floors can take several days. Most floors can be walked on within 12 hours and driven on within 24 hours.',
  },
  {
    q: 'How much does epoxy floor installation cost in Moore County?',
    a: 'Published starting rates are per square foot: flake $4–7, solid epoxy $5–7, concrete polish $7–10, metallic $12–15, and quartz $15–18. The final number depends on the slab and the finish. Call or text 704-222-6483 for a free onsite estimate.',
  },
  {
    q: 'Will the floor yellow or peel?',
    a: 'The polyaspartic topcoat is what limits yellowing. Peeling comes from a bad grind, the wrong primer, a thin coat, or layers that do not cure together. Surface prep is the job, not an extra step.',
  },
] as const

export const ME_REVIEWS = [
  {
    name: 'Luccian Garcia',
    quote:
      'If we could give these guys 10 stars we would. After a few quotes we knew we hired the right team. They are extremely knowledgeable, listened to our wants, and exceeded expectations. Stand on Maverick.',
    detail: '5 stars on Google',
  },
  {
    name: 'A C',
    quote:
      'Second time I had this company and I am super happy with the result, what an upgrade to our home, clean and high end look. Thank you so much and see you soon for the next project.',
    detail: '5 stars on Google',
  },
  {
    name: 'Norman Schultz',
    quote:
      'Top notch professionals. Great price, great service, super fast. Can\'t wait to have them back to do more work for us. Plus very nice guys.',
    detail: '5 stars on Google',
  },
] as const

export const meImages = {
  logo: '/maverick-epoxy/logo.png',
  aboutFloor: '/maverick-epoxy/about.jpg',
} as const

const GALLERY_DIR = '/maverick-epoxy/gallery'

/** Photos from the Google Business listing. */
export const ME_GALLERY: readonly GalleryImage[] = [
  {
    id: 1,
    src: `${GALLERY_DIR}/01.jpg`,
    alt: 'Silver sports car parked on a gray and white metallic epoxy garage floor',
    title: 'Garage Metallic',
    span: 'lg:col-span-2',
  },
  {
    id: 2,
    src: `${GALLERY_DIR}/02.jpg`,
    alt: 'Black flake epoxy floor in a room with pantry and entry doors',
    title: 'Flake Floor',
  },
  {
    id: 3,
    src: `${GALLERY_DIR}/03.jpg`,
    alt: 'Dark metallic epoxy garage floor reflecting the ceiling lights',
    title: 'Garage Metallic',
    span: 'lg:col-span-2',
  },
  {
    id: 4,
    src: `${GALLERY_DIR}/04.jpg`,
    alt: 'Glossy white solid-color floor in a living room with a stone fireplace',
    title: 'Solid Color',
    span: 'lg:row-span-2',
  },
  {
    id: 5,
    src: `${GALLERY_DIR}/05.jpg`,
    alt: 'Copper and orange metallic epoxy floor in a living room',
    title: 'Living Room',
  },
  {
    id: 6,
    src: `${GALLERY_DIR}/06.jpg`,
    alt: 'Orange and gray metallic epoxy floor in a garage with motorcycles',
    title: 'Shop Metallic',
    span: 'lg:col-span-2',
  },
  {
    id: 7,
    src: `${GALLERY_DIR}/07.jpg`,
    alt: 'Brown and white metallic epoxy floor running through a living room',
    title: 'Living Room',
    span: 'lg:col-span-2',
  },
  {
    id: 8,
    src: `${GALLERY_DIR}/08.jpg`,
    alt: 'Red metallic epoxy floor in a commercial dining room with red booths',
    title: 'Commercial Floor',
  },
  {
    id: 9,
    src: `${GALLERY_DIR}/09.jpg`,
    alt: 'Orange sports car on a white and gray metallic epoxy showroom floor',
    title: 'Showroom Metallic',
    span: 'lg:col-span-2',
  },
  {
    id: 10,
    src: `${GALLERY_DIR}/10.jpg`,
    alt: 'Purple and white metallic epoxy floor beside an open garage door',
    title: 'Metallic Pour',
    span: 'lg:row-span-2',
  },
] as const

export const meServiceImages = {
  flake: '/maverick-epoxy/services/flake.jpg',
  metallic: '/maverick-epoxy/services/metallic.jpg',
  solidColor: '/maverick-epoxy/services/solid-color.jpg',
  quartz: '/maverick-epoxy/services/quartz.jpg',
  concretePolish: '/maverick-epoxy/services/concrete-polish.jpg',
  garage: '/maverick-epoxy/services/garage.jpg',
  patioPool: '/maverick-epoxy/services/patio-pool.jpg',
  basement: '/maverick-epoxy/services/basement.jpg',
  commercial: '/maverick-epoxy/services/commercial.jpg',
  industrial: '/maverick-epoxy/services/industrial.jpg',
} as const
