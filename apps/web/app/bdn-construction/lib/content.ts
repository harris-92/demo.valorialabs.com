import { bdnImages } from './images'

export const phone = {
  display: '(416) 723-6514',
  href: 'tel:+14167236514',
} as const

export const email = {
  display: 'info@bdnconstruction.ca',
  href: 'mailto:info@bdnconstruction.ca',
  drawingsHref:
    'mailto:info@bdnconstruction.ca?subject=Drawings%20for%20BDN%20Construction%20consult',
} as const

export const address = {
  line: '1240 Speers Rd #13, Oakville, ON L6L 2X4, Canada',
  short: '1240 Speers Rd #13',
  city: 'Oakville, ON L6L 2X4',
} as const

export const socials = [
  { label: 'Facebook', href: 'https://www.facebook.com/BDNCONSTRUCTION.CA/' },
  { label: 'Instagram', href: 'https://www.instagram.com/bdnconstruction.ca/' },
] as const

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#quote', label: 'Free Consult', badge: 'Free' },
] as const

export const heroStats = [
  { value: '18+', label: 'Years in the trade' },
  { value: '$100k–$10M', label: 'Project range', accent: true },
  { value: 'Founder', label: 'On every major job' },
  { value: 'GTA', label: 'Southern Ontario coverage' },
] as const

export const partners = [
  { name: 'Ever New', src: '/bdn-construction/logos/ever-new.webp' },
  { name: 'Radius', src: '/bdn-construction/logos/radius.png' },
  { name: 'Hillberg & Berk', src: '/bdn-construction/logos/hillberg.png' },
  { name: 'Left Field Brewery', src: '/bdn-construction/logos/left-field.png' },
  { name: 'SB Prime', src: '/bdn-construction/logos/sb-prime.png' },
  { name: 'Laserbody MD', src: '/bdn-construction/logos/laserbody.webp' },
  { name: 'Gourmet Craft', src: '/bdn-construction/logos/gourmet.png' },
  { name: 'Ostos Realty', src: '/bdn-construction/logos/ostos.png' },
  { name: 'B-Side Social', src: '/bdn-construction/logos/bside.png' },
  { name: 'District Kitchen + Bar', src: '/bdn-construction/logos/district.png' },
  { name: 'Arvo Coffee', src: '/bdn-construction/logos/arvo.jpg' },
  { name: 'Radius at Hess', src: '/bdn-construction/logos/radius-hess.png' },
] as const

export const ways = [
  {
    kicker: 'Talk to the founder',
    title: 'Call (416) 723-6514',
    body: 'Speak with Jamie Boaden about scope, landlord deadlines, and whether the job fits the BDN team.',
    action: 'Call the Oakville office',
    href: phone.href,
  },
  {
    kicker: 'Most useful next step',
    title: 'Free pre-construction consult',
    body: 'We walk the space, pressure-test the design against the budget, and tell you what it will take to open on time.',
    action: 'Book a site walk',
    href: '#quote',
    primary: true,
  },
  {
    kicker: 'If drawings are ready',
    title: 'Send plans and a target date',
    body: 'Email drawings, a landlord package, or photos of the existing space. You get a clear read on budget and schedule.',
    action: 'Email project drawings',
    href: email.drawingsHref,
  },
] as const

