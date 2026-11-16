import { Check } from 'lucide-react'

import { phone } from '../lib/content'

export default function SdOffer() {
  return (
    <section id="offer" className="bg-[var(--sd-navy)] py-16 text-white lg:py-20">
      <div className="sd-wrap">
        <div className="sd-lift flex flex-col items-start justify-between gap-8 rounded-[var(--sd-radius)] bg-white/10 p-6 text-white sm:p-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-3 py-0.5 text-[11px] font-bold tracking-wide text-[var(--sd-brand-ink)] uppercase">
                Dispatch
              </span>
              <span className="text-xs text-[var(--sd-on-dark-muted)]">Yard, job site, or roadside</span>
            </div>
            <h2 className="sd-h2 text-white">Down? The mobile shop rolls to the machine.</h2>
            <p className="text-[var(--sd-on-dark-muted)]">
              Call if it is sitting now. Use the form to book a visit for this week or for scheduled maintenance.
              Cristiano brings the tools to the driveway, the fleet yard, or the job site.
            </p>
            <p className="flex flex-wrap gap-4 text-sm font-semibold text-white">
              <span className="inline-flex items-center gap-1">
                <Check className="size-4" aria-hidden="true" />
                No tow to get started
              </span>
              <span className="inline-flex items-center gap-1">
                <Check className="size-4" aria-hidden="true" />
                Owner on the phone
              </span>
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className="sd-btn-invert" href={phone.href}>
              Call {phone.display}
            </a>
            <a className="sd-btn-line" href="#quote">
              Request a visit
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
