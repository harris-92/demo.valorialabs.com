'use client'

import { useState } from 'react'
import { BadgeCheck, Menu, Phone, Star, X } from 'lucide-react'

import Switch from '@/components/ui/sky-toggle'

import { nav, phone } from '../lib/content'
import ApLogo from './ApLogo'
import { useApTheme } from './ApTheme'

export default function ApHeader() {
  const [open, setOpen] = useState(false)
  const { dark, setDark } = useApTheme()

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[var(--ap-bg)]/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
      <div className="bg-[var(--ap-navy)] text-white">
        <div className="ap-wrap flex flex-col gap-1 py-2 text-[11px] font-semibold tracking-wide uppercase sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--ap-on-dark-muted)]">
            <span className="inline-flex items-center gap-1">
              <BadgeCheck className="size-3.5 text-[var(--ap-green-bright)]" aria-hidden="true" />
              Serving Greater Charlotte & Mecklenburg County
            </span>
            <span className="hidden md:inline">Licensed & Insured</span>
            <span className="hidden lg:inline">Est. 2010</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1 text-[var(--ap-amber-soft)]">
              <Star className="size-3.5 fill-[var(--ap-amber)] text-[var(--ap-amber)]" aria-hidden="true" />
              <span className="font-bold text-white">5.0</span>
              Google Rated
            </span>
            <a className="inline-flex items-center gap-1 text-[var(--ap-green-bright)] hover:text-white" href={phone.href}>
              <Phone className="size-3.5" aria-hidden="true" />
              {phone.display}
            </a>
          </div>
        </div>
      </div>
      <div className="ap-wrap flex min-h-16 items-center justify-between gap-3 py-2">
        <a href="#top" aria-label="Andrade Painting, Charlotte NC">
          <ApLogo />
        </a>
        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-sm whitespace-nowrap text-[var(--ap-muted)] hover:text-[var(--ap-ink)]"
              href={item.href}
            >
              {'badge' in item ? (
                <span className="rounded bg-[var(--ap-green)] px-1.5 py-0.5 text-[10px] font-bold tracking-wide text-white uppercase">
                  {item.badge}
                </span>
              ) : null}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Switch checked={dark} onCheckedChange={setDark} size={12} />
          <a className="ap-btn-soft ap-btn-nav hidden md:inline-flex" href={phone.href}>
            <Phone className="size-3.5 text-[var(--ap-accent)]" aria-hidden="true" />
            {phone.display}
          </a>
          <a className="ap-btn ap-btn-nav hidden sm:inline-flex" href="#quote">
            Get Free Estimate
          </a>
          <a className="ap-btn inline-flex size-10 p-0 sm:hidden" href={phone.href} aria-label={`Call ${phone.display}`}>
            <Phone className="size-4" aria-hidden="true" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-lg text-[var(--ap-ink)] xl:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="ap-mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="ap-mobile-nav" className="border-t border-[var(--ap-high)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <a
                key={item.href}
                className="rounded-md px-2 py-2 text-sm font-semibold text-[var(--ap-ink)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="ap-btn mt-2" href="#quote" onClick={close}>
              Get Free Estimate
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
