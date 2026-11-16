import { ArrowRight, Star } from 'lucide-react'

import { googleMaps } from '../lib/content'
import { sdImages } from '../lib/images'
import SdImage from './SdImage'

const shots = [sdImages.work4, sdImages.work6, sdImages.work7] as const

export default function SdReviews() {
  return (
    <section id="reviews" className="bg-[var(--sd-wash)] py-16 lg:py-20">
      <div className="sd-wrap grid items-center gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="sd-kicker">Google listing</p>
          <h2 className="sd-h2 mt-2">Read Servidiesel on Google</h2>
          <p className="mt-3 text-[var(--sd-muted)]">
            Reviews live on the Google listing for {googleMaps.label}. Open it to see what customers wrote, the map
            pin, and the Barrie address.
          </p>
          <a className="sd-btn mt-6" href={googleMaps.href} target="_blank" rel="noreferrer">
            <Star className="size-4 fill-current" aria-hidden="true" />
            Open Google reviews
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7">
          {shots.map((shot) => (
            <article key={shot.src} className="sd-card sd-lift overflow-hidden">
              <SdImage
                src={shot.src}
                alt={shot.alt}
                width={shot.width}
                height={shot.height}
                sizes="(min-width: 1024px) 18vw, 33vw"
                className="h-48 w-full object-cover sm:h-56"
              />
              <p className="p-3 text-sm font-semibold">{shot.alt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
