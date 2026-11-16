import { MapPin, Navigation } from 'lucide-react'

import { address, coverage, googleMaps, phone } from '../lib/content'
import { sdImages } from '../lib/images'
import SdImage from './SdImage'

export default function SdAreas() {
  return (
    <section id="areas" className="bg-[var(--sd-bg)] py-16 lg:py-20">
      <div className="sd-wrap">
        <div className="sd-lift flex flex-col items-stretch gap-8 rounded-[var(--sd-radius)] bg-[var(--sd-card)] p-6 text-[var(--sd-ink)] sm:p-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="sd-kicker">Where the shop rolls</p>
            <h2 className="sd-h2 mt-2">Based in Barrie. The repair happens where the machine is.</h2>
            <p className="mt-3 text-[var(--sd-muted)]">
              Servidiesel is at {address.line}. The mobile shop goes to the driveway, the fleet yard, the job site, or
              the roadside.
            </p>
            <p className="mt-5 text-sm font-bold">Where service happens:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {coverage.map((place) => (
                <li key={place} className="rounded-full bg-[var(--sd-low)] px-3 py-1.5 text-sm text-[var(--sd-ink)]">
                  {place}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a className="sd-btn" href={phone.href}>
                <Navigation className="size-4" aria-hidden="true" />
                Call for a mobile visit
              </a>
              <a className="sd-btn-soft" href={googleMaps.href} target="_blank" rel="noreferrer">
                Open Google listing
              </a>
            </div>
          </div>
          <div className="relative h-80 w-full overflow-hidden rounded-[var(--sd-radius)] shadow-md lg:w-96 lg:shrink-0">
            <SdImage
              src={sdImages.location.src}
              alt={sdImages.location.alt}
              width={sdImages.location.width}
              height={sdImages.location.height}
              sizes="(min-width: 1024px) 384px, 100vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[var(--sd-navy)]/25 p-4">
              <div className="rounded-[var(--sd-radius-sm)] bg-[var(--sd-card)]/95 px-4 py-3 text-center text-[var(--sd-ink)] shadow-xl">
                <MapPin className="mx-auto size-8 text-[var(--sd-accent)]" aria-hidden="true" />
                <p className="sd-h3 mt-1">{address.short}</p>
                <p className="text-sm text-[var(--sd-muted)]">{address.city}</p>
                <p className="mt-1 text-xs font-semibold text-[var(--sd-accent)]">Mobile from Barrie</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
