'use client'

import { Mail, MapPin, Phone } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import {
  ME_CONTACT_AREAS,
  ME_CONTACT_SERVICES,
  ME_EMAIL,
  ME_LOCATION,
  ME_MAPS_URL,
  ME_PHONE_DISPLAY,
  ME_PHONE_TEL,
} from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'

const FIELD =
  'w-full rounded-xl border border-[color-mix(in_srgb,var(--me-text)_16%,transparent)] bg-[var(--me-white)] px-4 py-3.5 text-[var(--me-text)] placeholder:text-[color-mix(in_srgb,var(--me-text)_45%,transparent)] focus:ring-2 focus:ring-[var(--me-primary)] focus:outline-none'

const LABEL = 'mb-2 block text-xs font-bold tracking-wider text-[color-mix(in_srgb,var(--me-text)_72%,transparent)] uppercase'

export default function MeContact() {
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="relative w-full py-24 me-page-x">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-8 lg:col-span-5">
          <div>
            <div className="mb-3 inline-flex items-center rounded-full border border-[var(--me-gold)]/40 bg-[var(--me-gold)]/15 px-3.5 py-1 text-xs font-bold tracking-widest text-[var(--me-gold)] uppercase">
              Free estimate
            </div>
            <h2
              className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
              style={{ fontFamily: DISPLAY }}
            >
              Contact Us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Tell us about the floor. We come onsite in Robbins, look at the concrete, and quote the coating at no cost.
            </p>
          </div>

          <div className="space-y-5 rounded-3xl border border-white/15 bg-[var(--me-white)] p-6 text-[var(--me-text)] shadow-sm sm:p-8">
            <a className="flex items-center gap-4" href={ME_PHONE_TEL}>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--me-primary)]/10 text-[var(--me-primary)]">
                <Phone aria-hidden className="size-7" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold tracking-wider text-[color-mix(in_srgb,var(--me-text)_55%,transparent)] uppercase">
                  Call us
                </span>
                <span
                  className="block text-2xl font-bold text-[var(--me-primary)] transition-colors hover:text-[var(--me-primary-hover)]"
                  style={{ fontFamily: DISPLAY }}
                >
                  {ME_PHONE_DISPLAY}
                </span>
              </span>
            </a>
            <div className="space-y-3 border-t border-[color-mix(in_srgb,var(--me-text)_12%,transparent)] pt-4 text-sm">
              <a className="flex items-center gap-3 break-all hover:text-[var(--me-primary)]" href={`mailto:${ME_EMAIL}`}>
                <Mail aria-hidden className="size-4 shrink-0 text-[var(--me-gold)]" />
                {ME_EMAIL}
              </a>
              <a className="flex items-center gap-3 hover:text-[var(--me-primary)]" href={ME_MAPS_URL}>
                <MapPin aria-hidden className="size-4 shrink-0 text-[var(--me-primary)]" />
                {ME_LOCATION}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            className="space-y-6 rounded-3xl border border-white/15 bg-[var(--me-white)] p-5 text-[var(--me-text)] shadow-sm sm:p-10"
            onSubmit={onSubmit}
          >
            <h3 className="border-b border-[color-mix(in_srgb,var(--me-text)_12%,transparent)] pb-3 text-2xl font-bold" style={{ fontFamily: DISPLAY }}>
              Schedule a free estimate
            </h3>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className={LABEL} htmlFor="me-name">
                  Full name *
                </label>
                <input autoComplete="name" className={FIELD} id="me-name" name="name" placeholder="Your name" required type="text" />
              </div>
              <div>
                <label className={LABEL} htmlFor="me-phone">
                  Phone *
                </label>
                <input autoComplete="tel" className={FIELD} id="me-phone" name="phone" placeholder="Your phone number" required type="tel" />
              </div>
            </div>
            <div>
              <label className={LABEL} htmlFor="me-email">
                Email *
              </label>
              <input autoComplete="email" className={FIELD} id="me-email" name="email" placeholder="you@email.com" required type="email" />
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className={LABEL} htmlFor="me-community">
                  Community *
                </label>
                <select className={FIELD} defaultValue="" id="me-community" name="community" required>
                  <option disabled value="">
                    Select a community
                  </option>
                  {ME_CONTACT_AREAS.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={LABEL} htmlFor="me-service">
                  Service *
                </label>
                <select className={FIELD} defaultValue="" id="me-service" name="service" required>
                  <option disabled value="">
                    Select a service
                  </option>
                  {ME_CONTACT_SERVICES.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <label className={LABEL} htmlFor="me-date">
                Preferred date
              </label>
              <input className={FIELD} id="me-date" name="date" type="date" />
            </div>
            <div>
              <label className={LABEL} htmlFor="me-notes">
                Notes about the floor
              </label>
              <textarea
                className={FIELD}
                id="me-notes"
                name="notes"
                placeholder="Tell us the space and the finish you want."
                rows={3}
              />
            </div>
            <button
              className="inline-flex w-full items-center justify-center rounded-lg bg-[var(--me-primary)] px-6 py-4 font-bold text-[var(--me-white)] transition-colors hover:bg-[var(--me-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--me-gold)]"
              type="submit"
            >
              Get a Free Estimate
            </button>
            {submitted ? (
              <p
                className="rounded-xl border border-[var(--me-gold)] bg-[var(--me-gold)]/15 p-4 text-center text-sm text-[var(--me-text)]"
                role="status"
              >
                We received your request and will call or text to schedule the free estimate.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  )
}
