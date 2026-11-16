import { sdImages, type SdPhoto } from './images'

export const phone = {
  display: '(705) 305-5084',
  href: 'tel:+17053055084',
  sms: 'sms:+17053055084',
} as const

export const address = {
  line: '43 Gemini Dr, Barrie, ON L9J 0P5, Canada',
  short: '43 Gemini Dr',
  city: 'Barrie, ON L9J 0P5',
} as const

export const googleMaps = {
  href: 'https://www.google.com/maps/place/Mobile+truck+and+machine+repairs+Servidiesel+Inc/data=!4m7!3m6!1s0x882abb8c52eb5617:0x43aa206a10bf0f8c!8m2!3d44.3423938!4d-79.6383546!16s%2Fg%2F11mlvv7g8h!19sChIJF1brUoy7KogRjA-_EGogqkM?hl=en',
  label: 'Mobile truck and machine repairs Servidiesel Inc',
} as const

export const website = {
  href: 'https://dieselservicetech.com/#top',
  label: 'dieselservicetech.com',
} as const

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Field Work' },
  { href: '#offer', label: 'Dispatch', badge: 'Now' },
  { href: '#areas', label: 'Service Area' },
  { href: '#reviews', label: 'Google' },
  { href: '#quote', label: 'Request' },
] as const

export const heroStats = [
  { value: 'On site', label: 'Shop comes to the machine' },
  { value: 'No tow', label: 'Driveway, yard, or roadside', accent: true },
  { value: 'Owner', label: 'Cristiano on the job' },
  { value: 'Barrie', label: '43 Gemini Dr' },
] as const

export const ways = [
  {
    kicker: 'Fastest • Speak to the owner',
    title: `Call ${phone.display}`,
    body: 'Tell Cristiano where the truck or machine is sitting, what it is, and what it stopped doing.',
    action: `Call ${phone.display}`,
    href: phone.href,
  },
  {
    kicker: 'Book the visit',
    title: 'Request a mobile visit',
    body: 'Send the location, the equipment, and how urgent it is. If it is down right now, call — the form is for scheduling.',
    action: 'Request a visit',
    href: '#quote',
    primary: true,
  },
  {
    kicker: 'Photos of the fault',
    title: 'Text the breakdown',
    body: 'Text a photo of the dash, the leak, or the hose to the same number. It gives the mobile shop a head start.',
    action: 'Text photos',
    href: phone.sms,
  },
] as const

export const assurances = [
  'The shop comes to the machine',
  'Cummins, Cat, Detroit, and Volvo',
  'Hoses, fittings, and cylinders on site',
] as const

