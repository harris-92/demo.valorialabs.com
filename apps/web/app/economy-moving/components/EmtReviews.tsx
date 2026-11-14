import { Phone, Star } from 'lucide-react'

import { phones, reviews } from '../lib/content'

export default function EmtReviews() {
  return (
    <section id="reviews" className="emt-band px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-1 text-[var(--emt-amber)]" aria-hidden="true">
          {Array.from({ length: 5 }, (_, index) => (
            <Star key={index} className="size-4 fill-current" />
          ))}
        </div>
        <h2 className="emt-h2 mt-2">What Our Clients Say</h2>
        <p className="mt-2 max-w-2xl text-[var(--emt-on-navy-muted)]">
          Feedback from Charlotte, Waxhaw, and interstate customers who trusted Dan and the Economy Moving team.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviews.map((review) => (
            <figure key={review.name} className="emt-card emt-hover flex flex-col gap-4 p-5">
              <div className="flex items-center justify-between gap-3">
                <div className="flex text-[var(--emt-amber)]" aria-label="5 star rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="size-3.5 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs font-bold tracking-wide text-[var(--emt-emerald)] uppercase">{review.source}</span>
              </div>
              <blockquote className="text-sm leading-relaxed text-[var(--emt-ink)]">&ldquo;{review.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto">
                <p className="font-bold text-[var(--emt-navy)]">{review.name}</p>
                <p className="text-sm text-[var(--emt-muted)]">{review.place}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl border border-white/15 bg-[var(--emt-navy-dark)] px-5 py-5 text-white sm:flex-row sm:items-center">
          <div>
            <p className="font-bold">Over 150+ verified 5-star reviews</p>
            <p className="text-sm text-[var(--emt-on-navy-muted)]">
              Serving Mecklenburg, Union, York, and Lancaster counties.
            </p>
          </div>
          <a className="emt-btn px-5 py-3" href={phones.primary.href}>
            <Phone className="size-4" aria-hidden="true" />
            Speak Directly with Dan
          </a>
        </div>
      </div>
    </section>
  )
}
