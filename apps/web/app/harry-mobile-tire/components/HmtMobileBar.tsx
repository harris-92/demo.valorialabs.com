import { MapPin, Phone } from 'lucide-react'

import { phones } from '../lib/content'

export default function HmtMobileBar() {
  return (
    <aside className="hmt-glass fixed inset-x-0 bottom-0 z-40 border-t border-white/70 p-3 md:hidden">
      <div className="flex items-center gap-2">
        <a className="hmt-btn flex-1 px-4 py-3" href={phones.primary.href}>
          <Phone className="size-4" aria-hidden="true" />
          Call 24/7 dispatch
        </a>
        <a className="inline-flex size-12 items-center justify-center rounded-xl bg-[var(--hmt-surface-high)]" href="#areas" aria-label="Service area and address">
          <MapPin className="size-5" aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
