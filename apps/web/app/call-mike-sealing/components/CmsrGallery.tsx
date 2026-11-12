'use client'

import { useState } from 'react'
import { Camera } from 'lucide-react'

import { cmsrImages } from '../lib/images'
import CmsrImage from './CmsrImage'

type GalleryFilter = 'all' | 'commercial' | 'residential' | 'repairs'

const filters: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'commercial', label: 'Commercial Plazas' },
  { id: 'residential', label: 'Residential Driveways' },
  { id: 'repairs', label: 'Basins & Repaving' },
]

const projects: {
  filters: GalleryFilter[]
  image: string
  alt: string
  place: string
  badge: string
  title: string
  body: string
  location: string
  spec: string
}[] = [
  {
    filters: ['commercial', 'repairs'],
    image: cmsrImages.lotWork,
    alt: 'Commercial lot with fresh curb work and traffic control',
    place: 'Rock & Chalk • Newmarket',
    badge: 'Completed Surface',
    title: 'Commercial Repaving & Seal',
    body: 'Severe oxidation and structural cracking restored to municipal standards with full binder replenishment.',
    location: 'Location: Newmarket Plaza',
    spec: 'Product #1999 Spec',
  },
  {
    filters: ['commercial'],
    image: cmsrImages.plaza,
    alt: 'Retail plaza parking lot in York Region',
    place: 'Metro Hall Accessibility',
    badge: 'AODA Certified',
    title: 'AODA Handicap Markings',
    body: 'Municipal building accessibility upgrade: blue-field stalls, custom stencil arrows, and crisp stall striping.',
    location: 'Location: Downtown Core',
    spec: 'Thermoplastic Spec',
  },
  {
    filters: ['residential'],
    image: cmsrImages.driveway,
    alt: 'Sealed residential asphalt driveway in Vaughan',
    place: 'Vaughan Residential Estate',
    badge: 'Zero Overspray Guarantee',
    title: '100% Oil-Base Driveway Seal',
    body: 'Hand-applied precision edges against interlock stone border with deep oil-base penetration.',
    location: 'Location: Kleinburg / Vaughan',
    spec: 'Family Inspected',
  },
  {
    filters: ['repairs', 'commercial'],
    image: cmsrImages.sidewalkCrack,
    alt: 'Failed pavement joint beside a commercial walkway',
    place: 'Commercial Plaza Basin',
    badge: 'Excavated & Rebuilt',
    title: 'Catch Basin Collar Reconstruction',
    body: 'Sunken drain perimeter excavated to bedrock, rebuilt with reinforced concrete block and hot mix asphalt.',
    location: 'Location: Concord Industrial',
    spec: 'Water Flow Restored',
  },
  {
    filters: ['commercial'],
    image: cmsrImages.driveway,
    alt: 'Deep black sealed asphalt surface',
    place: 'York Retail Plaza',
    badge: 'Phase 1 Completed',
    title: 'Commercial Parking Lot Rejuvenation',
    body: 'Phased weekend application allowing uninterrupted tenant commerce while locking out chemical runoff.',
    location: 'Location: Richmond Hill',
    spec: '45,000 Sq. Ft.',
  },
  {
    filters: ['commercial', 'repairs'],
    image: cmsrImages.curb,
    alt: 'Poured concrete curb termination',
    place: 'Industrial Park Markings',
    badge: 'Laser Straight',
    title: 'Logistics Park Striping & Curbs',
    body: 'High-visibility truck bay alignments, directional fire routes, and poured concrete curb terminations.',
    location: 'Location: Barrie North Corridor',
    spec: 'Safety Approved',
  },
]

export default function CmsrGallery() {
  const [filter, setFilter] = useState<GalleryFilter>('all')
  const visible = projects.filter((project) => filter === 'all' || project.filters.includes(filter))

  return (
    <section id="showcase" className="bg-[var(--cmsr-surface-low)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
              <Camera className="size-4" aria-hidden="true" />
              Field Portfolio & Case Studies
            </p>
            <h2 className="cmsr-h2">Proof of Work Across Southern Ontario</h2>
            <p className="text-[var(--cmsr-on-surface-variant)]">
              Explore authentic transformations from our project archives: commercial parking lots, residential driveways, and municipal civil repairs.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {filters.map((item) => {
              const active = filter === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`cmsr-label rounded px-4 py-2 text-[10px] ${
                    active
                      ? 'bg-[var(--cmsr-primary-container)] text-[var(--cmsr-on-primary-container)]'
                      : 'bg-[var(--cmsr-surface-container)] text-[var(--cmsr-on-surface-variant)]'
                  }`}
                  aria-pressed={active}
                  onClick={() => setFilter(item.id)}
                >
                  {item.label}
                </button>
              )
            })}
          </div>
        </div>
        <div className="cmsr-links cmsr-links-3 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article key={project.title} className="cmsr-card flex flex-col">
              <div className="relative h-64 w-full bg-[var(--cmsr-surface-lowest)]">
                <CmsrImage
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span className="cmsr-label absolute top-3 left-3 rounded bg-[color-mix(in_srgb,var(--cmsr-surface)_90%,transparent)] px-2 py-1 text-[10px] text-[var(--cmsr-primary)]">
                  {project.place}
                </span>
                <span className="cmsr-label absolute bottom-3 left-3 rounded bg-[var(--cmsr-primary-container)] px-2 py-0.5 text-[10px] text-[var(--cmsr-on-primary-container)]">
                  {project.badge}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-5">
                <h3 className="cmsr-h3">{project.title}</h3>
                <p className="text-sm text-[var(--cmsr-on-surface-variant)]">{project.body}</p>
                <div className="flex items-center justify-between gap-3 pt-2 text-xs text-[var(--cmsr-on-surface-variant)]">
                  <span>{project.location}</span>
                  <span className="font-bold text-[var(--cmsr-primary)]">{project.spec}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
