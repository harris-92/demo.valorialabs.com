import { MapPin, Navigation, Star } from 'lucide-react'

import { address, areas, directionsHref } from '../lib/content'
import { hmtImages } from '../lib/images'
import HmtImage from './HmtImage'

export default function HmtAreas() {
  return (
    <section id="areas" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="hmt-kicker">Strategic regional distribution</p>
          <h2 className="hmt-h2">Rapid 24/7 Mobile Dispatch Across Milton & Surrounding Regional Hubs</h2>
          <p className="text-[var(--hmt-on-variant)]">
            Headquartered at {address} — our fully equipped mobile tire vans are positioned along the
            Hwy 401, 407 ETR, and QEW corridors for a fast arrival.
          </p>
        </div>
        <div className="grid items-start gap-4 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {areas.map((area, index) => (
              <article
                key={area.name}
                className={`hmt-card p-4 ${'wide' in area && area.wide ? 'sm:col-span-2' : ''}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="hmt-display text-base font-bold">
                    {index + 1}. {area.name}
                  </h3>
                  <span className="hmt-mono shrink-0 rounded-full bg-[color-mix(in_srgb,var(--hmt-tertiary)_16%,transparent)] px-2 py-1 text-[0.62rem] text-[var(--hmt-tertiary)]">
                    {area.eta}
                  </span>
                </div>
                <p className="mt-2 text-sm text-[var(--hmt-on-variant)]">{area.places}</p>
                <p className="mt-3 text-sm font-semibold text-[var(--hmt-tertiary)]">{area.note}</p>
              </article>
            ))}
          </div>
          <aside className="hmt-card space-y-4 p-4 lg:col-span-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="hmt-mono text-[var(--hmt-primary)]">Primary dispatch headquarters</p>
                <h3 className="hmt-display mt-1 text-lg font-bold">Harry Mobile Tire Service 24/7</h3>
                <p className="text-sm text-[var(--hmt-on-variant)]">{address}</p>
              </div>
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[var(--hmt-surface)] text-[var(--hmt-primary-container)]">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
            </div>
            <div className="relative h-64 overflow-hidden rounded-xl">
              <HmtImage
                src={hmtImages.miltonMap.src}
                alt={hmtImages.miltonMap.alt}
                width={hmtImages.miltonMap.width}
                height={hmtImages.miltonMap.height}
                sizes="(min-width: 1024px) 420px, 100vw"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 rounded-xl bg-[var(--hmt-surface)] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="flex items-center gap-1 text-[var(--hmt-primary-container)]" aria-label="5.0 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                  ))}
                </p>
                <p className="mt-1 text-sm font-semibold">5.0 Star Business</p>
                <p className="text-xs text-[var(--hmt-tertiary)]">Verified Google Profile</p>
              </div>
              <a
                className="hmt-btn-ghost px-3 py-2 text-sm"
                href={directionsHref}
                rel="noopener noreferrer"
                target="_blank"
              >
                Directions
                <Navigation className="size-4" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm text-[var(--hmt-on-variant)]">
              Available 24 hours a day • 7 days a week • 365 days a year
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
