import { Check } from 'lucide-react'

import { stats, steps } from '../lib/content'

const statColor = {
  orange: 'var(--hmt-primary-container)',
  green: 'var(--hmt-tertiary)',
  peach: 'var(--hmt-primary)',
  light: 'var(--hmt-on)',
} as const

export default function HmtProcess() {
  return (
    <section className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center">
          <p className="hmt-kicker justify-center">Frictionless 3-step protocol</p>
          <h2 className="hmt-h2">How Harry Mobile Tire Rescues You In Minutes</h2>
          <p className="text-[var(--hmt-on-variant)]">
            No waiting in tire shop waiting rooms. No exorbitant towing bills. Our master technician
            handles everything on-site.
          </p>
        </div>
        <ol className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="hmt-card p-5">
              <span
                className="hmt-mono inline-flex size-9 items-center justify-center rounded-lg"
                style={{
                  background: step.n === '02' ? 'var(--hmt-tertiary-container)' : 'var(--hmt-primary-container)',
                  color: 'var(--hmt-on-primary)',
                }}
              >
                {step.n}
              </span>
              <h3 className="hmt-display mt-4 text-lg font-bold">{step.title}</h3>
              <p className="mt-2 text-sm text-[var(--hmt-on-variant)]">{step.body}</p>
              <p className="mt-4 flex items-start gap-2 text-sm text-[var(--hmt-tertiary)]">
                <Check className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {step.note}
              </p>
            </li>
          ))}
        </ol>
        <dl className="hmt-glass mt-8 grid grid-cols-2 gap-4 rounded-2xl p-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="hmt-display text-3xl font-extrabold" style={{ color: statColor[stat.tone] }}>
                {stat.value}
              </dt>
              <dd className="mt-1 text-sm text-[var(--hmt-on-variant)]">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
