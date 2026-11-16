import { cpmImages } from './images'

export const phone = {
  display: '(980) 365-8424',
  href: 'tel:+19803658424',
} as const

export const email = {
  display: 'ryan@carolinapremiermovingnc.com',
  href: 'mailto:ryan@carolinapremiermovingnc.com',
  photosHref:
    'mailto:ryan@carolinapremiermovingnc.com?subject=Photo%20Quote%20Request%20-%20Carolina%20Premier%20Moving',
} as const

export const address = {
  line: '6505 Deal Rd, Matthews, NC 28104, USA',
  short: '6505 Deal Rd',
  city: 'Matthews, NC 28104',
  maps: 'https://www.google.com/maps/place/Carolina+Premier+Moving+%26+Hauling/data=!4m7!3m6!1s0x8854298ff2315417:0xb78e6df7f6bc770c!8m2!3d35.2053334!4d-80.8221609!16s%2Fg%2F11yfqkvdn8!19sChIJF1Qx8o8pVIgRDHe89vdtjrc',
} as const

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Project Gallery' },
  { href: '#offer', label: 'Free Quote', badge: 'Free' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#reviews', label: 'Reviews & FAQ' },
  { href: '#quote', label: 'Contact' },
] as const

export const heroStats = [
  { value: '5.0 ★', label: 'Google Rating', accent: true },
  { value: '21', label: 'Google Reviews' },
  { value: '24/7', label: 'Call or Text' },
  { value: 'Free', label: 'Written Quotes' },
] as const

export const ways = [
  {
    kicker: 'Fastest • Call or text',
    title: 'Call Direct: (980) 365-8424',
    body: 'Talk with Ryan about the size of the move, stairs, packing, and the first open date.',
    action: 'Call (980) 365-8424',
    href: phone.href,
  },
  {
    kicker: 'Most useful • No obligation',
    title: 'Free Written Quote',
    body: 'Send the form with where you are moving from and to. The crew follows up with a clear quote.',
    action: 'Request a Free Quote',
    href: '#quote',
    primary: true,
  },
  {
    kicker: 'Photo estimate',
    title: 'Email Photos of the Move',
    body: 'Send photos of the rooms, furniture, and truck access. Useful for labor-only loads and junk hauling.',
    action: 'Email Move Photos',
    href: email.photosHref,
  },
] as const

export const services = [
  {
    title: 'Local Moving',
    badge: 'Charlotte & Matthews',
    body: 'Home and apartment moves around Charlotte, Matthews, and the nearby towns, with the truck and the crew.',
    points: ['Homes, apartments, and condos', 'Loading, transport, and unload', 'Placement where you want it'],
    link: 'Local move quotes',
    image: cpmImages.truck,
  },
  {
    title: 'Residential Moving',
    badge: 'Homes',
    body: 'Family moves handled with pads, plastic wrap, and floor protection before anything leaves the room.',
    points: ['Furniture wrap and padding', 'Floor protection on the path', 'Careful carries on stairs'],
    link: 'Residential quotes',
    image: cpmImages.wrapping,
  },
  {
    title: 'Packing & Unpacking',
    badge: 'Packing',
    body: 'Boxes, furniture, and fragile pieces packed for the truck, then unloaded and placed in the next home.',
    points: ['Packing before move day', 'Blanket and plastic wrap', 'Unpacking at the new place'],
    link: 'Packing quotes',
    image: cpmImages.packed,
  },
  {
    title: 'Labor-Only Moving',
    badge: 'You bring the truck',
    body: 'Need hands, not a truck? The crew loads or unloads a rental, a storage unit, or a truck you already have.',
    points: ['Load or unload only', 'Storage unit packing', 'Heavy furniture and boxes'],
    link: 'Labor-only quotes',
    image: cpmImages.labor,
  },
  {
    title: 'Junk Removal & Hauling',
    badge: 'Hauling',
    body: 'Unwanted furniture and household clutter hauled away so the move, or the house, is clear.',
    points: ['Furniture and household clutter', 'Pickup at the home', 'Haul-away after the move'],
    link: 'Hauling quotes',
    image: cpmImages.hauling,
  },
] as const

export const reasons = [
  {
    title: 'Ryan coordinates the move',
    body: 'Customers name Ryan as the person who answers questions and lines up the crew before move day.',
  },
  {
    title: 'Blankets and plastic wrap',
    body: 'Reviews describe furniture wrapped in blankets and plastic, including sectionals and beds, before it is loaded.',
  },
  {
    title: 'On time, then careful',
    body: 'The notes that repeat are simple: the crew shows up on time and treats the house with care.',
  },
  {
    title: 'A tight, stable load',
    body: 'Clients mention trucks packed so pieces stay put, including loads into storage and up multiple floors.',
  },
] as const

