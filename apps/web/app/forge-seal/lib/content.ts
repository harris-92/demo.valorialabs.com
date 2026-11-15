export const FS_PHONE_DISPLAY = '(519) 635-6997'
export const FS_PHONE_TEL = 'tel:+15196356997'
export const FS_EMAIL = 'info@forgeseal.ca'
export const FS_MAPS =
  'https://www.google.com/maps/place/ForgeSeal+Asphalt+Maintenance/data=!4m7!3m6!1s0x26bc94c547fd391f:0x9f3b3a09bc80c18d!8m2!3d44.3919691!4d-79.640565!16s%2Fg%2F11npr6bg_v!19sChIJHzn9R8WUvCYRjcGAvAk6O58'

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#gallery', label: 'Before & After' },
  { href: '#difference', label: 'Why Choose Us' },
  { href: '#faqs', label: 'FAQs' },
  { href: '#quote', label: 'Contact' },
] as const

export const propertyTypes = [
  { id: 'driveway', label: 'Driveway' },
  { id: 'lot', label: 'Parking Lot' },
  { id: 'commercial', label: 'Commercial' },
] as const

export type PropertyType = (typeof propertyTypes)[number]['id']

export const calculatorServices = [
  'Full Seal & Hot Crack Repair',
  'Hot Rubber Crack Sealing Only',
  'Commercial Line Striping',
  'Pothole Patch & Ramp Repair',
] as const

export const calculatorSizes = [
  'Standard 2-Car Driveway',
  'Extended 4-6 Car Driveway',
  'Commercial 10-30 Stalls',
  'Commercial 30-100+ Stalls',
] as const

export const stats = [
  {
    value: '15+ YRS',
    label: 'Pavement Life Added',
    note: 'Protects sub-base from catastrophic freeze damage',
  },
  {
    value: '500+',
    label: 'Properties Sealed',
    note: 'Simcoe, York & Dufferin commercial & estates',
  },
  {
    value: '48 HRS',
    label: 'Rapid Quote Guarantee',
    note: 'Laser on-site or satellite aerial review',
  },
  {
    value: '100%',
    label: 'Undiluted Emulsion',
    note: 'Zero water dilution, maximum binder durability',
  },
] as const

export const services = [
  {
    kind: 'photo',
    badge: 'Residential Spec',
    title: 'Residential Driveway Sealcoating',
    body: 'Hand-brushed deep pitch-black finish. Shields against harsh UV breakdown, winter road salts, and driveway petrochemical fluid leaks.',
    points: ['Hand-brushed perimeter edging', 'Gas & engine oil stain priming', 'High-solids polymerized seal'],
    cta: 'Book Driveway Assessment',
    image: '/forge-seal/driveway.jpg',
    alt: 'A sealed residential driveway finished in deep black',
  },
  {
    kind: 'photo',
    badge: 'Commercial & Plaza',
    title: 'Parking Lot Asset Management',
    body: 'Multi-acre commercial sealcoating executed with phased weekend schedules so your business, retail clients, and delivery traffic remain uninterrupted.',
    points: ['Overnight & split-phase operations', 'High-volume commercial jet sprayers', 'Multi-year capital preservation plans'],
    cta: 'Request Commercial RFP',
    image: '/forge-seal/plaza.jpg',
    alt: 'A commercial plaza parking lot after sealcoating',
  },
  {
    kind: 'photo',
    badge: 'Highway MTO Spec',
    title: 'Hot-Pour Rubber Crack Sealing',
    body: 'Applied molten at 400°F directly into heat-cleansed pavement cracks to stop water intrusion, subterranean gravel washout, and destructive frost heaves.',
    points: ['Expands & contracts through winter -30°C', 'High-pressure pneumatic wire cleaning', 'Flush-banded industrial finish'],
    cta: 'Prevent Structural Failure',
    image: '/forge-seal/crack.jpg',
    alt: 'Hot rubber crack fill on an asphalt driveway',
  },
  {
    kind: 'photo',
    badge: 'ADA & Bylaw Compliant',
    title: 'Line Striping & Markings',
    body: 'Razor-straight stall lines, bright traffic yellow dividers, ADA handicap stalls, directional stencils, and fire lane red zones using highway traffic paint.',
    points: ['Fast-dry commercial resin formulas', 'Ontario Barrier-Free Accessibility standard', 'Crisp layout reconfiguration'],
    cta: 'View Striping Options',
    image: '/forge-seal/striping.jpg',
    alt: 'Fresh parking stall striping on dark asphalt',
  },
  {
    kind: 'patch',
    badge: 'Infrared Patching',
    title: 'Pothole & Apron Restoration',
    body: 'Eliminate dangerous trip hazards, sunken catch basins, and broken garage lip ramps. True thermal compaction prevents edge separation.',
    points: ['Hot-mix asphalt integration', 'Smooth garage apron ramp beveling', 'Catch basin perimeter stabilization'],
    cta: 'Get Pothole Quote',
  },
  {
    kind: 'prep',
    badge: 'Chemical Neutralization',
    title: 'Oil Remediation & Power Prep',
    body: 'Unaddressed petrochemicals break down bitumen binders. We burn, chemical-lock, and prime oil stains to guarantee 100% sealer adhesion.',
    points: ['High CFM industrial rotary blower prep', 'Synthetic polymer oil stain blocker', 'Eliminates flaking & premature peeling'],
    cta: 'Learn About Surface Prep',
  },
] as const

