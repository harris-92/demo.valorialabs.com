import { ChevronDown } from 'lucide-react'

import { faqs } from '../lib/content'

export default function ApFaq() {
  return (
    <section id="faq" className="bg-[var(--ap-low)] py-16 lg:py-20">
      <div className="ap-wrap max-w-3xl">
        <div className="mb-8 text-center">
          <p className="ap-kicker">Frequently Asked Questions</p>
          <h2 className="ap-h2 mt-2">Everything You Need to Know About Our Charlotte Painting Services</h2>
          <p className="mt-2 text-[var(--ap-muted)]">
            Clear, transparent answers on pricing, scheduling, warranties, and our exact painting process.
          </p>
        </div>
        <div className="ap-faq space-y-3">
          {faqs.map((item, index) => (
            <details key={item.q} className="ap-card ap-lift" open={index === 0}>
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-[var(--ap-accent)]" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--ap-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
