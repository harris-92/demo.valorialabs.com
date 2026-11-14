export const phones = {
  primary: { display: '(980) 867-2320', href: 'tel:9808672320' },
  secondary: { display: '(704) 665-7959', href: 'tel:7046657959' },
} as const

export const email = {
  display: '1800mymover@gmail.com',
  href: 'mailto:1800mymover@gmail.com',
} as const

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#coverage', label: 'Coverage Areas' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#moving-tips', label: 'Moving Tips' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
] as const

export type ServiceIcon = 'home' | 'route' | 'truck' | 'package' | 'armchair' | 'building'

export const services: readonly {
  icon: ServiceIcon
  title: string
  body: string
  points: readonly string[]
  price: string
  tone?: 'navy'
}[] = [
  {
    icon: 'home',
    title: 'Residential Moving',
    body: 'Full-service residential relocation for single-family estates, condos, and townhomes across South Charlotte, Waxhaw, Weddington, and Dilworth. We handle stairs, heavy armoires, and tight hallways with ease.',
    points: [
      'Floor protection and carpet runners included',
      'Disassembly and reassembly of bed frames',
      'Clean air-ride moving trucks',
    ],
    price: 'Starting from $129/hr (2 Movers + Truck)',
  },
  {
    icon: 'route',
    title: 'Long-Distance & Interstate',
    body: 'Direct, guaranteed-date interstate moves across North Carolina, South Carolina, and the East Coast. Unlike van line brokers, your goods stay on one dedicated truck without stopping at random warehouses.',
    points: [
      'Dedicated direct delivery, no combined loads',
      'Guaranteed delivery arrival window',
      'Fixed binding written quote',
    ],
    price: 'Guaranteed Fixed Rates',
    tone: 'navy',
  },
  {
    icon: 'truck',
    title: 'PODS, U-Haul & Storage Loading',
    body: 'Rented a truck, Pack-Rat, or PODS container? Certified movers maximize every cubic foot with secure tier-stacking, weight distribution, and heavy-duty strapping.',
    points: [
      'Expert interlocking wall-tier packing',
      'Heavy-duty ratchets and tie-downs',
      'Maximize storage container volume',
    ],
    price: 'Flexible Hourly Labor Available',
  },
  {
    icon: 'package',
    title: 'Full Packing & Unpacking Services',
    body: 'Dan’s crew arrives with double-walled dish packs, wardrobe boxes, shrink wrap, and cushioning for porcelain, kitchen essentials, books, and wardrobes.',
    points: [
      'Room-by-room labeled inventory',
      'Fragile glassware cell-dividers',
      'Wardrobe boxes for hanging clothes',
    ],
    price: 'Supplies Included Options',
    tone: 'navy',
  },
  {
    icon: 'armchair',
    title: 'Specialty Furniture, Pianos & Antiques',
    body: 'Upright pianos, heavy gun safes, solid oak dining tables, marble tops, and fragile family heirlooms. Piano boards, 4-wheel dollies, and thick corner pads.',
    points: [
      'Specialized piano skid boards',
      'Custom antique blanket wrap and tape lock',
      'Room-to-room interior rearrangement',
    ],
    price: 'Expert Heavy Rigging',
  },
  {
    icon: 'building',
    title: 'Commercial & Office Relocation',
    body: 'Executive offices, dental practices, retail stores, and commercial suites across Charlotte Uptown and Ballantyne, with after-hours and weekend windows.',
    points: [
      'IT setup and server rack padding',
      'Modular cubicle disassembly and assembly',
      'Certificate of Insurance (COI) on file',
    ],
    price: 'Commercial COI Provided',
    tone: 'navy',
  },
]

