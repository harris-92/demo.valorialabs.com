import { ArrowRight } from 'lucide-react'

import { ME_LOCATION, ME_PHONE_TEL, ME_SERVICE_AREAS } from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'

export default function MeLocations() {
  return (
    <section id="locations" className="relative w-full py-24 me-page-x">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-5">
          <div className="inline-flex items-center rounded-full border border-[var(--me-gold)]/40 bg-[var(--me-gold)]/15 px-3.5 py-1 text-xs font-bold tracking-widest text-[var(--me-gold)] uppercase">
            {ME_LOCATION}
          </div>
          <h2
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            style={{ fontFamily: DISPLAY }}
          >
            Nearby Locations We Serve
          </h2>
          <p className="text-base leading-relaxed text-white/80">
            These towns around Robbins are where we install epoxy flooring, from garage floor coatings in Pinehurst
            and Southern Pines to slabs in Carthage, Aberdeen, Vass, and Cameron.
          </p>
          <a
            href={ME_PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--me-primary)] px-6 py-3 font-bold text-[var(--me-white)] transition-colors hover:bg-[var(--me-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--me-gold)]"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:col-span-7">
          {ME_SERVICE_AREAS.map((name) => (
            <article
              key={name}
              className="rounded-2xl border border-white/15 bg-[var(--me-white)] p-5 shadow-sm transition-all hover:border-[var(--me-gold)] hover:shadow-lg"
            >
              <div className="mb-2 flex items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-[var(--me-text)]" style={{ fontFamily: DISPLAY }}>
                  {name}
                </h3>
                <span className="size-2.5 shrink-0 rounded-full bg-[var(--me-primary)]" aria-hidden />
              </div>
              <p className="text-xs leading-relaxed text-[color-mix(in_srgb,var(--me-text)_62%,transparent)]">
                Near Robbins, NC
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
