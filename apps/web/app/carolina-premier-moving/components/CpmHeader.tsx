'use client'

import { useState } from 'react'
import { BadgeCheck, Menu, Phone, Star, X } from 'lucide-react'

import Switch from '@/components/ui/sky-toggle'

import { nav, phone } from '../lib/content'
import CpmLogo from './CpmLogo'
import { useCpmTheme } from './CpmTheme'

export default function CpmHeader() {
  const [open, setOpen] = useState(false)
  const { dark, setDark } = useCpmTheme()

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--cpm-bg)]/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="bg-[var(--cpm-navy)] text-white">
        <div className="cpm-wrap flex flex-col gap-1 py-2 text-[11px] font-semibold tracking-wide uppercase sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--cpm-on-dark-muted)]">
            <span className="inline-flex items-center gap-1">
              <BadgeCheck className="size-3.5 text-[var(--cpm-accent-bright)]" aria-hidden="true" />
              Serving Charlotte, Matthews & nearby towns
            </span>
            <span className="hidden md:inline">Call or text 24/7</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1 text-[var(--cpm-amber-soft)]">
              <Star className="size-3.5 fill-[var(--cpm-amber)] text-[var(--cpm-amber)]" aria-hidden="true" />
              <span className="font-bold text-white">5.0</span>
              Google Rated
            </span>
            <a className="inline-flex items-center gap-1 text-[var(--cpm-accent-bright)] hover:text-white" href={phone.href}>
              <Phone className="size-3.5" aria-hidden="true" />
              {phone.display}
            </a>
          </div>
        </div>
      </div>
      <div className="cpm-wrap flex min-h-16 items-center justify-between gap-3 py-2">
        <a href="#top" aria-label="Carolina Premier Moving and Hauling, Matthews NC">
          <CpmLogo />
        </a>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-sm whitespace-nowrap text-[var(--cpm-muted)] hover:text-[var(--cpm-ink)]"
              href={item.href}
            >
              {'badge' in item ? (
                <span className="rounded bg-[var(--cpm-btn)] px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                  {item.badge}
                </span>
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Switch checked={dark} onCheckedChange={setDark} size={12} />
          <a className="cpm-btn-soft cpm-btn-nav hidden md:inline-flex" href={phone.href}>
            <Phone className="size-3.5 text-[var(--cpm-accent)]" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="cpm-btn cpm-btn-nav hidden sm:inline-flex" href="#quote">
            Get Free Quote
          </a>
          <a className="cpm-btn inline-flex size-10 p-0 sm:hidden" href={phone.href} aria-label={`Call ${phone.display}`}>
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--cpm-ink)] xl:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="cpm-mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="cpm-mobile-nav" className="border-t border-[var(--cpm-high)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-2 py-2 text-sm font-semibold text-[var(--cpm-ink)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="cpm-btn mt-2" href="#quote" onClick={close}>
              Get Free Quote
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
