import { BadgeCheck, Star } from 'lucide-react'

import { reviews } from '../lib/content'

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--ap-amber)]" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function ApReviews() {
  return (
    <section id="reviews" className="bg-[var(--ap-mint-wash)] py-16 lg:py-20">
      <div className="ap-wrap">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="ap-kicker">Verified Reputation</p>
            <h2 className="ap-h2 mt-2">What Charlotte Homeowners & Businesses Say</h2>
            <p className="mt-2 text-[var(--ap-muted)]">
              Genuine testimonials from clients who value punctual timing, pristine workspaces, and lasting paint
              results.
            </p>
          </div>
          <div className="ap-card ap-lift flex items-center gap-4 p-4">
            <div>
              <Stars />
              <p className="ap-h3 mt-1 text-lg">5.0 Star Overall</p>
              <p className="text-xs text-[var(--ap-muted)]">48+ Google Reviews</p>
            </div>
            <div className="flex size-12 items-center justify-center rounded-full bg-[var(--ap-container)] text-lg font-bold">
              G
            </div>
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="ap-card ap-lift flex flex-col justify-between gap-4 p-6">
              <div className="space-y-3">
                <Stars />
                <p className="italic">{review.quote}</p>
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-[var(--ap-container)] pt-3">
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-[var(--ap-muted)]">{review.detail}</p>
                </div>
                <BadgeCheck className="size-5 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
