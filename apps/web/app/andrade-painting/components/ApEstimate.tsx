'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'

import { address, email, phone, serviceOptions, timelines } from '../lib/content'

export default function ApEstimate() {
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="quote" className="bg-[var(--ap-amber-wash)] py-16 lg:py-20">
      <div className="ap-wrap grid items-start gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="ap-kicker">Fast Local Scheduling</p>
          <h2 className="ap-h2 mt-2">Schedule Your Free Painting Estimate in Charlotte Today</h2>
          <p className="mt-3 text-[var(--ap-muted)]">
            Lock in your 20% discount on residential estimates or get a tailored proposal for your commercial space.
            Fill out the form or reach our Charlotte office directly.
          </p>
          <div className="mt-6 space-y-3">
            <div className="ap-lift flex items-start gap-3 rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-4 text-[var(--ap-ink)]">
              <MapPin className="mt-0.5 size-6 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Charlotte Headquarters</p>
                <p className="text-sm text-[var(--ap-muted)]">{address.line}</p>
              </div>
            </div>
            <div className="ap-lift flex items-start gap-3 rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-4 text-[var(--ap-ink)]">
              <Phone className="mt-0.5 size-6 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Direct Phone</p>
                <a className="text-sm font-semibold text-[var(--ap-accent)] hover:underline" href={phone.href}>
                  {phone.display}
                </a>
                <p className="text-xs text-[var(--ap-muted)]">Available Mon - Sat, 7:00 AM - 7:00 PM</p>
              </div>
            </div>
            <div className="ap-lift flex items-start gap-3 rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-4 text-[var(--ap-ink)]">
              <Mail className="mt-0.5 size-6 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Email Address</p>
                <a className="text-sm font-semibold break-all text-[var(--ap-accent)] hover:underline" href={email.href}>
                  {email.display}
                </a>
                <p className="text-xs text-[var(--ap-muted)]">24-hour response turnaround</p>
              </div>
            </div>
            <div className="ap-lift flex items-start gap-3 rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-4 text-[var(--ap-ink)]">
              <ShieldCheck className="mt-0.5 size-6 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
              <div>
                <p className="font-semibold">Our Charlotte Guarantee</p>
                <p className="text-sm text-[var(--ap-muted)]">
                  2-Year Workmanship Warranty • Licensed & Insured NC Contractor • Zero Hassle
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="ap-card ap-lift p-6 sm:p-8 lg:col-span-7">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <h3 className="ap-display text-2xl font-semibold">Get Your Quote</h3>
            <span className="rounded bg-[var(--ap-green-soft)] px-2 py-1 text-[11px] font-bold tracking-wide text-[var(--ap-green-ink)] uppercase">
              20% Off Rate Active
            </span>
          </div>
          <form className="grid gap-4" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5 text-sm font-semibold">
                Full Name *
                <input className="ap-field font-normal" name="fullName" required placeholder="John Smith" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Phone Number *
                <input className="ap-field font-normal" name="phoneNumber" type="tel" required placeholder="(704) 555-0199" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Email Address *
                <input className="ap-field font-normal" name="emailAddress" type="email" required placeholder="john@example.com" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Charlotte Address / Zip Code *
                <input className="ap-field font-normal" name="propertyAddress" required placeholder="e.g. 28217 or Dilworth" />
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Service Needed *
                <select className="ap-field font-normal" name="serviceType" required defaultValue={serviceOptions[0]}>
                  {serviceOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-semibold">
                Desired Timeline
                <select className="ap-field font-normal" name="targetTimeline" defaultValue={timelines[0]}>
                  {timelines.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <label className="grid gap-1.5 text-sm font-semibold">
              Project Details & Notes
              <textarea
                className="ap-field min-h-24 font-normal"
                name="projectNotes"
                rows={3}
                placeholder="Tell us about the rooms, approximate square footage, colors, or drywall repairs needed..."
              />
            </label>
            <button className="ap-btn w-full" type="submit">
              Submit & Claim 20% Estimate Discount
              <CheckCircle2 className="size-5" aria-hidden="true" />
            </button>
            {sent ? (
              <p className="rounded-[var(--ap-radius-sm)] bg-[var(--ap-green-soft)] px-3 py-3 text-center text-sm font-semibold text-[var(--ap-green-ink)]" role="status">
                Thanks for submitting! Jose Andrade will contact you within 24 hours to schedule your free estimate.
                Nothing was sent from this demo.
              </p>
            ) : null}
            <p className="text-center text-xs text-[var(--ap-muted)]">
              We respect your privacy. No spam. Direct contact from our licensed Charlotte team only. This demo keeps
              your details on this page.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
