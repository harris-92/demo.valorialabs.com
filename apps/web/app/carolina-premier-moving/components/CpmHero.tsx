import { ArrowRight, BadgeCheck, Phone, Star } from 'lucide-react'

import { heroStats, phone } from '../lib/content'
import { cpmImages } from '../lib/images'
import CpmHeroForm from './CpmHeroForm'
import CpmImage from './CpmImage'

export default function CpmHero() {
  return (
    <>
      <section className="bg-[var(--cpm-navy)] text-white">
        <div className="cpm-wrap-full flex flex-col items-start justify-between gap-3 py-3 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1 rounded bg-[var(--cpm-amber-soft)] px-2 py-0.5 text-[11px] font-bold tracking-wide text-[var(--cpm-amber-ink)] uppercase">
              Free Quote
            </span>
            <p>
              <strong className="text-[var(--cpm-accent-bright)]">Free written quotes for moves and hauling</strong>
              <span className="text-[var(--cpm-on-dark)]"> — Call or text 24/7 and get a clear number before move day.</span>
            </p>
          </div>
          <a className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[var(--cpm-accent-bright)] hover:text-white" href="#quote">
            Request your free quote
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </section>
      <section className="relative overflow-hidden py-12 text-white md:py-20">
        <div className="absolute inset-0" aria-hidden="true">
          <CpmImage
            src={cpmImages.truck.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(14_44_66/0.78)] via-[rgb(14_44_66/0.62)] to-[rgb(14_44_66/0.5)]" />
        </div>
        <div className="cpm-wrap-full relative grid items-center gap-10 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-[var(--cpm-card)] px-3 py-1 text-[11px] font-bold tracking-widest text-[var(--cpm-accent)] uppercase">
                <BadgeCheck className="size-3.5" aria-hidden="true" />
                Matthews movers for Charlotte homes
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--cpm-on-dark)]">
                <Star className="size-4 fill-[var(--cpm-amber)] text-[var(--cpm-amber)]" aria-hidden="true" />
                5.0 Google Rated (21 Reviews)
              </span>
            </div>
            <div className="space-y-3">
              <h1 className="cpm-h1">Moving and Hauling in Charlotte You Can Count On</h1>
              <p className="max-w-2xl text-lg text-[var(--cpm-on-dark-muted)]">
                Carolina Premier Moving & Hauling handles local moves, packing, labor-only loads, and junk hauling for
                homes across Charlotte, Matthews, and the nearby towns.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="cpm-lift rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-3 text-[var(--cpm-ink)]">
                  <p className={`cpm-display text-xl font-bold ${'accent' in stat ? 'text-[var(--cpm-accent)]' : ''}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--cpm-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a className="cpm-btn" href="#hero-quote">
                Get Your Free Written Quote
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a className="cpm-btn-soft" href={phone.href}>
                <Phone className="size-5 text-[var(--cpm-accent)]" aria-hidden="true" />
                {phone.display}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5">
            <CpmHeroForm />
          </div>
        </div>
      </section>
    </>
  )
}
