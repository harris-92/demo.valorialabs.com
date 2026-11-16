import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { services } from '../lib/content'
import SdImage from './SdImage'

export default function SdServices() {
  return (
    <section id="services" className="bg-[var(--sd-container)] py-16 lg:py-20">
      <div className="sd-wrap-full">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="sd-kicker">What the mobile shop covers</p>
            <h2 className="sd-h2 mt-2">Diesel, trucks, excavators, and hydraulics</h2>
            <p className="mt-3 text-[var(--sd-muted)]">
              Cars, trucks, heavy diesel, excavators, and hydraulics. Every service on the live Servidiesel site, done
              where the machine is sitting.
            </p>
          </div>
          <a className="sd-btn-soft self-start" href="#quote">
            Request a visit
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="sd-card sd-lift group flex flex-col">
              <div className="relative h-56 overflow-hidden rounded-t-[var(--sd-radius)]">
                <SdImage
                  src={service.image.src}
                  alt={service.imageAlt}
                  width={service.image.width}
                  height={service.image.height}
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="sd-photo h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded bg-[var(--sd-navy)]/90 px-2 py-1 text-[11px] font-semibold text-white uppercase">
                  {service.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                <div>
                  <h3 className="sd-h3">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--sd-muted)]">{service.body}</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[var(--sd-accent)] hover:text-[var(--sd-ink)]" href="#quote">
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