export const services: readonly {
  title: string
  badge: string
  body: string
  points: readonly string[]
  link: string
  image: SdPhoto
  imageAlt: string
}[] = [
  {
    title: 'Battery',
    badge: 'Power',
    body: 'Testing, replacement, and jump-start service for cars, trucks, and heavy equipment.',
    points: ['Testing', 'Replacement', 'Jump-starts for cars, trucks, and heavy equipment'],
    link: 'Request battery service',
    image: sdImages.work2,
    imageAlt: sdImages.work2.alt,
  },
  {
    title: 'Auto Engine Diagnostic',
    badge: 'Scan',
    body: 'Computerized scan for check-engine, performance and emissions issues — root-cause first.',
    points: ['Check-engine scan', 'Performance issues', 'Emissions issues'],
    link: 'Request a diagnostic',
    image: sdImages.work1,
    imageAlt: sdImages.work1.alt,
  },
  {
    title: 'Electrical',
    badge: 'Electrical',
    body: 'Alternators, starters, wiring harnesses, sensors and lighting — full electrical troubleshooting.',
    points: ['Alternators and starters', 'Wiring harnesses', 'Sensors and lighting'],
    link: 'Request electrical service',
    image: sdImages.work2,
    imageAlt: sdImages.work2.alt,
  },
  {
    title: 'Brakes',
    badge: 'Brakes',
    body: 'Pads, rotors, calipers and lines inspected and replaced for safe, smooth stopping power.',
    points: ['Pads and rotors', 'Calipers and lines', 'Inspected and replaced'],
    link: 'Request brake service',
    image: sdImages.work5,
    imageAlt: sdImages.work5.alt,
  },
  {
    title: 'Steering & Suspension',
    badge: 'Handling',
    body: 'Tie rods, ball joints, shocks, struts and bushings — restore stable handling.',
    points: ['Tie rods and ball joints', 'Shocks and struts', 'Bushings'],
    link: 'Request steering service',
    image: sdImages.work5,
    imageAlt: sdImages.work5.alt,
  },
  {
    title: 'Air & Cabin Filter',
    badge: 'Filters',
    body: 'Engine air and cabin filter replacement to protect performance and air quality.',
    points: ['Engine air filter', 'Cabin filter', 'Performance and air quality'],
    link: 'Request a filter change',
    image: sdImages.work3,
    imageAlt: sdImages.work3.alt,
  },
  {
    title: 'Oil Change',
    badge: 'Service',
    body: 'Full-service oil and filter change with manufacturer-spec lubricants and disposal.',
    points: ['Oil and filter', 'Manufacturer-spec lubricants', 'Disposal'],
    link: 'Request an oil change',
    image: sdImages.work4,
    imageAlt: sdImages.work4.alt,
  },
  {
    title: 'Air Conditioning',
    badge: 'A/C',
    body: 'A/C diagnostics, recharge, leak detection and compressor repair.',
    points: ['Diagnostics and recharge', 'Leak detection', 'Compressor repair'],
    link: 'Request A/C service',
    image: sdImages.work3,
    imageAlt: sdImages.work3.alt,
  },
  {
    title: 'Brake Service & Repair',
    badge: 'Overhaul',
    body: 'Complete brake overhaul including hydraulics, ABS faults and parking brake adjustment.',
    points: ['Brake hydraulics', 'ABS faults', 'Parking brake adjustment'],
    link: 'Request a brake overhaul',
    image: sdImages.work6,
    imageAlt: sdImages.work6.alt,
  },
  {
    title: 'Exhaust',
    badge: 'Exhaust',
    body: 'Muffler, pipe and manifold repair or replacement — including DPF/DEF for diesel.',
    points: ['Muffler, pipe, and manifold', 'Repair or replacement', 'DPF and DEF'],
    link: 'Request exhaust service',
    image: sdImages.work4,
    imageAlt: sdImages.work4.alt,
  },
  {
    title: 'Transmission',
    badge: 'Drivetrain',
    body: 'Fluid service, diagnostics, and clutch / gearbox repair for light and heavy vehicles.',
    points: ['Fluid service', 'Diagnostics', 'Clutch and gearbox repair'],
    link: 'Request transmission service',
    image: sdImages.work1,
    imageAlt: sdImages.work1.alt,
  },
  {
    title: 'Mobile Mechanic',
    badge: 'Comes to you',
    body: 'We come to your driveway, fleet yard, or job site — fully equipped on-site service.',
    points: ['Driveway, fleet yard, or job site', 'Fully equipped', 'On-site service'],
    link: 'Request a mobile visit',
    image: sdImages.work6,
    imageAlt: sdImages.work6.alt,
  },
  {
    title: 'Heavy Diesel',
    badge: 'Engines',
    body: 'Service and repair for Cummins, Cat, Detroit, Volvo and other heavy diesel engines.',
    points: ['Cummins and Cat', 'Detroit and Volvo', 'Other heavy diesel engines'],
    link: 'Request diesel service',
    image: sdImages.work4,
    imageAlt: sdImages.work4.alt,
  },
  {
    title: 'Excavator Repair',
    badge: 'Machines',
    body: 'On-site repairs for tracked and wheeled excavators — engine, hydraulics and tracks.',
    points: ['Tracked and wheeled excavators', 'Engine and hydraulics', 'Tracks'],
    link: 'Request excavator service',
    image: sdImages.work7,
    imageAlt: sdImages.work7.alt,
  },
  {
    title: 'Truck Repair',
    badge: 'Trucks',
    body: 'Light and medium truck service: drivetrain, brakes, electrical and DOT inspection prep.',
    points: ['Light and medium trucks', 'Drivetrain, brakes, and electrical', 'DOT inspection prep'],
    link: 'Request truck service',
    image: sdImages.work5,
    imageAlt: sdImages.work5.alt,
  },
  {
    title: 'Heavy Truck',
    badge: 'Class 7–8',
    body: 'Class 7-8 truck repair: clutches, suspensions, air brakes and engine work.',
    points: ['Class 7–8 trucks', 'Clutches and suspensions', 'Air brakes and engine work'],
    link: 'Request heavy truck service',
    image: sdImages.work6,
    imageAlt: sdImages.work6.alt,
  },
  {
    title: 'Hydraulic Hose Repair',
    badge: 'Hoses',
    body: 'On-site hose making and replacement to keep equipment running and crews working.',
    points: ['On-site hose making', 'Replacement', 'Keeps equipment running'],
    link: 'Request a hose repair',
    image: sdImages.hydraulics,
    imageAlt: sdImages.hydraulics.alt,
  },
  {
    title: 'Hydraulic Fittings',
    badge: 'Fittings',
    body: 'JIC, ORFS, BSP and metric fittings supplied and installed on the spot.',
    points: ['JIC and ORFS', 'BSP and metric', 'Supplied and installed on the spot'],
    link: 'Request fittings',
    image: sdImages.hydraulics,
    imageAlt: sdImages.hydraulics.alt,
  },
  {
    title: 'Electrical Repair',
    badge: 'Equipment',
    body: 'Heavy equipment electrical: 12V/24V systems, ECMs, sensors and wiring repair.',
    points: ['12V and 24V systems', 'ECMs', 'Sensors and wiring'],
    link: 'Request equipment electrical',
    image: sdImages.work2,
    imageAlt: sdImages.work2.alt,
  },
  {
    title: 'Cylinder Repair',
    badge: 'Cylinders',
    body: 'Hydraulic cylinder reseal, rod replacement, honing and pressure testing.',
    points: ['Reseal', 'Rod replacement', 'Honing and pressure testing'],
    link: 'Request cylinder service',
    image: sdImages.work7,
    imageAlt: sdImages.work7.alt,
  },
]

