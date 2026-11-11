import type { CSSProperties } from 'react'

export const ME_HERO_DISPLAY =
  '"Montserrat Variable", Montserrat, ui-sans-serif, system-ui, sans-serif'
export const ME_HERO_SANS = 'Lato, ui-sans-serif, system-ui, sans-serif'
export const ME_HERO_TEXT = '#FFFEFE'
export const ME_HERO_BG = '#10182b'

/** Full-width fixed hero nav bar (edge-to-edge blur strip). */
export const ME_HERO_NAV_BAR_GLASS: CSSProperties = {
  borderRadius: '0 0 12px 12px',
  background: 'rgba(255, 254, 254, 0.08)',
  backdropFilter: 'blur(16px) saturate(160%)',
  WebkitBackdropFilter: 'blur(16px) saturate(160%)',
  border: '1px solid rgba(197, 214, 232, 0.4)',
  borderTop: 'none',
}
