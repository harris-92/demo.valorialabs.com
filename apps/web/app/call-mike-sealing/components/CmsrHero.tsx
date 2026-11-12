import { ArrowRight, BadgeCheck, Images, Phone, ShieldCheck, Star } from 'lucide-react'

import { cmsrImages } from '../lib/images'
import CmsrImage from './CmsrImage'

const stats = [
  { value: '100%', label: 'Pure Oil-Base (No Dilution)' },
  { value: '33+', label: 'Years Operating Experience' },
  { value: '3', label: 'Dedicated Regional Hubs' },
  { value: '24-48h', label: 'Rapid Dispatch Turnaround' },
] as const

const dispatch = [
  {
    region: 'Keswick & York North',
    phone: '(905) 868-7525',
    href: 'tel:9058687525',
    owner: 'Mike Junior (Co-Owner)',
  },
  {
    region: 'Barrie & Simcoe County',
    phone: '(705) 988-1058',
    href: 'tel:7059881058',
    owner: 'Mike Senior (Founder)',
  },
  {
    region: 'Newmarket & Vaughan Central',
    phone: '(905) 392-1705',
    href: 'tel:9053921705',
    owner: 'Matt (Co-Owner)',
  },
] as const

export default function CmsrHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--cmsr-surface-lowest)]">
      <div className="pointer-events-none absolute inset-0">
        <CmsrImage
          src={cmsrImages.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_68%]"
        />
      </div>
      <div className="cmsr-hero-scrim pointer-events-none absolute inset-0" />
      <div className="cmsr-frame pointer-events-none absolute inset-0" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:py-16 lg:px-12 lg:py-20">
        <div className="flex flex-wrap items-center gap-2">
          <span className="cmsr-label inline-flex items-center gap-1.5 rounded bg-[color-mix(in_srgb,var(--cmsr-primary-container)_20%,transparent)] px-3 py-1 text-[var(--cmsr-primary)]">
            <BadgeCheck className="size-4" aria-hidden="true" />
            Est. 1991 • 30+ Years Family Owned
          </span>
          <span className="cmsr-label inline-flex items-center gap-1.5 rounded bg-[var(--cmsr-surface-high)] px-3 py-1">
            <ShieldCheck className="size-4 text-[var(--cmsr-primary)]" aria-hidden="true" />
            $5M Commercial Liability & WSIB Insured
          </span>
          <span className="cmsr-label inline-flex items-center gap-1.5 rounded bg-[var(--cmsr-surface-high)] px-3 py-1">
            <Star className="size-4 fill-[var(--cmsr-primary)] text-[var(--cmsr-primary)]" aria-hidden="true" />
            5-Star Rated Across Vaughan & York Region
          </span>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-8">
            <div className="space-y-3">
              <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
                <span className="inline-block h-0.5 w-8 bg-[var(--cmsr-primary-container)]" />
                York Region & Greater Toronto Area Authority
              </p>
              <h1 className="cmsr-h1">
                Vaughan & GTA&apos;s <span className="text-[var(--cmsr-primary-container)]">Premier Asphalt Sealing</span> & Pavement Repair Specialists
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-[var(--cmsr-on-surface-variant)] sm:text-lg">
              Father-and-sons team serving commercial plazas, municipal roadways, and premium residential driveways since 1991. We apply pure{' '}
              <strong className="text-[var(--cmsr-on-surface)]">100% Oil-Base Liquid Asphalt (Product #1999)</strong> and hot-pour rubberized crack infill — engineered to withstand brutal Canadian freeze-thaw cycles without diluting our formula.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a className="cmsr-btn px-6 py-4 sm:px-8" href="#estimator">
                Get Instant Free Quote
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <a className="cmsr-btn-secondary px-5 py-4" href="#showcase">
                <Images className="size-5 text-[var(--cmsr-primary)]" aria-hidden="true" />
                View Local Projects
              </a>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="cmsr-node flex flex-col gap-1 px-3 pt-5 pb-3">
                  <span className="cmsr-display text-2xl font-bold text-[var(--cmsr-primary)]">{stat.value}</span>
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4">
            <div className="cmsr-card relative flex flex-col gap-5 overflow-hidden p-5 sm:p-6">
              <div className="pointer-events-none absolute -right-8 -bottom-8 size-40 rounded-full bg-[color-mix(in_srgb,var(--cmsr-primary)_10%,transparent)] blur-2xl" />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="cmsr-display flex items-center gap-2 text-base font-semibold">
                  <span className="size-2.5 animate-ping rounded-full bg-[var(--cmsr-primary-container)]" />
                  Direct Dispatch
                </p>
                <span className="cmsr-label rounded bg-[var(--cmsr-surface-high)] px-2.5 py-0.5 text-[10px] text-[var(--cmsr-primary)]">
                  Live Ontario Lines
                </span>
              </div>
              <p className="text-sm text-[var(--cmsr-on-surface-variant)]">
                Call the owners directly for rapid emergency pavement assessments and commercial estimates:
              </p>
              <div className="space-y-3">
                {dispatch.map((line) => (
                  <a
                    key={line.href}
                    className="flex items-center justify-between gap-3 rounded bg-[var(--cmsr-surface-low)] p-3 hover:bg-[var(--cmsr-surface-high)]"
                    href={line.href}
                  >
                    <span className="min-w-0">
                      <span className="cmsr-label block text-[10px] text-[var(--cmsr-on-surface-variant)]">{line.region}</span>
                      <span className="cmsr-display block text-base font-bold text-[var(--cmsr-primary)]">{line.phone}</span>
                      <span className="block text-xs text-[var(--cmsr-on-surface-variant)]">{line.owner}</span>
                    </span>
                    <Phone className="size-6 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="cmsr-node flex items-center gap-4 px-4 pt-5 pb-4">
              <CmsrImage
                src={cmsrImages.plaza}
                alt="Commercial plaza parking lot in the GTA"
                width={64}
                height={64}
                className="size-16 shrink-0 rounded object-cover"
              />
              <div className="min-w-0">
                <p className="cmsr-label text-[10px] text-[var(--cmsr-primary)]">Municipal Case Study</p>
                <p className="cmsr-display truncate text-sm font-semibold">Metro Hall Accessibility Upgrades</p>
                <p className="text-xs text-[var(--cmsr-on-surface-variant)]">Completed by Call Mike Pavement Team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
