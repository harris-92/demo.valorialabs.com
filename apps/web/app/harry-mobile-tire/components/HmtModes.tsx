import { ArrowRight, House, Siren } from 'lucide-react'

export default function HmtModes() {
  return (
    <section id="roadside" className="px-4 pb-6 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
        <article className="hmt-card p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--hmt-primary-container)_18%,transparent)] text-[var(--hmt-primary-container)]">
              <Siren className="size-5" aria-hidden="true" />
            </span>
            <span className="hmt-mono text-[var(--hmt-primary-container)]">24/7 Active</span>
          </div>
          <h2 className="hmt-display text-xl font-bold">Emergency Roadside Assistance</h2>
          <p className="mt-2 text-sm text-[var(--hmt-on-variant)]">
            Flat tire plug and patches, highway blowouts, rim swaps, battery boost, and lockout rescue.
            Technicians roll in fully mobile workshops.
          </p>
          <a className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--hmt-primary-container)]" href="#dispatch">
            Instant highway dispatch
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </article>
        <article className="hmt-card p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--hmt-tertiary)_16%,transparent)] text-[var(--hmt-tertiary)]">
              <House className="size-5" aria-hidden="true" />
            </span>
            <span className="hmt-mono text-[var(--hmt-tertiary)]">Convenience</span>
          </div>
          <h2 className="hmt-display text-xl font-bold">Driveway & Fleet Scheduling</h2>
          <p className="mt-2 text-sm text-[var(--hmt-on-variant)]">
            Seasonal winter/summer tire changeover on rim or loose, high-speed digital balancing and TPMS
            reset at your home or corporate parking lot.
          </p>
          <a className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[var(--hmt-tertiary)]" href="#seasonal">
            Schedule driveway service
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </article>
      </div>
    </section>
  )
}
