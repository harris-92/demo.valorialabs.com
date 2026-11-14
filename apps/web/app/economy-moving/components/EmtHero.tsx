'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, BadgeCheck, Phone, ShieldCheck, Star, Truck, Zap } from 'lucide-react'

import { phones } from '../lib/content'
import { emtImages } from '../lib/images'
import EmtImage from './EmtImage'

type MoveType = 'residential' | 'interstate' | 'pods' | 'heavy'
type HomeSize = 'apt' | 'house' | 'luxury' | 'office' | 'single'

const moveTypes: readonly { id: MoveType; label: string }[] = [
  { id: 'residential', label: 'Residential Home' },
  { id: 'interstate', label: 'Interstate / NC & SC' },
  { id: 'pods', label: 'Load PODS / U-Haul' },
  { id: 'heavy', label: 'Heavy / Piano / Antique' },
]

const homeSizes: readonly { id: HomeSize; label: string }[] = [
  { id: 'apt', label: '1-2 Bedroom Apartment' },
  { id: 'house', label: '3-4 Bedroom Single Family' },
  { id: 'luxury', label: '5+ Bedroom Luxury Home' },
  { id: 'office', label: 'Commercial Office Space' },
  { id: 'single', label: 'Single Item / Few Pieces Only' },
]

const bases: Record<HomeSize, { low: number; high: number }> = {
  apt: { low: 420, high: 680 },
  house: { low: 580, high: 890 },
  luxury: { low: 980, high: 1640 },
  office: { low: 740, high: 1280 },
  single: { low: 189, high: 340 },
}

const factors: Record<MoveType, number> = {
  residential: 1,
  interstate: 1.8,
  pods: 0.7,
  heavy: 1.22,
}

const homeSizeIds: readonly HomeSize[] = ['apt', 'house', 'luxury', 'office', 'single']

function isHomeSize(value: string): value is HomeSize {
  return homeSizeIds.some((id) => id === value)
}

function money(value: number) {
  return `$${value.toLocaleString('en-US')}`
}

