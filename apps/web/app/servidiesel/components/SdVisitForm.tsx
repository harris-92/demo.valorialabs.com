'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { phone, serviceOptions, timelines } from '../lib/content'

export default function SdVisitForm() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div id="quote" className="sd-card p-6 sm:p-8">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <h3 className="sd-display text-2xl font-semibold">Request service</h3>
        <span className="rounded bg-[var(--sd-brand)] px-2 py-1 text-[11px] font-bold tracking-wide text-white uppercase">
          Mobile visit
        </span>
      </div>
      <form className="grid gap-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-1.5 text-sm font-semibold">
            Full name *
            <input className="sd-field font-normal" name="fullName" required placeholder="Alex Martin" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            Phone number *
            <input className="sd-field font-normal" name="phoneNumber" type="tel" required placeholder="(705) 555-0199" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            Email
            <input className="sd-field font-normal" name="emailAddress" type="email" placeholder="alex@example.com" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            Where is it sitting? *
            <input className="sd-field font-normal" name="jobSite" required placeholder="Yard, job site, or roadside in Barrie" />
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            Equipment *
            <select className="sd-field font-normal" name="equipment" required defaultValue={serviceOptions[0]}>
              {serviceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
          <label className="grid gap-1.5 text-sm font-semibold">
            How urgent *
            <select className="sd-field font-normal" name="urgency" required defaultValue={timelines[0]}>
              {timelines.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        </div>
        <label className="grid gap-1.5 text-sm font-semibold">
          What is it doing?
          <textarea
            className="sd-field min-h-24 font-normal"
            name="notes"
            rows={3}
            placeholder="Engine fault, air leak, hydraulic hose, no-start, or the maintenance you want booked."
          />
        </label>
        <button className="sd-btn w-full" type="submit">
          Request a mobile visit
          <CheckCircle2 className="size-5" aria-hidden="true" />
        </button>
        {sent ? (
          <p className="rounded-[var(--sd-radius-sm)] bg-[var(--sd-success-bg)] px-3 py-3 text-center text-sm font-semibold text-[var(--sd-success-ink)]" role="status">
            Request saved on this demo page. Nothing was sent. If the machine is down now, call {phone.display}.
          </p>
        ) : null}
        <p className="text-center text-xs text-[var(--sd-muted)]">
          This demo keeps the form on the page. For a live breakdown, call {phone.display}.
        </p>
      </form>
    </div>
  )
}
