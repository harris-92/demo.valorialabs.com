import { ArrowRight, MapPin, Phone, Wrench } from 'lucide-react'

import { heroStats, phone } from '../lib/content'
import { sdImages } from '../lib/images'
import SdImage from './SdImage'
import SdVisitForm from './SdVisitForm'

export default function SdHero() {
  return (
    <>
      <section className="bg-[var(--sd-navy)] text-white">
        <div className="sd-wrap-full flex flex-col items-start justify-between gap-3 py-3 md:flex-row md:items-center">
          <p className="text-sm text-[var(--sd-on-dark)]">
            <strong className="text-white">Down at the yard, the job site, or the roadside?</strong>
            <span className="text-[var(--sd-on-dark-muted)]"> The shop comes to the machine.</span>
          </p>
          <a className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[var(--sd-bright)] hover:text-white" href="#quote">
            Request a mobile visit
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="relative overflow-hidden text-white">
        <SdImage
          src={sdImages.hero.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="sd-hero-overlay absolute inset-0" aria-hidden="true" />
        <div className="sd-wrap-full relative grid items-start gap-10 py-12 md:py-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--sd-card)] px-3 py-1 text-[11px] font-bold tracking-widest text-[var(--sd-accent)] uppercase">
                <Wrench className="size-3.5" aria-hidden="true" />
                Mobile mechanic • Barrie, ON
              </span>
              <a className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--sd-on-dark)] hover:text-white" href="#reviews">
                <MapPin className="size-4 text-[var(--sd-bright)]" aria-hidden="true" />
                See Google reviews
              </a>
            </div>
            <div className="space-y-3">
              <h1 className="sd-h1">Repairs that come to you.</h1>
              <p className="max-w-2xl text-lg text-[var(--sd-on-dark-muted)]">
                Predictive, corrective, and preventive maintenance for cars, trucks, and heavy equipment — at the
                driveway, the fleet yard, or the job site.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="sd-lift rounded-[var(--sd-radius)] bg-[var(--sd-card)] p-3 text-[var(--sd-ink)]">
                  <p className={`sd-display text-xl font-bold ${'accent' in stat ? 'text-[var(--sd-accent)]' : ''}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--sd-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
            <a className="sd-btn-soft self-start" href={phone.href}>
              <Phone className="size-5 text-[var(--sd-accent)]" aria-hidden="true" />
              {phone.display}
            </a>
          </div>
          <SdVisitForm />
        </div>
      </section>
    </>
  )
}
