'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { faqs } from '../lib/content'

export default function BdnFaq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="bg-[var(--bdn-low)] py-16 lg:py-20">
      <div className="bdn-wrap max-w-3xl">
        <div className="mb-8 text-center">
          <p className="bdn-kicker">Before you call</p>
          <h2 className="bdn-h2 mt-2">Questions owners ask first</h2>
          <p className="mt-2 text-[var(--bdn-muted)]">
            Scope, project size, the free consult, and where the crews already work.
          </p>
        </div>
        <div className="bdn-faq space-y-3">
          {faqs.map((item, index) => {
            const open = openIndex === index
            return (
              <details key={item.q} className="bdn-card" open={open}>
                <summary
                  className="flex items-center justify-between gap-4 px-5 py-4 font-semibold"
                  onClick={(event) => {
                    event.preventDefault()
                    setOpenIndex(open ? -1 : index)
                  }}
                >
                  {item.q}
                  <ChevronDown
                    className={`size-5 shrink-0 text-[var(--bdn-accent)] ${open ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </summary>
                <p className="px-5 pb-5 text-sm leading-relaxed text-[var(--bdn-muted)]">{item.a}</p>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}
