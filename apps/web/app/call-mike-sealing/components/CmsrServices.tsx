import { ArrowRight, ChevronRight, Wrench } from 'lucide-react'

import { cmsrImages } from '../lib/images'
import CmsrImage from './CmsrImage'

const services = [
  {
    image: cmsrImages.driveway,
    alt: 'Freshly sealed residential asphalt driveway',
    badge: 'Flagship Service',
    meta: 'Cure: 24-48 Hours',
    kicker: 'Commercial & Residential',
    title: '100% Liquid Asphalt Sealing',
    body: 'Utilizing commercial-grade Product #1999 pure oil-based liquid asphalt. Imparts a rich satin jet-black appearance while replenishing vital asphalt oils lost to sun UV degradation.',
    key: 'Key: UV & Salt Shield',
  },
  {
    image: cmsrImages.sidewalkCrack,
    alt: 'Cracked pavement edge prepared for hot-pour repair',
    badge: 'Municipal Grade',
    meta: 'Instant Vehicle Return',
    kicker: 'Structural Preservation',
    title: 'Hot Pour Rubberized Crack Repairs',
    body: 'Applied through specialized heat wands at extreme temperatures. Unlike store caulking, our elastomeric compound vulcanizes into the pavement fissure to permanently block moisture.',
    key: 'Key: Prevents Heaves',
  },
  {
    image: cmsrImages.plaza,
    alt: 'Commercial plaza parking lot ready for line striping',
    badge: 'Code Compliant',
    meta: 'Rapid Dry Formula',
    kicker: 'Plazas & Warehouses',
    title: 'Precision Line Striping & AODA',
    body: 'Ontario Building Code and AODA certified parking layout. High-solids traffic paints for stall striping, EV stalls, pedestrian walk paths, stop bars, and custom numbered layouts.',
    key: 'Key: Max Traffic Flow',
  },
  {
    image: cmsrImages.lotWork,
    alt: 'Commercial asphalt lot during catch basin and curb work',
    badge: 'Sub-Surface Defense',
    meta: 'Heavy Duty Spec',
    kicker: 'Drainage Infrastructure',
    title: 'Catch Basin & Asphalt Patching',
    body: 'Water pooling around sunken storm drains erodes base stone rapidly. We excavate deteriorated collars, rebuild brick structures, and install compacted hot-mix asphalt rings.',
    key: 'Key: Eliminates Sinkholes',
  },
  {
    image: cmsrImages.curb,
    alt: 'Concrete curb and sidewalk edge',
    badge: 'Turnkey Contracting',
    meta: 'Form & Pour',
    kicker: 'Structural Edging',
    title: 'Concrete Curb & Sidewalk Repairs',
    body: 'Eliminate multiple contracting quotes. We handle damaged commercial curbs, trip-hazard concrete grinding, snowplow damage reconstruction, and wheelchair accessibility ramps.',
    key: 'Key: Zero Multi-Trade Hassle',
  },
  {
    image: cmsrImages.driveway,
    alt: 'Compacted asphalt driveway after repaving',
    badge: 'Complete Overhauls',
    meta: 'Laser Graded',
    kicker: 'Heavy Civil & Driveways',
    title: 'Complete Asphalt Repaving',
    body: 'When asphalt is compromised past preservation, we mill, regrade with virgin granular aggregate, and lay certified HL3/HL8 hot mix asphalt compacted with heavy commercial rollers.',
    key: 'Key: 15-20 Year Longevity',
  },
] as const

export default function CmsrServices() {
  return (
    <section id="services" className="bg-[var(--cmsr-surface)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-2">
            <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
              <Wrench className="size-4" aria-hidden="true" />
              Commercial & Residential Pavement Maintenance
            </p>
            <h2 className="cmsr-h2">Engineered Pavement Solutions Across York & Simcoe</h2>
            <p className="text-[var(--cmsr-on-surface-variant)]">
              From single-vehicle residential driveways to multi-acre commercial distribution logistics facilities in Vaughan, Newmarket, and Barrie.
            </p>
          </div>
          <a className="cmsr-btn-secondary shrink-0 px-5 py-3 text-[var(--cmsr-primary)]" href="#quote">
            Request Custom Scope
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="cmsr-links cmsr-links-wide cmsr-links-3 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="cmsr-card group flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-[var(--cmsr-surface-lowest)]">
                <CmsrImage
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="cmsr-label absolute top-3 left-3 rounded bg-[color-mix(in_srgb,var(--cmsr-surface)_90%,transparent)] px-2.5 py-1 text-[10px] text-[var(--cmsr-primary)] backdrop-blur-md">
                  {service.badge}
                </span>
                <span className="cmsr-label absolute right-3 bottom-3 rounded bg-[var(--cmsr-surface-lowest)] px-2 py-0.5 text-[10px]">
                  {service.meta}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-6">
                <div className="space-y-2">
                  <p className="cmsr-label text-[10px] text-[var(--cmsr-primary)]">{service.kicker}</p>
                  <h3 className="cmsr-h3">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--cmsr-on-surface-variant)]">{service.body}</p>
                </div>
                <div className="flex items-center justify-between gap-3 pt-2">
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">{service.key}</span>
                  <a className="cmsr-label inline-flex items-center gap-1 text-[10px] text-[var(--cmsr-primary)]" href="#quote">
                    Book Estimate
                    <ChevronRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
