import { industries } from '../lib/content'
import BdnImage from './BdnImage'

export default function BdnIndustries() {
  return (
    <section id="industries" className="bg-[var(--bdn-bg)] py-16 lg:py-20">
      <div className="bdn-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="bdn-kicker">Who the work is for</p>
          <h2 className="bdn-h2 mt-2">Industries we build</h2>
          <p className="mt-3 text-[var(--bdn-muted)]">
            The same services, applied to the rooms BDN already finishes: retail floors, restaurants, clinics, offices,
            and working kitchens.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article key={industry.title} className="bdn-card bdn-lift group overflow-hidden">
              <div className="relative h-52">
                <BdnImage
                  src={industry.image.src}
                  alt={industry.image.alt}
                  width={960}
                  height={720}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="bdn-photo h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="bdn-h3">{industry.title}</h3>
                <p className="mt-2 text-sm text-[var(--bdn-muted)]">{industry.body}</p>
                <p className="mt-3 text-xs font-semibold tracking-wide text-[var(--bdn-accent)] uppercase">{industry.place}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
