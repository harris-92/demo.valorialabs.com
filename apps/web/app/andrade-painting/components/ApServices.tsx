import { ArrowRight, CheckCircle2, Droplets } from 'lucide-react'

import { services } from '../lib/content'
import ApImage from './ApImage'

export default function ApServices() {
  return (
    <section id="services" className="bg-[var(--ap-container)] py-16 lg:py-20">
      <div className="ap-wrap-full">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="ap-kicker">Trade Craftsmanship</p>
            <h2 className="ap-h2 mt-2">Complete Interior, Exterior & Commercial Solutions</h2>
            <p className="mt-3 text-[var(--ap-muted)]">
              From single-room repaints in Ballantyne to multi-building corporate campuses in Uptown Charlotte, Andrade
              Painting brings specialized equipment, skilled crews, and master preparation.
            </p>
          </div>
          <a className="ap-btn-soft self-start" href="#quote">
            Explore All Options
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="ap-card ap-lift group flex flex-col">
              {'image' in service ? (
                <div className="relative h-56 overflow-hidden rounded-t-[var(--ap-radius)]">
                  <ApImage
                    src={service.image.src}
                    alt={service.imageAlt}
                    width={service.image.width}
                    height={service.image.height}
                    quality={60}
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="ap-photo h-full w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded bg-[var(--ap-navy)]/80 px-2 py-1 text-[11px] font-semibold text-white uppercase">
                    {service.badge}
                  </span>
                </div>
              ) : (
                <div className="relative flex h-56 items-center justify-center rounded-t-[var(--ap-radius)] bg-[var(--ap-container)] p-4">
                  <div className="flex h-full w-full flex-col items-center justify-center rounded-[var(--ap-radius-sm)] bg-[var(--ap-high)] px-4 text-center">
                    <Droplets className="mb-2 size-11 text-[var(--ap-accent)]" aria-hidden="true" />
                    <p className="ap-h3">Pressure Washing</p>
                    <p className="text-sm text-[var(--ap-muted)]">Soft Wash & Hydro Prep</p>
                  </div>
                  <span className="absolute top-3 left-3 rounded bg-[var(--ap-navy)]/80 px-2 py-1 text-[11px] font-semibold text-white uppercase">
                    {service.badge}
                  </span>
                </div>
              )}
              <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                <div>
                  <h3 className="ap-h3">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--ap-muted)]">{service.body}</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[var(--ap-accent)] hover:text-[var(--ap-ink)]" href="#quote">
                  {service.link}
                  <ArrowRight className="size-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
