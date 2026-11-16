import { Camera, Clock, Package, Phone, ShieldCheck } from 'lucide-react'

import { ways } from '../lib/content'

const icons = [Phone, ShieldCheck, Camera] as const

export default function CpmWays() {
  return (
    <section className="bg-[var(--cpm-amber-wash)] py-16 lg:py-20">
      <div className="cpm-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="cpm-kicker">Fast scheduling</p>
          <h2 className="cpm-h2 mt-2">Three Easy Ways to Get a Moving Quote</h2>
          <p className="mt-3 text-[var(--cpm-muted)]">
            Call, send the form, or email photos. Pick the path that matches how soon you need the crew.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ways.map((way, index) => {
            const Icon = icons[index] ?? Phone
            return (
              <article key={way.title} className="cpm-card cpm-lift flex flex-col justify-between gap-5 p-6">
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[var(--cpm-radius-sm)] bg-[var(--cpm-container)] text-[var(--cpm-accent)]">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <p className="cpm-kicker">{way.kicker}</p>
                  <h3 className="cpm-h3">{way.title}</h3>
                  <p className="text-sm text-[var(--cpm-muted)]">{way.body}</p>
                </div>
                <a className={'primary' in way ? 'cpm-btn' : 'cpm-btn-soft'} href={way.href}>
                  {way.action}
                </a>
              </article>
            )
          })}
        </div>
        <div className="cpm-lift mt-6 flex flex-col items-start justify-around gap-4 rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-4 text-sm font-medium text-[var(--cpm-ink)] sm:flex-row sm:flex-wrap sm:items-center">
          <p className="inline-flex items-center gap-2">
            <ShieldCheck className="size-5 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
            Written quotes before move day
          </p>
          <p className="inline-flex items-center gap-2">
            <Package className="size-5 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
            Blankets, plastic, and floor protection
          </p>
          <p className="inline-flex items-center gap-2">
            <Clock className="size-5 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
            Call or text 24/7
          </p>
        </div>
      </div>
    </section>
  )
}
