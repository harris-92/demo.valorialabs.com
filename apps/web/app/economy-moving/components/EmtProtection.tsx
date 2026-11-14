import { Phone, ShieldCheck } from 'lucide-react'

import { armor, phones } from '../lib/content'
import { emtImages } from '../lib/images'
import EmtImage from './EmtImage'

export default function EmtProtection() {
  return (
    <section className="overflow-hidden bg-[var(--emt-surface-low)] px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="emt-kicker inline-flex items-center gap-2">
            <ShieldCheck className="size-4" aria-hidden="true" />
            The 4-Layer Armor System
          </p>
          <h2 className="emt-h2 mt-2">See How We Protect Your Furniture</h2>
          <p className="mt-3 text-lg font-semibold text-[var(--emt-navy)]">
            “Careful moving starts before we lift. No scratches, no dents, no surprises.”
          </p>
          <p className="mt-3 text-[var(--emt-muted)]">
            Most budget movers toss an unsecured blanket over furniture once it is on the truck. Dan&apos;s crew wraps,
            tapes, and pad-locks furnishings before anything leaves the room. Every wooden armoire, sofa, and dining
            piece is padded before it steps into the hallway.
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2">
            {armor.map((item) => (
              <li key={item.title} className="emt-card emt-hover p-4">
                <h3 className="emt-h3 text-base">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--emt-muted)]">{item.body}</p>
              </li>
            ))}
          </ul>
          <a className="emt-btn mt-6 px-5 py-3" href={phones.primary.href}>
            <Phone className="size-4" aria-hidden="true" />
            Ask Dan About Specialty Items
          </a>
          <p className="mt-2 text-sm text-[var(--emt-muted)]">Pianos, glass display, and marble included.</p>
        </div>
        <div className="relative min-h-72 overflow-hidden rounded-2xl shadow-xl sm:min-h-96">
          <EmtImage
            src={emtImages.wrapping.src}
            alt={emtImages.wrapping.alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
