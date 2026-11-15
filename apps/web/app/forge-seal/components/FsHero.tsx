'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'

import {
  calculatorServices,
  calculatorSizes,
  FS_PHONE_DISPLAY,
  FS_PHONE_TEL,
  propertyTypes,
  type PropertyType,
} from '../lib/content'
import FsIcon from './FsIcon'

const proofs = [
  { icon: 'shield' as const, title: 'WSIB Covered', note: '$5M Commercial Liability' },
  { icon: 'flame' as const, title: '400°F Hot Rubber', note: 'Highway MTO-Grade Spec' },
  { icon: 'drop' as const, title: 'Zero Water Spray', note: '100% Pure Emulsion' },
]

export default function FsHero() {
  const [property, setProperty] = useState<PropertyType>('driveway')
  const [ready, setReady] = useState(false)

  function onCalculate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setReady(true)
  }

  return (
    <section className="grid items-start gap-10 px-4 py-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">
          Ontario&apos;s #1 Asphalt Care • Simcoe • York • Dufferin
        </p>
        <p className="mt-4 inline-flex items-center gap-2 overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] px-3 py-1.5 text-sm">
          <FsIcon name="star" className="h-4 w-4 text-[var(--fs-orange)]" />
          <span className="font-semibold text-white">4.9 / 5.0</span>
          <span className="text-[var(--fs-muted)]">(180+ Local Google Reviews)</span>
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl sm:text-5xl lg:text-6xl">
          Premium <span className="text-[var(--fs-orange)]">Commercial</span> & Residential Asphalt Maintenance
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--fs-muted)]">
          Extend pavement lifecycle by up to 15 years. We safeguard Central Ontario driveways, retail plazas, and
          industrial distribution centers using undiluted 400°F vulcanized hot-rubber crack sealing, oil-resistant
          hand-applied sealcoating, and laser-accurate highway striping.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a className="fs-btn inline-flex" href="#calculator">
            Get Instant Free Quote
          </a>
          <a className="fs-btn fs-btn--line inline-flex" href={FS_PHONE_TEL}>
            <FsIcon name="phone" className="h-4 w-4" />
            {FS_PHONE_DISPLAY}
          </a>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {proofs.map((proof) => (
            <li key={proof.title} className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-4">
              <FsIcon name={proof.icon} className="h-5 w-5 text-[var(--fs-orange)]" />
              <p className="fs-display mt-3 text-sm">{proof.title}</p>
              <p className="mt-1 text-xs text-[var(--fs-muted)]">{proof.note}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-4">
        <figure className="fs-card relative min-h-56 overflow-hidden rounded-3xl border border-[var(--fs-line)]">
          <Image
            src="/forge-seal/driveway.jpg"
            alt="A finished Simcoe County driveway"
            width={1376}
            height={768}
            priority
            quality={70}
            sizes="(min-width: 1024px) 46vw, calc(100vw - 2rem)"
            className="h-64 w-full object-cover sm:h-72"
          />
          <figcaption className="absolute bottom-0 left-0 bg-black/70 px-4 py-3 text-sm">
            <span className="fs-display block text-xs text-[var(--fs-orange)]">Live Finishing Showcase</span>
            Simcoe County Project
          </figcaption>
        </figure>
        <form
          id="calculator"
          className="fs-card scroll-mt-32 overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-5"
          onSubmit={onCalculate}
        >
          <p className="fs-display text-lg">Rapid Estimate Engine</p>
          <p className="mt-1 text-sm text-[var(--fs-muted)]">4-Step Pavement Calculator</p>
          <fieldset className="mt-4">
            <legend className="text-xs uppercase tracking-[0.12em] text-[var(--fs-dim)]">1. Select Property Type</legend>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {propertyTypes.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={property === item.id}
                  className={`rounded-2xl border px-2 py-2 text-xs uppercase tracking-wide ${
                    property === item.id
                      ? 'border-[var(--fs-orange)] bg-[var(--fs-orange)] text-[#1a0900]'
                      : 'border-[var(--fs-line)]'
                  }`}
                  onClick={() => setProperty(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </fieldset>
          <label className="fs-field mt-4">
            <span>2. Primary Service</span>
            <select name="service" defaultValue={calculatorServices[0]}>
              {calculatorServices.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="fs-field mt-4">
            <span>3. Approximate Size</span>
            <select name="size" defaultValue={calculatorSizes[0]}>
              {calculatorSizes.map((size) => (
                <option key={size}>{size}</option>
              ))}
            </select>
          </label>
          <label className="fs-field mt-4">
            <span>4. Postal Code / Simcoe or York City</span>
            <input name="place" placeholder="e.g. Barrie (L4N) or Newmarket" />
          </label>
          <button className="fs-btn mt-4 inline-flex w-full" type="submit">
            Calculate
          </button>
          <p className="mt-4 text-sm" role="status" hidden={!ready}>
            <span className="fs-display block text-[var(--fs-orange)]">Territory Dispatched: Free Measurement Available</span>
            <span className="mt-1 block text-[var(--fs-muted)]">
              A project engineer will review satellite topography and provide your guaranteed fixed rate within 2 hours.
            </span>
          </p>
        </form>
      </div>
    </section>
  )
}
