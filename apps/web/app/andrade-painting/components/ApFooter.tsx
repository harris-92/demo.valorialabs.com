import { BadgeCheck, Mail, MapPin, Phone, Star } from 'lucide-react'

import { address, email, footerAreas, footerServices, nav, phone } from '../lib/content'
import ApLogo from './ApLogo'

export default function ApFooter() {
  return (
    <footer className="border-t border-[var(--ap-high)] bg-[var(--ap-card)] text-[var(--ap-ink)]">
      <div className="ap-wrap grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <ApLogo />
          <p className="max-w-sm text-sm text-[var(--ap-muted)]">
            Professional painting contractor serving Charlotte, NC since 2010. Providing residential interior and
            exterior, commercial painting, and pressure washing with clinical surface prep and precision execution.
          </p>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
            {address.line}
          </p>
          <a className="flex items-center gap-2 text-sm font-semibold text-[var(--ap-accent)]" href={phone.href}>
            <Phone className="size-4" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="flex items-center gap-2 text-sm font-semibold break-all text-[var(--ap-accent)]" href={email.href}>
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {email.display}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-bold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ap-muted)]">
            {footerServices.map((item) => (
              <li key={item}>
                <a className="hover:text-[var(--ap-ink)]" href="#services">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ap-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="hover:text-[var(--ap-ink)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Metro Charlotte Areas</h2>
          <p className="mt-3 text-sm text-[var(--ap-muted)]">
            Proudly serving Mecklenburg County and surrounding communities:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {footerAreas.map((area) => (
              <li key={area} className="rounded-full bg-[var(--ap-low)] px-2.5 py-1">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--ap-high)]">
        <div className="ap-wrap flex flex-col gap-2 py-4 text-xs text-[var(--ap-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex flex-wrap items-center gap-2">
            <BadgeCheck className="size-4 text-[var(--ap-accent)]" aria-hidden="true" />
            Licensed & Insured NC Contractor
            <Star className="size-3.5 fill-[var(--ap-amber)] text-[var(--ap-amber)]" aria-hidden="true" />
            Google 5-Star Reviews
          </p>
          <p>© 2026 Andrade Painting LLC. All rights reserved. Charlotte, NC.</p>
        </div>
      </div>
    </footer>
  )
}
