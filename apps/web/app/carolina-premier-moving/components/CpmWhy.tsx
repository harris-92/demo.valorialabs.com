import { Clock, Package, Truck, UserRound } from 'lucide-react'

import { reasons } from '../lib/content'
import { cpmImages } from '../lib/images'
import CpmImage from './CpmImage'

const icons = [UserRound, Package, Clock, Truck] as const

export default function CpmWhy() {
  return (
    <section id="about" className="bg-[var(--cpm-blue-wash)] py-16 lg:py-20">
      <div className="cpm-wrap grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="cpm-kicker">Why homeowners call</p>
          <h2 className="cpm-h2 mt-2">A Local Crew That Shows Up and Wraps the Furniture</h2>
          <p className="mt-4 text-[var(--cpm-muted)]">
            Carolina Premier is based at 6505 Deal Rd in Matthews. Google reviews come back to the same points: Ryan
            stays in touch, the crew is on time, and furniture is wrapped before it goes on the truck.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = icons[index] ?? UserRound
              return (
                <div key={reason.title} className="flex items-start gap-3">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-[var(--cpm-radius-sm)] bg-[var(--cpm-accent-soft)] text-[var(--cpm-accent-ink)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="cpm-h3 text-lg">{reason.title}</h3>
                    <p className="mt-1 text-sm text-[var(--cpm-muted)]">{reason.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="cpm-lift rounded-[var(--cpm-radius)] sm:h-72">
            <div className="h-full overflow-hidden rounded-[var(--cpm-radius)] shadow-lg">
              <CpmImage
                src={cpmImages.wrapping.src}
                alt={cpmImages.wrapping.alt}
                width={cpmImages.wrapping.width}
                height={cpmImages.wrapping.height}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                className="h-56 w-full object-cover sm:h-full"
              />
            </div>
          </div>
          <div className="cpm-lift rounded-[var(--cpm-radius)] sm:mt-8 sm:h-72">
            <div className="h-full overflow-hidden rounded-[var(--cpm-radius)] shadow-lg">
              <CpmImage
                src={cpmImages.packed.src}
                alt={cpmImages.packed.alt}
                width={cpmImages.packed.width}
                height={cpmImages.packed.height}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                className="h-56 w-full object-cover sm:h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
