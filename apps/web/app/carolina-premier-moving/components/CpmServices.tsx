import { ArrowRight, CheckCircle2 } from 'lucide-react'

import { services } from '../lib/content'
import CpmImage from './CpmImage'

export default function CpmServices() {
  return (
    <section id="services" className="bg-[var(--cpm-container)] py-16 lg:py-20">
      <div className="cpm-wrap-full">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="cpm-kicker">Moving and hauling</p>
            <h2 className="cpm-h2 mt-2">Local Moves, Packing, Labor, and Junk Hauling</h2>
            <p className="mt-3 text-[var(--cpm-muted)]">
              One crew for the full move or just the heavy part. Choose a truck and movers, packing help, labor only,
              or a haul-away.
            </p>
          </div>
          <a className="cpm-btn-soft self-start" href="#quote">
            Get a quote for your move
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-6">
          {services.map((service, index) => {
            return (
              <article
                key={service.title}
                className={`cpm-card cpm-lift group flex flex-col ${index < 3 ? 'xl:col-span-2' : 'xl:col-span-3'}`}
              >
                <div className="relative h-56 overflow-hidden rounded-t-[var(--cpm-radius)]">
                  <CpmImage
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="cpm-photo h-full w-full object-cover"
                  />
                  <span className="absolute top-3 left-3 rounded bg-[var(--cpm-navy)]/80 px-2 py-1 text-[11px] font-semibold text-white uppercase">
                    {service.badge}
                  </span>
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4 p-4">
                  <div>
                    <h3 className="cpm-h3">{service.title}</h3>
                    <p className="mt-2 text-sm text-[var(--cpm-muted)]">{service.body}</p>
                    <ul className="mt-3 space-y-1.5 text-sm">
                      {service.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a className="cpm-btn-quote self-start" href="#quote">
                    {service.link}
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
