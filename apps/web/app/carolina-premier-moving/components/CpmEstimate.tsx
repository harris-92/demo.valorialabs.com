'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

import { address, email, homeSizes, phone, serviceOptions } from '../lib/content'

export default function CpmEstimate() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="quote" className="bg-[var(--cpm-amber-wash)] py-16 lg:py-20">
      <div className="cpm-wrap grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="cpm-kicker">Book the crew</p>
          <h2 className="cpm-h2 mt-2">Request a Free Moving Quote in Charlotte Today</h2>
          <p className="mt-3 text-[var(--cpm-muted)]">
            Share the pickup, the drop-off, and what has to move. Ryan follows up by phone or email. This demo keeps
            the form on the page.
          </p>
          <div className="mt-6 space-y-3">
            <div className="cpm-lift flex items-start gap-3 rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-4 text-[var(--cpm-ink)]">
              <MapPin className="mt-0.5 size-6 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Matthews shop</p>
                <a className="text-sm text-[var(--cpm-muted)] hover:underline" href={address.maps}>
                  {address.line}
                </a>
              </div>
            </div>
            <div className="cpm-lift flex items-start gap-3 rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-4 text-[var(--cpm-ink)]">
              <Phone className="mt-0.5 size-6 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Call or text</p>
                <a className="text-sm font-semibold text-[var(--cpm-accent)] hover:underline" href={phone.href}>
                  {phone.display}
                </a>
                <p className="text-xs text-[var(--cpm-muted)]">Listed as open 24 hours</p>
              </div>
            </div>
            <div className="cpm-lift flex items-start gap-3 rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-4 text-[var(--cpm-ink)]">
              <Mail className="mt-0.5 size-6 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Email</p>
                <a className="text-sm font-semibold break-all text-[var(--cpm-accent)] hover:underline" href={email.href}>
                  {email.display}
                </a>
                <p className="text-xs text-[var(--cpm-muted)]">Photos of the move are welcome</p>
              </div>
            </div>
            <div className="cpm-lift flex items-start gap-3 rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-4 text-[var(--cpm-ink)]">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">What customers mention</p>
                <p className="text-sm text-[var(--cpm-muted)]">
                  On-time arrival, blanket and plastic wrap, and a careful load.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cpm-card cpm-lift p-6 sm:p-8 lg:col-span-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="cpm-display text-2xl font-semibold">Get Your Quote</h3>
            <span className="rounded bg-[var(--cpm-accent-soft)] px-2 py-1 text-[11px] font-bold tracking-wide text-[var(--cpm-accent-ink)] uppercase">
              Free quote
            </span>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-semibold">
                Full Name *
                <input className="cpm-field font-normal" name="fullName" required placeholder="Jordan Lee" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Phone Number *
                <input className="cpm-field font-normal" name="phoneNumber" type="tel" required placeholder="(980) 555-0199" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Email Address *
                <input className="cpm-field font-normal" name="emailAddress" type="email" required placeholder="jordan@example.com" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Moving From *
                <input className="cpm-field font-normal" name="movingFrom" required placeholder="Matthews, NC or 28104" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Moving To *
                <input className="cpm-field font-normal" name="movingTo" required placeholder="Charlotte, Ballantyne, or a storage unit" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Preferred Move Date
                <input className="cpm-field font-normal" name="moveDate" type="date" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Home Size *
                <select className="cpm-field font-normal" name="homeSize" required defaultValue={homeSizes[0]}>
                  {homeSizes.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Service Needed *
                <select className="cpm-field font-normal" name="serviceType" required defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold">
              Stairs, heavy pieces, and notes
              <textarea
                className="cpm-field min-h-24 font-normal"
                name="moveNotes"
                rows={3}
                placeholder="Tell us about stairs, a piano, packing, or items you want hauled away..."
              />
            </label>
            <button className="cpm-btn w-full" type="submit">
              Submit for a Free Quote
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </button>
            {sent ? (
              <p className="rounded-[var(--cpm-radius-sm)] bg-[var(--cpm-accent-soft)] px-3 py-3 text-center text-sm font-semibold text-[var(--cpm-accent-ink)]" role="status">
                Thanks. On the live site, Ryan would follow up about this move. Nothing was sent from this demo.
              </p>
            ) : null}
            <p className="text-center text-xs text-[var(--cpm-muted)]">
              This demo keeps your details on this page. Call {phone.display} if you want to talk with the crew now.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
