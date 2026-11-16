import { apImages } from './images'

export const phone = {
  display: '(704) 222-1470',
  href: 'tel:7042221470',
} as const

export const email = {
  display: 'jose_andrade5555@hotmail.com',
  href: 'mailto:jose_andrade5555@hotmail.com',
  photosHref: 'mailto:jose_andrade5555@hotmail.com?subject=Photo%20Quote%20Request%20-%20Andrade%20Painting',
} as const

export const address = {
  line: '617 Echodale Dr, Charlotte, NC 28217, USA',
  short: '617 Echodale Dr',
  city: 'Charlotte, NC 28217',
} as const

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About Us' },
  { href: '#gallery', label: 'Project Gallery' },
  { href: '#offer', label: 'Special Offer', badge: 'Save 20%' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#reviews', label: 'Reviews & FAQ' },
  { href: '#quote', label: 'Contact' },
] as const

export const heroStats = [
  { value: '14+', label: 'Years in Business' },
  { value: '100%', label: 'Licensed & Insured', accent: true },
  { value: '2-Year', label: 'Workmanship Warranty' },
  { value: '5.0 ★', label: 'Google Rating' },
] as const

export const ways = [
  {
    kicker: 'Fastest • Instant Support',
    title: 'Call Direct: (704) 222-1470',
    body: 'Speak directly with our Charlotte project manager to review your scope, square footage, timelines, and immediate availability.',
    action: 'Call (704) 222-1470',
    href: phone.href,
  },
  {
    kicker: 'Most Accurate • 100% Free',
    title: 'Free On-Site Evaluation',
    body: 'We visit your residential property or commercial site, inspect substrate conditions, measure trim, and provide an exact fixed-price quote.',
    action: 'Schedule On-Site Visit',
    href: '#quote',
    primary: true,
  },
  {
    kicker: 'Same-Day Digital Turnaround',
    title: 'Send Photos & Dimensions',
    body: 'Email or text your room dimensions, exterior angles, or architectural plans to receive a line-item estimate within 24 business hours.',
    action: 'Email Project Photos',
    href: email.photosHref,
  },
] as const

export const services = [
  {
    title: 'Exterior Painting',
    badge: 'Residential',
    body: 'Full weatherproofing, siding renewal, brick coatings, trim restoration, and deck staining formulated for the hot Charlotte climate.',
    points: ['Fiber Cement, Wood & Vinyl Siding', 'Exterior Trim, Fascia & Soffits', 'Sherwin-Williams Emerald & SuperPaint'],
    link: 'Exterior Estimates',
    image: apImages.exteriorCard,
    imageAlt: 'Exterior house painting in Charlotte NC',
  },
  {
    title: 'Interior Painting',
    badge: 'Save 20% Promo',
    body: 'Living spaces, primary suites, high ceilings, crown molding, and factory-smooth cabinet refinishing with zero-VOC eco-friendly paints.',
    points: ['Drywall Repair, Patching & Sanding', 'Kitchen Cabinets & Built-In Millwork', 'Crisp Tape Lines & Furniture Masking'],
    link: 'Interior Estimates',
    image: apImages.interior,
    imageAlt: 'Interior house painting in Charlotte NC with beige walls and crisp white trim',
  },
  {
    title: 'Commercial Painting',
    badge: 'Commercial',
    body: 'Offices, storefronts, multi-family HOAs, and industrial properties executed on fast turnarounds with flexible weekend and night hours.',
    points: ['Corporate Suites & Medical Facilities', 'HOA & Multi-Unit Communities', 'High-Durability Epoxy & Polyurethane'],
    link: 'Commercial Quotes',
    image: apImages.commercial,
    imageAlt: 'Modern commercial building facade painted by Andrade Painting Charlotte NC',
  },
  {
    title: 'Pressure Washing',
    badge: 'Surface Care',
    body: 'Eliminate North Carolina mildew, red clay staining, algae, and grime from driveways, patios, siding, and commercial sidewalks.',
    points: ['Concrete Driveways & Walkways', 'Soft Wash Siding & Brick Facades', 'Deck Decontamination Prior to Staining'],
    link: 'Washing Estimates',
  },
] as const

export const reasons = [
  {
    title: 'Owner On Every Job',
    body: 'Direct oversight by Jose Andrade ensures every wall passes stringent standards.',
  },
  {
    title: 'Commercial-Grade Prep',
    body: 'Pressure scraping, caulking, priming, and dust extraction before any paint roller touches.',
  },
  {
    title: 'Punctual & Respectful',
    body: 'We show up on time, tape all floors and furniture meticulously, and clean up daily.',
  },
  {
    title: 'Full NC Coverage',
    body: "General liability and workers' compensation coverage protecting you completely.",
  },
] as const

export const galleryFilters = [
  { id: 'all', label: 'All Projects' },
  { id: 'residential', label: 'Residential' },
  { id: 'interior', label: 'Interior' },
  { id: 'commercial', label: 'Commercial' },
] as const

export type GalleryFilter = (typeof galleryFilters)[number]['id']

