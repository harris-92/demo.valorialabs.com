import { BadgeCheck, Brush, Mail, Paintbrush } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Request Free Quote',
    kicker: 'Phone or Online Form',
    body: 'Submit property specs or call our dispatch lines. We utilize high-resolution satellite imagery and rapid field review to provide an exact itemized scope within hours.',
  },
  {
    number: '02',
    icon: Brush,
    title: 'On-Site Surface Prep',
    kicker: 'Deep Cleaning & Primer',
    body: 'High-output commercial blowers, steel wire edge trimming to expose clean asphalt boundaries, and heat-torching of motor oil spots with proprietary adhesion binding primers.',
  },
  {
    number: '03',
    icon: Paintbrush,
    title: 'Application & Infill',
    kicker: 'Pure Bitumen & Hot Rubber',
    body: 'Hot elastomeric rubber injected into fissures at municipal standard temperatures, followed by uniform application of undiluted 100% oil-base liquid asphalt (Product #1999).',
  },
  {
    number: '04',
    icon: BadgeCheck,
    title: 'Barricade & Inspection',
    kicker: 'Safe 24-48h Curing',
    body: 'Safety perimeter high-visibility yellow caution taping and owner walk-through inspection. Clear guidelines provided for vehicular reopen timing and maximum durability.',
  },
] as const

export default function CmsrProcess() {
  return (
    <section id="process" className="bg-[var(--cmsr-surface-lowest)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="cmsr-label inline-flex items-center gap-2 text-[var(--cmsr-primary)]">
            <BadgeCheck className="size-4" aria-hidden="true" />
            Operational Standard
          </p>
          <h2 className="cmsr-h2">Our 4-Step Professional Protocol</h2>
          <p className="text-[var(--cmsr-on-surface-variant)]">
            Proven over 33 seasons across Southern Ontario. Seamless execution from preliminary satellite estimate to traffic reopening with zero property disruption.
          </p>
        </div>
        <div className="cmsr-links cmsr-links-4 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="cmsr-card flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <span className="cmsr-display text-4xl font-bold text-[var(--cmsr-primary)] opacity-40">{step.number}</span>
                <div className="flex size-10 items-center justify-center rounded bg-[var(--cmsr-surface-high)] text-[var(--cmsr-primary)]">
                  <step.icon className="size-5" aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="cmsr-h3">{step.title}</h3>
                <p className="cmsr-label mt-1 text-[10px] text-[var(--cmsr-primary)]">{step.kicker}</p>
              </div>
              <p className="text-sm text-[var(--cmsr-on-surface-variant)]">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
