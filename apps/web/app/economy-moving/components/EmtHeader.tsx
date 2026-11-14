'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

import { email, nav, phones } from '../lib/content'
import EmtLogo from './EmtLogo'

export default function EmtHeader() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-[0_1px_8px_rgba(13,43,79,0.06)]">
      <div className="bg-[var(--emt-navy-dark)] px-4 py-2 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-1.5 text-xs sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <p className="inline-flex items-center gap-1.5 font-semibold">
            <span aria-hidden="true">★</span>
            5-Star Rated Charlotte & Waxhaw NC Movers
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-white/90">
            <a className="inline-flex items-center gap-1 hover:text-[var(--emt-amber)]" href={phones.primary.href}>
              <Phone className="size-3.5" aria-hidden="true" />
              Primary: {phones.primary.display}
            </a>
            <a className="inline-flex items-center gap-1 hover:text-[var(--emt-amber)]" href={phones.secondary.href}>
              Secondary: {phones.secondary.display}
            </a>
            <a className="hover:text-[var(--emt-amber)]" href={email.href}>
              {email.display}
            </a>
            <span className="text-[var(--emt-emerald)]">Licensed & Insured NC/SC</span>
          </div>
        </div>
      </div>
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 py-2 lg:px-8">
        <a href="#top" aria-label="Economy Moving and Trucking">
          <EmtLogo />
        </a>
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="text-sm font-semibold whitespace-nowrap text-[var(--emt-navy)] hover:text-[var(--emt-amber-ink)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 xl:flex">
          <a className="emt-btn-navy inline-flex px-3 py-2 text-sm" href={phones.primary.href}>
            <Phone className="size-4" aria-hidden="true" />
            Call for Free Estimate
          </a>
          <a className="emt-btn inline-flex px-3 py-2 text-sm" href="#quick-estimator">
            Request a Quote
          </a>
        </div>
        <a className="emt-btn inline-flex px-3 py-2 text-sm xl:hidden" href={phones.primary.href}>
          <Phone className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">{phones.primary.display}</span>
          <span className="sr-only sm:hidden">Call {phones.primary.display}</span>
        </a>
        <button
          className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--emt-navy)] xl:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="emt-mobile-nav"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </div>
      {open ? (
        <nav id="emt-mobile-nav" className="border-t border-[var(--emt-border)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-7xl flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                className="border-b border-[var(--emt-border)] py-3 text-sm font-semibold text-[var(--emt-navy)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="emt-btn mt-3 px-4 py-3" href="#quick-estimator" onClick={close}>
              Request a Quote
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