export const projects = [
  {
    title: 'Luxury Siding & Trim Coating',
    place: 'Ballantyne, NC',
    body: 'Sherwin-Williams Emerald Exterior in crisp off-white with dark charcoal architectural accents.',
    image: apImages.exteriorCard,
    alt: 'Ballantyne Estate Exterior Repaint',
    show: ['residential'],
  },
  {
    title: 'Open Living Room & Vaulted Ceiling',
    place: 'South Park, NC',
    body: 'Two-tone warm beige finish with satin white trim and detailed crown molding restoration.',
    image: apImages.interior,
    alt: 'South Park Modern Interior Living Space',
    show: ['residential', 'interior'],
  },
  {
    title: 'Corporate Facade & Window Framing',
    place: 'Uptown Charlotte',
    body: 'Elastomeric weatherproofing system applied to architectural masonry and commercial panels.',
    image: apImages.commercial,
    alt: 'Charlotte Uptown Commercial Office Exterior',
    show: ['commercial'],
  },
] as const

export const communities = [
  'Charlotte (Uptown, South End, NoDa)',
  'South Park & Myers Park',
  'Ballantyne & Blakeney',
  'Dilworth & Elizabeth',
  'Matthews & Mint Hill',
  'Huntersville & Lake Norman',
  'Pineville & Fort Mill, SC',
  'Concord & Harrisburg',
] as const

export const reviews = [
  {
    quote:
      'Jose and his team did an outstanding job repainting the entire interior of our house in Ballantyne. They patched every drywall imperfection, covered all flooring and furniture completely, and completed the job two days early. Highly recommend!',
    name: 'Marcus & Elena Vance',
    detail: 'Ballantyne • Full Interior Repaint',
  },
  {
    quote:
      'We used Andrade Painting for our commercial office building in South Park. Their pricing was competitive, they showed up on time every day, and they worked around our business hours without any disruptions. True trade professionals.',
    name: 'David Thornton',
    detail: 'South Park • Commercial Exterior & Trim',
  },
  {
    quote:
      'We took advantage of their 20% off promotional estimate for our Dilworth home. The exterior siding and porch look brand new. The prep work was thorough, power washing was immaculate, and the paint coat is uniform and sharp.',
    name: 'Sarah Jenkins',
    detail: 'Dilworth • Exterior Siding & Porch',
  },
] as const

export const faqs = [
  {
    q: 'How much does it cost to paint a house in Charlotte, NC?',
    a: 'House painting costs across Greater Charlotte depend on total square footage, wall height, substrate repairs needed, and the type of finish selected. An average interior project ranges from $1,800 to $4,500, while complete exterior repainting typically ranges from $3,000 to $8,500+. Andrade Painting provides fully transparent, itemized written estimates with zero hidden fees.',
  },
  {
    q: 'Do you offer free on-site painting estimates?',
    a: 'Yes, 100% free with no obligation. Jose Andrade or one of our senior project supervisors visits your property to measure dimensions, inspect drywall or exterior siding conditions, discuss color palettes, and provide a clear written estimate on the spot or within 24 hours.',
  },
  {
    q: 'How does the 20% off residential interior painting special work?',
    a: 'When you schedule your estimate appointment through this website or mention our seasonal promo over the phone, you receive 20% off your residential interior painting project up to a $500 maximum savings. This promotional rate applies to qualifying projects totaling $2,000 or more.',
  },
  {
    q: 'Are you licensed and insured in North Carolina?',
    a: 'Yes. Andrade Painting LLC is fully licensed to operate in the state of North Carolina and carries comprehensive general liability and workers’ compensation coverage. We protect our customers and technicians on every residential and commercial jobsite.',
  },
  {
    q: 'What paint brands and coatings do you use?',
    a: 'We exclusively use premium architectural coatings from industry leaders like Sherwin-Williams (Emerald, Duration, SuperPaint) and Benjamin Moore (Aura, Regal Select, Scuff-X), as well as specialty commercial industrial coatings when specified.',
  },
  {
    q: 'Do you handle both residential and commercial projects?',
    a: 'Yes. We have dedicated residential crews equipped for custom interior fine-finishes, cabinet spraying, and exterior homes, as well as specialized commercial crews capable of handling corporate tenant improvements, office buildings, retail suites, and multi-family HOA communities.',
  },
] as const

export const serviceOptions = [
  'Interior House Painting (20% Off Eligible)',
  'Exterior House Painting',
  'Commercial Painting',
  'Cabinet Refinishing',
  'Pressure Washing & Surface Prep',
  'Complete Interior & Exterior Combo',
] as const

export const timelines = [
  'Immediately / Next Available Date',
  'Within Next 2 Weeks',
  'Within Next 30 Days',
  'Just Planning / Gathering Quotes',
] as const

export const footerServices = [
  'Residential Interior',
  'Residential Exterior',
  'Commercial Painting',
  'Pressure Washing',
  'Cabinet Refinishing',
  'Deck Staining & Sealing',
] as const

export const footerAreas = [
  'Charlotte',
  'Ballantyne',
  'South Park',
  'Dilworth',
  'Myers Park',
  'Matthews',
  'Huntersville',
  'Pineville',
  'Fort Mill',
  'Concord',
] as const
