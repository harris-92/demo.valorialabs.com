'use client'

import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  Home,
  Layers,
  MapPin,
  Paintbrush,
  ShieldCheck,
  Sparkles,
  Star,
  Warehouse,
  type LucideIcon,
} from 'lucide-react'
import { motion, useInView, useReducedMotion, useScroll, useTransform, type Variants } from 'motion/react'
import { useRef } from 'react'

import DemoStaticImage from './ui/DemoStaticImage'
import { ME_PHONE_TEL, meImages } from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.15 },
  },
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

type ServicePosition = 'left' | 'right'

type Service = {
  icon: LucideIcon
  accent: LucideIcon
  title: string
  description: string
  position: ServicePosition
}

const SERVICES: readonly Service[] = [
  {
    icon: Layers,
    accent: Sparkles,
    title: 'Flake',
    description:
      'A decorative, slip-resistant broadcast that hides small concrete flaws and stands up to daily garage traffic.',
    position: 'left',
  },
  {
    icon: Sparkles,
    accent: Star,
    title: 'Metallic',
    description:
      'A glossy, marble-like finish for spaces that should look high-end, from showrooms to living areas.',
    position: 'left',
  },
  {
    icon: Paintbrush,
    accent: CheckCircle,
    title: 'Solid color',
    description:
      'A smooth, uniform coating when you want one clean color and a floor that is simple to mop.',
    position: 'left',
  },
  {
    icon: ShieldCheck,
    accent: Star,
    title: 'Quartz',
    description:
      'A textured, high-grip surface built for wet areas, heavy use, and commercial floors that cannot get slick.',
    position: 'right',
  },
  {
    icon: Star,
    accent: CheckCircle,
    title: 'Concrete polish',
    description:
      'A shiny, low-maintenance concrete finish that keeps the slab itself as the look.',
    position: 'right',
  },
  {
    icon: Warehouse,
    accent: Home,
    title: 'Home to industrial',
    description:
      'Garages, basements, patios, pool decks, warehouses, and production floors around Robbins.',
    position: 'right',
  },
]

type Highlight = {
  icon: LucideIcon
  title: string
  detail: string
}

const HIGHLIGHTS: readonly Highlight[] = [
  { icon: ClipboardCheck, title: 'Free onsite quote', detail: 'We come look at the slab' },
  { icon: MapPin, title: 'Robbins, NC', detail: 'Moore County epoxy flooring' },
  { icon: ShieldCheck, title: 'Fully insured', detail: '5-year adhesion warranty' },
  { icon: Star, title: '10+ years', detail: 'A small crew on every job' },
]

