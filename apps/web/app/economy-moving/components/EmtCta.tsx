'use client'

import { useState, type FormEvent } from 'react'
import { Mail, Phone } from 'lucide-react'

import { email, phones } from '../lib/content'

export default function EmtCta() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="callback" className="relative overflow-hidden bg-[var(--emt-navy-dark)] px-4 py-16 text-white lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold tracking-wide text-[var(--emt-amber)] uppercase">
            Direct Owner Service • Zero Booking Pressure
          </p>
          <h2 className="emt-display mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ready for a Stress-Free Move? Call Owner Dan Directly Today.
          </h2>
          <p className="mt-4 max-w-xl text-white/80">
            Get an honest moving estimate conversation in minutes. Local and long-distance moves across Charlotte,
            Waxhaw, and the Carolinas.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a className="emt-btn px-5 py-3" href={phones.primary.href}>
              <Phone className="size-4" aria-hidden="true" />
              Call Primary: {phones.primary.display}
            </a>
            <a className="emt-btn-line px-5 py-3" href={phones.secondary.href}>
              Secondary: {phones.secondary.display}
            </a>
          </div>
        </div>
        <div className="emt-hover-glow rounded-2xl border border-transparent bg-white p-5 text-[var(--emt-ink)] sm:p-6">
          <h3 className="emt-h3">Fast Estimate Callback</h3>
          <p className="mt-1 text-sm text-[var(--emt-muted)]">
            This demo keeps your details on this page and does not send them anywhere.
          </p>
          {sent ? (
            <p className="mt-4 rounded-xl bg-[var(--emt-surface-low)] p-4 text-sm" role="status">
              Thanks. In the live business, Dan calls or texts back within 15 minutes. Nothing was sent from this demo.
            </p>
          ) : (
            <form className="mt-4 space-y-3" onSubmit={onSubmit}>
              <label className="block space-y-1.5">
                <span className="text-sm font-semibold">Your Full Name</span>
                <input className="emt-field" name="name" required placeholder="John Smith" autoComplete="name" />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-semibold">Phone Number</span>
                <input className="emt-field" name="phone" type="tel" required placeholder="(704) 000-0000" autoComplete="tel" />
              </label>
              <label className="block space-y-1.5">
                <span className="text-sm font-semibold">Where are you moving?</span>
                <input className="emt-field" name="route" required placeholder="e.g. Waxhaw to Ballantyne" />
              </label>
              <button className="emt-btn w-full px-4 py-3" type="submit">
                Request Callback From Dan
              </button>
            </form>
          )}
          <p className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--emt-muted)]">
            <Mail className="size-4" aria-hidden="true" />
            Or email:{' '}
            <a className="font-semibold text-[var(--emt-navy)]" href={email.href}>
              {email.display}
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