export const services = [
  {
    title: 'Pre-Construction Planning',
    badge: 'Before you sign',
    body: 'We sit in early, while the design is still moving, so the finished space matches the budget instead of blowing past it.',
    points: ['Budget alignment before procurement', 'Design review with the trades in mind', 'Schedule built around your opening date'],
    link: 'Plan the budget',
    image: bdnImages.office,
  },
  {
    title: 'Construction Management',
    badge: 'One point of contact',
    body: 'BDN becomes the single source for the build. We run the trades, hold the budget, and keep you out of the day-to-day noise.',
    points: ['One client contact for the whole job', 'Trade coordination and site control', 'Open financials from start to finish'],
    link: 'Talk about management',
    image: bdnImages.retail,
  },
  {
    title: 'General Contracting',
    badge: 'Bid-build',
    body: 'When the drawings are set, our crew and trade network build the space to the standard the brand actually needs.',
    points: ['Retail, restaurant, and office fit-outs', 'Landlord and base-building coordination', 'Finish quality you can hand to a brand'],
    link: 'Request a bid',
    image: bdnImages.restaurant,
  },
  {
    title: 'Base Building',
    badge: 'New construction',
    body: 'New construction and civil scope, from the shell through the point a tenant can start their fit-out.',
    points: ['Ground-up commercial work', 'Civil and structural coordination', 'Shell ready for tenant occupancy'],
    link: 'Discuss a new build',
    image: bdnImages.base,
  },
  {
    title: 'Repair and Maintenance',
    badge: 'Keep it open',
    body: 'Small upgrades and refreshes that keep a restaurant, store, or office working for the people who use it.',
    points: ['Targeted refreshes, not full gut jobs', 'Work planned around operating hours', 'A better room for your customers'],
    link: 'Book a refresh',
    image: bdnImages.hero,
  },
  {
    title: 'Special Projects',
    badge: 'Hard jobs',
    body: 'The work other contractors step back from: equipment installs, structural fixes, and one-off technical scope.',
    points: ['Medical and specialty equipment installs', 'Structural reinforcement', 'Jobs with awkward access or deadlines'],
    link: 'Bring us the odd job',
    image: bdnImages.medical,
  },
] as const

export const industries = [
  {
    title: 'Retail & storefronts',
    body: 'Mall and street-front fit-outs built to a brand’s global standard, from cash desks to fitting rooms.',
    image: bdnImages.everNewInterior,
    place: 'Ever New · Mapleview, Niagara, Newmarket',
  },
  {
    title: 'Restaurants & hospitality',
    body: 'Bars, dining rooms, and fast reopenings. We have taken over half-finished restaurants and opened them on the date that mattered.',
    image: bdnImages.leftFieldBar,
    place: 'Left Field, Radius, SB Prime, Arvo',
  },
  {
    title: 'Medical & wellness',
    body: 'Clinics and spas where equipment, inspections, and a calm finished room all have to land together.',
    image: bdnImages.laserbody,
    place: 'Laserbody MD · Hamilton',
  },
  {
    title: 'Offices',
    body: 'Reception, meeting rooms, and working offices finished so a team can move in without a second renovation.',
    image: bdnImages.ostos,
    place: 'Ostos Realty · Mississauga',
  },
  {
    title: 'Kitchen & light industrial',
    body: 'Commissary kitchens, prep lines, and warehouse space built for the way the operation actually runs.',
    image: bdnImages.gourmet,
    place: 'Gourmet Craft · Oakville',
  },
] as const

export const featuredProjects = [
  {
    title: 'Ever New at Mapleview Mall',
    place: 'Burlington, Ontario',
    body: 'The first of three simultaneous fit-outs for the Australian retailer. The store was built to their global brand standard, including the cash desk, merchandising walls, and fitting rooms.',
    image: bdnImages.everNewExterior,
  },
  {
    title: 'Left Field Brewery',
    place: 'Liberty Village, Toronto',
    body: 'An existing brewery turned into a two-level brand experience: two custom bars, a bespoke TV mount, and a scoreboard, with seating on both floors.',
    image: bdnImages.leftFieldSeating,
  },
  {
    title: 'Radius at Hess Village',
    place: 'Hamilton, Ontario',
    body: 'A full strip-back in a busy downtown block. The room was taken to structure and rebuilt so the bar, dining room, and patio read as one place.',
    image: bdnImages.radiusHess,
  },
  {
    title: 'Hillberg & Berk',
    place: 'Upper Canada Mall, Newmarket',
    body: 'A jewellery store with custom wall finishes and millwork, built to sit beside the brand’s stores across Canada.',
    image: bdnImages.hillberg,
  },
  {
    title: 'SB Prime Steak & Raw Bar',
    place: 'Burlington, Ontario',
    body: 'A two-week rebrand of an existing restaurant. Planning with the client and the design team kept the renovation on the opening date and inside the budget.',
    image: bdnImages.prime,
  },
  {
    title: 'Arvo Coffee',
    place: 'Liberty Village, Toronto',
    body: 'A ground-floor retrofit taken over after a previous contractor left the space unfinished. The café was completed to spec, on time, through the pandemic.',
    image: bdnImages.arvo,
  },
] as const

