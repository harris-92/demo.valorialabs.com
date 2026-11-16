import { ChevronDown } from 'lucide-react'

import { faqs } from '../lib/content'

export default function SdFaq() {
  return (
    <section id="faq" className="bg-[var(--sd-low)] py-16 lg:py-20">
      <div className="sd-wrap max-w-3xl">
        <div className="mb-8 text-center">
          <p className="sd-kicker">Before you call</p>
          <h2 className="sd-h2 mt-2">Questions about a mobile repair</h2>
          <p className="mt-2 text-[var(--sd-muted)]">
            What the shop comes out for, how hydraulics are handled on site, and where Servidiesel is based.
          </p>
        </div>
        <div className="sd-faq space-y-3">
          {faqs.map((item, index) => (
            <details key={item.q} className="sd-card sd-lift" open={index === 0}>
              <summary className="flex items-center justify-between gap-4 px-5 py-4 font-semibold">
                {item.q}
                <ChevronDown className="size-5 shrink-0 text-[var(--sd-accent)]" aria-hidden="true" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--sd-muted)]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
