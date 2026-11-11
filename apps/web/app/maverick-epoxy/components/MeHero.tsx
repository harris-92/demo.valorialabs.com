'use client'

import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from 'react'

import MeHeroCtaButtons from './MeHeroCtaButtons'
import {
  ME_HERO_SCRUB,
  ME_HERO_SCRUB_DEFAULTS,
  ME_HERO_SCROLL_PX_PER_SEC,
} from '../lib/hero-assets'
import { ME_HERO_BG, ME_HERO_DISPLAY, ME_HERO_SANS, ME_HERO_TEXT } from '../lib/hero-glass'

export type MeHeroProps = {
  /** Called once when scroll progress first reaches the end of the clip. */
  onScrubComplete?: () => void
  videoSrc?: string
  titleLine1?: string
  titleLine2?: string
  scrollHint?: string
  /** Fallback scroll distance (px) until video metadata provides the duration. */
  scrubDistance?: number
  className?: string
  style?: CSSProperties
}

const HEADLINE_EXIT_END = 0.18
/** CTA fades in over the last stretch, once the hero has fully played. */
const CTA_START = 0.75
const CTA_END = 0.85
const EASE = 0.18

/** Skip seeks smaller than ~one frame at 60fps to avoid pointless decoder work. */
const MIN_SEEK_DELTA = 1 / 60
const FRAME_MS = 1000 / 60

const REDUCED_MOTION_QUERY = '(prefers-reduced-motion: reduce)'
const MOBILE_QUERY = '(max-width: 768px)'

