import { Star } from 'lucide-react'

const reviews = [
  {
    initials: 'DP',
    name: 'Dominic P.',
    role: 'Commercial Property Director • Vaughan, ON',
    quote:
      'Call Mike has handled our commercial plaza parking lot in Vaughan for three seasons. Their hot pour crack filling stopped a continuous spring heave issue by our loading docks. Mike Jr was on-site early, no overspray onto our curbs, and completed striping overnight. True professionals.',
  },
  {
    initials: 'RL',
    name: 'Robert L.',
    role: 'Residential Homeowner • Newmarket, ON',
    quote:
      'Unlike the door-to-door college kids who spray water and disappear, Mike Senior and Matt treat you like family. They explained the 100% oil base Product #1999 vs cheap acrylics. Two years later, our driveway still has that deep jet-black sheen. Outstanding value.',
  },
  {
    initials: 'SM',
    name: 'Sarah McAllister',
    role: 'Operations Manager • Barrie Industrial Park',
    quote:
      'We needed emergency catch basin repairs after heavy rainfall caused pavement collapse around our main catch basin. Matt and the crew excavated, rebuilt the masonry collar, and re-paved it seamlessly in 48 hours. Saved us thousands in potential liability claims.',
  },
] as const

function Stars() {
  return (
    <div className="flex gap-0.5 text-[var(--cmsr-primary)]" aria-label="5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="size-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  )
}

export default function CmsrReviews() {
  return (
    <section id="reviews" className="bg-[var(--cmsr-surface-lowest)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
              <Star className="size-4 fill-current" aria-hidden="true" />
              Verified Client Feedback
            </p>
            <h2 className="cmsr-h2">5.0-Star Rated Across Ontario</h2>
            <p className="text-[var(--cmsr-on-surface-variant)]">
              What property managers, business owners, and local residents say about working directly with the family.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-lg bg-[var(--cmsr-surface-container)] p-4">
            <div>
              <Stars />
              <p className="cmsr-display mt-1 text-sm font-semibold">5.0 Star Rating on Google</p>
            </div>
            <p className="max-w-[9rem] text-xs text-[var(--cmsr-on-surface-variant)]">Based on 140+ verified client projects</p>
          </div>
        </div>
        <div className="cmsr-links cmsr-links-3-md grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <article key={review.initials} className="cmsr-card flex flex-col justify-between gap-6 p-6">
              <div className="space-y-4">
                <Stars />
                <p className="leading-relaxed">“{review.quote}”</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="cmsr-display flex size-10 items-center justify-center rounded-full bg-[var(--cmsr-primary-container)] text-sm font-bold text-[var(--cmsr-on-primary-container)]">
                  {review.initials}
                </span>
                <div className="min-w-0">
                  <p className="cmsr-display text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-[var(--cmsr-on-surface-variant)]">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
