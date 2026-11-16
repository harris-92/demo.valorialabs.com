'use client'

import { useState } from 'react'

import { galleryFilters, projects, type GalleryFilter } from '../lib/content'
import ApImage from './ApImage'

export default function ApGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const visible = projects.filter(
    (project) => filter === 'all' || (project.show as readonly string[]).includes(filter),
  )

  return (
    <section id="gallery" className="bg-[var(--ap-low)] py-16 lg:py-20">
      <div className="ap-wrap-full">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="ap-kicker">Recent Transformations</p>
            <h2 className="ap-h2 mt-2">Charlotte Project Portfolio</h2>
            <p className="mt-2 max-w-xl text-[var(--ap-muted)]">
              Explore authentic transformations delivered across Ballantyne, South Park, Dilworth, and surrounding
              regions.
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
                    selected ? 'bg-[var(--ap-ink)] text-[var(--ap-bg)]' : 'bg-[var(--ap-container)] text-[var(--ap-ink)]'
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
            <article key={project.title} className="ap-card ap-lift group">
              <div className="relative h-64 overflow-hidden rounded-t-[var(--ap-radius)]">
                <ApImage
                  src={project.image.src}
                  alt={project.alt}
                  width={project.image.width}
                  height={project.image.height}
                  quality={60}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="ap-photo h-full w-full object-cover"
                />
                <span className="absolute top-3 right-3 rounded bg-[var(--ap-green)] px-2 py-1 text-[11px] font-bold text-white uppercase">
                  Completed
                </span>
                <span className="absolute bottom-3 left-3 rounded-full bg-[var(--ap-navy)]/80 px-2.5 py-1 text-xs text-white">
                  {project.place}
                </span>
              </div>
              <div className="p-4">
                <h3 className="ap-h3">{project.title}</h3>
                <p className="mt-1 text-sm text-[var(--ap-muted)]">{project.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
