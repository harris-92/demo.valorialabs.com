'use client'

import { useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

import { nav, phones } from '../lib/content'
import HmtLogo from './HmtLogo'

export default function HmtHeader() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <header className="hmt-glass sticky top-0 z-50 border-b border-white/60">
      <div className="border-b border-[var(--hmt-surface-high)] px-4 py-2 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-[11px] sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p className="flex items-center gap-2 text-[var(--hmt-on-variant)]">
            <span className="inline-block size-2 shrink-0 animate-pulse rounded-full bg-[var(--hmt-dot)] shadow-[0_0_10px_var(--hmt-dot)]" />
            <span className="hmt-mono text-[0.62rem] text-[var(--hmt-primary)]">
              24/7 Rapid Dispatch: Milton, Oakville, Burlington & GTA • ETA: 20-30 min
            </span>
          </p>
          <p className="text-[var(--hmt-on-variant)]">
            Call direct:{' '}
            <a className="font-semibold text-[var(--hmt-on)] hover:text-[var(--hmt-primary)]" href={phones.primary.href}>
              {phones.primary.display}
            </a>
            {' / '}
            <a className="font-semibold text-[var(--hmt-on)] hover:text-[var(--hmt-primary)]" href={phones.secondary.href}>
              {phones.secondary.display}
            </a>
          </p>
        </div>
      </div>
      <div className="mx-auto flex min-h-16 w-full flex-nowrap items-center justify-between gap-3 px-4 py-2 xl:px-6">
        <a className="min-w-0 shrink-0" href="#top" aria-label="Harry Mobile Tire">
          <HmtLogo />
        </a>
        <nav
          className="hmt-menu hmt-glass hidden min-w-0 flex-nowrap items-center gap-0.5 rounded-full p-1 xl:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              className="shrink-0 rounded-full px-1.5 py-1.5 text-[11px] font-medium whitespace-nowrap text-[var(--hmt-secondary)] hover:bg-[var(--hmt-surface-highest)] hover:text-[var(--hmt-on)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
          <a
            className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[var(--hmt-primary-container)] px-2.5 py-1.5 text-[11px] font-bold whitespace-nowrap text-[var(--hmt-on-primary)]"
            href={phones.primary.href}
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {phones.primary.display}
          </a>
          <a
            className="inline-flex shrink-0 items-center rounded-full px-2.5 py-1.5 text-[11px] font-bold whitespace-nowrap text-[var(--hmt-on)] hover:bg-[var(--hmt-surface-highest)]"
            href="#dispatch"
          >
            Instant Quote
          </a>
        </nav>
        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <a className="hmt-btn hidden px-3 py-2 text-sm sm:inline-flex" href={phones.primary.href}>
            <Phone className="size-4" aria-hidden="true" />
            {phones.primary.display}
          </a>
          <a className="hmt-btn-ghost hidden px-3 py-2 text-sm lg:inline-flex" href="#dispatch">
            Instant Quote
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--hmt-on)]"
            type="button"
            aria-expanded={open}
            aria-controls="hmt-mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="hmt-mobile-nav" className="border-t border-[var(--hmt-surface-high)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-7xl flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                className="border-b border-[var(--hmt-surface-high)] py-3 text-sm font-semibold text-[var(--hmt-on)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="inline-flex items-center gap-2 py-3 text-sm text-[var(--hmt-primary-container)]" href={phones.primary.href} onClick={close}>
              <Phone className="size-4" aria-hidden="true" />
              {phones.primary.display}
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