export const reasons = [
  {
    title: 'Budget transparency',
    body: 'Financials stay open from the first plan through the last invoice. Nothing is hidden in the draw.',
  },
  {
    title: 'Design accuracy',
    body: 'The room you approved is the room we build. The design is protected while the trades do the work.',
  },
  {
    title: 'A real trade network',
    body: 'Architects, designers, carpenters, and the rest of the bench are already in the circle when a job needs them.',
  },
  {
    title: 'Founder on the job',
    body: 'Jamie Boaden has spent 18 years in general contracting and construction management, on work from $100k to $10M.',
  },
] as const

export const processSteps = [
  {
    step: '01',
    title: 'Hear the deadline',
    body: 'Opening date, landlord constraints, and what “done” means for the brand. We start there, not with a generic bid.',
  },
  {
    step: '02',
    title: 'Price it in the open',
    body: 'Pre-construction planning lines the design up with the budget before procurement locks the number in.',
  },
  {
    step: '03',
    title: 'Run the site',
    body: 'One team manages trades, inspections, and the day-to-day so you can keep working on the business.',
  },
  {
    step: '04',
    title: 'Hand it over',
    body: 'The space is finished to the drawing, the budget is accounted for, and you can open.',
  },
] as const

export const galleryFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'retail', label: 'Retail' },
  { id: 'restaurant', label: 'Restaurant' },
  { id: 'medical', label: 'Medical' },
  { id: 'office', label: 'Office' },
] as const

export type GalleryFilter = (typeof galleryFilters)[number]['id']

export const gallery = [
  {
    title: 'Ever New merchandising floor',
    place: 'Mapleview Mall',
    body: 'Retail floor, cash desk, and fitting rooms built for three stores at once.',
    image: bdnImages.everNewInterior,
    show: ['retail'],
  },
  {
    title: 'Ever New storefront',
    place: 'Burlington',
    body: 'Mall storefront executed to the brand’s international standard.',
    image: bdnImages.everNewExterior,
    show: ['retail'],
  },
  {
    title: 'Hillberg & Berk displays',
    place: 'Newmarket',
    body: 'Custom wall finishes and jewellery millwork inside Upper Canada Mall.',
    image: bdnImages.hillberg,
    show: ['retail'],
  },
  {
    title: 'Left Field bar',
    place: 'Toronto',
    body: 'Custom bar, seating, and a two-level brewery conversion in Liberty Village.',
    image: bdnImages.leftFieldBar,
    show: ['restaurant'],
  },
  {
    title: 'Left Field seating',
    place: 'Toronto',
    body: 'Upper and lower seating built around the brewery brand.',
    image: bdnImages.leftFieldSeating,
    show: ['restaurant'],
  },
  {
    title: 'Radius at Hess',
    place: 'Hamilton',
    body: 'Dining room rebuilt from structure in a high-traffic downtown block.',
    image: bdnImages.radiusHess,
    show: ['restaurant'],
  },
  {
    title: 'SB Prime dining room',
    place: 'Burlington',
    body: 'A two-week restaurant rebrand finished on the opening date.',
    image: bdnImages.prime,
    show: ['restaurant'],
  },
  {
    title: 'Arvo Coffee',
    place: 'Toronto',
    body: 'Café retrofit completed after a previous contractor left the site.',
    image: bdnImages.arvo,
    show: ['restaurant'],
  },
  {
    title: 'Eastern Standard',
    place: 'Hamilton',
    body: 'Conversion of an existing restaurant brand into Eastern Standard.',
    image: bdnImages.eastern,
    show: ['restaurant'],
  },
  {
    title: 'Laserbody MD',
    place: 'Hamilton',
    body: 'Downtown medical spa retrofit, including coordination of imported equipment and inspections.',
    image: bdnImages.laserbody,
    show: ['medical'],
  },
  {
    title: 'Ostos Realty reception',
    place: 'Mississauga',
    body: 'Office reception brought back on track after issues with a previous contractor.',
    image: bdnImages.ostos,
    show: ['office'],
  },
  {
    title: 'Gourmet Craft kitchen',
    place: 'Oakville',
    body: 'Commissary kitchen, offices, and warehouse for a catering operation.',
    image: bdnImages.gourmet,
    show: ['office'],
  },
] as const

