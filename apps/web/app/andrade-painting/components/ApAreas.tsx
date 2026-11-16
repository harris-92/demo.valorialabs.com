import { MapPin, Navigation } from 'lucide-react'

import { address, communities, phone } from '../lib/content'
import { apImages } from '../lib/images'
import ApImage from './ApImage'

export default function ApAreas() {
  return (
    <section id="areas" className="bg-[var(--ap-bg)] py-16 lg:py-20">
      <div className="ap-wrap">
        <div className="ap-lift flex flex-col items-stretch gap-8 rounded-[var(--ap-radius)] bg-[var(--ap-card)] p-6 text-[var(--ap-ink)] sm:p-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="ap-kicker">Local SEO Coverage</p>
            <h2 className="ap-h2 mt-2">Looking for Top-Rated House Painters Near You in Charlotte, NC?</h2>
            <p className="mt-3 text-[var(--ap-muted)]">
              Andrade Painting delivers prompt, reliable residential and commercial painting throughout Mecklenburg,
              Union, and York counties. Whether you need drywall repair in Dilworth, exterior staining in Lake Norman,
              or commercial maintenance in South End, our crew is ready.
            </p>
            <p className="mt-5 text-sm font-bold">Communities We Frequently Serve:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {communities.map((place) => (
                <li key={place} className="rounded-full bg-[var(--ap-low)] px-3 py-1.5 text-sm text-[var(--ap-ink)]">
                  {place}
                </li>
              ))}
            </ul>
            <a className="ap-btn mt-6" href={phone.href}>
              <Navigation className="size-4" aria-hidden="true" />
              Check Service in Your Zip Code
            </a>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-[var(--ap-radius)] shadow-md lg:w-96 lg:shrink-0">
            <ApImage
              src={apImages.location.src}
              alt={apImages.location.alt}
              width={apImages.location.width}
              height={apImages.location.height}
              quality={60}
              sizes="(min-width: 1024px) 384px, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--ap-navy)]/20 p-4">
              <div className="rounded-[var(--ap-radius-sm)] bg-[var(--ap-card)]/95 px-4 py-3 text-center text-[var(--ap-ink)] shadow-xl">
                <MapPin className="mx-auto size-8 text-[var(--ap-accent)]" aria-hidden="true" />
                <p className="ap-h3 mt-1">HQ: {address.short}</p>
                <p className="text-sm text-[var(--ap-muted)]">{address.city}</p>
                <p className="mt-1 text-xs font-semibold text-[var(--ap-accent)]">
                  Dispatched Daily Across Greater Charlotte
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