export const reasons = [
  {
    title: 'Owner on the job',
    body: 'Servidiesel is owned and operated by Cristiano. The call goes to the person who does the work.',
  },
  {
    title: 'The shop comes to you',
    body: 'A fully equipped mobile shop rolls to the driveway, the fleet yard, or the job site.',
  },
  {
    title: 'Leave the machine where it sits',
    body: 'Cars, trucks, and heavy equipment are serviced in place, so a tow is not the first step.',
  },
  {
    title: 'Hydraulics on site',
    body: 'Hoses, fittings, and cylinder reseals are made and installed where the equipment is working.',
  },
] as const

export const galleryFilters = [
  { id: 'all', label: 'All field work' },
  { id: 'trucks', label: 'Trucks' },
  { id: 'diesel', label: 'Diesel' },
  { id: 'equipment', label: 'Equipment' },
  { id: 'diagnostics', label: 'Diagnostics' },
] as const

export type GalleryFilter = (typeof galleryFilters)[number]['id']

export const projects: readonly {
  title: string
  place: string
  body: string
  image: SdPhoto
  alt: string
  show: readonly Exclude<GalleryFilter, 'all'>[]
}[] = [
  {
    title: 'Roadside diagnostics',
    place: 'Highway tractor',
    body: 'Diagnostics on a Kenworth at the side of the road.',
    image: sdImages.work1,
    alt: sdImages.work1.alt,
    show: ['trucks', 'diagnostics'],
  },
  {
    title: 'Laptop diagnostics',
    place: 'On site',
    body: 'Electrical troubleshooting with a laptop at the machine.',
    image: sdImages.work2,
    alt: sdImages.work2.alt,
    show: ['diagnostics'],
  },
  {
    title: 'Engine and sensors',
    place: 'Truck stop lot',
    body: 'Engine and sensor work where the truck was already parked.',
    image: sdImages.work3,
    alt: sdImages.work3.alt,
    show: ['trucks', 'diesel'],
  },
  {
    title: 'Heavy diesel repair',
    place: 'On site',
    body: 'Heavy diesel engine repair with the tools brought to the equipment.',
    image: sdImages.work4,
    alt: sdImages.work4.alt,
    show: ['diesel'],
  },
  {
    title: 'Class 6–7 front end',
    place: 'Diesel truck',
    body: 'Front-end rebuild on a Class 6–7 diesel.',
    image: sdImages.work5,
    alt: sdImages.work5.alt,
    show: ['trucks', 'diesel'],
  },
  {
    title: 'Loaded highway rig',
    place: 'Mobile call',
    body: 'A service call on a loaded highway rig.',
    image: sdImages.work6,
    alt: sdImages.work6.alt,
    show: ['trucks'],
  },
  {
    title: 'Excavator attachment',
    place: 'Job site',
    body: 'Auger and hydraulic attachment service on an excavator.',
    image: sdImages.work7,
    alt: sdImages.work7.alt,
    show: ['equipment'],
  },
]