export const showcases = [
  {
    title: 'Residential Driveway',
    place: 'Barrie, ON',
    before: 'Grey, porous, oxidized surface with micro-fissures',
    after: 'Deep hot-pour crack seals and dual hand-squeegee rubberized coating.',
    image: '/forge-seal/driveway.jpg',
    alt: 'Finished residential driveway in Barrie',
  },
  {
    title: 'Commercial Retail Plaza',
    place: 'Newmarket, ON',
    before: 'Faded lines, oil degradation, poor curb appeal',
    after: '110-stall line re-striping, oil priming, and jet-spray commercial seal.',
    image: '/forge-seal/plaza.jpg',
    alt: 'Finished commercial plaza lot in Newmarket',
  },
  {
    title: 'Lakefront Estate Driveway',
    place: 'Innisfil, ON',
    before: 'Aggressive winter frost fissures, moisture penetration',
    after: 'Highway-grade 400°F elastomeric vulcanized crack filling and seal.',
    image: '/forge-seal/crack.jpg',
    alt: 'Crack-sealed lakefront driveway in Innisfil',
  },
] as const

export const cheapPoints = [
  'Watered Down Products: Cut up to 40% with tap water to boost profit margins; looks shiny for 3 weeks then oxidizes and flakes away.',
  'Cold Bottled Caulk: Squeeze bottles from big box retailers dry out, crack, and pop loose during the first -20°C freeze cycle.',
  'Careless Overspray: Staining surrounding interlock stones, concrete garage pads, siding, and manicured sod borders.',
  'Uninsured Liability: No WSIB clearance or commercial liability coverage puts homeowner or building owner at direct financial risk.',
] as const

export const forgePoints = [
  '100% Undiluted Pure Emulsion: Heavy polymer additives provide maximum bitumen bond depth, water repellent shield, and rich jet-black matte cure.',
  'Highway 400°F Vulcanized Hot Rubber: Melts directly into crack sidewalls, self-healing under extreme vehicular traffic loads and thermal expansion.',
  'Meticulous Hand-Edged Precision: Garage doors, paver borders, walkways, and curbs are hand-brushed for crisp, flawless lines without any overspray.',
  'Full Ontario WSIB & $5M Insurance: Fully vetted, safety-trained, uniformed technicians with guaranteed multi-year performance warranty.',
] as const

export const regions = [
  {
    name: 'Simcoe County',
    role: 'Primary Hub',
    note: 'Daily crew routing across lakefront residences, commercial plazas, and distribution facilities:',
    towns: ['Barrie', 'Innisfil', 'Orillia', 'Bradford West', 'Collingwood', 'Wasaga Beach', 'Midland', 'Angus / Essa'],
  },
  {
    name: 'York Region',
    role: 'Metro Corridor',
    note: 'High-frequency commercial parking lots, HOA subdivisions, and institutional pavement care:',
    towns: ['Newmarket', 'Aurora', 'Richmond Hill', 'Vaughan', 'King City', 'East Gwillimbury', 'Markham', 'Stouffville'],
  },
  {
    name: 'Dufferin & Surrounding',
    role: 'Regional Route',
    note: 'Estate long driveways, rural commercial hubs, and municipal facility maintenance:',
    towns: ['Orangeville', 'Shelburne', 'Alliston', 'New Tecumseth', 'Mono', 'Tottenham', 'Beeton', 'Caledon North'],
  },
] as const

