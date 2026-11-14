import { Armchair, ArrowRight, Building2, Check, Home, Package, Route, Truck, type LucideIcon } from 'lucide-react'

import { services, type ServiceIcon } from '../lib/content'

const icons: Record<ServiceIcon, LucideIcon> = {
  home: Home,
  route: Route,
  truck: Truck,
  package: Package,
  armchair: Armchair,
  building: Building2,
}

export default function EmtServices() {
  return (
    <section id="services" className="bg-[var(--emt-surface)] px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="emt-kicker">Professional Solutions For Every Moving Need</p>
        <h2 className="emt-h2 mt-2 max-w-3xl">Complete Charlotte & Waxhaw Moving Services</h2>
        <p className="mt-3 max-w-3xl text-[var(--emt-muted)]">
          Whether you are transitioning a Ballantyne penthouse, a multi-story home in Marvin, or loading an out-of-state
          container, we provide dependable, specialized care.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.title} className="emt-card emt-hover flex flex-col gap-4 p-5 sm:p-6">
                <div className="flex size-11 items-center justify-center rounded-xl bg-[var(--emt-surface-low)] text-[var(--emt-navy)]">
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="emt-h3">{service.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--emt-muted)]">{service.body}</p>
                <ul className="space-y-2 text-sm">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-[var(--emt-emerald)]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-auto text-sm font-bold text-[var(--emt-navy)]">{service.price}</p>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[var(--emt-amber-ink)]" href="#quick-estimator">
                  Inquire
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
