import { Eye, Handshake, ShieldCheck, Users } from 'lucide-react'

import { reasons } from '../lib/content'
import { bdnImages } from '../lib/images'
import BdnImage from './BdnImage'

const icons = [Eye, ShieldCheck, Users, Handshake] as const

export default function BdnWhy() {
  return (
    <section id="about" className="bg-[var(--bdn-blue-wash)] py-16 lg:py-20">
      <div className="bdn-wrap grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="bdn-kicker">Why clients stay</p>
          <h2 className="bdn-h2 mt-2">A contractor who stays through the opening</h2>
          <p className="mt-4 text-[var(--bdn-muted)]">
            BDN was founded by Jamie Boaden after 18 years in general contracting and construction management, on jobs
            from roughly $100,000 to $10 million. The company is built around open financials, a design that survives
            the site, and a trade network that can actually staff the work.
          </p>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => {
              const Icon = icons[index] ?? Handshake
              return (
                <div key={reason.title} className="flex items-start gap-3">
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-[var(--bdn-radius-sm)] bg-[var(--bdn-gold)] text-[var(--bdn-gold-ink)]">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="bdn-h3 text-lg">{reason.title}</h3>
                    <p className="mt-1 text-sm text-[var(--bdn-muted)]">{reason.body}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bdn-lift overflow-hidden rounded-[var(--bdn-radius)] shadow-lg sm:col-span-2">
            <BdnImage
              src={bdnImages.everNewInterior.src}
              alt={bdnImages.everNewInterior.alt}
              width={1200}
              height={800}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="h-64 w-full object-cover sm:h-72"
            />
          </div>
          <div className="bdn-lift overflow-hidden rounded-[var(--bdn-radius)] shadow-lg">
            <BdnImage
              src={bdnImages.leftFieldBar.src}
              alt={bdnImages.leftFieldBar.alt}
              width={800}
              height={600}
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="h-44 w-full object-cover"
            />
          </div>
          <div className="bdn-lift overflow-hidden rounded-[var(--bdn-radius)] shadow-lg">
            <BdnImage
              src={bdnImages.hillberg.src}
              alt={bdnImages.hillberg.alt}
              width={800}
              height={600}
              sizes="(min-width: 1024px) 20vw, 50vw"
              className="h-44 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