export default function EmtHero() {
  const [moveType, setMoveType] = useState<MoveType>('residential')
  const [homeSize, setHomeSize] = useState<HomeSize>('house')
  const [blankets, setBlankets] = useState(true)
  const [estimate, setEstimate] = useState<{ low: number; high: number } | null>(null)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const base = bases[homeSize]
    const factor = factors[moveType]
    const round = (value: number) => Math.round((value * factor) / 10) * 10
    setEstimate({ low: round(base.low), high: round(base.high) })
  }

  return (
    <section className="emt-band w-full overflow-hidden pb-10">
      <div className="grid w-full items-start gap-8 px-4 py-10 sm:px-6 lg:grid-cols-12 lg:px-8 lg:py-14 xl:px-10">
        <div className="flex flex-col gap-5 lg:col-span-7">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--emt-surface-low)] px-3 py-1 text-xs font-bold text-[var(--emt-navy)]">
              <Star className="size-3.5 fill-[var(--emt-amber)] text-[var(--emt-amber)]" aria-hidden="true" />
              Top Rated Movers in Charlotte & Waxhaw NC
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--emt-surface-low)] px-3 py-1 text-xs font-bold text-[var(--emt-navy)]">
              <BadgeCheck className="size-3.5 text-[var(--emt-emerald)]" aria-hidden="true" />
              100% Care Guarantee • Licensed & Insured NC/SC
            </span>
          </div>
          <p className="emt-kicker">We&apos;re Movers, Not Shakers</p>
          <h1 className="emt-h1">
            Careful, Dependable Movers Serving Waxhaw, Charlotte & Surrounding NC & SC Communities
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--emt-on-navy-muted)] sm:text-lg">
            From a single precious heirloom to an entire luxury estate or interstate relocation, Economy Moving and
            Trucking provides white-glove blanket padding, protective door jamb wrapping, and reliable transit. Directly
            owned and operated with owner Dan on every stage.
          </p>
          <div className="flex flex-wrap gap-3">
            <a className="emt-btn px-5 py-3.5" href={phones.primary.href}>
              <Phone className="size-4" aria-hidden="true" />
              Call Owner Dan: {phones.primary.display}
            </a>
            <a className="emt-btn-line px-5 py-3.5" href="#quick-estimator">
              Get Online Estimate
            </a>
          </div>
          <ul className="grid gap-2 text-sm font-semibold text-white sm:grid-cols-2">
            <li className="flex items-center gap-2">
              <BadgeCheck className="size-4 text-[var(--emt-emerald)]" aria-hidden="true" />
              USDOT Licensed #NC-89312
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-[var(--emt-blue)]" aria-hidden="true" />
              100% Full Value Coverage Option
            </li>
            <li className="flex items-center gap-2">
              <Truck className="size-4 text-white" aria-hidden="true" />
              26ft Air-Ride Moving Fleet
            </li>
            <li className="flex items-center gap-2">
              <Zap className="size-4 text-[var(--emt-amber)]" aria-hidden="true" />
              No Deposit Required • Zero Hidden Fees
            </li>
          </ul>
          <p className="text-sm text-[var(--emt-on-navy-muted)]">
            Equipped for estates, subdivisions, tight cul-de-sacs, and high-rise elevators.
          </p>
          <div className="relative h-64 overflow-hidden rounded-2xl sm:h-80">
            <EmtImage
              src={emtImages.fleet.src}
              alt={emtImages.fleet.alt}
              fill
              preload
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="emt-photo object-cover"
            />
          </div>
        </div>
        <div className="emt-card emt-hover-glow p-5 sm:p-7 lg:col-span-5" id="quick-estimator">
          <h2 className="emt-h3 text-xl">Calculate Instant Moving Estimate</h2>
          <p className="mt-1 text-sm text-[var(--emt-muted)]">
            Tell us what you&apos;re moving. Get a sample range and a sense of truck availability. This demo stays on
            the page.
          </p>
          <form className="mt-5 space-y-4" onSubmit={onSubmit}>
            <label className="block space-y-1.5">
              <span className="text-sm font-semibold">Moving From</span>
              <input className="emt-field" name="from" required placeholder="Waxhaw, NC (28173)" autoComplete="address-level2" />
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-semibold">Moving To</span>
              <input className="emt-field" name="to" required placeholder="Charlotte, NC (28277)" autoComplete="address-level2" />
            </label>
            <fieldset className="space-y-2">
              <legend className="text-sm font-semibold">Service Type</legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {moveTypes.map((item) => (
                  <label key={item.id} className="emt-choice">
                    <input
                      type="radio"
                      name="move_type"
                      value={item.id}
                      checked={moveType === item.id}
                      onChange={() => setMoveType(item.id)}
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </fieldset>
            <label className="block space-y-1.5">
              <span className="text-sm font-semibold">Property Size</span>
              <select
                className="emt-field"
                name="size"
                value={homeSize}
                onChange={(event) => {
                  const next = event.target.value
                  if (isHomeSize(next)) setHomeSize(next)
                }}
              >
                {homeSizes.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block space-y-1.5">
              <span className="text-sm font-semibold">Target Moving Date</span>
              <input className="emt-field" type="date" name="date" required />
            </label>
            <label className="flex items-start gap-2 text-sm">
              <input
                className="mt-1 accent-[var(--emt-amber)]"
                type="checkbox"
                checked={blankets}
                onChange={(event) => setBlankets(event.target.checked)}
              />
              Include full furniture blanketing and protective wrapping (free)
            </label>
            <button className="emt-btn w-full px-4 py-3.5" type="submit">
              Calculate Instant Moving Estimate
              <ArrowRight className="size-4" aria-hidden="true" />
            </button>
          </form>
          {estimate ? (
            <div className="mt-4 rounded-xl bg-[var(--emt-surface-low)] p-4" role="status">
              <p className="text-sm font-semibold text-[var(--emt-muted)]">Estimated Range</p>
              <p className="emt-display text-3xl font-extrabold text-[var(--emt-navy)]">
                {money(estimate.low)} – {money(estimate.high)}
              </p>
              <p className="mt-2 text-sm text-[var(--emt-muted)]">
                {blankets
                  ? 'Includes a 26ft moving truck, professional movers, quilted blankets, floor runners, and transit insurance.'
                  : 'Sample range without furniture blanketing. Blankets can still be added at no extra charge.'}{' '}
                This is a demo range, not a binding quote.
              </p>
              <a className="mt-3 inline-flex text-sm font-bold text-[var(--emt-navy)] underline" href={phones.primary.href}>
                Lock in Dan&apos;s schedule by phone: {phones.primary.display}
              </a>
            </div>
          ) : (
            <p className="mt-4 text-sm text-[var(--emt-muted)]">
              Prefer a quick phone consultation with Dan?{' '}
              <a className="font-bold text-[var(--emt-navy)]" href={phones.primary.href}>
                {phones.primary.display}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
