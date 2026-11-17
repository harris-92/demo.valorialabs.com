'use client'

import { useState } from 'react'

import { gallery, galleryFilters, type GalleryFilter } from '../lib/content'
import BdnImage from './BdnImage'

export default function BdnGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const visible = gallery.filter((item) => filter === 'all' || (item.show as readonly string[]).includes(filter))

  return (
    <section id="gallery" className="bg-[var(--bdn-low)] py-16 lg:py-20">
      <div className="bdn-wrap-full">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="bdn-kicker">Finished rooms</p>
            <h2 className="bdn-h2 mt-2">Project gallery</h2>
            <p className="mt-2 max-w-xl text-[var(--bdn-muted)]">
              Photography from completed BDN jobs: retail floors, restaurants, a medical spa, and working offices.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Gallery filters">
            {galleryFilters.map((item) => {
              const selected = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={selected}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
                    selected ? 'bg-[var(--bdn-ink)] text-[var(--bdn-bg)]' : 'bg-[var(--bdn-container)] text-[var(--bdn-ink)]'
                  }`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article key={project.title} className="bdn-card bdn-lift group">
              <div className="relative h-64 overflow-hidden rounded-t-[var(--bdn-radius)]">
                <BdnImage
                  src={project.image.src}
                  alt={project.image.alt}
                  width={960}
                  height={720}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="bdn-photo h-full w-full object-cover"
                />
                <span className="absolute top-3 right-3 rounded bg-[var(--bdn-gold)] px-2 py-1 text-[11px] font-bold text-[var(--bdn-gold-ink)] uppercase">
                  Completed
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-[var(--bdn-navy)]/80 px-2.5 py-1 text-xs text-white">
                  {project.place}
                </span>
              </div>
              <div className="p-4">
                <h3 className="bdn-h3">{project.title}</h3>
                <p className="mt-1 text-sm text-[var(--bdn-muted)]">{project.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
