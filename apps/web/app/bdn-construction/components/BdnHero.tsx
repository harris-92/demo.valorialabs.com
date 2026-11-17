'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, BadgeCheck, Phone } from 'lucide-react'

import { heroStats, phone } from '../lib/content'

const DESKTOP_SRC = '/hero-scrub.mp4'
const MOBILE_SRC = '/hero-scrub-mobile.mp4'
const MOBILE_QUERY = '(max-width: 768px)'
const SEEK_EPSILON = 1 / 60

type SeekableVideo = HTMLVideoElement & { fastSeek?: (time: number) => void }

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function fade(progress: number, start: number, end: number) {
  return clamp((progress - start) / (end - start), 0, 1)
}

function setLayer(element: HTMLElement | null, opacity: number) {
  if (!element) return
  element.style.opacity = String(opacity)
  const interactive = opacity > 0.45
  element.style.pointerEvents = interactive ? 'auto' : 'none'
  element.toggleAttribute('aria-hidden', !interactive)
}

export default function BdnHero() {
  const runwayRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const introRef = useRef<HTMLDivElement>(null)
  const outroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const runway = runwayRef.current
    const video = videoRef.current
    if (!runway || !video) return

    const mobileQuery = window.matchMedia(MOBILE_QUERY)
    const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    let displayed = 0
    let pending: number | null = null
    let seeking = false
    let raf = 0
    let lastNow = performance.now()
    let alive = true

    const distanceFor = () => {
      if (reduceQuery.matches) return 0
      const duration = video.duration
      const mobile = mobileQuery.matches
      if (!Number.isFinite(duration) || duration <= 0) return mobile ? 1500 : 3500
      return duration * (mobile ? 150 : 350)
    }

    const applyRunway = () => {
      runway.style.setProperty('--bdn-hero-scroll', `${distanceFor()}px`)
    }

    const paintCopy = (progress: number) => {
      const reduced = reduceQuery.matches
      const introOpacity = reduced ? 0 : 1 - fade(progress, 0.06, 0.22)
      const outroOpacity = reduced ? 1 : fade(progress, 0.78, 0.92)
      setLayer(introRef.current, introOpacity)
      setLayer(outroRef.current, outroOpacity)
    }

    const seekTo = (time: number) => {
      const duration = video.duration
      if (!Number.isFinite(duration) || duration <= 0) return
      const clamped = clamp(time, 0, Math.max(duration - 0.001, 0))
      if (Math.abs(clamped - video.currentTime) < SEEK_EPSILON) return
      if (seeking || video.seeking) {
        pending = clamped
        return
      }
      seeking = true
      pending = null
      const media: SeekableVideo = video
      if (typeof media.fastSeek === 'function') media.fastSeek(clamped)
      else video.currentTime = clamped
    }

    const onSeeked = () => {
      seeking = false
      if (pending == null) return
      const next = pending
      pending = null
      seekTo(next)
    }

    const tick = (now: number) => {
      if (!alive) return
      if (reduceQuery.matches) {
        stopLoop()
        applyRunway()
        showLastFrame()
        paintCopy(1)
        return
      }
      const dt = clamp(now - lastNow, 0, 64)
      lastNow = now
      const distance = distanceFor()
      const target = distance <= 0 ? 1 : clamp(-runway.getBoundingClientRect().top / distance, 0, 1)
      const factor = 1 - (1 - 0.18) ** (dt / 16.7)
      displayed += (target - displayed) * factor
      paintCopy(displayed)
      if (Number.isFinite(video.duration) && video.duration > 0) seekTo(displayed * video.duration)
      raf = requestAnimationFrame(tick)
    }

    const stopLoop = () => {
      if (!raf) return
      cancelAnimationFrame(raf)
      raf = 0
    }

    const startLoop = () => {
      if (raf || reduceQuery.matches) return
      lastNow = performance.now()
      raf = requestAnimationFrame(tick)
    }

    const showLastFrame = () => {
      if (!Number.isFinite(video.duration)) return
      seekTo(video.duration)
    }

    const paintFirstFrame = () => {
      if (displayed > 0.001 || video.currentTime > 0.02) return
      const duration = video.duration
      if (!Number.isFinite(duration) || duration <= 0) return
      if (seeking || video.seeking) {
        pending = 0.001
        return
      }
      seeking = true
      pending = null
      video.currentTime = 0.001
    }

    const onMeta = () => {
      applyRunway()
      if (reduceQuery.matches) {
        stopLoop()
        showLastFrame()
        paintCopy(1)
        return
      }
      paintFirstFrame()
      startLoop()
    }

    const applySource = () => {
      const mobile = mobileQuery.matches
      const next = mobile ? MOBILE_SRC : DESKTOP_SRC
      video.preload = mobile ? 'metadata' : 'auto'
      video.muted = true
      const current = video.currentSrc || video.src
      if (current.endsWith(next)) return
      displayed = 0
      seeking = false
      pending = null
      video.src = next
      video.load()
    }

    const onMode = () => {
      applySource()
      applyRunway()
      if (reduceQuery.matches) {
        stopLoop()
        showLastFrame()
        paintCopy(1)
        return
      }
      startLoop()
    }

    video.addEventListener('seeked', onSeeked)
    video.addEventListener('loadedmetadata', onMeta)
    mobileQuery.addEventListener('change', onMode)
    reduceQuery.addEventListener('change', onMode)

    applySource()
    applyRunway()
    paintCopy(reduceQuery.matches ? 1 : 0)
    if (video.readyState >= 1) onMeta()

    return () => {
      alive = false
      stopLoop()
      video.removeEventListener('seeked', onSeeked)
      video.removeEventListener('loadedmetadata', onMeta)
      mobileQuery.removeEventListener('change', onMode)
      reduceQuery.removeEventListener('change', onMode)
    }
  }, [])

  return (
    <section ref={runwayRef} className="bdn-hero-runway" aria-label="BDN Construction">
      <div className="bdn-hero-frame">
        <video
          ref={videoRef}
          className="bdn-hero-video"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="bdn-hero-scrim" aria-hidden="true" />
        <div ref={introRef} className="bdn-hero-intro">
          <div className="bdn-wrap flex max-w-4xl flex-col items-center gap-6 text-center">
            <h1 className="bdn-h1">Best Construction Services In Ontario, Canada</h1>
            <a className="bdn-btn" href="#quote">
              Book your consultancy
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div ref={outroRef} className="bdn-hero-outro">
          <div className="bdn-hero-copy flex flex-col items-center gap-4 text-center lg:gap-5">
            <span className="bdn-hero-badge inline-flex w-fit items-center gap-1 rounded-full px-3 py-1 text-[11px] font-bold tracking-widest text-white uppercase">
              <BadgeCheck className="size-3.5" aria-hidden="true" />
              Oakville ICI contractor
            </span>
            <div className="space-y-3">
              <h2 className="bdn-h1">Retail, restaurant, and commercial builds that open on time</h2>
              <p className="bdn-hero-lead mx-auto max-w-2xl text-sm sm:text-base lg:text-lg">
                BDN Construction manages fit-outs across the GTA, from mall stores and restaurants to clinics and
                kitchens. Founder Jamie Boaden stays on the job, with the budget in the open from the first drawing.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[var(--bdn-radius)] bg-[var(--bdn-card)] p-3 text-[var(--bdn-ink)] shadow-sm">
                  <p className={`bdn-display text-xl font-bold ${'accent' in stat ? 'text-[var(--bdn-accent)]' : ''}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--bdn-muted)]">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a className="bdn-btn" href="#quote">
                Book a free consult
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a className="bdn-btn-soft" href={phone.href}>
                <Phone className="size-5 text-[var(--bdn-accent)]" aria-hidden="true" />
                {phone.display}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
