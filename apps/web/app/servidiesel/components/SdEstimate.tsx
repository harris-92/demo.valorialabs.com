import { MapPin, Phone, Wrench } from 'lucide-react'

import { address, phone } from '../lib/content'

export default function SdEstimate() {
  return (
    <section className="bg-[var(--sd-wash)] py-16 lg:py-20">
      <div className="sd-wrap">
        <p className="sd-kicker">Request a mobile visit</p>
        <h2 className="sd-h2 mt-2">Tell Servidiesel where the machine is sitting</h2>
        <p className="mt-3 max-w-2xl text-[var(--sd-muted)]">
          Send the location, the equipment, and how urgent it is. If it is a breakdown right now, call{' '}
          {phone.display}.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          <div className="sd-lift flex items-start gap-3 rounded-[var(--sd-radius)] bg-[var(--sd-card)] p-4 text-[var(--sd-ink)]">
            <MapPin className="mt-0.5 size-6 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
            <div>
              <p className="font-semibold">Barrie base</p>
              <p className="text-sm text-[var(--sd-muted)]">{address.line}</p>
            </div>
          </div>
          <div className="sd-lift flex items-start gap-3 rounded-[var(--sd-radius)] bg-[var(--sd-card)] p-4 text-[var(--sd-ink)]">
            <Phone className="mt-0.5 size-6 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
            <div>
              <p className="font-semibold">Call Cristiano</p>
              <a className="text-sm font-semibold text-[var(--sd-accent)] hover:underline" href={phone.href}>
                {phone.display}
              </a>
              <p className="text-xs text-[var(--sd-muted)]">The direct line when something is down</p>
            </div>
          </div>
          <div className="sd-lift flex items-start gap-3 rounded-[var(--sd-radius)] bg-[var(--sd-card)] p-4 text-[var(--sd-ink)]">
            <Wrench className="mt-0.5 size-6 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
            <div>
              <p className="font-semibold">What to include</p>
              <p className="text-sm text-[var(--sd-muted)]">
                Location, equipment, and a photo of the fault if you have one.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
