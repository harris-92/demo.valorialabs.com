'use client'

import { Sparkles } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'

import { OrganicCardSmall } from './ui/organic-card-small'
import { ME_PHONE_TEL, meServiceImages } from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'
const CARD_SURFACE = '#fffefe'

type OtherService = {
  title: string
  image: string
  imageAlt: string
}

const SERVICES: readonly OtherService[] = [
  {
    title: 'Flake Epoxy',
    image: meServiceImages.flake,
    imageAlt: 'Flake epoxy garage floor with a speckled, slip-resistant finish',
  },
  {
    title: 'Metallic Epoxy',
    image: meServiceImages.metallic,
    imageAlt: 'Metallic epoxy floor with a glossy marble-like pattern',
  },
  {
    title: 'Solid Color Epoxy',
    image: meServiceImages.solidColor,
    imageAlt: 'Solid color epoxy floor with a smooth uniform coating',
  },
  {
    title: 'Quartz',
    image: meServiceImages.quartz,
    imageAlt: 'Quartz broadcast floor with a textured high-grip surface',
  },
  {
    title: 'Concrete Polish',
    image: meServiceImages.concretePolish,
    imageAlt: 'Polished concrete floor with a shiny low-maintenance finish',
  },
  {
    title: 'Garage Floor Coating',
    image: meServiceImages.garage,
    imageAlt: 'Epoxy garage floor coating in a residential garage',
  },
  {
    title: 'Patio and Pool Deck',
    image: meServiceImages.patioPool,
    imageAlt: 'Coated patio and pool deck with a decorative epoxy finish',
  },
  {
    title: 'Basement Floor',
    image: meServiceImages.basement,
    imageAlt: 'Finished basement epoxy floor that is easy to clean',
  },
  {
    title: 'Commercial Floor',
    image: meServiceImages.commercial,
    imageAlt: 'Commercial epoxy floor in a customer-facing space',
  },
  {
    title: 'Industrial Coating',
    image: meServiceImages.industrial,
    imageAlt: 'Industrial epoxy coating on a slab built for heavy use',
  },
]

export default function MeOtherServices() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="other-services" className="relative w-full overflow-hidden py-24 me-page-x">
      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mb-6 flex flex-col items-center">
          <span className="mb-2 flex items-center gap-2 font-bold tracking-[0.18em] text-[var(--me-primary)] uppercase">
            <Sparkles className="h-4 w-4" aria-hidden />
            Our Services
          </span>
          <h2
            className="mb-4 max-w-4xl text-center text-4xl font-semibold text-balance md:text-5xl"
            style={{ fontFamily: DISPLAY }}
          >
            Epoxy Floor Coatings in Robbins, North Carolina
          </h2>
          <motion.div
            className="h-1 bg-[var(--me-gold)]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.3 }}
          />
        </div>

        <p className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-white/80">
          Flake, metallic, quartz, and solid-color garage floor coatings for Robbins and nearby Moore County towns.
          The same systems cover patios, basements, showrooms, and industrial slabs.
        </p>

        <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {SERVICES.map((service) => (
            <li key={service.title} className="min-w-0">
              <OrganicCardSmall
                category="Services"
                ctaLabel="Get an estimate"
                date="Robbins, NC"
                href={ME_PHONE_TEL}
                image={service.image}
                imageAlt={service.imageAlt}
                className="max-w-none"
                surfaceColor={CARD_SURFACE}
                title={service.title}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