export const reviews = [
  {
    quote:
      'ForgeSeal completely transformed our retail plaza in Barrie. The line striping was laser straight and parking lot was open on schedule on Monday morning. Best commercial pavement contractor we have used in 10 years.',
    name: 'David M.',
    role: 'Commercial Plaza Property Manager • Barrie',
  },
  {
    quote:
      "Best driveway sealers in Simcoe County. They didn't spray the grass or my interlock pavers, and the crack repair was done with real hot rubber, not that cheap liquid stuff. The finish is jet-black and looks brand new.",
    name: 'Sarah K.',
    role: 'Lakefront Homeowner • Innisfil',
  },
  {
    quote:
      'Fast estimate, transparent pricing, and courteous uniformed crew in Newmarket. Provided our facility with full WSIB documentation and commercial insurance certificate within minutes of requesting our quote.',
    name: 'Robert T.',
    role: 'Industrial Facility Director • Newmarket',
  },
] as const

export const faqs = [
  {
    question: 'How often should I sealcoat my asphalt in Ontario?',
    answer:
      'In Central Ontario, severe winter freeze-thaw cycles cause sub-base moisture expansion. We strongly recommend high-grade sealcoating every 2 to 3 years. Waiting longer allows the protective bitumen tar to oxidize, turning the asphalt gray, brittle, and prone to irreversible cracking.',
  },
  {
    question: 'What is the difference between hot-pour rubber crack sealing and cold caulk?',
    answer:
      'Cold pour caulks sold in hardware retail stores are water-based acrylics that cure rigid and rapidly shrink, pulling away from asphalt edges within months. ForgeSeal uses highway-grade elastomeric asphalt heated to 400°F. This molten rubber bonds directly to the fissure walls, remaining pliable through -30°C Canadian winters and +35°C summer heatwaves without pulling loose.',
  },
  {
    question: 'How long before I can drive on newly sealed asphalt?',
    answer:
      'Light pedestrian foot traffic is typically safe after 4 to 6 hours. For vehicular parking and turning maneuvers, we recommend keeping cars and heavy machinery off the surface for 24 to 48 hours, depending on ambient humidity and direct sunlight exposure.',
  },
  {
    question: 'Do you provide line striping to Ontario building code & ADA standards?',
    answer:
      'Yes. Our commercial layout division specializes in full compliance with the Accessibility for Ontarians with Disabilities Act (AODA) and Ontario Building Code, including barrier-free stall widths, adjacent access aisles, international accessibility symbol stencils, and designated fire route regulations.',
  },
  {
    question: 'Is ForgeSeal fully insured and WSIB compliant?',
    answer:
      'Without question. We hold active Workplace Safety and Insurance Board (WSIB) clearance certificates and maintain a $5,000,000 commercial liability policy. Certificate of insurance copies can be issued directly to property management companies, HOA boards, and general contractors prior to mobilization.',
  },
] as const

export const estimateServices = [
  'Driveway Hand-Brushed Sealing',
  'Commercial Parking Lot Sealing',
  'Hot-Pour Rubber Crack Repair',
  'Parking Stall Line Striping',
  'Pothole Patch & Ramp Apron Repair',
  'Full Multi-Service Overhaul',
] as const

export const timelines = [
  'Immediately (Next Available Date)',
  'Within 1 to 2 Weeks',
  'This Season (Next 30 Days)',
  'Commercial Budget Planning',
] as const

export const footerServices = [
  'Commercial & Residential Sealcoating',
  'Hot-Pour Rubberized Crack Sealing',
  'Parking Lot Asset Management',
  'Precision Line Striping & Markings',
  'Asphalt Pothole & Ramp Repairs',
  'Driveway Apron Restoration',
] as const

export const footerTowns = ['Barrie', 'Innisfil', 'Orillia', 'Bradford', 'Newmarket', 'Alliston', 'Orangeville', 'Shelburne'] as const
