'use client'

import { useState } from 'react'
import { ClipboardList, Menu, Phone, User, X } from 'lucide-react'

import { cmsrImages } from '../lib/images'
import CmsrImage from './CmsrImage'

const nav = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Choose Us' },
  { href: '#process', label: 'Our Process' },
  { href: '#showcase', label: 'Projects & Gallery' },
  { href: '#areas', label: 'Service Areas' },
  { href: '#reviews', label: 'Testimonials' },
] as const

const lines = [
  { label: 'Keswick', phone: '(905) 868-7525', href: 'tel:9058687525' },
  { label: 'Barrie 1', phone: '(705) 988-1058', href: 'tel:7059881058' },
  { label: 'Newmarket / Vaughan', phone: '(905) 392-1705', href: 'tel:9053921705' },
] as const

export default function CmsrHeader() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[color-mix(in_srgb,var(--cmsr-surface)_95%,transparent)] shadow-[0_8px_24px_-4px_rgba(0,0,0,0.6)] backdrop-blur-md">
      <div className="border-b border-[var(--cmsr-surface-high)] px-4 py-1.5 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-1 text-[11px] sm:text-xs lg:flex-row lg:items-center lg:justify-between">
          <p className="flex items-center gap-1.5 text-[var(--cmsr-on-surface-variant)]">
            <span className="inline-block size-2 shrink-0 animate-pulse rounded-full bg-[var(--cmsr-primary-container)]" />
            <span className="font-bold text-[var(--cmsr-primary)]">DISPATCH:</span>
            <span>Serving Vaughan & the Greater Toronto Area Since 1991 (Family Owned)</span>
          </p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[var(--cmsr-on-surface-variant)]">
            {lines.map((line, index) => (
              <span key={line.href} className="inline-flex items-center gap-1">
                {index > 0 ? (
                  <span className="mr-2 hidden text-[var(--cmsr-outline)] sm:inline" aria-hidden="true">
                    |
                  </span>
                ) : null}
                <a className="inline-flex items-center gap-1 hover:text-[var(--cmsr-primary)]" href={line.href}>
                  <span>{line.label}:</span>
                  <span className="font-bold text-[var(--cmsr-primary)]">{line.phone}</span>
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 lg:h-20 lg:px-12">
        <a className="flex min-w-0 items-center gap-3" href="#top">
          <CmsrImage
            src={cmsrImages.logo}
            alt="Call Mike Sealing & Pavement Repairs"
            width={160}
            height={60}
            className="h-10 w-auto object-contain"
            priority
          />
          <span className="hidden min-w-0 flex-col sm:flex">
            <span className="cmsr-display text-base leading-tight font-semibold">Call Mike</span>
            <span className="cmsr-label text-[10px] text-[var(--cmsr-primary)]">Sealing & Pavement</span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              className="cmsr-label text-[var(--cmsr-on-surface-variant)] hover:text-[var(--cmsr-on-surface)]"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <a className="cmsr-btn px-3 py-2.5 sm:px-5 sm:py-3" href="#quote">
            <ClipboardList className="size-4" aria-hidden="true" />
            <span className="sm:hidden">Estimate</span>
            <span className="hidden sm:inline">Get Free Estimate</span>
          </a>
          <a
            className="hidden size-8 items-center justify-center rounded-full bg-[var(--cmsr-primary)] text-[var(--cmsr-on-primary)] sm:flex"
            href="#quote"
            aria-label="Request a consultation"
          >
            <User className="size-4" />
          </a>
          <button
            className="inline-flex size-10 items-center justify-center rounded-md text-[var(--cmsr-on-surface)] xl:hidden"
            type="button"
            aria-expanded={open}
            aria-controls="cmsr-mobile-nav"
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>
      {open ? (
        <nav id="cmsr-mobile-nav" className="border-t border-[var(--cmsr-surface-high)] px-4 py-3 xl:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-7xl flex-col">
            {nav.map((item) => (
              <a
                key={item.href}
                className="cmsr-label border-b border-[var(--cmsr-surface-high)] py-3 text-[var(--cmsr-on-surface)]"
                href={item.href}
                onClick={close}
              >
                {item.label}
              </a>
            ))}
            <a className="inline-flex items-center gap-2 py-3 text-sm text-[var(--cmsr-primary)]" href="tel:9053921705" onClick={close}>
              <Phone className="size-4" aria-hidden="true" />
              (905) 392-1705
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
