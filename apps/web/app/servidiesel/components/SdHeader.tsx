'use client'

import { useState } from 'react'
import { Menu, Phone, Wrench, X } from 'lucide-react'

import Switch from '@/components/ui/sky-toggle'

import { nav, phone } from '../lib/content'
import SdLogo from './SdLogo'
import { useSdTheme } from './SdTheme'

export default function SdHeader() {
  const [open, setOpen] = useState(false)
  const { dark, setDark } = useSdTheme()

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--sd-bg)]/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="bg-[var(--sd-navy)] text-white">
        <div className="sd-wrap flex flex-col gap-1 py-2 text-[11px] font-semibold tracking-wide uppercase sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--sd-on-dark-muted)]">
            <span className="inline-flex items-center gap-1">
              <Wrench className="size-3.5 text-[var(--sd-bright)]" aria-hidden="true" />
              Mobile mechanic • Heavy diesel • Hydraulics
            </span>
            <span className="hidden md:inline">Barrie, ON</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a className="text-[var(--sd-bright)] hover:text-white" href="#reviews">
              Google reviews
            </a>
            <a className="inline-flex items-center gap-1 text-[var(--sd-bright)] hover:text-white" href={phone.href}>
              <Phone className="size-3.5" aria-hidden="true" />
              {phone.display}
            </a>
          </div>
        </div>
      </div>
      <div className="sd-wrap flex min-h-16 items-center justify-between gap-3 py-2">
        <a href="#top" aria-label="Servidiesel Inc, Barrie ON">
          <SdLogo />
        </a>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-sm whitespace-nowrap text-[var(--sd-muted)] hover:text-[var(--sd-ink)]"
              href={item.href}
            >
              {'badge' in item ? (
                <span className="rounded bg-[var(--sd-brand)] px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                  {item.badge}
                </span>
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Switch checked={dark} onCheckedChange={setDark} size={12} />
          <a className="sd-btn-soft sd-btn-nav hidden md:inline-flex" href={phone.href}>
            <Phone className="size-3.5 text-[var(--sd-accent)]" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="sd-btn sd-btn-nav hidden sm:inline-flex" href="#quote">
            Request a visit
          </a>
          <a className="sd-btn inline-flex size-10 p-0 sm:hidden" href={phone.href} aria-label={`Call ${phone.display}`}>
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--sd-ink)] xl:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="sd-mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="sd-mobile-nav" className="border-t border-[var(--sd-high)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-2 py-2 text-sm font-semibold text-[var(--sd-ink)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="sd-btn mt-2" href="#quote" onClick={close}>
              Request a visit
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
