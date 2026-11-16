import { Phone } from 'lucide-react'

import { phone } from '../lib/content'

export default function SdCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-[var(--sd-navy)] p-3 md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a className="sd-btn-invert" href={phone.href}>
          <Phone className="size-4" aria-hidden="true" />
          Call
        </a>
        <a className="sd-btn-line" href="#quote">
          Request a visit
        </a>
      </div>
    </div>
  )
}
