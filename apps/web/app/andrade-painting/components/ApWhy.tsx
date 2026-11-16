import { Clock, HardHat, Paintbrush, Shield } from 'lucide-react'

import { reasons } from '../lib/content'
import { apImages } from '../lib/images'
import ApImage from './ApImage'

const icons = [HardHat, Paintbrush, Clock, Shield] as const

export default function ApWhy() {
  return (
    <section id="about" className="bg-[var(--ap-mint-wash)] py-16 lg:py-20">
      <div className="ap-wrap grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="ap-kicker">Why Charlotte Chooses Us</p>
          <h2 className="ap-h2 mt-2">Excellence & Professionalism Since 2010</h2>
          <p className="mt-4 text-[var(--ap-muted)]">
            “Excellence and professionalism are first when it comes to our Small Business. We are constantly improving
            our services, staying up-to-date on all the latest industry advancements and bringing our knowledge to your
            doorstep. Since 2010, our goal has remained the same—to provide reliable services and make sure our clients
            know we are professionals they can trust.”
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = icons[index] ?? HardHat
              return (
                <div key={reason.title} className="flex items-start gap-3">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-[var(--ap-radius-sm)] bg-[var(--ap-green-soft)] text-[var(--ap-green)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="ap-h3 text-lg">{reason.title}</h3>
                    <p className="mt-1 text-sm text-[var(--ap-muted)]">{reason.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="ap-lift rounded-[var(--ap-radius)] sm:h-72">
            <div className="h-full overflow-hidden rounded-[var(--ap-radius)] shadow-lg">
            <ApImage
              src={apImages.interior.src}
              alt="Charlotte interior painting work by Andrade Painting"
              width={apImages.interior.width}
              height={apImages.interior.height}
              quality={60}
              sizes="(min-width: 1024px) 22vw, (min-width: 640px) 40vw, 100vw"
              className="h-56 w-full object-cover sm:h-full"
            />
            </div>
          </div>
          <div className="ap-lift rounded-[var(--ap-radius)] sm:mt-8 sm:h-72">
            <div className="h-full overflow-hidden rounded-[var(--ap-radius)] shadow-lg">
            <ApImage
              src={apImages.commercial.src}
              alt="Charlotte commercial painting contractor work by Andrade Painting"
              width={apImages.commercial.width}
              height={apImages.commercial.height}
              quality={60}
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
