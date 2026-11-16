import { ArrowRight, BadgeCheck, Phone, ShieldCheck, Star } from 'lucide-react'

import { heroStats, phone } from '../lib/content'
import { apImages } from '../lib/images'
import ApImage from './ApImage'

export default function ApHero() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="ap-wrap-full flex flex-col items-start justify-between gap-3 py-3 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 rounded bg-[var(--ap-amber-soft)] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[var(--ap-amber-ink)] uppercase">
              Limited Slots
            </span>
            <p>
              <strong className="text-[var(--ap-green-bright)]">Special Offer: 20% Off New Residential Estimates</strong>
              <span className="text-[var(--ap-on-dark)]"> — Lock in your interior or exterior rate this month. ($500 max, jobs $2,000+)</span>
            </p>
          </div>
          <a className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[var(--ap-green-bright)] hover:text-white" href="#quote">
            Claim 20% Off Discount
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="bg-[var(--ap-high)] py-12 md:py-20">
        <div className="ap-wrap-full grid items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--ap-card)] px-3 py-1 text-[11px] font-bold tracking-widest text-[var(--ap-accent)] uppercase">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                Charlotte&apos;s Benchmark Painting Contractor
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--ap-muted)]">
                <Star className="size-4 fill-[var(--ap-amber)] text-[var(--ap-amber)]" aria-hidden="true" />
                5.0 Google Rated (48+ Reviews)
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="ap-h1">Charlotte’s Premier Residential & Commercial Painters</h1>
              <p className="max-w-2xl text-lg text-[var(--ap-muted)]">
                Transforming upscale homes and landmark commercial spaces across Charlotte and Mecklenburg County since
                2010. Clinical prep work, razor-sharp lines, and true trade mastery on every single surface.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="ap-lift rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-3 text-[var(--ap-ink)]">
                  <p className={`ap-display text-xl font-bold ${'accent' in stat ? 'text-[var(--ap-accent)]' : ''}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--ap-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="ap-btn" href="#quote">
                Get Your Free Written Estimate
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a className="ap-btn-soft" href={phone.href}>
                <Phone className="size-5 text-[var(--ap-accent)]" aria-hidden="true" />
                {phone.display}
              </a>
            </div>
          </div>
          <div className="ap-lift lg:col-span-5">
            <div className="relative overflow-hidden rounded-[var(--ap-radius)] bg-[var(--ap-container)] shadow-xl">
              <ApImage
                src={apImages.exterior.src}
                alt={apImages.exterior.alt}
                width={apImages.exterior.width}
                height={apImages.exterior.height}
                priority
                quality={70}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="h-[280px] w-full object-cover sm:h-[380px] lg:h-[460px]"
              />
              <div className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-[var(--ap-card)]/90 px-3 py-1 text-xs font-semibold text-[var(--ap-ink)] shadow">
                <ShieldCheck className="size-4 text-[var(--ap-accent)]" aria-hidden="true" />
                Owner Supervised
              </div>
              <div className="absolute right-4 bottom-4 left-4 rounded-[var(--ap-radius)] bg-[var(--ap-navy)]/95 p-4 text-white shadow-xl">
                <p className="text-xs font-bold tracking-wider text-[var(--ap-green-bright)] uppercase">
                  Charlotte Direct Booking
                </p>
                <p className="text-sm font-medium">Save 20% on Interior Prep & Coat ($500 Max)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
