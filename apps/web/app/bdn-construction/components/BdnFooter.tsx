import { Mail, MapPin, Phone } from 'lucide-react'

import { address, email, footerAreas, footerServices, nav, phone, socials } from '../lib/content'
import BdnLogo from './BdnLogo'

export default function BdnFooter() {
  return (
    <footer className="border-t border-[var(--bdn-high)] bg-[var(--bdn-card)] text-[var(--bdn-ink)]">
      <div className="bdn-wrap grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <BdnLogo />
          <p className="max-w-sm text-sm text-[var(--bdn-muted)]">
            Oakville ICI contractor for retail, restaurant, medical, and commercial fit-outs across the GTA. On budget,
            on the opening date, with the financials in the open.
          </p>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--bdn-accent)]" aria-hidden="true" />
            {address.line}
          </p>
          <a className="flex items-center gap-2 text-sm font-semibold text-[var(--bdn-accent)]" href={phone.href}>
            <Phone className="size-4" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="flex items-center gap-2 text-sm font-semibold break-all text-[var(--bdn-accent)]" href={email.href}>
            <Mail className="size-4 shrink-0" aria-hidden="true" />
            {email.display}
          </a>
          <p className="flex flex-wrap gap-3 text-sm font-semibold">
            {socials.map((social) => (
              <a key={social.href} className="text-[var(--bdn-accent)] hover:underline" href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-bold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--bdn-muted)]">
            {footerServices.map((item) => (
              <li key={item}>
                <a className="hover:text-[var(--bdn-ink)]" href="#services">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">On this page</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--bdn-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="hover:text-[var(--bdn-ink)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Service area</h2>
          <p className="mt-3 text-sm text-[var(--bdn-muted)]">Crews working from the Oakville office:</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {footerAreas.map((area) => (
              <li key={area} className="rounded-full bg-[var(--bdn-low)] px-2.5 py-1">
                {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--bdn-high)]">
        <div className="bdn-wrap flex flex-col gap-2 py-4 text-xs text-[var(--bdn-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>Demo preview for BDN Construction. Oakville, Ontario.</p>
          <p>© {new Date().getFullYear()} BDN Construction.</p>
        </div>
      </div>
    </footer>
  )
}
