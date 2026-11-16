import { Cog, MapPin, MessageSquare, Phone, Truck, Wrench } from 'lucide-react'

import { assurances, ways } from '../lib/content'

const icons = [Phone, MapPin, MessageSquare] as const
const assuranceIcons = [Truck, Cog, Wrench] as const

export default function SdWays() {
  return (
    <section className="bg-[var(--sd-wash)] py-16 lg:py-20">
      <div className="sd-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="sd-kicker">Get the shop moving</p>
          <h2 className="sd-h2 mt-2">Three ways to reach Servidiesel</h2>
          <p className="mt-3 text-[var(--sd-muted)]">
            Call Cristiano, request a visit, or text photos of the fault. The phone is the direct line when something
            is down.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ways.map((way, index) => {
            const Icon = icons[index] ?? Phone
            return (
              <article key={way.title} className="sd-card sd-lift flex flex-col justify-between gap-5 p-6">
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[var(--sd-radius-sm)] bg-[var(--sd-container)] text-[var(--sd-accent)]">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <p className="sd-kicker">{way.kicker}</p>
                  <h3 className="sd-h3">{way.title}</h3>
                  <p className="text-sm text-[var(--sd-muted)]">{way.body}</p>
                </div>
                <a className={'primary' in way ? 'sd-btn' : 'sd-btn-soft'} href={way.href}>
                  {way.action}
                </a>
              </article>
            )
          })}
        </div>
        <div className="sd-lift mt-6 flex flex-col items-start justify-around gap-4 rounded-[var(--sd-radius)] bg-[var(--sd-card)] p-4 text-sm font-medium text-[var(--sd-ink)] sm:flex-row sm:flex-wrap sm:items-center">
          {assurances.map((item, index) => {
            const Icon = assuranceIcons[index] ?? Wrench
            return (
              <p key={item} className="inline-flex items-center gap-2">
                <Icon className="size-5 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
                {item}
              </p>
            )
          })}
        </div>
      </div>
    </section>
  )
}
