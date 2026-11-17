import { Quote } from 'lucide-react'

import { reviews } from '../lib/content'

export default function BdnReviews() {
  return (
    <section id="reviews" className="bg-[var(--bdn-blue-wash)] py-16 lg:py-20">
      <div className="bdn-wrap">
        <div className="mb-8 max-w-2xl">
          <p className="bdn-kicker">From the people who hired us</p>
          <h2 className="bdn-h2 mt-2">What clients say after the opening</h2>
          <p className="mt-2 text-[var(--bdn-muted)]">
            Notes from restaurant owners, retailers, and commercial clients who have already built with BDN.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {reviews.map((review) => (
            <figure key={review.name} className="bdn-card bdn-lift p-6">
              <Quote className="size-6 text-[var(--bdn-accent)]" aria-hidden="true" />
              <blockquote className="mt-3 text-sm leading-relaxed text-[var(--bdn-ink)]">“{review.quote}”</blockquote>
              <figcaption className="mt-4">
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm text-[var(--bdn-muted)]">{review.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
