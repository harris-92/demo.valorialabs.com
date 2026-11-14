import { Check, X } from 'lucide-react'

import { comparisons } from '../lib/content'

function Cell({ good, label, value }: { good?: boolean; label: string; value: string }) {
  return (
    <div className="flex items-start gap-2 text-sm">
      <span className="mt-0.5 font-semibold text-[var(--emt-muted)] lg:sr-only">{label}</span>
      {good ? (
        <Check className="mt-0.5 size-4 shrink-0 text-[var(--emt-emerald)]" aria-hidden="true" />
      ) : (
        <X className="mt-0.5 size-4 shrink-0 text-[#ba1a1a]" aria-hidden="true" />
      )}
      <span className={good ? 'font-semibold text-[var(--emt-navy)]' : 'text-[var(--emt-muted)]'}>{value}</span>
    </div>
  )
}

export default function EmtCompare() {
  return (
    <section id="why-us" className="bg-white px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="emt-kicker">The Economy Moving Difference</p>
        <h2 className="emt-h2 mt-2 max-w-3xl">Economy Moving vs. Moving Brokers & National Van Lines</h2>
        <p className="mt-3 max-w-3xl text-[var(--emt-muted)]">
          Compare dedicated service with online brokers and national van lines.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--emt-border)]">
          <div className="hidden gap-4 bg-[var(--emt-navy)] px-4 py-3 text-sm font-bold text-white lg:grid lg:grid-cols-4">
            <p>Key Moving Feature</p>
            <p>Economy Moving & Trucking</p>
            <p>Online Moving Brokers</p>
            <p>National Van Lines</p>
          </div>
          <div className="divide-y divide-[var(--emt-border)] bg-white">
            {comparisons.map((row) => (
              <div key={row.feature} className="grid gap-3 px-4 py-4 lg:grid-cols-4 lg:items-start">
                <div>
                  <h3 className="font-bold text-[var(--emt-navy)]">{row.feature}</h3>
                  <p className="mt-1 text-sm text-[var(--emt-muted)]">{row.detail}</p>
                </div>
                <Cell good label="Economy Moving" value={row.economy} />
                <Cell label="Online brokers" value={row.brokers} />
                <Cell label="National van lines" value={row.national} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
