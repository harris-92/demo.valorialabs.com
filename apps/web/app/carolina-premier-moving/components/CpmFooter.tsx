import { Mail, MapPin, Phone, Star } from 'lucide-react'

import { address, email, footerAreas, footerServices, nav, phone } from '../lib/content'
import CpmLogo from './CpmLogo'

export default function CpmFooter() {
  return (
    <footer className="border-t border-[var(--cpm-high)] bg-[var(--cpm-card)] text-[var(--cpm-ink)]">
      <div className="cpm-wrap grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <CpmLogo />
          <p className="max-w-sm text-sm text-[var(--cpm-muted)]">
            Local moving, packing, labor-only help, and junk hauling for homes around Charlotte and Matthews.
          </p>
          <a className="flex items-start gap-2 text-sm hover:underline" href={address.maps}>
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
            {address.line}
          </a>
          <a className="flex items-center gap-2 text-sm font-semibold text-[var(--cpm-accent)]" href={phone.href}>
            <Phone className="size-4" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="flex items-center gap-2 text-sm font-semibold break-all text-[var(--cpm-accent)]" href={email.href}>
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {email.display}
          </a>
        </div>
        <div>
          <h2 className="text-sm font-bold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--cpm-muted)]">
            {footerServices.map((item) => (
              <li key={item}>
                <a className="hover:text-[var(--cpm-ink)]" href="#services">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--cpm-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="hover:text-[var(--cpm-ink)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Service Towns</h2>
          <p className="mt-3 text-sm text-[var(--cpm-muted)]">Towns listed on the Carolina Premier site:</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {footerAreas.map((area) => (
              <li key={area} className="rounded-full bg-[var(--cpm-low)] px-2.5 py-1">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--cpm-high)]">
        <div className="cpm-wrap flex flex-col gap-2 py-4 text-xs text-[var(--cpm-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p className="inline-flex flex-wrap items-center gap-2">
            <Star className="size-3.5 fill-[var(--cpm-amber)] text-[var(--cpm-amber)]" aria-hidden="true" />
            5.0 Google rating · 21 reviews
          </p>
          <p>© 2026 Carolina Premier Moving & Hauling. Matthews, NC.</p>
        </div>
      </div>
    </footer>
  )
}