export const coverage = ['Barrie', 'Driveways', 'Fleet yards', 'Job sites', 'Roadsides'] as const

export const faqs = [
  {
    q: 'Do you come to the truck or the machine?',
    a: 'Yes. Cristiano brings a fully equipped mobile shop to the driveway, the fleet yard, or the job site. The truck or machine can stay where it is sitting.',
  },
  {
    q: 'What do you work on?',
    a: 'Cars, light and medium trucks, Class 7–8 trucks, and tracked or wheeled excavators. Heavy diesel work covers Cummins, Cat, Detroit, Volvo, and other heavy diesel engines. Hydraulics include hoses, fittings, and cylinders.',
  },
  {
    q: 'Can you make a hydraulic hose on site?',
    a: 'Yes. Hose making and replacement happen on site, along with JIC, ORFS, BSP, and metric fittings. Cylinder work covers reseals, rod replacement, honing, and pressure testing.',
  },
  {
    q: 'What should I have ready when I call?',
    a: 'Where the machine is, what it is, and what it stopped doing. A photo of the dash, the leak, or the hose helps. Text it to (705) 305-5084, or call that number if it is down now.',
  },
  {
    q: 'Is this only heavy equipment?',
    a: 'Heavy diesel and excavators are a core part of the work. The same mobile shop also covers cars and trucks: battery, diagnostics, electrical, brakes, steering, filters, oil, air conditioning, exhaust, and transmission.',
  },
  {
    q: 'Where are you based?',
    a: '43 Gemini Dr, Barrie, ON L9J 0P5. Service is mobile, at the driveway, fleet yard, job site, or roadside where the machine is sitting.',
  },
] as const

export const serviceOptions = [
  'Battery',
  'Auto Engine Diagnostic',
  'Electrical',
  'Brakes',
  'Steering & Suspension',
  'Air & Cabin Filter',
  'Oil Change',
  'Air Conditioning',
  'Brake Service & Repair',
  'Exhaust',
  'Transmission',
  'Mobile Mechanic',
  'Heavy Diesel',
  'Excavator Repair',
  'Truck Repair',
  'Heavy Truck',
  'Hydraulic Hose Repair',
  'Hydraulic Fittings',
  'Electrical Repair',
  'Cylinder Repair',
] as const

export const timelines = ['Breakdown now', 'This week', 'Scheduled maintenance'] as const

export const footerServices = [
  'Battery',
  'Auto Engine Diagnostic',
  'Electrical',
  'Brakes',
  'Steering & Suspension',
  'Air & Cabin Filter',
  'Oil Change',
  'Air Conditioning',
  'Brake Service & Repair',
  'Exhaust',
  'Transmission',
  'Mobile Mechanic',
  'Heavy Diesel',
  'Excavator Repair',
  'Truck Repair',
  'Heavy Truck',
  'Hydraulic Hose Repair',
  'Hydraulic Fittings',
  'Electrical Repair',
  'Cylinder Repair',
] as const
