import { Clock, MapPin, Phone, Star } from 'lucide-react'

import { address, footerAreas, footerServices, phones } from '../lib/content'
import HmtLogo from './HmtLogo'

export default function HmtFooter() {
  return (
    <footer className="hmt-glass px-4 py-14 text-sm text-[var(--hmt-on-variant)] lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <HmtLogo />
          <p>
            24/7 precision mobile tire repair, flat change, seasonal swap, and roadside recovery across
            Milton, Halton Region, and Greater Toronto highways.
          </p>
          <p className="flex items-center gap-1 text-[var(--hmt-primary-container)]" aria-label="5.0 stars">
            {Array.from({ length: 5 }, (_, index) => (
              <Star key={index} className="size-4 fill-current" aria-hidden="true" />
            ))}
          </p>
          <p className="font-semibold text-[var(--hmt-on)]">5.0 Star Verified Roadside Service</p>
          <p>Over 250+ Milton & GTA drivers rescued</p>
          <p className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            {address}
          </p>
          <p className="flex items-start gap-2">
            <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            Operating hours: open 24 hours / 7 days a week
          </p>
          <p className="flex items-start gap-2">
            <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
            <span>
              <a className="hover:text-[var(--hmt-on)]" href={phones.primary.href}>
                {phones.primary.display}
              </a>
              {' / '}
              <a className="hover:text-[var(--hmt-on)]" href={phones.secondary.href}>
                {phones.secondary.display}
              </a>
            </span>
          </p>
        </div>
        <div>
          <h2 className="hmt-display mb-3 text-sm font-bold text-[var(--hmt-on)]">Services</h2>
          <ul className="space-y-2">
            {footerServices.map((item) => (
              <li key={item}>
                <a className="hover:text-[var(--hmt-on)]" href="#services">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="hmt-display mb-3 text-sm font-bold text-[var(--hmt-on)]">Coverage Areas</h2>
          <ul className="space-y-2">
            {footerAreas.map((item) => (
              <li key={item}>
                <a className="hover:text-[var(--hmt-on)]" href="#areas">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="hmt-display mb-3 text-sm font-bold text-[var(--hmt-on)]">Payment & Trust</h2>
          <p>Direct on-site mobile POS terminal. No hidden roadside surcharges.</p>
          <p className="mt-3">Visa · Mastercard · Interac Tap · Apple Pay · e-Transfer</p>
          <p className="mt-3 font-semibold text-[var(--hmt-tertiary)]">Licensed & insured</p>
          <p className="mt-2">
            Commercial roadside mechanics equipped with heavy-duty mobile tire changers.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-[var(--hmt-surface-high)] pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>© 2025 Harry Mobile Tire Service 24/7. All rights reserved. 1013 Maple Ave, Milton, ON.</p>
        <p className="flex gap-4">
          <a className="hover:text-[var(--hmt-on)]" href="#faq">
            FAQ
          </a>
          <a className="hover:text-[var(--hmt-on)]" href="#services">
            Service matrix
          </a>
          <a className="hover:text-[var(--hmt-on)]" href={phones.primary.href}>
            Emergency contact
          </a>
        </p>
      </div>
    </footer>
  )
}
