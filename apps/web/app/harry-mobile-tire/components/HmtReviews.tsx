import { Star } from 'lucide-react'

import { reviews } from '../lib/content'

export default function HmtReviews() {
  return (
    <section id="reviews" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-8 max-w-3xl space-y-3 text-center">
          <p className="hmt-kicker justify-center">Google verified reviews • 100% real feedback</p>
          <h2 className="hmt-h2">What Milton & GTA Drivers Say About Harry</h2>
          <p className="text-[var(--hmt-on-variant)]">
            Reviews from motorists rescued on the 401, families who booked driveway tire swaps, and
            commercial fleet managers.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.name} className="hmt-card flex flex-col p-5">
              <p className="hmt-mono text-[var(--hmt-tertiary)]">{review.tag}</p>
              <p className="mt-2 flex text-[var(--hmt-primary-container)]" aria-label="5 stars">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star key={index} className="size-4 fill-current" aria-hidden="true" />
                ))}
              </p>
              <blockquote className="mt-3 flex-1 text-sm text-[var(--hmt-on)]">“{review.quote}”</blockquote>
              <p className="mt-4 text-xs text-[var(--hmt-on-variant)]">Service: {review.service}</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-[var(--hmt-surface-highest)] text-sm font-bold">
                  {review.initials}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{review.name}</span>
                  <span className="block text-xs text-[var(--hmt-on-variant)]">{review.place}</span>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