function subscribeMobile(onChange: () => void) {
  const media = window.matchMedia(MOBILE_QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

function getMobile() {
  return window.matchMedia(MOBILE_QUERY).matches
}

function getMobileServer() {
  return false
}

function subscribeReducedMotion(onChange: () => void) {
  const media = window.matchMedia(REDUCED_MOTION_QUERY)
  media.addEventListener('change', onChange)
  return () => media.removeEventListener('change', onChange)
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches
}

function getReducedMotionServer() {
  return false
}

function clamp(v: number, min: number, max: number) {
  return Math.min(max, Math.max(min, v))
}

type RunwayMeta = { pxPerSec: number; distance: number }

export default function MeHero({
  onScrubComplete,
  videoSrc,
  titleLine1 = ME_HERO_SCRUB_DEFAULTS.titleLine1,
  titleLine2 = ME_HERO_SCRUB_DEFAULTS.titleLine2,
  scrollHint = ME_HERO_SCRUB_DEFAULTS.scrollHint,
  scrubDistance = ME_HERO_SCRUB_DEFAULTS.scrubDistance,
  className,
  style,
}: MeHeroProps) {
  const runwayRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const headlineLine1Ref = useRef<HTMLSpanElement>(null)
  const headlineLine2Ref = useRef<HTMLSpanElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const completeRef = useRef(false)
  const onScrubCompleteRef = useRef(onScrubComplete)
  const [ready, setReady] = useState(false)
  const reduceMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    getReducedMotionServer,
  )
  const isMobile = useSyncExternalStore(subscribeMobile, getMobile, getMobileServer)
  const scrollPxPerSec = isMobile
    ? ME_HERO_SCROLL_PX_PER_SEC.mobile
    : ME_HERO_SCROLL_PX_PER_SEC.desktop
  const resolvedVideoSrc =
    videoSrc ?? (isMobile ? ME_HERO_SCRUB.videoSrcMobile : ME_HERO_SCRUB.videoSrc)
  const initialScrubDistance = isMobile
    ? ME_HERO_SCRUB_DEFAULTS.scrubDistanceMobile
    : scrubDistance
  const [runwayMeta, setRunwayMeta] = useState<RunwayMeta | null>(null)
  const runwayDistance =
    runwayMeta && runwayMeta.pxPerSec === scrollPxPerSec
      ? runwayMeta.distance
      : initialScrubDistance
  const distanceRef = useRef(initialScrubDistance)

  useEffect(() => {
    onScrubCompleteRef.current = onScrubComplete
  }, [onScrubComplete])

  useEffect(() => {
    completeRef.current = false
  }, [scrollPxPerSec, resolvedVideoSrc])

  useEffect(() => {
    const maybeVideo = videoRef.current
    const maybeRunway = runwayRef.current
    if (!maybeVideo || !maybeRunway) return
    const videoEl: HTMLVideoElement = maybeVideo
    const runwayEl: HTMLDivElement = maybeRunway
    const pxPerSec = scrollPxPerSec

    distanceRef.current = initialScrubDistance

    let duration = 0
    let rafId = 0
    let isSeeking = false
    let pendingTime: number | null = null
    let lastRequestedTime = -1
    let lastFrameTs = performance.now()
    let target = reduceMotion ? 1 : 0
    let current = target

    const syncDuration = () => {
      duration = videoEl.duration || 0
      if (duration > 0) {
        const next = duration * pxPerSec
        distanceRef.current = next
        setRunwayMeta({ pxPerSec, distance: next })
      }
      setReady(true)
    }
    videoEl.addEventListener('loadedmetadata', syncDuration)
    videoEl.addEventListener('loadeddata', syncDuration)
    if (videoEl.readyState >= 1) syncDuration()

    const onSeeked = () => {
      isSeeking = false
      if (pendingTime !== null) {
        const t = pendingTime
        pendingTime = null
        isSeeking = true
        videoEl.currentTime = t
      }
    }
    videoEl.addEventListener('seeked', onSeeked)

    function seekTo(t: number) {
      if (Math.abs(t - lastRequestedTime) < MIN_SEEK_DELTA && t !== 0 && t !== duration) return
      lastRequestedTime = t
      if (isSeeking) {
        pendingTime = t
        return
      }
      isSeeking = true
      // Every frame is a keyframe, so a fast seek is exact and cheap.
      if (typeof videoEl.fastSeek === 'function') videoEl.fastSeek(t)
      else videoEl.currentTime = t
    }

    function readTarget() {
      if (reduceMotion) return 1
      const rect = runwayEl.getBoundingClientRect()
      return clamp(-rect.top / Math.max(distanceRef.current, 1), 0, 1)
    }

    function applyVisuals(progress: number) {
      if (duration > 0) seekTo(progress * duration)

      const headlineT = clamp(progress / HEADLINE_EXIT_END, 0, 1)
      const headlineOpacity = String(1 - headlineT)
      const headlineBlur = `blur(${headlineT * 6}px)`
      if (headlineLine1Ref.current) {
        headlineLine1Ref.current.style.opacity = headlineOpacity
        headlineLine1Ref.current.style.transform = `translateX(${-headlineT * 55}vw)`
        headlineLine1Ref.current.style.filter = headlineBlur
      }
      if (headlineLine2Ref.current) {
        headlineLine2Ref.current.style.opacity = headlineOpacity
        headlineLine2Ref.current.style.transform = `translateX(${headlineT * 55}vw)`
        headlineLine2Ref.current.style.filter = headlineBlur
      }
      if (hintRef.current) {
        hintRef.current.style.opacity = progress < 0.01 ? '1' : '0'
      }
      if (ctaRef.current) {
        const t = clamp((progress - CTA_START) / (CTA_END - CTA_START), 0, 1)
        ctaRef.current.style.opacity = String(t)
        ctaRef.current.style.transform = `translateY(${(1 - t) * 16}px)`
        ctaRef.current.style.pointerEvents = t >= 0.99 ? 'auto' : 'none'
      }
    }

    function frame(now: number) {
      const dt = Math.min(now - lastFrameTs, 100)
      lastFrameTs = now
      const k = 1 - Math.pow(1 - EASE, dt / FRAME_MS)
      target = readTarget()
      current += (target - current) * k
      if (Math.abs(target - current) < 0.0005) current = target
      applyVisuals(current)

      if (!completeRef.current && target >= 0.999) {
        completeRef.current = true
        onScrubCompleteRef.current?.()
      }
      rafId = requestAnimationFrame(frame)
    }
    rafId = requestAnimationFrame(frame)

    return () => {
      videoEl.removeEventListener('loadedmetadata', syncDuration)
      videoEl.removeEventListener('loadeddata', syncDuration)
      videoEl.removeEventListener('seeked', onSeeked)
      cancelAnimationFrame(rafId)
    }
  }, [reduceMotion, scrollPxPerSec, resolvedVideoSrc, initialScrubDistance])

  const runwayHeight = reduceMotion ? '100dvh' : `calc(100dvh + ${runwayDistance}px)`
  const videoPreload = isMobile ? 'metadata' : 'auto'

  return (
    <div
      ref={runwayRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: runwayHeight, background: ME_HERO_BG, ...style }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          height: '100dvh',
          overflow: 'hidden',
          background: ME_HERO_BG,
        }}
      >
        <video
          key={resolvedVideoSrc}
          ref={videoRef}
          src={resolvedVideoSrc}
          muted
          playsInline
          preload={videoPreload}
          {...(isMobile ? { fetchPriority: 'high' as const } : {})}
          style={{
            willChange: 'transform',
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.6s ease',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.28)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(16,24,43,0.5), rgba(16,24,43,0) 30%, rgba(16,24,43,0.12) 70%, rgba(16,24,43,0.58))',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(8px, 2vh, 16px)',
            padding: '0 6%',
            textAlign: 'center',
            pointerEvents: 'none',
            zIndex: 3,
          }}
        >
          {[
            { ref: headlineLine1Ref, text: titleLine1 },
            { ref: headlineLine2Ref, text: titleLine2 },
          ].map((line) => (
            <span
              key={line.text}
              ref={line.ref}
              style={{
                display: 'block',
                fontFamily: ME_HERO_DISPLAY,
                fontWeight: 800,
                fontSize: 'clamp(28px, 6vw, 72px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: ME_HERO_TEXT,
                textShadow: '0 4px 30px rgba(10,15,34,0.55)',
                willChange: 'transform, opacity',
              }}
            >
              {line.text}
            </span>
          ))}
        </div>

        <MeHeroCtaButtons ref={ctaRef} />

        <div
          ref={hintRef}
          style={{
            position: 'absolute',
            left: '50%',
            bottom: 'clamp(20px, 6vh, 48px)',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
            color: 'rgba(255,254,254,0.78)',
            fontFamily: ME_HERO_SANS,
            fontSize: 'clamp(10px, 1.4vw, 12px)',
            fontWeight: 700,
            letterSpacing: '0.3em',
            transition: 'opacity 0.4s ease',
            pointerEvents: 'none',
            zIndex: 4,
          }}
        >
          <span>{scrollHint}</span>
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            style={{ animation: 'me-hero-bounce 1.6s ease-in-out infinite' }}
            aria-hidden
          >
            <style>{`
              @keyframes me-hero-bounce {
                0%, 100% { transform: translateY(0); opacity: 0.5; }
                50% { transform: translateY(5px); opacity: 1; }
              }
            `}</style>
            <path
              d="M7 1 L7 17 M2 12 L7 17 L12 12"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
