'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

import { ME_FAQS, ME_LOCATION } from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'

export default function MeFaq() {
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set([0]))

  const toggle = (index: number) => {
    setOpen((current) => {
      const next = new Set(current)
      if (next.has(index)) next.delete(index)
      else next.add(index)
      return next
    })
  }

  return (
    <section id="faq" className="relative w-full py-24 me-page-x">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-3 inline-flex items-center rounded-full border border-[var(--me-gold)]/40 bg-[var(--me-gold)]/15 px-3.5 py-1 text-xs font-bold tracking-widest text-[var(--me-gold)] uppercase">
            {ME_LOCATION}
          </div>
          <h2
            className="text-3xl font-semibold tracking-tight text-balance sm:text-5xl"
            style={{ fontFamily: DISPLAY }}
          >
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            Answers about epoxy flooring and garage floor coatings in Robbins and nearby Moore County.
          </p>
        </div>

        <div className="space-y-4">
          {ME_FAQS.map((item, index) => {
            const expanded = open.has(index)
            const panelId = `me-faq-${index}`
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/15 bg-[var(--me-white)] shadow-sm"
              >
                <button
                  aria-controls={panelId}
                  aria-expanded={expanded}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-bold text-[var(--me-text)] transition-colors hover:text-[var(--me-primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--me-gold)] sm:p-6 sm:text-lg"
                  style={{ fontFamily: DISPLAY }}
                  type="button"
                  onClick={() => toggle(index)}
                >
                  <span>{item.q}</span>
                  <ChevronDown
                    aria-hidden
                    className={`size-5 shrink-0 text-[var(--me-primary)] transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                  />
                </button>
                {expanded ? (
                  <div className="px-5 pb-5 text-sm leading-relaxed text-[color-mix(in_srgb,var(--me-text)_72%,transparent)] sm:px-6 sm:pb-6" id={panelId}>
                    {item.a}
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
