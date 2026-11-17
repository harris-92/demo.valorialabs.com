import { MapPin, Navigation } from 'lucide-react'

import { address, communities, phone } from '../lib/content'
import { bdnImages } from '../lib/images'
import BdnImage from './BdnImage'

export default function BdnAreas() {
  return (
    <section id="areas" className="bg-[var(--bdn-bg)] py-16 lg:py-20">
      <div className="bdn-wrap">
        <div className="bdn-lift flex flex-col items-stretch gap-8 rounded-[var(--bdn-radius)] bg-[var(--bdn-card)] p-6 text-[var(--bdn-ink)] sm:p-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="bdn-kicker">Where the crews go</p>
            <h2 className="bdn-h2 mt-2">Commercial construction near Oakville</h2>
            <p className="mt-3 text-[var(--bdn-muted)]">
              The office is on Speers Road in Oakville. Recent jobs sit in Burlington, Hamilton, Mississauga, Toronto,
              Newmarket, and Niagara-on-the-Lake. If your site is in the western GTA, ask before you assume it is out
              of range.
            </p>
            <p className="mt-5 text-sm font-bold">Nearby areas we already work in:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {communities.map((place) => (
                <li key={place} className="rounded-full bg-[var(--bdn-low)] px-3 py-1.5 text-sm text-[var(--bdn-ink)]">
                  {place}
                </li>
              ))}
            </ul>
            <a className="bdn-btn mt-6" href={phone.href}>
              <Navigation className="size-4" aria-hidden="true" />
              Ask about your city
            </a>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-[var(--bdn-radius)] shadow-md lg:w-96 lg:shrink-0">
            <BdnImage
              src={bdnImages.location.src}
              alt={bdnImages.location.alt}
              width={1200}
              height={1200}
              sizes="(min-width: 1024px) 384px, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--bdn-navy)]/25 p-4">
              <div className="rounded-[var(--bdn-radius-sm)] bg-[var(--bdn-card)]/95 px-4 py-3 text-center text-[var(--bdn-ink)] shadow-xl">
                <MapPin className="mx-auto size-8 text-[var(--bdn-accent)]" aria-hidden="true" />
                <p className="bdn-h3 mt-1">Office: {address.short}</p>
                <p className="text-sm text-[var(--bdn-muted)]">{address.city}</p>
                <p className="mt-1 text-xs font-semibold text-[var(--bdn-accent)]">Dispatched across the western GTA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
