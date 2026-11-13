import { ChevronDown } from 'lucide-react'

import { faqs } from '../lib/content'

export default function HmtFaq() {
  return (
    <section id="faq" className="px-4 py-16 lg:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 space-y-3 text-center">
          <p className="hmt-kicker justify-center">Frequently asked questions</p>
          <h2 className="hmt-h2">Everything You Need to Know About Mobile Tire Rescue</h2>
          <p className="text-[var(--hmt-on-variant)]">
            Clear answers on dispatch speed, highway safety, equipment, and on-site pricing.
          </p>
        </div>
        <div className="hmt-faq space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="group hmt-card">
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold">
                {item.q}
                <ChevronDown className="size-4 shrink-0 text-[var(--hmt-primary)] transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm text-[var(--hmt-on-variant)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
