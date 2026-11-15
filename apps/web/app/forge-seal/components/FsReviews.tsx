import { reviews } from '../lib/content'
import FsIcon from './FsIcon'

export default function FsReviews() {
  return (
    <section className="px-4 py-16 md:px-8" aria-labelledby="reviews-title">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Authentic Reviews & Testimonials</p>
      <h2 id="reviews-title" className="mt-3 max-w-4xl text-4xl">
        Trusted by Ontario Property Managers & Homeowners
      </h2>
      <ul className="mt-8 grid gap-5 lg:grid-cols-3">
        {reviews.map((review) => (
          <li key={review.name} className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-5">
            <p className="flex gap-1 text-[var(--fs-orange)]" aria-label="5 stars">
              {Array.from({ length: 5 }, (_, index) => (
                <FsIcon key={index} name="star" className="h-4 w-4" />
              ))}
            </p>
            <blockquote className="mt-4 text-sm leading-6 text-[var(--fs-muted)]">“{review.quote}”</blockquote>
            <p className="fs-display mt-5 text-base">{review.name}</p>
            <p className="mt-1 text-xs text-[var(--fs-dim)]">{review.role}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
