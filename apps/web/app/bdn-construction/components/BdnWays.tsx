import { Camera, HardHat, Phone } from 'lucide-react'

import { ways } from '../lib/content'

const icons = [Phone, HardHat, Camera] as const

export default function BdnWays() {
  return (
    <section className="bdn-on-gold py-16 lg:py-20">
      <div className="bdn-wrap">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="bdn-kicker">Start a project</p>
          <h2 className="bdn-h2 mt-2">Three ways to get a straight answer</h2>
          <p className="bdn-on-gold-copy mt-3">
            Call the Oakville office, book a walk of the space, or send the drawings you already have.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {ways.map((way, index) => {
            const Icon = icons[index] ?? Phone
            return (
              <article key={way.title} className="bdn-card bdn-lift flex flex-col justify-between gap-5 p-6">
                <div className="space-y-3">
                  <div className="flex size-14 items-center justify-center rounded-[var(--bdn-radius-sm)] bg-[var(--bdn-container)] text-[var(--bdn-accent)]">
                    <Icon className="size-7" aria-hidden="true" />
                  </div>
                  <p className="bdn-kicker">{way.kicker}</p>
                  <h3 className="bdn-h3">{way.title}</h3>
                  <p className="text-sm text-[var(--bdn-muted)]">{way.body}</p>
                </div>
                <a className={'primary' in way ? 'bdn-btn' : 'bdn-btn-soft'} href={way.href}>
                  {way.action}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
