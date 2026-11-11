'use client'

import { forwardRef, type CSSProperties } from 'react'

import { ME_PHONE_TEL } from '../lib/constants'
import { ME_HERO_SANS } from '../lib/hero-glass'

const BUTTON_STYLE: CSSProperties = {
  fontFamily: ME_HERO_SANS,
  fontWeight: 700,
  fontSize: 'clamp(13px, 1.6vw, 16px)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  padding: 'clamp(12px, 1.8vw, 16px) clamp(24px, 3.4vw, 36px)',
}

/** Opacity and transform are driven by the hero scroll loop via the forwarded ref. */
const MeHeroCtaButtons = forwardRef<HTMLDivElement>(function MeHeroCtaButtons(_, ref) {
  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 6%',
        opacity: 0,
        pointerEvents: 'none',
        zIndex: 5,
      }}
    >
      <a href={ME_PHONE_TEL} className="me-glass-btn me-glass-btn--primary" style={BUTTON_STYLE}>
        Get a Free Estimate
      </a>
    </div>
  )
})

export default MeHeroCtaButtons
