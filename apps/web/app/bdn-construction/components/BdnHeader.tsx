'use client'

import { useState } from 'react'
import { BadgeCheck, Menu, Phone, X } from 'lucide-react'

import Switch from '@/components/ui/sky-toggle'

import { nav, phone } from '../lib/content'
import BdnLogo from './BdnLogo'
import { useBdnTheme } from './BdnTheme'

export default function BdnHeader() {
  const [open, setOpen] = useState(false)
  const { dark, setDark } = useBdnTheme()

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--bdn-bg)]/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="bg-[var(--bdn-navy)] text-white">
        <div className="bdn-wrap flex flex-col gap-1 py-2 text-[11px] font-semibold tracking-wide uppercase sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--bdn-on-dark-muted)]">
            <span className="inline-flex items-center gap-1">
              <BadgeCheck className="size-3.5 text-[var(--bdn-gold)]" aria-hidden="true" />
              ICI construction across the GTA
            </span>
            <span className="hidden md:inline">Oakville office</span>
            <span className="hidden lg:inline">Founder-led</span>
          </p>
          <a className="inline-flex items-center gap-1 text-[var(--bdn-gold)] hover:text-white" href={phone.href}>
            <Phone className="size-3.5" aria-hidden="true" />
            {phone.display}
          </a>
        </div>
      </div>
      <div className="bdn-wrap flex min-h-16 items-center justify-between gap-3 py-2">
        <a href="#top" aria-label="BDN Construction, Oakville">
          <BdnLogo />
        </a>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-sm whitespace-nowrap text-[var(--bdn-muted)] hover:text-[var(--bdn-ink)]"
              href={item.href}
            >
              {'badge' in item ? (
                <span className="rounded bg-[var(--bdn-gold)] px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-[var(--bdn-gold-ink)] uppercase">
                  {item.badge}
                </span>
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Switch checked={dark} onCheckedChange={setDark} size={12} label="Dark mode" />
          <a className="bdn-btn-soft bdn-btn-nav hidden lg:inline-flex" href={phone.href}>
            <Phone className="size-3.5 text-[var(--bdn-accent)]" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="bdn-btn bdn-btn-nav hidden sm:inline-flex" href="#quote">
            Book a consult
          </a>
          <a className="bdn-btn inline-flex size-10 p-0 sm:hidden" href={phone.href} aria-label={`Call ${phone.display}`}>
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--bdn-ink)] xl:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="bdn-mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="bdn-mobile-nav" className="border-t border-[var(--bdn-high)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-2 py-2 text-sm font-semibold text-[var(--bdn-ink)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="bdn-btn mt-2" href="#quote" onClick={close}>
              Book a consult
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
