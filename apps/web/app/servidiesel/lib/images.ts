export const sdImages = {
  logo: {
    src: '/servidiesel/logo.webp',
    width: 510,
    height: 360,
    alt: 'Servidiesel Inc logo',
  },
  hero: {
    src: '/servidiesel/hero.webp',
    width: 1280,
    height: 720,
    alt: 'Mobile service van beside a highway tractor with the hood open in a snowy Barrie yard at dusk',
  },
  hydraulics: {
    src: '/servidiesel/hydraulics.webp',
    width: 1152,
    height: 864,
    alt: 'Hydraulic hose and steel fittings on heavy equipment, with an excavator arm in the background',
  },
  location: {
    src: '/servidiesel/location.webp',
    width: 1024,
    height: 1024,
    alt: 'Snowy industrial yards with a service van, the kind of site Servidiesel rolls to from Barrie',
  },
  work1: {
    src: '/servidiesel/work-1.webp',
    width: 1200,
    height: 1600,
    alt: 'Roadside diagnostics on a Kenworth highway tractor',
  },
  work2: {
    src: '/servidiesel/work-2.webp',
    width: 1200,
    height: 1600,
    alt: 'Laptop diagnostics and electrical troubleshooting on site',
  },
  work3: {
    src: '/servidiesel/work-3.webp',
    width: 1200,
    height: 1600,
    alt: 'Engine and sensor work in a truck stop lot',
  },
  work4: {
    src: '/servidiesel/work-4.webp',
    width: 1200,
    height: 1600,
    alt: 'Heavy diesel engine repair with equipment on site',
  },
  work5: {
    src: '/servidiesel/work-5.webp',
    width: 1200,
    height: 1600,
    alt: 'Rebuilding a Class 6-7 diesel front end',
  },
  work6: {
    src: '/servidiesel/work-6.webp',
    width: 1200,
    height: 1600,
    alt: 'Mobile service call on a loaded highway rig',
  },
  work7: {
    src: '/servidiesel/work-7.webp',
    width: 1200,
    height: 1600,
    alt: 'Excavator auger and hydraulic attachment service',
  },
} as const

export type SdPhoto = (typeof sdImages)[keyof typeof sdImages]
