'use client'

import { useState } from 'react'

import { galleryFilters, type GalleryFilter } from '../lib/content'
import { emtImages } from '../lib/images'
import EmtImage from './EmtImage'

const photos: readonly {
  id: string
  image: (typeof emtImages)[keyof typeof emtImages]
  title: string
  caption: string
  show: readonly GalleryFilter[]
  wide?: boolean
}[] = [
  {
    id: 'team',
    image: emtImages.team,
    title: 'Uniformed, Dedicated Moving Specialists',
    caption: 'Friendly, background-checked moving technicians with years of heavy handling expertise.',
    show: ['all'],
    wide: true,
  },
  {
    id: 'wrapping',
    image: emtImages.wrapping,
    title: 'Fine Wood Blanket Wrapping',
    caption: 'Scratch-free blanket and shrink protocol.',
    show: ['all', 'blankets'],
  },
  {
    id: 'boxes',
    image: emtImages.boxes,
    title: 'Reinforced Moving Supplies',
    caption: 'Heavy-gauge boxes, wardrobe carts, and tape.',
    show: ['all', 'boxes'],
  },
  {
    id: 'fleet',
    image: emtImages.fleet,
    title: 'Equipment & Fleet',
    caption: 'Air-ride trucks staged for suburban Charlotte and Waxhaw moves.',
    show: ['fleet'],
    wide: true,
  },
]

export default function EmtGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const visible = photos.filter((photo) => photo.show.includes(filter))

  return (
    <section id="gallery" className="bg-white px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="emt-kicker">Proof of Work & Real Fleet</p>
            <h2 className="emt-h2 mt-2">Real Charlotte Moves, Real Care</h2>
            <p className="mt-2 max-w-xl text-[var(--emt-muted)]">
              A look at the trucks, packing methods, and Dan&apos;s crew.
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
                  className={`rounded-full px-4 py-2 text-xs font-bold ${
                    selected
                      ? 'bg-[var(--emt-navy)] text-white'
                      : 'bg-[var(--emt-surface-low)] text-[var(--emt-ink)]'
                  }`}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {visible.map((photo) => (
            <figure
              key={photo.id}
              className={`group emt-hover-photo relative h-72 overflow-hidden rounded-2xl lg:h-80 ${photo.wide ? 'lg:col-span-2' : ''}`}
            >
              <EmtImage
                src={photo.image.src}
                alt={photo.image.alt}
                fill
                sizes={photo.wide ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 25vw, 100vw'}
                className="emt-photo object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[var(--emt-navy-dark)]/85 to-transparent p-4 text-white">
                <p className="font-bold">{photo.title}</p>
                <p className="text-sm text-white/80">{photo.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