export default function MeAbout() {
  const sectionRef = useRef<HTMLElement>(null)
  const highlightsRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 })
  const highlightsInView = useInView(highlightsRef, { once: false, amount: 0.3 })
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50])
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20])
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20])

  const leftServices = SERVICES.filter((service) => service.position === 'left')
  const rightServices = SERVICES.filter((service) => service.position === 'right')

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full overflow-hidden py-24 me-page-x"
    >
      <motion.div
        className="pointer-events-none absolute top-20 left-10 h-64 w-64 rounded-full bg-[var(--me-primary)]/5 blur-3xl"
        style={reduceMotion ? undefined : { y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="pointer-events-none absolute right-10 bottom-20 h-80 w-80 rounded-full bg-[var(--me-gold)]/10 blur-3xl"
        style={reduceMotion ? undefined : { y: y2, rotate: rotate2 }}
      />
      {reduceMotion ? null : (
        <>
          <motion.div
            className="pointer-events-none absolute top-1/2 left-1/4 h-4 w-4 rounded-full bg-[var(--me-primary)]/30"
            animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
          />
          <motion.div
            className="pointer-events-none absolute right-1/4 bottom-1/3 h-6 w-6 rounded-full bg-[var(--me-gold)]/40"
            animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut', delay: 1 }}
          />
        </>
      )}

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <motion.div className="mb-6 flex flex-col items-center" variants={itemVariants}>
          <span className="mb-2 flex items-center gap-2 font-bold tracking-[0.18em] text-[var(--me-primary)] uppercase">
            <Sparkles className="h-4 w-4" aria-hidden />
            Why Maverick Epoxy
          </span>
          <h2
            className="mb-4 text-center text-4xl font-semibold md:text-5xl"
            style={{ fontFamily: DISPLAY }}
          >
            About Us
          </h2>
          <motion.div
            className="h-1 bg-[var(--me-gold)]"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.3 }}
          />
        </motion.div>

        <motion.p
          className="mx-auto mb-16 max-w-2xl text-center text-lg leading-relaxed text-[var(--me-about-muted)]"
          variants={itemVariants}
        >
          Epoxy flooring in Robbins, North Carolina for homes, shops, and job sites. A small crew with more than
          ten years on the tools, industrial-grade materials, and a grind-first prep so the floor stays down.
        </motion.p>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-16">
            {leftServices.map((service, index) => (
              <ServiceItem key={service.title} service={service} delay={index * 0.2} />
            ))}
          </div>

          <div className="order-first mb-8 flex items-center justify-center md:order-none md:mb-0">
            <motion.div className="relative w-full max-w-xs" variants={itemVariants}>
              <motion.div
                className="relative aspect-[3/4] overflow-hidden rounded-md shadow-xl"
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.2 }}
                whileHover={reduceMotion ? undefined : { scale: 1.03 }}
              >
                <DemoStaticImage
                  src={meImages.aboutFloor}
                  alt="Finished epoxy floor installed by Maverick Epoxy"
                  fill
                  sizes="(min-width: 768px) 20rem, 100vw"
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute inset-0 -z-10 -m-3 rounded-md border-4 border-[var(--me-gold)]/70"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.35 }}
              />
              <motion.div
                className="absolute -top-4 -right-8 h-16 w-16 rounded-full bg-[var(--me-primary)]/10"
                style={reduceMotion ? undefined : { y: y1 }}
                aria-hidden
              />
              <motion.div
                className="absolute -bottom-6 -left-10 h-20 w-20 rounded-full bg-[var(--me-gold)]/20"
                style={reduceMotion ? undefined : { y: y2 }}
                aria-hidden
              />
            </motion.div>
          </div>

          <div className="space-y-16">
            {rightServices.map((service, index) => (
              <ServiceItem key={service.title} service={service} delay={index * 0.2} />
            ))}
          </div>
        </div>

        <motion.div
          ref={highlightsRef}
          className="mt-24 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={highlightsInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {HIGHLIGHTS.map((highlight) => (
            <HighlightCard key={highlight.title} highlight={highlight} />
          ))}
        </motion.div>

        <motion.div
          className="mt-20 flex flex-col items-center justify-between gap-6 rounded-xl border border-[var(--me-about-bar-border)] bg-[var(--me-about-bar-bg)] p-8 text-[var(--me-about-bar-text)] md:flex-row"
          initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
          animate={highlightsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: reduceMotion ? 0 : 24 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.2 }}
        >
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-2 text-2xl font-semibold" style={{ fontFamily: DISPLAY }}>
              Ready for a new floor?
            </h3>
            <p className="text-[var(--me-about-bar-muted)]">Tell us about the space and we will come onsite with a free estimate.</p>
          </div>
          <a
            href={ME_PHONE_TEL}
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--me-primary)] px-6 py-3 font-bold text-[var(--me-white)] transition-colors hover:bg-[var(--me-primary-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--me-gold)]"
          >
            Get a Free Estimate
            <ArrowRight className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ServiceItem({ service, delay }: { service: Service; delay: number }) {
  const Icon = service.icon
  const Accent = service.accent
  const fromX = service.position === 'left' ? -20 : 20

  return (
    <motion.div
      className="group flex flex-col"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={itemVariants}
      transition={{ delay }}
    >
      <motion.div
        className="mb-3 flex items-center gap-3"
        initial={{ x: fromX, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: delay + 0.1 }}
      >
        <div className="relative rounded-lg bg-[var(--me-primary)]/10 p-3 text-[var(--me-primary)] transition-colors duration-300 group-hover:bg-[var(--me-primary)]/20">
          <Icon className="h-6 w-6" aria-hidden />
          <Accent className="absolute -top-1 -right-1 h-4 w-4 text-[var(--me-gold)]" aria-hidden />
        </div>
        <h3
          className="text-xl font-semibold text-[var(--me-about-text)] transition-colors duration-300 group-hover:text-[var(--me-primary)]"
          style={{ fontFamily: DISPLAY }}
        >
          {service.title}
        </h3>
      </motion.div>
      <p className="pl-12 text-sm leading-relaxed text-[var(--me-about-muted)]">{service.description}</p>
    </motion.div>
  )
}

function HighlightCard({ highlight }: { highlight: Highlight }) {
  const Icon = highlight.icon
  return (
    <motion.div
      className="flex flex-col items-center rounded-xl border border-[var(--me-about-card-border)] bg-[var(--me-about-card)] p-6 text-center transition-colors duration-300 hover:bg-[var(--me-about-card-hover)]"
      variants={itemVariants}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--me-about-icon-bg)] text-[var(--me-primary)]">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <p className="text-xl font-semibold text-[var(--me-about-text)]" style={{ fontFamily: DISPLAY }}>
        {highlight.title}
      </p>
      <p className="mt-1 text-sm text-[var(--me-about-muted)]">{highlight.detail}</p>
      <div className="mt-3 h-0.5 w-10 bg-[var(--me-gold)]" />
    </motion.div>
  )
}
