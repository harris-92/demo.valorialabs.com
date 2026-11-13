import { ArrowRight, BatteryCharging, CircleDot, KeyRound, RefreshCw, Truck, Wrench } from 'lucide-react'

import { services } from '../lib/content'

const icons = {
  emergency: Wrench,
  seasonal: RefreshCw,
  tires: CircleDot,
  battery: BatteryCharging,
  lockout: KeyRound,
  towing: Truck,
} as const

export default function HmtServices() {
  return (
    <section id="services" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl space-y-3">
            <p className="hmt-kicker">Comprehensive mobile mechanical capabilities</p>
            <h2 className="hmt-h2">Full-Spectrum Mobile Tire & Roadside Solutions</h2>
            <p className="text-[var(--hmt-on-variant)]">
              Why wait hours for a tow truck to haul you to a closed shop? Our self-powered Ford
              heavy-duty mobile vans carry Italian hydraulic changers, computerized laser balancers,
              and fresh tire stock.
            </p>
          </div>
          <a className="inline-flex items-center gap-1 text-sm font-bold text-[var(--hmt-tertiary)]" href="#dispatch">
            Inquire custom vehicle specs
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.id]
            const accent = service.tone === 'green' ? 'var(--hmt-tertiary)' : 'var(--hmt-primary-container)'
            return (
              <article key={service.id} id={service.id === 'emergency' || service.id === 'seasonal' ? service.id : undefined} className="hmt-card flex flex-col p-5">
                <span
                  className="mb-4 inline-flex size-11 items-center justify-center rounded-xl"
                  style={{ background: `color-mix(in srgb, ${accent} 18%, transparent)`, color: accent }}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="hmt-display text-lg font-bold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm text-[var(--hmt-on-variant)]">{service.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="hmt-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <a className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: accent }} href="#dispatch">
                  {service.action}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
