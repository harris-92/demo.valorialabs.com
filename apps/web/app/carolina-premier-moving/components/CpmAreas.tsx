import { MapPin, Navigation } from 'lucide-react'

import { address, communities, phone } from '../lib/content'
import { cpmImages } from '../lib/images'
import CpmImage from './CpmImage'

export default function CpmAreas() {
  return (
    <section id="areas" className="bg-[var(--cpm-bg)] py-16 lg:py-20">
      <div className="cpm-wrap">
        <div className="cpm-lift flex flex-col items-stretch gap-8 rounded-[var(--cpm-radius)] bg-[var(--cpm-card)] p-6 text-[var(--cpm-ink)] sm:p-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="cpm-kicker">Where the crew works</p>
            <h2 className="cpm-h2 mt-2">Moving and Hauling Across Charlotte and Matthews</h2>
            <p className="mt-3 text-[var(--cpm-muted)]">
              The shop is on Deal Rd in Matthews. From there the crew covers the Charlotte towns listed on the company
              site, for full moves, labor-only loads, and junk hauling.
            </p>
            <p className="mt-5 text-sm font-bold">Towns on the service list:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {communities.map((place) => (
                <li key={place} className="rounded-full bg-[var(--cpm-low)] px-3 py-1.5 text-sm text-[var(--cpm-ink)]">
                  {place}
                </li>
              ))}
            </ul>
            <a className="cpm-btn mt-6" href={phone.href}>
              <Navigation className="size-4" aria-hidden="true" />
              Call about your address
            </a>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-[var(--cpm-radius)] shadow-md lg:w-96 lg:shrink-0">
            <CpmImage
              src={cpmImages.truck.src}
              alt={cpmImages.truck.alt}
              width={cpmImages.truck.width}
              height={cpmImages.truck.height}
              sizes="(min-width: 1024px) 384px, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--cpm-navy)]/20 p-4">
              <div className="rounded-[var(--cpm-radius-sm)] bg-[var(--cpm-card)]/95 px-4 py-3 text-center text-[var(--cpm-ink)] shadow-xl">
                <MapPin className="mx-auto size-8 text-[var(--cpm-accent)]" aria-hidden="true" />
                <p className="cpm-h3 mt-1">HQ: {address.short}</p>
                <p className="text-sm text-[var(--cpm-muted)]">{address.city}</p>
                <a className="mt-1 inline-block text-xs font-semibold text-[var(--cpm-accent)] hover:underline" href={address.maps}>
                  Open the Matthews shop on Google
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
