import { MapPin } from 'lucide-react'

import { cmsrImages } from '../lib/images'
import CmsrImage from './CmsrImage'

const hubs = [
  {
    title: 'Vaughan Central Division',
    phone: '(905) 392-1705',
    body: 'Woodbridge, Maple, Thornhill, Kleinburg, Concord & Vaughan Mills Commercial Sector.',
  },
  {
    title: 'York Region & Simcoe North',
    phone: '(905) 868-7525',
    body: 'Newmarket, Aurora, Richmond Hill, Markham, Stouffville, King City, Keswick & Georgina.',
  },
  {
    title: 'Barrie & Simcoe Gateway',
    phone: '(705) 988-1058',
    body: 'Barrie, Innisfil, Bradford, Angus, Orillia & surrounding commercial business parks.',
  },
] as const

const corridors = ['Hwy 400', 'Hwy 407', 'Hwy 404', 'Hwy 7'] as const

export default function CmsrAreas() {
  return (
    <section id="areas" className="bg-[var(--cmsr-surface)] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-12 lg:px-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="space-y-2">
            <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
              <MapPin className="size-4" aria-hidden="true" />
              Regional Dispatch Hubs
            </p>
            <h2 className="cmsr-h2">Rapid Response Across Vaughan & The Greater Toronto Area</h2>
            <p className="leading-relaxed text-[var(--cmsr-on-surface-variant)]">
              With dedicated service crews and equipment yards stationed across Vaughan, Keswick, and Barrie, we maintain continuous routes along the Highway 400, 407, and 404 transportation corridors.
            </p>
          </div>
          <div className="space-y-4">
            {hubs.map((hub) => (
              <article key={hub.title} className="cmsr-card flex items-start gap-4 p-5">
                <MapPin className="mt-0.5 size-7 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="cmsr-h3">{hub.title}</h3>
                    <span className="cmsr-label w-fit rounded bg-[var(--cmsr-surface-high)] px-2 py-0.5 text-[10px] text-[var(--cmsr-primary)]">
                      {hub.phone}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[var(--cmsr-on-surface-variant)]">{hub.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="flex items-center gap-3 text-xs text-[var(--cmsr-on-surface-variant)]">
            <span className="inline-block size-2.5 rounded-full bg-[var(--cmsr-primary-container)]" />
            Also serving Mississauga, Brampton & Toronto for large commercial projects.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="relative flex h-80 flex-col justify-end overflow-hidden rounded-xl p-6 shadow-2xl sm:h-96 lg:h-[460px]">
            <CmsrImage
              src={cmsrImages.lotWork}
              alt=""
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--cmsr-surface)] via-[color-mix(in_srgb,var(--cmsr-surface)_40%,transparent)] to-transparent" />
            <div className="relative flex flex-col gap-3 rounded-lg bg-[color-mix(in_srgb,var(--cmsr-surface)_90%,transparent)] p-5 backdrop-blur-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="cmsr-display text-base font-semibold">Regional Headquarters</p>
                <span className="cmsr-label rounded bg-[var(--cmsr-primary-container)] px-2 py-0.5 text-[10px] text-[var(--cmsr-on-primary-container)]">
                  Daily Dispatches
                </span>
              </div>
              <p className="text-sm text-[var(--cmsr-on-surface-variant)]">
                Serving York Region, Simcoe County, and the GTA since 1991. Commercial estimators deployed directly to your property within 24 hours.
              </p>
              <div className="flex flex-wrap gap-2">
                {corridors.map((corridor) => (
                  <span key={corridor} className="rounded bg-[var(--cmsr-surface-container)] px-2 py-1 font-mono text-xs text-[var(--cmsr-primary)]">
                    {corridor}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
