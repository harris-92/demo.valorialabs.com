/** Maverick Epoxy badge for the fixed hero glass nav. */
export const ME_HERO_NAV_LOGO = '/maverick-epoxy/logo.png' as const

/** Local scroll-scrub hero video (see public/maverick-epoxy/hero-scrub.mp4). */
export const ME_HERO_SCRUB = {
  /** All-intra encodes (every frame a keyframe). */
  videoSrc: '/maverick-epoxy/hero-scrub.mp4',
  videoSrcMobile: '/maverick-epoxy/hero-scrub-mobile.mp4',
} as const

export const ME_HERO_SCRUB_DEFAULTS = {
  titleLine1: 'Stand Proud',
  titleLine2: 'Stand on Maverick',
  scrollHint: 'SCROLL',
  /** Fallback until `loadedmetadata`; desktop ~350px scroll per second of video. */
  scrubDistance: 3500,
  /** Mobile fallback (~150px/s × ~10s). */
  scrubDistanceMobile: 1500,
} as const

/** Scroll runway: pixels of scroll per second of hero video. */
export const ME_HERO_SCROLL_PX_PER_SEC = {
  desktop: 350,
  mobile: 150,
} as const
