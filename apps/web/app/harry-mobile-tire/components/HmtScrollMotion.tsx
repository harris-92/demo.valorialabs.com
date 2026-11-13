'use client'

import { useEffect } from 'react'

export default function HmtScrollMotion() {
  useEffect(() => {
    const root = document.querySelector('.hmt-page')
    if (!root) return

    const cards = [...root.querySelectorAll('.hmt-card')]
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      for (const card of cards) card.classList.add('is-in')
      return
    }

    const viewHeight = window.innerHeight
    for (const card of cards) {
      const rect = card.getBoundingClientRect()
      const visible = rect.top < viewHeight * 0.92 && rect.bottom > 0
      if (visible) card.classList.add('is-in')
      else card.dataset.dir = 'down'
    }
    root.classList.add('hmt-motion')

    let lastY = window.scrollY
    const observer = new IntersectionObserver(
      (entries) => {
        const down = window.scrollY >= lastY
        lastY = window.scrollY
        for (const entry of entries) {
          const card = entry.target
          if (!(card instanceof HTMLElement)) continue
          card.dataset.dir = down ? 'down' : 'up'
          card.classList.toggle('is-in', entry.isIntersecting)
        }
      },
      { threshold: [0, 0.2] },
    )

    for (const card of cards) observer.observe(card)
    return () => observer.disconnect()
  }, [])

  return null
}
