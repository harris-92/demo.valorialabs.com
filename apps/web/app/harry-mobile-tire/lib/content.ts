export const phones = {
  primary: { display: '(647) 909-4904', href: 'tel:6479094904' },
  secondary: { display: '(647) 787-4022', href: 'tel:6477874022' },
} as const

export const whatsappHref =
  'https://wa.me/16479094904?text=Hi%20Harry,%20I%20need%20mobile%20tire%20assistance'

export const directionsHref =
  'https://maps.google.com/?q=1013+Maple+Ave,+Milton,+ON+L9T+0A5'

export const address = '1013 Maple Ave, Milton, ON L9T 0A5, Canada'

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#seasonal', label: 'Seasonal Swap' },
  { href: '#emergency', label: 'Emergency' },
  { href: '#roadside', label: 'Roadside' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#gallery', label: 'Work Gallery' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
] as const

export const issues = [
  'Emergency Flat Tire (Roadside / Driveway)',
  'Highway Blowout / Tire Shredded',
  'Seasonal Tire Swap (On / Off Rim)',
  'New Tire Delivery & Install',
  'Dead Battery Boost / Jumpstart',
  'Lockout / Keys in Car',
] as const

export const services = [
  {
    id: 'emergency',
    title: '24/7 Emergency Flat Tire Repair',
    body: 'Industrial vulcanized plug and interior patch combinations conforming to TIA safety standards. Bead leak repairs, valve stem replacement, and puncture diagnostic right on the shoulder or your driveway.',
    tags: ['TIA Vulcanized Patch', 'Bead Reseal'],
    action: 'Dispatch Flat Repair',
    tone: 'orange',
  },
  {
    id: 'seasonal',
    title: 'Seasonal Changeover & Rim Swaps',
    body: 'Seamless winter to summer changeover without loading heavy dirty tires into your clean interior. Driveway mounting, computer dynamic wheel balancing, calibrated hand torque, and TPMS sensor learning.',
    tags: ['On-Rim / Off-Rim', 'Torque Verified'],
    action: 'Book Driveway Swap',
    tone: 'green',
  },
  {
    id: 'tires',
    title: 'New & Quality Used Tires Delivered',
    body: 'Sourced directly from major distributors. Michelin, Bridgestone, Goodyear, Pirelli, and Continental. Standard commuter, commercial load-rated, or high-performance run-flats delivered and mounted on-site.',
    tags: ['Major Brands', 'Run-Flat Specialists'],
    action: 'Check Tire Inventory',
    tone: 'orange',
  },
  {
    id: 'battery',
    title: 'Battery Boost & Replacement',
    body: 'Sub-zero freeze diagnostics, commercial grade 12V/24V high-amperage jumpstarting, alternator diode testing, and direct on-site AGM or lead-acid battery installation if your cell has failed.',
    tags: ['Load Test Diagnostics', 'New Battery In-Stock'],
    action: 'Request Boost Vehicle',
    tone: 'green',
  },
  {
    id: 'lockout',
    title: 'Lockout & Emergency Fuel Delivery',
    body: 'Air-wedge scratch-free automotive lock opening tools to recover keys quickly. Rapid delivery of 10–15 litres of regular unleaded, premium 91+, or diesel fuel directly to highway shoulders or rural roads.',
    tags: ['Zero Scuff Entry', 'Gas & Diesel Safe'],
    action: 'Call Fuel / Lockout Unit',
    tone: 'orange',
  },
  {
    id: 'towing',
    title: 'Light Recovery & Damage-Free Towing',
    body: 'When a cracked alloy rim or severe suspension damage cannot be solved roadside, we coordinate a damage-free flatbed tow to your preferred dealership or body shop.',
    tags: ['Flatbed Preferred', 'AWD Safe Dollies'],
    action: 'Emergency Tow Dispatch',
    tone: 'green',
  },
] as const

export const steps = [
  {
    n: '01',
    title: 'Call or Book with GPS Location',
    body: 'Dial (647) 909-4904 or enter your coordinates above. Provide your tire size (e.g., 205/55R16) or let us read it from a quick photo message.',
    note: 'Immediate dispatch quote locked',
  },
  {
    n: '02',
    title: 'Tech Dispatches Immediately',
    body: 'Our customized heavy-duty mobile tire truck heads to you with an estimated 20–30 minute arrival. Live SMS tracking gives real-time highway navigation updates.',
    note: 'Mobile shop fully stocked on arrival',
  },
  {
    n: '03',
    title: 'Fixed On-Site & Back On The Road',
    body: 'Tires are unmounted, patched or replaced, digitally balanced, torque-calibrated, and TPMS verified. Convenient contactless tap payment on our secure wireless terminal.',
    note: 'Zero shop wait time and 100% road-ready',
  },
] as const

export const stats = [
  { value: '250+', label: 'Milton Drivers Rescued', tone: 'orange' },
  { value: '22 Min', label: 'Average Rapid Dispatch ETA', tone: 'green' },
  { value: '5.0 / 5', label: 'Google Rating Benchmark', tone: 'peach' },
  { value: '365 Days', label: 'Day & Night Operation', tone: 'light' },
] as const

