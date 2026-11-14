import { Phone } from 'lucide-react'

import { phones } from '../lib/content'

export default function EmtMobileBar() {
  return (
    <aside className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--emt-border)] bg-white p-3 md:hidden">
      <div className="flex items-center gap-2">
        <a className="emt-btn flex-1 px-4 py-3" href={phones.primary.href}>
          <Phone className="size-4" aria-hidden="true" />
          Call Dan
        </a>
        <a className="emt-btn-navy flex-1 px-4 py-3" href="#quick-estimator">
          Estimate
        </a>
      </div>
    </aside>
  )
}
