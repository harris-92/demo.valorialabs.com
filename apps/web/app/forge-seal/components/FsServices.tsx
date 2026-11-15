import Image from 'next/image'

import { services } from '../lib/content'
import FsIcon from './FsIcon'

export default function FsServices() {
  return (
    <section id="services" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Heavy-Duty Industrial Capabilities</p>
      <h2 className="mt-3 max-w-3xl text-4xl">Engineered Pavement Services</h2>
      <p className="mt-4 max-w-3xl text-[var(--fs-muted)]">
        From high-volume commercial plaza logistics to estate-grade residential driveways, our crews use high-temperature
        commercial sealants tailored specifically to the Canadian freeze-thaw climate.
      </p>
      <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <li key={service.title} className="fs-card flex flex-col overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)]">
            {service.kind === 'photo' ? (
              <Image
                src={service.image}
                alt={service.alt}
                width={1376}
                height={768}
                quality={60}
                sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, calc(100vw - 2rem)"
                className="h-44 w-full object-cover"
              />
            ) : (
              <div className="flex h-44 items-end bg-[var(--fs-elevated)] p-5">
                <FsIcon name={service.kind === 'patch' ? 'flame' : 'drop'} className="h-10 w-10 text-[var(--fs-orange)]" />
              </div>
            )}
            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-[var(--fs-orange)]">{service.badge}</p>
              <h3 className="mt-2 text-2xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--fs-muted)]">{service.body}</p>
              <ul className="mt-4 grid gap-2 text-sm">
                {service.points.map((point) => (
                  <li key={point} className="flex gap-2">
                    <FsIcon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[var(--fs-green)]" />
                    {point}
                  </li>
                ))}
              </ul>
              <a className="fs-display mt-5 text-sm text-[var(--fs-orange)]" href="#quote">
                {service.cta}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