export const armor = [
  {
    title: 'Heavy Quilted Pads',
    body: 'Industrial quilted cotton blankets tailored to cover wood and upholstery corners.',
  },
  {
    title: 'Tension Stretch Wrap',
    body: 'Locks dresser drawers, wardrobe doors, and pads together without sticky tape residue.',
  },
  {
    title: 'Jamb & Floor Shields',
    body: 'Neoprene door jamb protectors, banister shields, and heavy-duty floor runners for hardwood.',
  },
  {
    title: 'Hardware Bagging',
    body: 'Every screw, bolt, and shelf pin is labeled, bagged, and secured to the dismounted piece.',
  },
] as const

export const counties = [
  {
    title: 'Union County, NC',
    kicker: 'Home Base & Local Hub',
    body: 'Rapid dispatch and personalized local rates across Union County communities.',
    places: [
      ['Waxhaw, NC (28173)', 'Primary Hub'],
      ['Weddington, NC', 'Local'],
      ['Marvin, NC', 'Local'],
      ['Wesley Chapel, NC', 'Local'],
      ['Indian Trail & Monroe', 'Local'],
      ['Stallings & Mineral Springs', 'Local'],
    ],
  },
  {
    title: 'Mecklenburg County, NC',
    kicker: 'Charlotte Metro Area',
    body: 'Full service moves across Charlotte residential and downtown high-rise communities.',
    places: [
      ['Ballantyne (28277)', 'Daily Service'],
      ['South Charlotte & SouthPark', 'Daily'],
      ['Myers Park & Dilworth', 'Daily'],
      ['Matthews & Mint Hill', 'Daily'],
      ['Pineville & Huntersville', 'Daily'],
      ['Uptown Charlotte & South End', 'Elevator Approved'],
    ],
  },
  {
    title: 'South Carolina Border',
    kicker: 'SC Licensed & Insured',
    body: 'Cross-border relocations throughout York and Lancaster County neighborhoods.',
    places: [
      ['Indian Land, SC (29707)', 'Daily Service'],
      ['Fort Mill & Baxter Village', 'Daily'],
      ['Tega Cay & Lake Wylie', 'Daily'],
      ['Rock Hill & York County', 'Daily'],
      ['Lancaster & Kershaw', 'Regular'],
      ['Interstate NC to SC', 'Direct Truck'],
    ],
  },
] as const

export type GalleryFilter = 'all' | 'fleet' | 'blankets' | 'boxes'

export const galleryFilters: readonly { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'All Photos' },
  { id: 'fleet', label: 'Equipment & Fleet' },
  { id: 'blankets', label: 'Blanket Padding' },
  { id: 'boxes', label: 'Packing Boxes' },
]

export const reviews = [
  {
    source: 'Google Review',
    quote:
      'Dan and his Experienced team are The PROFESSIONAL Moving Organization in the Charlotte area. Dan\'s communication skills are EXCEPTIONAL. From receiving the estimate, to the day of the move and completion, EVERYTHING went smoothly and perfectly. Thank You Dan and all at Economy Moving and Trucking!',
    name: 'Richard Ratajczak',
    place: 'Charlotte, NC Resident',
  },
  {
    source: 'Thumbtack Top Pro',
    quote:
      'Over the last 35 years, I’ve moved seven or eight times and never once would I say I had an excellent move, until this one. From my first phone conversation with Dan until the job was completed, our stress was being reduced by the minute. Dan and his team were top-notch, highly efficient and VERY careful.',
    name: 'Owen O.',
    place: 'Waxhaw Household Move',
  },
  {
    source: 'Interstate Move',
    quote:
      'I would highly recommend Dan and his team to anyone looking for a mover. His crew managed our out of state move in absolutely miserable weather and never skipped a beat. Our house (new and old) and belongings were well cared for and everything turned out perfect.',
    name: 'Kristen C.',
    place: 'Interstate Relocation',
  },
] as const

