'use client'

import { useState, type FormEvent } from 'react'

import { estimateServices, FS_PHONE_DISPLAY, FS_PHONE_TEL, timelines } from '../lib/content'
import FsIcon from './FsIcon'

const pitches = [
  'Guaranteed 24-Hour Quote Delivery',
  'Satellite Measurement Engine for Instant Remote Pricing',
  'Transparent itemized bids with no surprise hidden fees',
]

export default function FsEstimate() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    event.currentTarget.reset()
    setSent(true)
  }

  return (
    <section id="quote" className="scroll-mt-32 mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Fastest Estimate Response in Ontario</p>
        <h2 className="mt-3 text-4xl">Get Your Guaranteed Pavement Quote</h2>
        <p className="mt-4 text-[var(--fs-muted)]">
          Whether preserving an executive estate driveway or bidding on a multi-lot retail development, our estimation
          engineers deliver precise, fixed-price proposals within 24 hours.
        </p>
        <ul className="mt-6 grid gap-3 text-sm">
          {pitches.map((pitch) => (
            <li key={pitch} className="flex gap-3">
              <FsIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--fs-green)]" />
              {pitch}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-sm text-[var(--fs-dim)]">Prefer Direct Phone Dispatch?</p>
        <a className="fs-display mt-1 block text-3xl text-[var(--fs-orange)]" href={FS_PHONE_TEL}>
          {FS_PHONE_DISPLAY}
        </a>
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--fs-muted)]">Lines Open</p>
      </div>
      <form className="fs-card grid gap-4 overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-5 sm:grid-cols-2" onSubmit={onSubmit}>
        <label className="fs-field">
          <span>Full Name *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="fs-field">
          <span>Phone Number *</span>
          <input name="phone" type="tel" required autoComplete="tel" />
        </label>
        <label className="fs-field">
          <span>Email Address *</span>
          <input name="email" type="email" required autoComplete="email" />
        </label>
        <label className="fs-field">
          <span>Property Address / City *</span>
          <input name="address" required autoComplete="street-address" />
        </label>
        <label className="fs-field">
          <span>Service Required *</span>
          <select name="service" required defaultValue={estimateServices[0]}>
            {estimateServices.map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </label>
        <label className="fs-field">
          <span>Project Timeline</span>
          <select name="timeline" defaultValue={timelines[0]}>
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>
        <label className="fs-field sm:col-span-2">
          <span>Additional Details / Pavement Condition</span>
          <textarea name="notes" />
        </label>
        <div className="sm:col-span-2">
          <button className="fs-btn inline-flex w-full" type="submit">
            Submit For 24-Hour Guaranteed Estimate
          </button>
          <p className="mt-4 text-sm" role="status">
            {sent ? (
              <>
                <span className="fs-display block text-[var(--fs-green)]">Quote Request Received Successfully!</span>
                <span className="mt-1 block text-[var(--fs-muted)]">
                  A ForgeSeal regional pavement estimator will examine your property via high-resolution satellite imagery and
                  send your itemized proposal today.
                </span>
              </>
            ) : null}
          </p>
        </div>
      </form>
    </section>
  )
}
