import { Droplets, MapPin, Truck, UserRound } from 'lucide-react'

import { reasons } from '../lib/content'
import { sdImages } from '../lib/images'
import SdImage from './SdImage'

const icons = [UserRound, Truck, MapPin, Droplets] as const

export default function SdWhy() {
  return (
    <section id="about" className="bg-[var(--sd-wash)] py-16 lg:py-20">
      <div className="sd-wrap grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="sd-kicker">Why crews call Servidiesel</p>
          <h2 className="sd-h2 mt-2">On-site service. Real expertise.</h2>
          <p className="mt-4 text-[var(--sd-muted)]">
            No need to tow the vehicle or move the machine. Cristiano brings a fully equipped mobile shop to the
            location — from routine maintenance to heavy diesel, excavator, and hydraulic repairs.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = icons[index] ?? Truck
              return (
                <div key={reason.title} className="flex items-start gap-3">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-[var(--sd-radius-sm)] bg-[var(--sd-container)] text-[var(--sd-accent)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="sd-h3 text-lg">{reason.title}</h3>
                    <p className="mt-1 text-sm text-[var(--sd-muted)]">{reason.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="sd-lift rounded-[var(--sd-radius)] sm:h-72">
            <div className="h-full overflow-hidden rounded-[var(--sd-radius)] shadow-lg">
              <SdImage
                src={sdImages.work1.src}
                alt={sdImages.work1.alt}
                width={sdImages.work1.width}
                height={sdImages.work1.height}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
                className="h-56 w-full object-cover sm:h-full"
              />
            </div>
          </div>
          <div className="sd-lift rounded-[var(--sd-radius)] sm:mt-8 sm:h-72">
            <div className="h-full overflow-hidden rounded-[var(--sd-radius)] shadow-lg">
              <SdImage
                src={sdImages.work3.src}
                alt={sdImages.work3.alt}
                width={sdImages.work3.width}
                height={sdImages.work3.height}
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
