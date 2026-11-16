import { Check } from 'lucide-react'

import { phone } from '../lib/content'

export default function ApOffer() {
  return (
    <section id="offer" className="bg-[var(--ap-navy)] py-16 text-white lg:py-20">
      <div className="ap-wrap">
        <div className="ap-lift flex flex-col items-start justify-between gap-8 rounded-[var(--ap-radius)] bg-white/5 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--ap-green-bright)] px-3 py-0.5 text-[11px] font-bold tracking-wide text-[var(--ap-navy)] uppercase">
                Verified Special
              </span>
              <span className="text-xs text-[var(--ap-on-dark-muted)]">Limited Seasonal Promotion</span>
            </div>
            <h2 className="ap-h2 text-[var(--ap-on-dark)]">Special Offer — 20% Off New Residential Estimates</h2>
            <p className="text-[var(--ap-on-dark-muted)]">
              Set up your estimate appointment now to lock in the discounted rate on your interior painting project.{' '}
              <strong>$500 maximum offer. Discount starts at $2,000 or more.</strong> Backed by our licensed, insured
              Charlotte team and 2-year quality warranty.
            </p>
            <p className="flex flex-wrap gap-4 text-sm font-semibold text-[var(--ap-green-bright)]">
              <span className="inline-flex items-center gap-1">
                <Check className="size-4" aria-hidden="true" />
                Free Color Consultation
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-4" aria-hidden="true" />
                No Upfront Deposit
              </span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className="ap-btn" href="#quote">
              Claim 20% Off Estimate
            </a>
            <a className="ap-btn-line" href={phone.href}>
              Call {phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
