import { Star } from 'lucide-react'

import { ME_REVIEWS } from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'

export default function MeReviews() {
  return (
    <section id="reviews" className="relative w-full py-24 me-page-x">
      <div className="mx-auto max-w-[1440px]">
        <div className="mb-12 max-w-2xl">
          <div className="mb-3 inline-flex items-center rounded-full border border-[var(--me-gold)]/40 bg-[var(--me-gold)]/15 px-3.5 py-1 text-xs font-bold tracking-widest text-[var(--me-gold)] uppercase">
            5.0 from 17 Google reviews
          </div>
          <h2
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
            style={{ fontFamily: DISPLAY }}
          >
            Maverick Epoxy reviews
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/80">
            Customers talk about the crew, the schedule, and the finished floor.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {ME_REVIEWS.map((review) => (
            <article
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-white/15 bg-[var(--me-white)] p-5 shadow-sm sm:p-6"
            >
              <div className="mb-3 flex items-center gap-1 text-[var(--me-primary)]" aria-label="5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} aria-hidden className="size-4 fill-current" />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-[color-mix(in_srgb,var(--me-text)_78%,transparent)]">
                “{review.quote}”
              </p>
              <p className="mt-5 text-sm font-bold text-[var(--me-text)]" style={{ fontFamily: DISPLAY }}>
                {review.name}
              </p>
              <p className="text-xs text-[color-mix(in_srgb,var(--me-text)_55%,transparent)]">{review.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
