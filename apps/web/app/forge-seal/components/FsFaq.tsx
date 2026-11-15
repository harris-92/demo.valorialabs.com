'use client'

import { useState } from 'react'

import { faqs } from '../lib/content'
import FsIcon from './FsIcon'

export default function FsFaq() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faqs" className="scroll-mt-32 bg-[var(--fs-pitch)] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Technical Pavement Advice</p>
        <h2 className="mt-3 text-4xl">Frequently Asked Questions</h2>
        <p className="mt-4 text-[var(--fs-muted)]">
          Everything you need to know about protecting your asphalt investment across Ontario&apos;s severe seasonal climate.
        </p>
        <div className="fs-card mt-8 divide-y divide-[var(--fs-line)] overflow-hidden rounded-3xl border border-[var(--fs-line)]">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="fs-display text-base">{faq.question}</span>
                  <FsIcon name="chevron" className={`h-5 w-5 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen ? <p className="px-4 pb-5 text-sm leading-6 text-[var(--fs-muted)]">{faq.answer}</p> : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
