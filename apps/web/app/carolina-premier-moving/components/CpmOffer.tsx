import { Check } from 'lucide-react'

import { phone } from '../lib/content'

export default function CpmOffer() {
  return (
    <section id="offer" className="bg-[var(--cpm-navy)] py-16 text-white lg:py-20">
      <div className="cpm-wrap">
        <div className="cpm-lift flex flex-col items-start justify-between gap-8 rounded-[var(--cpm-radius)] bg-white/5 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[var(--cpm-accent-bright)] px-3 py-0.5 text-[11px] font-bold tracking-wide text-[var(--cpm-navy)] uppercase">
                Free quote
              </span>
              <span className="text-xs text-[var(--cpm-on-dark-muted)]">No obligation</span>
            </div>
            <h2 className="cpm-h2 text-[var(--cpm-on-dark)]">Get a Written Quote Before Move Day</h2>
            <p className="text-[var(--cpm-on-dark-muted)]">
              Tell us the pickup, the drop-off, and what has to move. Ryan&apos;s crew replies with a clear quote for a
              full move, packing, labor only, or a junk haul.
            </p>
            <p className="flex flex-wrap gap-4 text-sm font-semibold text-[var(--cpm-accent-bright)]">
              <span className="inline-flex items-center gap-1">
                <Check className="size-4" aria-hidden="true" />
                Call or text 24/7
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-4" aria-hidden="true" />
                Photos welcome
              </span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className="cpm-btn" href="#quote">
              Request a Free Quote
            </a>
            <a className="cpm-btn-line" href={phone.href}>
              Call {phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
