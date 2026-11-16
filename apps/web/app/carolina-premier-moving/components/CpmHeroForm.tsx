'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2 } from 'lucide-react'

import { homeSizes, phone, serviceOptions } from '../lib/content'

export default function CpmHeroForm() {
  const [service, setService] = useState<(typeof serviceOptions)[number]>(serviceOptions[0])
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <form id="hero-quote" className="cpm-card grid gap-4 p-5 text-[var(--cpm-ink)] sm:p-6" onSubmit={onSubmit}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="cpm-display text-xl font-semibold">Get Your Free Quote</p>
          <p className="mt-1 text-sm text-[var(--cpm-muted)]">Free written quote for your next move or haul</p>
        </div>
        <span className="rounded bg-[var(--cpm-amber-soft)] px-2 py-1 text-[11px] font-bold tracking-wide text-[var(--cpm-amber-ink)] uppercase">
          Free quote
        </span>
      </div>
      <fieldset>
        <legend className="text-xs font-bold tracking-[0.12em] text-[var(--cpm-muted)] uppercase">Service needed</legend>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {serviceOptions.map((option, index) => (
            <button
              key={option}
              type="button"
              aria-pressed={service === option}
              className={`rounded-[var(--cpm-radius-sm)] border px-2 py-2 text-xs font-semibold ${
                index === serviceOptions.length - 1 ? 'col-span-2' : ''
              } ${
                service === option
                  ? 'border-[var(--cpm-btn)] bg-[var(--cpm-btn)] text-white'
                  : 'border-[var(--cpm-line)] text-[var(--cpm-ink)]'
              }`}
              onClick={() => setService(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <input type="hidden" name="serviceType" value={service} />
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-semibold">
          Moving From *
          <input className="cpm-field font-normal" name="movingFrom" required placeholder="Matthews, NC or 28104" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Moving To *
          <input
            className="cpm-field font-normal"
            name="movingTo"
            required
            placeholder="Charlotte, Ballantyne, or a storage unit"
          />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Full Name *
          <input className="cpm-field font-normal" name="fullName" required autoComplete="name" placeholder="Jordan Lee" />
        </label>
        <label className="grid gap-1.5 text-sm font-semibold">
          Phone Number *
          <input
            className="cpm-field font-normal"
            name="phoneNumber"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(980) 555-0199"
          />
        </label>
      </div>
      <label className="grid gap-1.5 text-sm font-semibold">
        Email Address *
        <input
          className="cpm-field font-normal"
          name="emailAddress"
          type="email"
          required
          autoComplete="email"
          placeholder="jordan@example.com"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-semibold">
        Home Size *
        <select className="cpm-field font-normal" name="homeSize" required defaultValue={homeSizes[0]}>
          {homeSizes.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </label>
      <button className="cpm-btn w-full" type="submit">
        Submit for a Free Quote
        <CheckCircle2 className="size-5" aria-hidden="true" />
      </button>
      {sent ? (
        <p
          className="rounded-[var(--cpm-radius-sm)] bg-[var(--cpm-accent-soft)] px-3 py-3 text-center text-sm font-semibold text-[var(--cpm-navy)]"
          role="status"
        >
          Thanks. On the live site, Ryan would follow up about this move. Nothing was sent from this demo.
        </p>
      ) : null}
      <p className="text-center text-xs text-[var(--cpm-muted)]">
        This demo keeps your details on this page. Call {phone.display} if you want to talk with the crew now.
      </p>
    </form>
  )
}
