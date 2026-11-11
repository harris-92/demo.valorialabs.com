'use client'

import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'

import DemoStaticImage from './ui/DemoStaticImage'
import { ME_HOME_ROUTE, ME_NAV_LINKS, ME_PHONE_DISPLAY, ME_PHONE_TEL } from '../lib/constants'
import { ME_HERO_NAV_LOGO } from '../lib/hero-assets'
import { ME_HERO_NAV_BAR_GLASS, ME_HERO_SANS } from '../lib/hero-glass'

export default function MeHeroNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className="me-hero-nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 60,
          ...ME_HERO_NAV_BAR_GLASS,
        }}
        aria-label="Site navigation"
      >
        <div className="me-hero-nav-inner me-page-x">
          <a href={ME_HOME_ROUTE} className="me-hero-nav-logo" aria-label="Maverick Epoxy — top of page" onClick={closeMenu}>
            <DemoStaticImage
              src={ME_HERO_NAV_LOGO}
              alt="Maverick Epoxy"
              width={438}
              height={400}
              className="h-11 w-11 object-contain sm:h-14 sm:w-14 md:h-16 md:w-16"
              priority
            />
          </a>
          <div className="me-hero-nav-links" aria-label="Section shortcuts">
            {ME_NAV_LINKS.map((item) => (
              <a key={item.href} href={item.href} className="me-hero-nav-link-pill" style={{ fontFamily: ME_HERO_SANS }}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="me-hero-nav-actions">
            <a href={ME_PHONE_TEL} className="me-hero-nav-phone" style={{ fontFamily: ME_HERO_SANS }}>
              <Phone className="size-4 shrink-0" aria-hidden />
              <span className="hidden sm:inline">{ME_PHONE_DISPLAY}</span>
              <span className="sr-only sm:hidden">{ME_PHONE_DISPLAY}</span>
            </a>
            <a href={ME_PHONE_TEL} className="me-hero-nav-quote-btn" style={{ fontFamily: ME_HERO_SANS }}>
              Get a Free Estimate
            </a>
            <button
              type="button"
              className="me-hero-nav-menu-btn"
              aria-expanded={menuOpen}
              aria-controls="me-hero-mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
            </button>
          </div>
        </div>
      </nav>
      {menuOpen ? (
        <div id="me-hero-mobile-menu" className="me-hero-nav-mobile-overlay xl:hidden" onClick={closeMenu}>
          <nav className="me-hero-nav-mobile-panel" aria-label="Section shortcuts" onClick={(event) => event.stopPropagation()}>
            <ul className="me-hero-nav-mobile-list">
              {ME_NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="me-hero-nav-mobile-link" style={{ fontFamily: ME_HERO_SANS }} onClick={closeMenu}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      ) : null}
    </>
  )
}