export const comparisons = [
  {
    feature: 'Owner-Direct Accountability',
    detail: 'Direct communication with company leadership',
    economy: 'Direct with Dan',
    brokers: 'Overseas Call Center',
    national: 'Anonymous Dispatch Agents',
  },
  {
    feature: 'Dedicated Moving Truck',
    detail: 'Your belongings are never combined with strangers’ loads',
    economy: '100% Dedicated Truck',
    brokers: 'Resold to 3rd Parties',
    national: 'Mixed Multiple House Loads',
  },
  {
    feature: 'Transparent, Binding Estimates',
    detail: 'Clear written estimates with zero surprise fees on moving day',
    economy: 'Guaranteed in Writing',
    brokers: 'Bait-and-Switch Deposits',
    national: 'Weight Surcharges & Delays',
  },
  {
    feature: 'Dedicated Local Crew',
    detail: 'Background-checked professional full-time crew',
    economy: 'Trained Charlotte Movers',
    brokers: 'Random Day Laborers',
    national: 'Independent Subcontractors',
  },
  {
    feature: 'Furniture Blanket Wrapping Included',
    detail: 'Complete padding and stretch wrapping for furniture pieces',
    economy: 'Included Free',
    brokers: 'Hidden Add-on Fees',
    national: 'Expensive Material Charges',
  },
] as const

export const faqs = [
  {
    q: 'How far in advance should I book my Charlotte or Waxhaw move?',
    a: 'We recommend scheduling your move 2 to 4 weeks in advance, especially for end-of-month or peak weekend dates. Because Dan personally oversees dispatch, last-minute closing delays and short-notice moves are often possible when the truck schedule allows. Call (980) 867-2320 for real-time availability.',
  },
  {
    q: 'How do you calculate moving estimates?',
    a: 'Local relocations within Charlotte, Waxhaw, and the Carolinas use transparent hourly rates based on the number of movers and trucks, with no hidden travel or equipment fees. Larger estates and interstate relocations get a binding, flat-rate written quote after a phone consultation or virtual walkthrough.',
  },
  {
    q: 'Do you provide moving boxes, padding blankets, and supplies?',
    a: 'Quilted furniture blankets, commercial shrink wrap, and tape are standard on every truck at no extra charge. Heavy-duty boxes, wardrobe boxes, bubble wrap, and mattress covers are available on request.',
  },
  {
    q: 'Are you licensed and insured in North Carolina and South Carolina?',
    a: 'Economy Moving and Trucking is licensed with the North Carolina Utilities Commission and the Federal DOT, with commercial liability and cargo insurance. Certificates of Insurance are available for HOA communities and Uptown Charlotte high-rise managers.',
  },
  {
    q: 'What happens in case of rain or inclement weather?',
    a: 'Crews work through Carolina rain with neoprene floor runners, water-resistant shrink wrap on fabric sofas and mattresses, and covered staging so flooring and belongings stay dry.',
  },
] as const

export const tips = [
  'Book 2 to 4 weeks ahead for month-end and weekend dates, or call Dan if a closing just moved.',
  'Quilted blankets, shrink wrap, and tape ride on every truck. Ask ahead if you also want boxes and wardrobe cartons.',
  'Share HOA gate codes, elevator reservations, and loading-dock windows before move day.',
  'Tell us about pianos, marble, gun safes, and tight stairs so the right boards and dollies are on the truck.',
] as const

export const footerAreas = [
  'Charlotte (Uptown, South End, Ballantyne)',
  'Waxhaw & Marvin',
  'Matthews & Mint Hill',
  'Fort Mill & Indian Land SC',
  'Huntersville & Lake Norman',
  'Pineville & Concord',
  'Gastonia & Rock Hill',
] as const

export const footerLinks = [
  { href: '#services', label: 'Residential Moving' },
  { href: '#services', label: 'Commercial & Office' },
  { href: '#services', label: 'Packing & Unpacking' },
  { href: '#coverage', label: 'Coverage Areas' },
  { href: '#moving-tips', label: 'Moving Checklist & Tips' },
  { href: '#reviews', label: 'Customer Reviews' },
  { href: '#quick-estimator', label: 'Request Online Quote' },
] as const
