import { CalendarClock, CreditCard, Phone, ShieldCheck, Star, Timer, Truck } from 'lucide-react'

import { phones } from '../lib/content'
import HmtDispatchForm from './HmtDispatchForm'

const proofs = [
  { icon: Star, title: '5.0 Star', detail: '150+ Google Reviews' },
  { icon: Timer, title: '20–30 Min', detail: 'Avg Rapid Arrival' },
  { icon: ShieldCheck, title: 'TIA Certified', detail: 'Master Techs' },
  { icon: CreditCard, title: 'Tap & Pay', detail: 'Mobile POS Terminal' },
] as const

export default function HmtHero() {
  return (
    <section className="px-4 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-7">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[var(--hmt-tertiary)] uppercase">
            <span className="size-2 rounded-full bg-[var(--hmt-dot)] shadow-[0_0_10px_var(--hmt-dot)]" />
            Milton&apos;s #1 rated 24/7 mobile tire shop & emergency roadside rescue
          </p>
          <h1 className="hmt-h1">
            Professional Mobile Tire Changes At Your Doorstep or Roadside —{' '}
            <span className="text-[var(--hmt-primary-container)] underline decoration-[var(--hmt-primary-container)] decoration-4 underline-offset-4">
              In 25 Minutes.
            </span>
          </h1>
          <p className="max-w-2xl text-base text-[var(--hmt-on-variant)] sm:text-lg">
            Stuck on Hwy 401, QEW, or in your driveway? We bring certified technicians, high-grade
            mounting and digital balancing equipment straight to you in Milton, Oakville, Burlington,
            and across the GTA.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a className="hmt-btn px-5 py-3.5" href={phones.primary.href}>
              <Phone className="size-4" aria-hidden="true" />
              Emergency call: {phones.primary.display}
            </a>
            <a className="hmt-btn-ghost px-5 py-3.5" href="#dispatch">
              <CalendarClock className="size-4" aria-hidden="true" />
              Book online / instant quote
            </a>
          </div>
          <ul className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {proofs.map((item) => (
              <li key={item.title} className="hmt-card flex flex-col gap-1 p-3">
                <item.icon className="size-4 text-[var(--hmt-primary)]" aria-hidden="true" />
                <span className="hmt-display text-sm font-bold">{item.title}</span>
                <span className="text-xs text-[var(--hmt-on-variant)]">{item.detail}</span>
              </li>
            ))}
          </ul>
          <div className="hmt-glass flex flex-col gap-3 rounded-2xl px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm">
              <Truck className="mt-0.5 size-4 shrink-0 text-[var(--hmt-primary-container)]" aria-hidden="true" />
              <span>
                <span className="font-semibold">Active units in Halton Region</span>
                <span className="mt-0.5 block text-[var(--hmt-on-variant)]">
                  3 vans patrolling Hwy 401 & Derry Rd corridor
                </span>
              </span>
            </p>
            <span className="hmt-mono w-fit rounded-full bg-[color-mix(in_srgb,var(--hmt-tertiary)_16%,transparent)] px-3 py-1 text-[var(--hmt-tertiary)]">
              Ready to dispatch
            </span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <HmtDispatchForm />
        </div>
      </div>
    </section>
  )
}
