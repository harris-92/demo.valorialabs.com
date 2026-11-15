'use client'

import { useEffect, useState } from 'react'

import { FS_EMAIL, FS_PHONE_DISPLAY, FS_PHONE_TEL, navLinks } from '../lib/content'
import FsIcon from './FsIcon'

export default function FsHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1536px)')
    function closeOnDesktop() {
      if (media.matches) setOpen(false)
    }
    media.addEventListener('change', closeOnDesktop)
    return () => media.removeEventListener('change', closeOnDesktop)
  }, [])

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--fs-line)] bg-[var(--fs-pitch)]">
      <div className="flex h-10 items-center justify-between gap-4 px-4 text-xs text-[var(--fs-muted)] md:px-8">
        <p className="flex min-w-0 items-center gap-2">
          <FsIcon name="pin" className="h-4 w-4 shrink-0 text-[var(--fs-orange)]" />
          <span className="truncate">Simcoe, York, Dufferin & Surrounding Areas, ON</span>
        </p>
        <div className="hidden items-center gap-5 md:flex">
          <span className="flex items-center gap-1.5">
            <FsIcon name="clock" className="h-4 w-4 text-[var(--fs-orange)]" />
            Mon-Sat 7am - 7pm
          </span>
          <a className="flex items-center gap-1.5 hover:text-white" href={`mailto:${FS_EMAIL}`}>
            <FsIcon name="mail" className="h-4 w-4 text-[var(--fs-orange)]" />
            {FS_EMAIL}
          </a>
          <a className="flex items-center gap-1.5 hover:text-white" href={FS_PHONE_TEL}>
            <FsIcon name="phone" className="h-4 w-4 text-[var(--fs-orange)]" />
            {FS_PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <div className="flex h-20 items-center gap-3 px-4 md:px-8">
        <a href="#top" className="mr-auto flex min-w-0 items-center gap-3">
          <span className="fs-display shrink-0 text-2xl leading-none">
            Forge<span className="text-[var(--fs-orange)]">Seal</span>
          </span>
          <span className="hidden text-[0.65rem] uppercase tracking-[0.14em] text-[var(--fs-dim)] 2xl:block">
            Industrial Asphalt
            <br />
            Maintenance
          </span>
        </a>
        <nav className="hidden shrink-0 items-center gap-2 text-sm text-[var(--fs-muted)] 2xl:flex" aria-label="Page">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="fs-nav-pill">
              {link.label}
            </a>
          ))}
        </nav>
        <a className="fs-btn fs-btn--line hidden shrink-0 px-3 py-2 text-xs 2xl:inline-flex" href={FS_PHONE_TEL}>
          Call {FS_PHONE_DISPLAY}
        </a>
        <a className="fs-btn inline-flex shrink-0 px-3 py-2 text-xs" href="#quote">
          Get Free Estimate
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-3xl border border-[var(--fs-line)] 2xl:hidden"
          aria-expanded={open}
          aria-controls="fs-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          <FsIcon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>
      {open ? (
        <nav id="fs-menu" className="grid gap-1 border-t border-[var(--fs-line)] px-4 py-3 2xl:hidden" aria-label="Page">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="fs-nav-pill text-sm"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a className="px-2 py-3 text-sm md:hidden" href={`mailto:${FS_EMAIL}`} onClick={() => setOpen(false)}>
            {FS_EMAIL}
          </a>
          <a className="px-2 py-3 text-sm 2xl:hidden" href={FS_PHONE_TEL} onClick={() => setOpen(false)}>
            Call {FS_PHONE_DISPLAY}
          </a>
        </nav>
      ) : null}
    </header>
  )
}
