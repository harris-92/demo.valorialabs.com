import { BadgeCheck, Star } from 'lucide-react'

import { reviews } from '../lib/content'

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--cpm-amber)]" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function CpmReviews() {
  return (
    <section id="reviews" className="bg-[var(--cpm-blue-wash)] py-16 lg:py-20">
      <div className="cpm-wrap">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="cpm-kicker">Google reviews</p>
            <h2 className="cpm-h2 mt-2">What Recent Customers Said</h2>
            <p className="mt-2 text-[var(--cpm-muted)]">
              Shortened from the Google reviews shown on the Carolina Premier site. The widget there reads 5.0 from 21
              reviews.
            </p>
          </div>
          <div className="cpm-card cpm-lift flex items-center gap-4 p-4">
            <div>
              <Stars />
              <p className="cpm-h3 mt-1 text-lg">5.0 Star Overall</p>
              <p className="text-xs text-[var(--cpm-muted)]">21 Google Reviews</p>
            </div>
            <div className="flex size-12 items-center justify-center rounded-full bg-[var(--cpm-container)] text-lg font-bold">
              G
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="cpm-card cpm-lift flex flex-col justify-between gap-4 p-6">
              <div className="space-y-3">
                <Stars />
                <p className="italic">{review.quote}</p>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-[var(--cpm-container)] pt-3">
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-[var(--cpm-muted)]">{review.detail}</p>
                </div>
                <BadgeCheck className="size-5 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
