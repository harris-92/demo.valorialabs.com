import { BadgeCheck, Hammer, MapPin, Phone, Share2, Shield, Star } from 'lucide-react'

import { cmsrImages } from '../lib/images'
import CmsrImage from './CmsrImage'

const services = [
  '100% Liquid Asphalt Sealing',
  'Hot-Pour Rubberized Crack Repair',
  'Pothole Patching & Ramp Repairs',
  'Commercial Line Striping & Stenciling',
  'Infrared Seamless Asphalt Restoration',
  'Catch Basin & Concrete Berm Reinforcement',
] as const

export default function CmsrFooter() {
  return (
    <footer className="border-t border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-lowest)]">
      <section className="border-b border-[var(--cmsr-surface-high)] py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 md:flex-row md:items-center lg:px-12">
          <div className="flex items-center gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded bg-[color-mix(in_srgb,var(--cmsr-primary-container)_20%,transparent)] text-[var(--cmsr-primary)]">
              <Shield className="size-7" aria-hidden="true" />
            </div>
            <div>
              <p className="cmsr-display text-base font-semibold">Call Mike Sealing & Pavement Repairs</p>
              <p className="text-sm text-[var(--cmsr-on-surface-variant)]">
                Serving Vaughan, Richmond Hill, Markham, Newmarket, Barrie & the Entire GTA Since 1991.
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a className="cmsr-btn px-6 py-3" href="#quote">
              Schedule Free Audit
            </a>
            <a className="cmsr-btn-secondary px-5 py-3" href="tel:9053921705">
              <Phone className="size-4 text-[var(--cmsr-primary)]" aria-hidden="true" />
              (905) 392-1705
            </a>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CmsrImage src={cmsrImages.logo} alt="Call Mike Sealing Logo" width={120} height={45} className="h-8 w-auto object-contain" />
              <span className="cmsr-display text-base font-semibold">Call Mike</span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--cmsr-on-surface-variant)]">
              Over 30 years of family-owned asphalt heritage since 1991. Commercial & residential 100% Liquid Asphalt specialist, hot-pour rubberized crack filling, line striping, and structural pavement rejuvenation across Ontario.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="cmsr-label rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-container)] px-2 py-1 text-[10px] text-[var(--cmsr-primary)]">
                100% Liquid Asphalt
              </span>
              <span className="cmsr-label rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-container)] px-2 py-1 text-[10px]">
                Est. 1991
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="cmsr-display flex items-center gap-2 text-base font-semibold">
              <Hammer className="size-5 text-[var(--cmsr-primary)]" aria-hidden="true" />
              Services
            </h2>
            <ul className="space-y-2 text-sm text-[var(--cmsr-on-surface-variant)]">
              {services.map((service) => (
                <li key={service}>
                  <a className="hover:text-[var(--cmsr-primary)]" href="#services">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <h2 className="cmsr-display flex items-center gap-2 text-base font-semibold">
              <MapPin className="size-5 text-[var(--cmsr-primary)]" aria-hidden="true" />
              Regional Service Areas
            </h2>
            <div className="space-y-2 text-sm text-[var(--cmsr-on-surface-variant)]">
              <p className="font-bold text-[var(--cmsr-on-surface)]">Vaughan Regional Hub:</p>
              <p className="text-xs">Woodbridge, Maple, Thornhill, Kleinburg, Concord</p>
              <p className="pt-1 font-bold text-[var(--cmsr-on-surface)]">Greater Toronto & Simcoe:</p>
              <p className="text-xs">
                Richmond Hill, Markham, Newmarket, Aurora, King City, Barrie, Innisfil, Keswick, Georgina, Stouffville, Bradford, and the entire GTA.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="cmsr-display flex items-center gap-2 text-base font-semibold">
              <Shield className="size-5 text-[var(--cmsr-primary)]" aria-hidden="true" />
              Credentials & Connect
            </h2>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <BadgeCheck className="size-4 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                $5M Commercial Liability & WSIB Insured
              </li>
              <li className="flex items-center gap-2">
                <BadgeCheck className="size-4 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                Fully Licensed Municipal Contractor
              </li>
              <li className="flex items-center gap-2">
                <Star className="size-4 shrink-0 fill-[var(--cmsr-primary)] text-[var(--cmsr-primary)]" aria-hidden="true" />
                5-Star Rated Across GTA Platforms
              </li>
            </ul>
            <a
              className="cmsr-label inline-flex items-center gap-2 rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-container)] px-4 py-2 text-[10px] hover:text-[var(--cmsr-primary)]"
              href="https://facebook.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Share2 className="size-4" aria-hidden="true" />
              Follow Us on Facebook
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--cmsr-surface-high)] pt-8 text-center text-sm text-[var(--cmsr-on-surface-variant)] md:flex-row md:text-left">
          <p>© 2026 Call Mike Sealing & Pavement Repairs. All rights reserved. 30+ Years Family Owned & Operated.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a className="hover:text-[var(--cmsr-primary)]" href="#top">
              Privacy Policy
            </a>
            <a className="hover:text-[var(--cmsr-primary)]" href="#top">
              Terms of Service
            </a>
            <a className="hover:text-[var(--cmsr-primary)]" href="#top">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
