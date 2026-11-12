import { BadgeCheck, Check, CircleX, Droplet, Flame, Accessibility, Users, X } from 'lucide-react'

const advantages = [
  '100% Oil-Base Liquid Asphalt (Product #1999): Rehydrates dried binder deep in the sub-grade. Never peels, chips, or tracks into interiors.',
  'Municipal-Grade Hot Pour Rubber: Applied with heat-lances at 380°F. Expands and contracts seamlessly during Ontario winter freezes.',
  'Direct Father & Sons Oversight: Mike Jr, Mike Sr, and Matt are physically on the job site executing and validating quality.',
  'Comprehensive Site Prep: High-velocity wire brushing, power blowing, heat drying, and deep oil-stain primers before any coating touches pavement.',
] as const

const shortfalls = [
  'Water-Diluted Acrylic / Coal Tar: Sits like a thin coat of plastic paint on top; flakes, dries brittle, and traps moisture beneath the asphalt.',
  'Cold-Pour Hardware Caulk: Washes out after 1-2 rainstorms and cracks completely under heavy commercial vehicle loads.',
  'Subcontracted Transient Labor: Inexperienced student crews rushing jobs without technical asphalt paving understanding.',
  'Zero Prep / Heavy Overspray: Splatters garage doors, landscape stones, interlock pavers, and concrete curbing.',
] as const

const pillars = [
  {
    icon: Droplet,
    title: 'Product #1999 Spec',
    body: 'Formulated with deep-penetrating bitumen petroleum oils that rejuvenate oxidation and lock out road salt and corrosive fluids.',
  },
  {
    icon: Flame,
    title: 'Hot-Pour Infill',
    body: 'Township-standard hot rubber prevents structural water infiltration to the aggregate base, halting freeze heave immediately.',
  },
  {
    icon: Accessibility,
    title: 'AODA Compliance',
    body: 'Precise handicap access markings, blue stall fields, directional arrows, fire lane stenciling, and heavy traffic line painting.',
  },
  {
    icon: Users,
    title: 'Family Hands-On',
    body: 'Zero outsourced sub-contractors. You speak with Mike Sr, Mike Jr, or Matt from quote through post-cure inspection.',
  },
] as const

export default function CmsrCompare() {
  return (
    <section id="why" className="bg-[var(--cmsr-surface-low)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl space-y-2">
            <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
              <BadgeCheck className="size-4" aria-hidden="true" />
              Quality Standard Comparison
            </p>
            <h2 className="cmsr-h2">Why Call Mike Beats Conventional Spray Contractors</h2>
            <p className="text-[var(--cmsr-on-surface-variant)]">
              Many franchise contractors cut costs with water-diluted acrylic emulsions that peel within months. Here is why our commercial spec makes a multi-year difference.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded bg-[var(--cmsr-surface-container)] px-4 py-3">
            <Droplet className="size-7 text-[var(--cmsr-primary)]" aria-hidden="true" />
            <div>
              <p className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Material Formulation</p>
              <p className="cmsr-display text-sm font-bold">100% Liquid Asphalt #1999</p>
            </div>
          </div>
        </div>
        <div className="cmsr-links cmsr-links-2 grid gap-6 md:grid-cols-2">
          <article className="cmsr-card flex flex-col gap-6 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="cmsr-label rounded bg-[var(--cmsr-primary-container)] px-3 py-1 text-[var(--cmsr-on-primary-container)]">
                Call Mike Industrial Standard
              </span>
              <BadgeCheck className="size-8 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
            </div>
            <ul className="space-y-4">
              {advantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="cmsr-label mt-auto flex items-center justify-between pt-4 text-xs text-[var(--cmsr-primary)]">
              Result: 3-5x Longer Sub-Surface Lifespan
              <BadgeCheck className="size-4" aria-hidden="true" />
            </p>
          </article>
          <article className="cmsr-card flex flex-col gap-6 p-6 opacity-90 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="cmsr-label rounded bg-[var(--cmsr-surface-high)] px-3 py-1 text-[var(--cmsr-on-surface-variant)]">
                Generic Fly-By-Night Operators
              </span>
              <CircleX className="size-8 shrink-0 text-[var(--cmsr-error)]" aria-hidden="true" />
            </div>
            <ul className="space-y-4 text-[var(--cmsr-on-surface-variant)]">
              {shortfalls.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X className="mt-0.5 size-5 shrink-0 text-[var(--cmsr-error)]" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--cmsr-on-surface)]">{item.split(':')[0]}:</strong>
                    {item.slice(item.indexOf(':') + 1)}
                  </span>
                </li>
              ))}
            </ul>
            <p className="cmsr-label mt-auto flex items-center justify-between pt-4 text-xs text-[var(--cmsr-error)]">
              Result: Costly Premature Repaving & Potholes
            </p>
          </article>
        </div>
        <div className="cmsr-links cmsr-links-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <article key={pillar.title} className="cmsr-card flex flex-col gap-3 p-6">
              <div className="flex size-12 items-center justify-center rounded bg-[var(--cmsr-surface-high)] text-[var(--cmsr-primary)]">
                <pillar.icon className="size-6" aria-hidden="true" />
              </div>
              <h3 className="cmsr-h3">{pillar.title}</h3>
              <p className="text-sm text-[var(--cmsr-on-surface-variant)]">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