export const areas = [
  {
    name: 'Milton (Primary Hub)',
    eta: '15-25 MIN ETA',
    places: 'Maple Ave, Derry Rd, Main St, Bronte St, Highway 401 & James Snow Pkwy.',
    note: '1013 Maple Ave Headquarters',
  },
  {
    name: 'Oakville',
    eta: '20-30 MIN ETA',
    places: 'Trafalgar Rd, Dundas St, Lakeshore Rd East/West, QEW corridor, Ford Dr.',
    note: 'Residential & Roadside Active',
  },
  {
    name: 'Burlington',
    eta: '20-30 MIN ETA',
    places: 'Aldershot, Millcroft, Appleby Line, Fairview, Brant St & Hwy 403.',
    note: 'Full Coverage Van Ready',
  },
  {
    name: 'Mississauga',
    eta: '25-35 MIN ETA',
    places: 'Meadowvale, Streetsville, Heartland Town Centre, Erin Mills, Hwy 401 & 403.',
    note: 'Commercial & Fleet Units',
  },
  {
    name: 'Brampton',
    eta: '25-35 MIN ETA',
    places: 'Bramalea, Mount Pleasant, Highway 410, Queen St West, Bovaird Dr.',
    note: 'Direct Dispatch Line',
  },
  {
    name: 'Halton Hills',
    eta: '20-30 MIN ETA',
    places: 'Georgetown, Acton, Stewarttown, Hwy 7 corridor & Mountainview Rd.',
    note: 'Driveway Winter Swaps Available',
  },
  {
    name: 'Campbellville & Halton Rural Corridors',
    eta: '15-25 MIN ETA',
    places: 'Guelph Line, Hwy 401 Escarpment stretch, Nassagaweya, Brookville, & Mohawk Racetrack zone.',
    note: 'Primary Dispatch Headquarters',
    wide: true,
  },
] as const

export const reviews = [
  {
    tag: 'Verified Rescue',
    quote:
      'Arman/Harry was an absolute lifesaver when I hit a massive pothole on the 401 near Milton. Arrived in 22 minutes, changed the damaged rim, and got my family home safely. 10/10 service!',
    service: 'Emergency Highway 401 Flat Repair',
    initials: 'DK',
    name: 'David K.',
    place: 'Milton, ON • Google Review',
  },
  {
    tag: 'Driveway Swap',
    quote:
      'Did my seasonal winter-to-summer swap for both my cars right on my driveway while I worked from home. No waiting 3 hours at Costco or a tire shop. Incredibly polite, super clean, and totally professional.',
    service: 'Seasonal Winter-to-Summer Tire Swap',
    initials: 'SM',
    name: 'Sarah M.',
    place: 'Oakville, ON • Google Review',
  },
  {
    tag: 'Early AM Boost',
    quote:
      'Dead battery and flat tire at 6 AM before work. Tech came out in 25 minutes with a brand new battery and patched the tire on the spot. Clear pricing, no hidden fees, tap card machine right there.',
    service: 'Battery Replacement + Puncture Fix',
    initials: 'GS',
    name: 'Gurpreet S.',
    place: 'Mississauga, ON • Google Review',
  },
] as const

export const faqs = [
  {
    q: 'How fast can Harry Mobile Tire Service reach me in Milton and nearby areas?',
    a: 'From our headquarters at 1013 Maple Ave in Milton, typical response time is 15 to 25 minutes for Milton addresses and Highway 401/407 segments. Oakville, Burlington, and Mississauga generally range from 20 to 35 minutes depending on traffic. Dispatch gives you a real-time ETA from GPS positioning when you call.',
  },
  {
    q: 'Do you come directly to my home, workplace, or roadside on the highway?',
    a: 'Yes. The vans carry commercial on-board generators, air compressors, and heavy-duty jacks. We service residential driveways, condominium undergrounds with appropriate clearance, workplace parking lots, and live highway shoulders on Hwy 401, Hwy 407, and the QEW with safety beacon setups.',
  },
  {
    q: 'Can you balance tires and reprogram my vehicle’s TPMS sensors on-site?',
    a: 'Every mobile unit has computerized high-speed dynamic wheel balancing and OBD-II tire pressure monitoring relearn tools. Your car leaves balanced, without steering-wheel vibration or a dashboard warning light.',
  },
  {
    q: 'What information do I need when calling for an emergency tire replacement?',
    a: 'Tire size helps (for example 225/55R17 on the sidewall or inside the driver door frame). If you do not know it, tell us the vehicle make, model, and year and the technician looks up the OEM specification.',
  },
  {
    q: 'Do you supply new and used tires, or can you install tires I already bought?',
    a: 'Both. We stock high-demand sizes from Michelin, Continental, Bridgestone, and Goodyear, plus economy options. If you ordered tires online or already have a winter set in the garage, we mount and balance those too.',
  },
  {
    q: 'What payment methods do you accept on the road?',
    a: 'Every technician carries a wireless terminal. We accept Visa, Mastercard, American Express, Interac Flash, Apple Pay, Google Pay, and Interac e-Transfer. You get an itemized digital receipt by email or SMS.',
  },
] as const

export const footerServices = [
  'Emergency Roadside Flat Repair',
  'Seasonal Tire Swap (On/Off Rim)',
  'Mobile Rim Repair & Leak Fix',
  'High-Speed Wheel Balancing',
  'Commercial Fleet Tire Support',
  'Run-Flat Replacement Dispatch',
  'TPMS Sensor Diagnosis & Reset',
] as const

export const footerAreas = [
  'Milton (HQ — 15-20 Min Arrival)',
  'Oakville & Lakeshore',
  'Burlington & Aldershot',
  'Mississauga & Meadowvale',
  'Brampton South & West',
  'Georgetown / Halton Hills',
  'Campbellville & Hwy 401/407',
] as const
