import { Camera, Handshake, Home, Paintbrush, Smartphone, Sparkles } from 'lucide-react'

import { ways } from '../lib/content'

const icons = [Smartphone, Home, Camera] as const

export default function ApWays() {
  return (
    <section className="bg-[var(--ap-amber-wash)] py-16 lg:py-20">
      <div className="ap-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="ap-kicker">Fast & Frictionless Scheduling</p>
          <h2 className="ap-h2 mt-2">Three Easy Ways to Get Your Painting Estimate</h2>
          <p className="mt-3 text-[var(--ap-muted)]">
            No waiting around for days. Choose the speed and estimation format that fits your schedule across
            Mecklenburg County.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ways.map((way, index) => {
            const Icon = icons[index] ?? Smartphone
            return (
              <article key={way.title} className="ap-card ap-lift flex flex-col justify-between gap-5 p-6">
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[var(--ap-radius-sm)] bg-[var(--ap-container)] text-[var(--ap-accent)]">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <p className="ap-kicker">{way.kicker}</p>
                  <h3 className="ap-h3">{way.title}</h3>
                  <p className="text-sm text-[var(--ap-muted)]">{way.body}</p>
                </div>
                <a className={'primary' in way ? 'ap-btn' : 'ap-btn-soft'} href={way.href}>
                  {way.action}
                </a>
              </article>
            )
          })}
        </div>
        <div className="ap-lift mt-6 flex flex-col items-start justify-around gap-4 rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-4 text-sm font-medium text-[var(--ap-ink)] sm:flex-row sm:flex-wrap sm:items-center">
          <p className="inline-flex items-center gap-2">
            <Handshake className="size-5 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
            Upfront Firm Pricing • No Hidden Surprises
          </p>
          <p className="inline-flex items-center gap-2">
            <Paintbrush className="size-5 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
            Premium Paints: Sherwin-Williams & Benjamin Moore
          </p>
          <p className="inline-flex items-center gap-2">
            <Sparkles className="size-5 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
            Daily HEPA Jobsite Cleanup Guaranteed
          </p>
        </div>
      </div>
    </section>
  )
}
