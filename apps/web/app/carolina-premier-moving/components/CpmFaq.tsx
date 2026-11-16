import { ChevronDown } from 'lucide-react'

import { faqs } from '../lib/content'

export default function CpmFaq() {
  return (
    <section id="faq" className="bg-[var(--cpm-low)] py-16 lg:py-20">
      <div className="cpm-wrap max-w-3xl">
        <div className="mb-8 text-center">
          <p className="cpm-kicker">Questions before you book</p>
          <h2 className="cpm-h2 mt-2">Moving, Packing, and Hauling in Charlotte</h2>
          <p className="mt-2 text-[var(--cpm-muted)]">
            Straight answers from the services, towns, and hours Carolina Premier already publishes.
          </p>
        </div>
        <div className="cpm-faq space-y-3">
          {faqs.map((item, index) => (
            <details key={item.q} className="cpm-card cpm-lift" open={index === 0}>
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-[var(--cpm-accent)]" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--cpm-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
