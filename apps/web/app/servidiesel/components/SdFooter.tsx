import { MapPin, Phone } from 'lucide-react'

import { address, coverage, footerServices, googleMaps, nav, phone, website } from '../lib/content'
import SdLogo from './SdLogo'

export default function SdFooter() {
  return (
    <footer className="border-t border-[var(--sd-high)] bg-[var(--sd-card)] text-[var(--sd-ink)]">
      <div className="sd-wrap grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="space-y-3 lg:col-span-2">
          <SdLogo />
          <p className="max-w-sm text-sm text-[var(--sd-muted)]">
            Mobile mechanic for cars, trucks, heavy diesel, excavators, and hydraulics. The shop comes to the machine.
            Owned and operated by Cristiano.
          </p>
          <p className="flex items-start gap-2 text-sm">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
            {address.line}
          </p>
          <a className="flex items-center gap-2 text-sm font-semibold text-[var(--sd-accent)]" href={phone.href}>
            <Phone className="size-4" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="text-sm font-semibold text-[var(--sd-accent)] hover:underline" href={googleMaps.href} target="_blank" rel="noreferrer">
            Google listing
          </a>
        </div>
        <div>
          <h2 className="text-sm font-bold">Services</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--sd-muted)]">
            {footerServices.map((item) => (
              <li key={item}>
                <a className="hover:text-[var(--sd-ink)]" href="#services">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">On this page</h2>
          <ul className="mt-3 space-y-2 text-sm text-[var(--sd-muted)]">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="hover:text-[var(--sd-ink)]" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-bold">Coverage</h2>
          <p className="mt-3 text-sm text-[var(--sd-muted)]">Based in Barrie. Service happens where the machine is sitting.</p>
          <ul className="mt-3 flex flex-wrap gap-2 text-sm">
            {coverage.map((area) => (
              <li key={area} className="rounded-full bg-[var(--sd-low)] px-2.5 py-1">
                {area}
              </li>
            ))}
          </ul>
          <a className="mt-4 inline-block text-sm font-semibold text-[var(--sd-accent)] hover:underline" href={website.href}>
            {website.label}
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--sd-high)]">
        <div className="sd-wrap flex flex-col gap-2 py-4 text-xs text-[var(--sd-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Servidiesel Inc. Owned and operated by Cristiano.</p>
          <p>Barrie, ON</p>
        </div>
      </div>
    </footer>
  )
}
