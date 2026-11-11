'use client'

import { useCallback, useState } from 'react'

import {
  Gallery,
  ImageModal,
  type GalleryClassNames,
  type GalleryImage,
} from './ui/react-tailwind-image-gallery'
import { ME_GALLERY } from '../lib/constants'

const DISPLAY = 'var(--me-font-display)'

const ME_GALLERY_CLASSNAMES: GalleryClassNames = {
  section: 'relative w-full py-24 me-page-x',
  container: 'mx-auto max-w-[1440px] px-0',
  grid: 'grid-flow-dense gap-4',
  item: 'rounded-2xl border border-white/15 focus-visible:outline-2 focus-visible:outline-[var(--me-gold)]',
  overlay: 'from-[var(--me-navy)]/80',
  caption: 'text-[var(--me-white)]',
}

export default function MeGallery() {
  const [active, setActive] = useState<GalleryImage | null>(null)
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <Gallery
        id="gallery"
        data={ME_GALLERY}
        onImageClick={setActive}
        classNames={ME_GALLERY_CLASSNAMES}
        heading={
          <div className="mb-12 max-w-2xl">
            <div className="mb-3 inline-flex items-center rounded-full border border-[var(--me-gold)]/40 bg-[var(--me-gold)]/15 px-3.5 py-1 text-xs font-bold tracking-widest text-[var(--me-gold)] uppercase">
              Google listing
            </div>
            <h2
              className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
              style={{ fontFamily: DISPLAY }}
            >
              Finished floors around Robbins
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">
              Flake, metallic, and solid-color epoxy from the Maverick Epoxy Google listing. Garages, living rooms,
              and commercial floors around Robbins and Moore County.
            </p>
          </div>
        }
      />
      <ImageModal image={active} onClose={close} />
    </>
  )
}
