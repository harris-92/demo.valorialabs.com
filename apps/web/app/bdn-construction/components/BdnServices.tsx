import { ArrowRight, HardHat } from 'lucide-react'

import { services } from '../lib/content'
import BdnImage from './BdnImage'

export default function BdnServices() {
  return (
    <section id="services" className="bg-[var(--bdn-container)] py-16 lg:py-20">
      <div className="bdn-wrap-full">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="bdn-kicker">What we take on</p>
            <h2 className="bdn-h2 mt-2">Construction management for commercial work In Canada</h2>
            <p className="mt-3 text-[var(--bdn-muted)]">
              From the first budget conversation through the day you open. Industrial, commercial, and institutional
              work across Southern Ontario.
            </p>
          </div>
          <a className="bdn-btn-soft self-start" href="#quote">
            Tell us the scope
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="bdn-card bdn-lift group flex flex-col">
              <div className="relative h-52 overflow-hidden rounded-t-[var(--bdn-radius)]">
                <BdnImage
                  src={service.image.src}
                  alt={service.image.alt}
                  width={960}
                  height={720}
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="bdn-photo h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded bg-[var(--bdn-navy)]/80 px-2 py-1 text-[11px] font-semibold text-white uppercase">
                  {service.badge}
                </span>
              </div>
              <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                <div>
                  <h3 className="bdn-h3">{service.title}</h3>
                  <p className="mt-2 text-sm text-[var(--bdn-muted)]">{service.body}</p>
                  <ul className="mt-3 space-y-1.5 text-sm">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <HardHat className="mt-0.5 size-4 shrink-0 text-[var(--bdn-accent)]" aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                <a className="inline-flex items-center gap-1 text-sm font-bold text-[var(--bdn-gold)] hover:text-[var(--bdn-gold-ink)]" href="#quote">
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