export const communities = [
  'Oakville',
  'Mississauga',
  'Burlington',
  'Hamilton',
  'Milton',
  'Toronto',
  'Etobicoke',
  'Brampton',
  'Vaughan',
  'Newmarket',
  'Niagara-on-the-Lake',
  'Stoney Creek',
] as const

export const reviews = [
  {
    quote:
      'After being left by our previous contractor with what was literally a huge hole, you took over the project and completed it to requirements. His roster of trades got the job done on time while remaining on budget.',
    name: 'Justin Carriere',
    detail: 'Owner · Arvo Coffee',
  },
  {
    quote:
      'We have worked with Jamie on a number of projects over the past five years. With BDN on site, there is nothing to worry about in the construction process, which lets us focus on opening our stores.',
    name: 'Kristin Butler',
    detail: 'CEO · Eva’s Original Chimneys',
  },
  {
    quote:
      'The entire team delivered a project of exceptional quality while staying on schedule and under budget. Without hesitation, we recommend Jamie and his team.',
    name: 'Matthew McLauchlan',
    detail: 'President · Ontario Mortgage Capital',
  },
  {
    quote:
      'A very professional company, honest, and always looking to keep the construction within the budget. Finishing is of the best quality and the deadlines were met as planned.',
    name: 'Judy Dobsinai',
    detail: 'Client',
  },
] as const

export const faqs = [
  {
    q: 'What does ICI construction mean?',
    a: 'ICI is industrial, commercial, and institutional work. For BDN that shows up as offices, restaurants, retail, warehouses, and specialty spaces such as clinics and spas. These jobs need a contractor who can manage landlords, brands, and trades at the same time.',
  },
  {
    q: 'What kinds of spaces do you build?',
    a: 'Recent work includes Ever New retail stores, restaurants such as Left Field Brewery, Radius, SB Prime, and Arvo Coffee, the Hillberg & Berk jewellery store, Laserbody MD, office space for Ostos Realty, and a commissary kitchen for Gourmet Craft in Oakville.',
  },
  {
    q: 'How large are your projects?',
    a: 'Jamie Boaden has managed work from about $100,000 to $10 million, including time-sensitive renovations and repairs as well as full fit-outs. If the scope is smaller than a ground-up build and still needs a contractor who will stay to the end, it is in range.',
  },
  {
    q: 'Is the pre-construction consult actually free?',
    a: 'Yes. The consult is a site walk and a budget conversation: what the design is asking for, what the opening date allows, and where the number will land. There is no obligation to hire BDN from that meeting.',
  },
  {
    q: 'Where do you work?',
    a: 'The office is at 1240 Speers Road in Oakville. The crew works across Oakville, Mississauga, Burlington, Hamilton, Toronto, and the rest of the western GTA, including project sites in Newmarket and Niagara-on-the-Lake.',
  },
  {
    q: 'How do you keep a project on budget?',
    a: 'The budget is reviewed in pre-construction, before materials are bought. During the build, financials stay visible. That is the same standard BDN uses with retail brands and restaurant owners who cannot absorb a surprise at the end.',
  },
] as const

export const serviceOptions = [
  'Retail or storefront fit-out',
  'Restaurant or hospitality',
  'Medical, clinic, or spa',
  'Office',
  'Kitchen, warehouse, or industrial',
  'Repair, refresh, or special project',
  'Not sure yet',
] as const

export const timelines = [
  'As soon as the site is available',
  'Within the next 30 days',
  'This quarter',
  'Planning and comparing budgets',
] as const

export const footerServices = [
  'Pre-Construction Planning',
  'Construction Management',
  'General Contracting',
  'Base Building',
  'Repair and Maintenance',
  'Special Projects',
] as const

export const footerAreas = [
  'Oakville',
  'Mississauga',
  'Burlington',
  'Hamilton',
  'Toronto',
  'Milton',
] as const
