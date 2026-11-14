import { Mail, Phone } from 'lucide-react'

import { email, footerAreas, footerLinks, phones } from '../lib/content'
import EmtLogo from './EmtLogo'

export default function EmtFooter() {
  return (
    <footer className="bg-[var(--emt-navy-dark)] px-4 pt-14 pb-28 text-white md:pb-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <EmtLogo tone="light" />
          <p className="max-w-md text-sm leading-relaxed text-[var(--emt-on-navy-muted)]">
            Charlotte and Waxhaw&apos;s licensed and insured residential and commercial moving specialists. Over 15
            years of packing, heavy transport, and white-glove logistics across the Carolinas.
          </p>
          <p className="text-sm font-semibold">USDOT Licensed & Insured</p>
          <p className="text-sm text-[var(--emt-amber)]">4.9 / 5.0 Rated (500+ Moves)</p>
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Quick Navigation</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--emt-on-navy-muted)]">
            {footerLinks.map((item) => (
              <li key={item.label}>
                <a className="hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Charlotte Metro Areas</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--emt-on-navy-muted)]">
            {footerAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold tracking-wide uppercase">Contact & Dispatch</h2>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="inline-flex items-center gap-2 hover:text-[var(--emt-amber)]" href={phones.primary.href}>
                <Phone className="size-4" aria-hidden="true" />
                Primary: {phones.primary.display}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-[var(--emt-amber)]" href={phones.secondary.href}>
                <Phone className="size-4" aria-hidden="true" />
                Dispatch: {phones.secondary.display}
              </a>
            </li>
            <li>
              <a className="inline-flex items-center gap-2 hover:text-[var(--emt-amber)]" href={email.href}>
                <Mail className="size-4" aria-hidden="true" />
                {email.display}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-[var(--emt-on-navy-muted)]">
            Mon–Sat: 7:00 AM – 7:00 PM
            <br />
            Sunday: By dispatch appointment
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-white/10 pt-6 text-xs text-[var(--emt-on-navy-muted)] sm:flex-row sm:justify-between">
        <p>© 2024 Economy Moving and Trucking LLC (economymovingnc.com). Demo preview.</p>
        <p>NC Utilities Commission compliant. Forms on this page are not submitted.</p>
      </div>
    </footer>
  )
}
