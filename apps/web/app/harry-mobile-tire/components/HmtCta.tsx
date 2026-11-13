import { MapPin, MessageCircle, Phone } from 'lucide-react'

import { phones, whatsappHref } from '../lib/content'

export default function HmtCta() {
  return (
    <section id="contact" className="px-4 py-16 lg:px-12">
      <div className="hmt-glass mx-auto max-w-5xl rounded-3xl px-5 py-10 text-center sm:px-10">
        <p className="hmt-mono text-[var(--hmt-primary-container)]">24/7 roadside units patrolling now</p>
        <h2 className="hmt-h2 mt-3">Stranded With A Flat in Milton or the GTA Right Now?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[var(--hmt-on-variant)]">
          Don&apos;t risk highway traffic or wait 3 hours for a tow truck. Call Harry Mobile Tire
          Service 24/7 for immediate dispatch.
        </p>
        <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
          <a className="hmt-btn px-5 py-4" href={phones.primary.href}>
            <Phone className="size-4" aria-hidden="true" />
            Call {phones.primary.display}
          </a>
          <a className="hmt-btn-ghost px-5 py-4" href={whatsappHref} rel="noopener noreferrer" target="_blank">
            <MessageCircle className="size-4 text-[var(--hmt-tertiary)]" aria-hidden="true" />
            WhatsApp Chat
          </a>
        </div>
        <a className="mt-4 inline-flex items-center justify-center gap-1 text-sm text-[var(--hmt-secondary)]" href="#areas">
          <MapPin className="size-4" aria-hidden="true" />
          1013 Maple Ave, Milton
        </a>
      </div>
    </section>
  )
}
