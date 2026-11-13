'use client'

import { useState, type FormEvent } from 'react'
import { Check, Send } from 'lucide-react'

import { issues } from '../lib/content'

export default function HmtDispatchForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div id="dispatch" className="hmt-card scroll-mt-32 p-5 sm:p-6">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="hmt-mono text-[var(--hmt-primary)]">Rapid Dispatch Ticket</p>
          <p className="mt-1 text-sm text-[var(--hmt-on-variant)]">
            Instant mobile unit dispatch. No waiting on hold, technician gets direct GPS coordinates.
          </p>
        </div>
        <span className="hmt-mono shrink-0 rounded-full bg-[var(--hmt-surface-highest)] px-2.5 py-1 text-[var(--hmt-tertiary)]">
          ETA: ~25 min
        </span>
      </div>
      {sent ? (
        <p className="flex items-start gap-2 rounded-xl bg-[color-mix(in_srgb,var(--hmt-tertiary)_12%,transparent)] p-4 text-sm text-[var(--hmt-on)]" role="status">
          <Check className="mt-0.5 size-4 shrink-0 text-[var(--hmt-tertiary)]" aria-hidden="true" />
          Priority ticket received. Harry&apos;s dispatch coordinator is calling your phone now.
        </p>
      ) : (
        <form className="space-y-3" onSubmit={onSubmit}>
          <label className="block space-y-1.5">
            <span className="hmt-mono text-[var(--hmt-on-variant)]">Select urgency / issue</span>
            <select className="hmt-field" name="issue" required defaultValue={issues[0]}>
              {issues.map((issue) => (
                <option key={issue} value={issue}>
                  {issue}
                </option>
              ))}
            </select>
          </label>
          <label className="block space-y-1.5">
            <span className="hmt-mono text-[var(--hmt-on-variant)]">Your location / highway mile marker</span>
            <input
              className="hmt-field"
              name="location"
              required
              autoComplete="street-address"
              placeholder="e.g. 1013 Maple Ave or Hwy 401 & Trafalgar"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="hmt-mono text-[var(--hmt-on-variant)]">Direct call-back phone number</span>
            <input
              className="hmt-field"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              placeholder="(647) 000-0000"
            />
          </label>
          <label className="block space-y-1.5">
            <span className="hmt-mono text-[var(--hmt-on-variant)]">Tire size / vehicle model (optional)</span>
            <input className="hmt-field" name="tire" placeholder="e.g. 225/45R18 or 2022 Honda CR-V" />
          </label>
          <button className="hmt-btn w-full px-4 py-3" type="submit">
            <Send className="size-4" aria-hidden="true" />
            Dispatch tech now • zero hassle
          </button>
        </form>
      )}
      <p className="mt-3 text-xs text-[var(--hmt-on-variant)]">
        Direct technician communication • No third-party dispatch delays
      </p>
    </div>
  )
}
