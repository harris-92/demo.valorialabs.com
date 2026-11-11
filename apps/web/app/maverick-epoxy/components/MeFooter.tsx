import { ClipboardCheck, MapPin, Phone, Warehouse, Wrench } from 'lucide-react'

import DemoStaticImage from './ui/DemoStaticImage'
import {
  ME_CONTACT_SERVICES,
  ME_EMAIL,
  ME_LOCATION,
  ME_MAPS_URL,
  ME_PHONE_DISPLAY,
  ME_PHONE_TEL,
  ME_SERVICE_AREAS,
  meImages,
} from '../lib/constants'

const HEADING = 'mb-4 flex items-center gap-2 text-xs font-bold tracking-wider uppercase'

export default function MeFooter() {
  return (
    <footer className="w-full border-t border-white/10 bg-[color-mix(in_srgb,var(--me-navy)_82%,black)] pt-16 pb-16 text-white">
      <div className="mx-auto max-w-7xl me-page-x">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <DemoStaticImage
              alt="Maverick Epoxy"
              className="h-24 w-24 object-contain object-left"
              height={400}
              src={meImages.logo}
              width={438}
            />
            <p className="text-sm leading-relaxed text-white/70">
              Maverick Epoxy installs flake, metallic, quartz, and solid-color floors around Robbins, North Carolina.
              Garages, patios, basements, and commercial slabs.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="rounded-full border border-[var(--me-primary)]/40 bg-[var(--me-primary)]/15 px-3 py-1 text-xs font-semibold text-[var(--me-primary)]">
                Fully insured
              </span>
              <span className="rounded-full border border-[var(--me-gold)]/40 bg-[var(--me-gold)]/15 px-3 py-1 text-xs font-semibold text-[var(--me-gold)]">
                5.0 on Google
              </span>
            </div>
          </div>

          <div>
            <h2 className={`${HEADING} text-[var(--me-gold)]`}>
              <MapPin aria-hidden className="size-4" />
              Service areas
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-sm text-white/70">
              {ME_SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <a className="transition-colors hover:text-[var(--me-gold)]" href="#locations">
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={`${HEADING} text-[var(--me-gold)]`}>
              <Wrench aria-hidden className="size-4" />
              Services
            </h2>
            <ul className="space-y-2 text-sm text-white/70">
              {ME_CONTACT_SERVICES.map((service) => (
                <li key={service}>
                  <a className="transition-colors hover:text-[var(--me-gold)]" href="#other-services">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={`${HEADING} text-[var(--me-primary)]`}>
              <Phone aria-hidden className="size-4" />
              Contact
            </h2>
            <div className="space-y-3 text-sm text-white/70">
              <div>
                <div className="text-[11px] font-bold tracking-wider text-white/50 uppercase">Phone</div>
                <a className="text-base font-bold text-[var(--me-primary)] hover:underline" href={ME_PHONE_TEL}>
                  {ME_PHONE_DISPLAY}
                </a>
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider text-white/50 uppercase">Email</div>
                <a className="break-all transition-colors hover:text-white" href={`mailto:${ME_EMAIL}`}>
                  {ME_EMAIL}
                </a>
              </div>
              <div>
                <div className="text-[11px] font-bold tracking-wider text-white/50 uppercase">Location</div>
                <a className="text-white hover:underline" href={ME_MAPS_URL}>
                  {ME_LOCATION}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-around">
          <div className="flex items-center gap-3">
            <ClipboardCheck aria-hidden className="size-6 shrink-0 text-[var(--me-gold)]" />
            <div>
              <div className="text-sm font-bold">Free onsite quote</div>
              <div className="text-xs text-white/70">We look at the slab before we price it</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Warehouse aria-hidden className="size-6 shrink-0 text-[var(--me-primary)]" />
            <div>
              <div className="text-sm font-bold">5-year adhesion warranty</div>
              <div className="text-xs text-white/70">Epoxy base, polyaspartic topcoat</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin aria-hidden className="size-6 shrink-0 text-[var(--me-gold)]" />
            <div>
              <div className="text-sm font-bold">Moore County</div>
              <div className="text-xs text-white/70">Robbins and the six towns listed above</div>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-white/50">© 2026 Maverick Epoxy LLC. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
