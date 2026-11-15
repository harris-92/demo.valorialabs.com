import Image from 'next/image'

import { showcases } from '../lib/content'

export default function FsShowcase() {
  return (
    <section id="gallery" className="scroll-mt-32 bg-[var(--fs-pitch)] px-4 py-16 md:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Real Results Across Central Ontario</p>
        <h2 className="mt-3 text-4xl">The ForgeSeal Transformation</h2>
        <p className="mt-4 max-w-3xl text-[var(--fs-muted)]">
          Witness the dramatic contrast between oxidized, crumbling pavement and our fortified, jet-black industrial asphalt
          finish.
        </p>
        <ul className="mt-8 grid gap-5 lg:grid-cols-3">
          {showcases.map((item) => (
            <li key={item.title} className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)]">
              <div className="grid min-h-48 grid-cols-2">
                <div className="flex flex-col justify-end bg-[var(--fs-elevated)] p-4">
                  <p className="fs-display text-xs text-[var(--fs-dim)]">Before</p>
                  <p className="mt-2 text-sm text-[var(--fs-muted)]">{item.before}</p>
                </div>
                <div className="relative">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={1376}
                    height={768}
                    quality={60}
                    sizes="(min-width: 1024px) 16vw, 50vw"
                    className="h-full min-h-48 w-full object-cover"
                  />
                  <p className="fs-display absolute left-3 top-3 bg-black/70 px-2 py-1 text-xs text-[var(--fs-orange)]">After</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-1 text-sm text-[var(--fs-orange)]">{item.place}</p>
                <p className="mt-2 text-sm text-[var(--fs-muted)]">{item.after}</p>
              </div>
            </li>
          ))}
        </ul>
    </section>
  )
}
