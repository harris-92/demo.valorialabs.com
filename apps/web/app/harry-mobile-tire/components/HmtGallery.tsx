import { hmtImages } from '../lib/images'
import HmtImage from './HmtImage'

const shots = [
  {
    image: hmtImages.highwayRescue,
    eyebrow: 'Highway 401 rescue',
    meta: '22 min response',
    title: 'Night Highway 401 Blowout Swap',
    body: 'Rapid safety setup with high-intensity floodlights, removing a damaged alloy wheel and mounting a new tire roadside.',
  },
  {
    image: hmtImages.drivewaySwap,
    eyebrow: 'Driveway convenience',
    meta: 'Residential service',
    title: 'Residential Driveway Seasonal Swap',
    body: 'Dual-vehicle winter changeover completed in 45 minutes while the homeowner kept working from home.',
  },
  {
    image: hmtImages.vanBalancer,
    eyebrow: 'Internal van rig',
    meta: 'Laser precision',
    title: 'Precision On-Site Digital Balancing',
    body: 'Hydraulic tire mounting and high-speed computerized dynamic balancing inside the heated service van.',
  },
  {
    image: hmtImages.fleet,
    eyebrow: 'Commercial fleets',
    meta: 'Halton logistics',
    title: 'Commercial Fleet Tire Overhauls',
    body: 'Weekend turnaround for last-mile delivery fleets, keeping drivers rolling with no weekday downtime.',
  },
  {
    image: hmtImages.runflat,
    eyebrow: 'Touchless mounting',
    meta: 'Forged and run-flat',
    title: 'Run-Flat & Low-Profile Care',
    body: 'Polymer mounting heads protect powder-coated, chrome, and diamond-cut sports rims.',
  },
  {
    image: hmtImages.battery,
    eyebrow: 'Sub-zero rescue',
    meta: 'Battery diagnostics',
    title: 'Sub-Zero Battery Boost & Install',
    body: 'Cold-cranking checks, a starting boost, and AGM battery swaps in Ontario winter temperatures.',
  },
] as const

export default function HmtGallery() {
  return (
    <section id="gallery" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="hmt-kicker">Real work in the field</p>
            <h2 className="hmt-h2">Heavy-Duty Vans & Precision Roadside Technology</h2>
            <p className="text-[var(--hmt-on-variant)]">
              Mobile service units performing tire repairs, balancing, and emergency recoveries under
              Ontario roadside conditions.
            </p>
          </div>
          <p className="hmt-mono text-[var(--hmt-tertiary)]">Authentic field photography</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot) => (
            <figure key={shot.title} className="hmt-card overflow-hidden">
              <div className="relative aspect-[1200/669]">
                <HmtImage
                  src={shot.image.src}
                  alt={shot.image.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="space-y-2 p-4">
                <p className="hmt-mono text-[var(--hmt-primary)]">{shot.eyebrow}</p>
                <p className="text-xs font-semibold text-[var(--hmt-tertiary)]">{shot.meta}</p>
                <h3 className="hmt-display text-lg font-bold">{shot.title}</h3>
                <p className="text-sm text-[var(--hmt-on-variant)]">{shot.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
