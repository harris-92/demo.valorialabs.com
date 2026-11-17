'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

import { address, email, phone, serviceOptions, timelines } from '../lib/content'

export default function BdnEstimate() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="quote" className="bdn-on-gold py-16 lg:py-20">
      <div className="bdn-wrap grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="bdn-kicker">Free pre-construction consult</p>
          <h2 className="bdn-h2 mt-2">Tell us the space and the opening date</h2>
          <p className="bdn-on-gold-copy mt-3">
            Share the project and Jamie’s team will follow up to schedule a walk-through. This demo keeps the form on
            the page so you can see the lead path.
          </p>
          <div className="mt-6 space-y-3">
            <div className="bdn-lift flex items-start gap-3 rounded-[var(--bdn-radius)] bg-[var(--bdn-card)] p-4 text-[var(--bdn-ink)]">
              <MapPin className="mt-0.5 size-6 shrink-0 text-[var(--bdn-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Oakville office</p>
                <p className="text-sm text-[var(--bdn-muted)]">{address.line}</p>
              </div>
            </div>
            <div className="bdn-lift flex items-start gap-3 rounded-[var(--bdn-radius)] bg-[var(--bdn-card)] p-4 text-[var(--bdn-ink)]">
              <Phone className="mt-0.5 size-6 shrink-0 text-[var(--bdn-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Direct phone</p>
                <a className="text-sm font-semibold text-[var(--bdn-accent)] hover:underline" href={phone.href}>
                  {phone.display}
                </a>
              </div>
            </div>
            <div className="bdn-lift flex items-start gap-3 rounded-[var(--bdn-radius)] bg-[var(--bdn-card)] p-4 text-[var(--bdn-ink)]">
              <Mail className="mt-0.5 size-6 shrink-0 text-[var(--bdn-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Email</p>
                <a className="text-sm font-semibold break-all text-[var(--bdn-accent)] hover:underline" href={email.href}>
                  {email.display}
                </a>
              </div>
            </div>
            <div className="bdn-lift flex items-start gap-3 rounded-[var(--bdn-radius)] bg-[var(--bdn-card)] p-4 text-[var(--bdn-ink)]">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-[var(--bdn-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">What you get</p>
                <p className="text-sm text-[var(--bdn-muted)]">
                  A site walk, a budget read, and a schedule check. No obligation to proceed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bdn-card bdn-lift p-6 sm:p-8 lg:col-span-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="bdn-display text-2xl font-semibold">Request the consult</h3>
            <span className="rounded bg-[var(--bdn-gold)] px-2 py-1 text-[11px] font-bold tracking-wide text-[var(--bdn-gold-ink)] uppercase">
              No obligation
            </span>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-semibold">
                Full name *
                <input className="bdn-field font-normal" name="fullName" required placeholder="Alex Martin" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Company *
                <input className="bdn-field font-normal" name="company" required placeholder="Company or brand" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Phone *
                <input className="bdn-field font-normal" name="phoneNumber" type="tel" required placeholder="(416) 555-0199" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Email *
                <input className="bdn-field font-normal" name="emailAddress" type="email" required placeholder="alex@company.com" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Project type *
                <select className="bdn-field font-normal" name="projectType" required defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                City *
                <input className="bdn-field font-normal" name="city" required placeholder="Oakville, Burlington, Toronto…" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold sm:col-span-2">
                Timeline
                <select className="bdn-field font-normal" name="targetTimeline" defaultValue={timelines[0]}>
                  {timelines.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold">
              Scope notes
              <textarea
                className="bdn-field min-h-24 font-normal"
                name="projectNotes"
                rows={3}
                placeholder="Square footage, landlord deadline, or what the previous contractor left behind."
              />
            </label>
            <button className="bdn-btn w-full" type="submit">
              Request the free consult
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </button>
            {sent ? (
              <p className="rounded-[var(--bdn-radius-sm)] bg-[var(--bdn-gold)] px-3 py-3 text-center text-sm font-semibold text-[var(--bdn-gold-ink)]" role="status">
                Thanks. On the live site, Jamie’s office would follow up to book the walk. Nothing was sent from this
                demo.
              </p>
            ) : null}
            <p className="text-center text-xs text-[var(--bdn-muted)]">
              Prefer to talk now? Call {phone.display} or email {email.display}. This demo does not store the form.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
