'use client'

import { useEffect } from 'react'
import DemoStaticImage from './DemoStaticImage'
import { X } from 'lucide-react'

import { cn } from 'cn'

export interface GalleryImage {
  id: number
  src: string
  alt: string
  title: string
  /** Tailwind grid span classes, e.g. "sm:col-span-2" */
  span?: string
}

export interface GalleryClassNames {
  section?: string
  container?: string
  grid?: string
  item?: string
  overlay?: string
  caption?: string
}

interface GalleryProps {
  data: readonly GalleryImage[]
  onImageClick: (image: GalleryImage) => void
  id?: string
  heading?: React.ReactNode
  classNames?: GalleryClassNames
}

export function Gallery({ data, onImageClick, id, heading, classNames }: GalleryProps) {
  return (
    <section id={id} className={cn('py-20', classNames?.section)}>
      <div className={cn('container mx-auto px-6', classNames?.container)}>
        {heading}
        <div
          className={cn(
            'grid auto-rows-[220px] grid-cols-1 gap-4 sm:auto-rows-[240px] sm:grid-cols-2 md:grid-cols-3 lg:auto-rows-[280px] lg:grid-cols-4',
            classNames?.grid,
          )}
        >
          {data.map((img) => (
            <button
              key={img.id}
              type="button"
              aria-label={`View ${img.title}`}
              onClick={() => onImageClick(img)}
              className={cn(
                'group relative h-full cursor-pointer overflow-hidden rounded-lg text-left',
                img.span,
                classNames?.item,
              )}
            >
              <DemoStaticImage
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                className={cn(
                  'absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100',
                  classNames?.overlay,
                )}
              >
                <p
                  className={cn(
                    'translate-y-4 text-lg font-medium text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0 group-focus-visible:translate-y-0',
                    classNames?.caption,
                  )}
                >
                  {img.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

interface ImageModalProps {
  image: GalleryImage | null
  onClose: () => void
}

export function ImageModal({ image, onClose }: ImageModalProps) {
  useEffect(() => {
    if (!image) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [image, onClose])

  if (!image) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      {/* Plain img: arbitrary natural size inside a viewport-capped box */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[90vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        type="button"
        aria-label="Close"
        className="absolute right-5 top-5 rounded-full bg-black/40 p-2 text-white transition-colors hover:bg-black/60"
        onClick={onClose}
      >
        <X className="h-6 w-6" />
      </button>
    </div>
  )
}