export const galleryFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'moves', label: 'Moves' },
  { id: 'packing', label: 'Packing' },
  { id: 'hauling', label: 'Hauling' },
] as const

export type GalleryFilter = (typeof galleryFilters)[number]['id']

export const projects = [
  {
    title: 'Branded box truck on a local move',
    place: 'Charlotte area',
    body: 'The Carolina Premier truck staged at a neighborhood home for a local load.',
    image: cpmImages.truck,
    alt: cpmImages.truck.alt,
    show: ['moves', 'hauling'],
  },
  {
    title: 'Blanket-wrapped furniture in the truck',
    place: 'Move-day load',
    body: 'Pads, plastic, and boxes stacked so the load stays tight from pickup to drop-off.',
    image: cpmImages.packed,
    alt: cpmImages.packed.alt,
    show: ['moves', 'packing'],
  },
  {
    title: 'Furniture wrapped before the carry',
    place: 'On the job',
    body: 'A crew member padding furniture beside a wall of packed boxes.',
    image: cpmImages.wrapping,
    alt: cpmImages.wrapping.alt,
    show: ['moves', 'packing'],
  },
] as const

export const communities = [
  'Charlotte',
  'Matthews',
  'Ballantyne',
  'Huntersville',
  'Waxhaw',
  'Weddington',
] as const

export const reviews = [
  {
    quote:
      'Ryan orchestrated the entire move and made the process smooth. He answered questions quickly, and Chris and D wrapped and protected everything. I would use them again.',
    name: 'Devon Johnson',
    detail: 'Google review • Full move',
  },
  {
    quote:
      'The crew showed up on time, worked carefully with my belongings, and packed everything into my storage unit. I would definitely use them again.',
    name: 'Summerlin Gillam',
    detail: 'Google review • Storage load',
  },
  {
    quote:
      'They wrapped every piece of furniture, including a five-piece leather sectional, then hauled it up three stories. Nothing was scratched or broken.',
    name: 'Puffpuff_jas W',
    detail: 'Google review • 3-story home',
  },
  {
    quote:
      'Ryan and the team arrived on time, wrapped and protected all of our furniture, and packed the truck so nothing shifted. Everything arrived safely.',
    name: 'Norf 2x',
    detail: 'Google review • Furniture wrap and load',
  },
  {
    quote:
      'The crew was professional, punctual, and hardworking. They handled my belongings with care and put everything exactly where I wanted it.',
    name: 'Kristin Grappone',
    detail: 'Google review • Local move',
  },
] as const

export const faqs = [
  {
    q: 'How do I get a moving quote in Charlotte or Matthews?',
    a: 'Call or text (980) 365-8424, email photos of the rooms and furniture, or send the form on this page. Carolina Premier publishes free quotes and does not list a flat rate. The number depends on the size of the home, stairs, packing, and the distance.',
  },
  {
    q: 'What moving and hauling services do you offer?',
    a: 'Local moving, residential moving, packing and unpacking, labor-only moving, and junk removal. Labor-only is the right fit when you already have a rental truck or a storage unit and only need the crew.',
  },
  {
    q: 'Do you pack furniture and protect the floors?',
    a: 'Yes. Packing and unpacking is one of the published services, and Google reviews describe blankets, plastic wrap, and floor mats before furniture is carried out.',
  },
  {
    q: 'Can you haul away junk and unwanted furniture?',
    a: 'Yes. Junk removal covers unwanted furniture and household clutter, including a haul-away that clears a home before or after a move.',
  },
  {
    q: 'Which towns do you serve?',
    a: 'The company lists Charlotte, Matthews, Ballantyne, Huntersville, Waxhaw, and Weddington. The shop address is 6505 Deal Rd, Matthews, NC 28104.',
  },
  {
    q: 'When can I reach the crew?',
    a: 'The Carolina Premier website says the company is open 24 hours. Call or text (980) 365-8424, or email ryan@carolinapremiermovingnc.com.',
  },
] as const

export const serviceOptions = [
  'Local moving',
  'Residential moving',
  'Packing and unpacking',
  'Labor-only moving',
  'Junk removal and hauling',
] as const

export const homeSizes = [
  'Studio or 1 bedroom',
  '2 bedrooms',
  '3 bedrooms',
  '4 or more bedrooms',
  'Labor only or a few items',
  'Junk removal',
] as const

export const footerServices = [
  'Local Moving',
  'Residential Moving',
  'Packing & Unpacking',
  'Labor-Only Moving',
  'Junk Removal & Hauling',
] as const

export const footerAreas = [
  'Charlotte',
  'Matthews',
  'Ballantyne',
  'Huntersville',
  'Waxhaw',
  'Weddington',
] as const
