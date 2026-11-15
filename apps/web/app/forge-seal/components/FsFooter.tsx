import {
  footerServices,
  footerTowns,
  FS_EMAIL,
  FS_MAPS,
  FS_PHONE_DISPLAY,
  FS_PHONE_TEL,
} from '../lib/content'
import FsIcon from './FsIcon'

const trust = [
  'WSIB Ontario Covered & Compliant',
  '100% Satisfaction Guaranteed',
  'Hot-Pour Commercial Specifications',
  'Commercial Liability Insured',
]

export default function FsFooter() {
  return (
    <footer className="border-t border-[var(--fs-line)] bg-[var(--fs-pitch)]">
      <ul className="mx-auto grid max-w-7xl gap-3 px-4 py-5 text-xs uppercase tracking-[0.12em] text-[var(--fs-muted)] sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {trust.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <FsIcon name="shield" className="h-4 w-4 text-[var(--fs-orange)]" />
            {item}
          </li>
        ))}
      </ul>
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-[var(--fs-line)] px-4 py-10 md:px-8 lg:grid-cols-4">
        <div>
          <p className="fs-display text-2xl">
            Forge<span className="text-[var(--fs-orange)]">Seal</span>
          </p>
          <p className="mt-3 text-sm leading-6 text-[var(--fs-muted)]">
            ForgeSeal is Central Ontario&apos;s premier pavement protection specialist. Delivering military-grade commercial
            and residential sealcoating, structural hot-pour crack repairs, precision line striping, and asphalt
            revitalization engineered for harsh Canadian freeze-thaw cycles.
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.12em] text-[var(--fs-orange)]">
            WSIB Registered Contractor
            <span className="mt-1 block text-[var(--fs-muted)]">Policy # ON-884291-C</span>
          </p>
        </div>
        <div>
          <h2 className="text-sm">Pavement Services</h2>
          <ul className="mt-3 grid gap-2 text-sm text-[var(--fs-muted)]">
            {footerServices.map((service) => (
              <li key={service}>
                <a href="#services">{service}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm">Regional Coverage</h2>
          <p className="mt-3 text-sm text-[var(--fs-muted)]">
            Serving municipalities across Simcoe County, York Region, and Dufferin County:
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm">
            {footerTowns.map((town) => (
              <li key={town}>
                <a href="#areas">{town}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] p-4">
          <h2 className="text-sm">Dispatch & Contact</h2>
          <a className="mt-3 block text-sm" href={FS_PHONE_TEL}>
            Direct Dispatch
            <span className="mt-1 block text-lg text-[var(--fs-orange)]">{FS_PHONE_DISPLAY}</span>
          </a>
          <a className="mt-3 block text-sm" href={`mailto:${FS_EMAIL}`}>
            Electronic Mail
            <span className="mt-1 block text-[var(--fs-muted)]">{FS_EMAIL}</span>
          </a>
          <a className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--fs-orange)]" href={FS_MAPS} target="_blank" rel="noreferrer">
            <FsIcon name="map" className="h-4 w-4" />
            Open Google Maps
          </a>
        </div>
      </div>
      <div className="border-t border-[var(--fs-line)] px-4 py-4 text-xs text-[var(--fs-dim)] md:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <p>© 2026 ForgeSeal Asphalt Maintenance. All rights reserved.</p>
          <p>Privacy Policy · Terms of Service · Sitemap</p>
        </div>
      </div>
    </footer>
  )
}
