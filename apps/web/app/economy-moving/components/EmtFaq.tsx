import { ChevronDown } from 'lucide-react'

import { faqs } from '../lib/content'

export default function EmtFaq() {
  return (
    <section id="faq" className="bg-[var(--emt-surface)] px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="emt-kicker">Everything You Need To Know</p>
        <h2 className="emt-h2 mt-2">Frequently Asked Questions</h2>
        <p className="mt-2 text-[var(--emt-muted)]">
          Straightforward answers about Charlotte and Waxhaw moving operations.
        </p>
        <div className="emt-faq mt-6 space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group emt-card emt-hover">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold text-[var(--emt-navy)]">
                {item.q}
                <ChevronDown className="size-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--emt-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
