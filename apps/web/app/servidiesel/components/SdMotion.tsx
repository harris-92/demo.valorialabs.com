'use client'

import { useEffect } from 'react'

function place(card: HTMLElement, viewHeight: number) {
  const rect = card.getBoundingClientRect()
  const visible = rect.top < viewHeight * 0.92 && rect.bottom > 0
  if (visible) card.classList.add('is-in')
  else card.dataset.dir = 'down'
}

export default function SdMotion() {
  useEffect(() => {
    const root = document.querySelector('.servidiesel')
    if (!root) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const cards = () => [...root.querySelectorAll<HTMLElement>('.sd-lift')]

    if (reduce) {
      for (const card of cards()) card.classList.add('is-in')
      return
    }

    const viewHeight = window.innerHeight
    for (const card of cards()) place(card, viewHeight)
    root.classList.add('sd-motion')

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

    const watch = (card: HTMLElement) => {
      if (card.dataset.watched === '1') return
      card.dataset.watched = '1'
      place(card, window.innerHeight)
      observer.observe(card)
    }

    for (const card of cards()) watch(card)

    const mutations = new MutationObserver(() => {
      for (const card of cards()) watch(card)
    })
    mutations.observe(root, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
      for (const card of cards()) delete card.dataset.watched
    }
  }, [])

  return null
}
