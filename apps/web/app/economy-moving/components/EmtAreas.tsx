import { counties } from '../lib/content'
import { emtImages } from '../lib/images'
import EmtImage from './EmtImage'

export default function EmtAreas() {
  return (
    <section id="coverage" className="bg-[var(--emt-surface)] px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="emt-kicker">Local Charlotte & Union County Transit Experts</p>
        <h2 className="emt-h2 mt-2 max-w-3xl">Moving Services from Charlotte to Wherever You&apos;re Going</h2>
        <p className="mt-3 max-w-3xl text-[var(--emt-muted)]">
          We know every corridor from Providence Road, Rea Road, and US-521 down to I-485, including HOA gate access,
          cul-de-sac staging, and neighborhood truck rules.
        </p>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {counties.map((county) => (
            <article key={county.title} className="emt-card emt-hover p-5">
              <p className="emt-kicker">{county.kicker}</p>
              <h3 className="emt-h3 mt-2">{county.title}</h3>
              <p className="mt-2 text-sm text-[var(--emt-muted)]">{county.body}</p>
              <ul className="mt-4 divide-y divide-[var(--emt-border)]">
                {county.places.map(([place, note]) => (
                  <li key={place} className="flex items-start justify-between gap-3 py-2 text-sm">
                    <span className="font-semibold text-[var(--emt-navy)]">{place}</span>
                    <span className="shrink-0 text-[var(--emt-muted)]">{note}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="emt-card emt-hover mt-6 flex flex-col gap-5 p-5 md:flex-row md:items-center">
          <div className="flex-1">
            <h3 className="emt-h3">Moving Into a Gated Community or Restricted HOA?</h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--emt-muted)]">
              We coordinate security gates, strict moving timeframes, and loading dock reservations across Longview
              Country Club, The Palisades, Ballantyne Country Club, Providence Downs, and Firethorne.
            </p>
          </div>
          <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl md:w-80">
            <EmtImage
              src={emtImages.waxhaw.src}
              alt={emtImages.waxhaw.alt}
              fill
              sizes="(min-width: 768px) 320px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
