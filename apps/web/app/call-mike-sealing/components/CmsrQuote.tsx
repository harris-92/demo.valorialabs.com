'use client'

import { useState, type FormEvent } from 'react'
import { BadgeCheck, Calculator, CheckCircle2, Send } from 'lucide-react'

const propertyTypes = [
  { value: 'commercial', label: 'Commercial Plaza' },
  { value: 'residential', label: 'Residential Driveway' },
  { value: 'industrial', label: 'Industrial / Condo' },
] as const

const serviceOptions = [
  { value: 'sealing', label: '100% Liquid Asphalt', defaultChecked: true },
  { value: 'crack-fill', label: 'Hot Pour Crack Infill', defaultChecked: true },
  { value: 'line-striping', label: 'Line Striping / AODA', defaultChecked: false },
  { value: 'catch-basin', label: 'Catch Basin Repair', defaultChecked: false },
  { value: 'curb-concrete', label: 'Concrete Curbs', defaultChecked: false },
  { value: 'repaving', label: 'Full Asphalt Repaving', defaultChecked: false },
] as const

const owners = [
  { name: 'Mike Jr', phone: '(905) 868-7525', href: 'tel:9058687525', area: 'Keswick' },
  { name: 'Mike Sr', phone: '(705) 988-1058', href: 'tel:7059881058', area: 'Barrie' },
  { name: 'Matt', phone: '(905) 392-1705', href: 'tel:9053921705', area: 'Newmarket' },
] as const

const assurances = [
  'Fixed-Price Quote with Zero Hidden Fees',
  '100% Oil-Base Product #1999 Guaranteed',
  '$5,000,000 Commercial Liability & WSIB Insured',
] as const

export default function CmsrQuote() {
  const [property, setProperty] = useState<(typeof propertyTypes)[number]['value']>('commercial')
  const [sent, setSent] = useState(false)

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <section id="quote" className="bg-[var(--cmsr-surface-container)] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-12 lg:px-12">
        <div className="flex flex-col justify-between gap-8 lg:col-span-5">
          <div className="space-y-4">
            <p className="cmsr-label flex items-center gap-2 text-[var(--cmsr-primary)]">
              <Calculator className="size-4" aria-hidden="true" />
              Zero-Obligation Estimate
            </p>
            <h2 className="cmsr-h2">Get Your Free Project Estimate Within 2 Hours</h2>
            <p className="leading-relaxed text-[var(--cmsr-on-surface-variant)]">
              Tell us about your property and scope requirements. Our estimating team uses high-resolution satellite imagery to assess square footage and provide a swift, transparent quote.
            </p>
            <ul className="space-y-3 pt-2">
              {assurances.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="size-5 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 rounded-xl bg-[var(--cmsr-surface-low)] p-6">
            <p className="cmsr-display text-sm font-semibold">Prefer to Speak Directly with an Owner?</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {owners.map((owner) => (
                <a key={owner.href} className="cmsr-node px-3 pt-5 pb-3 hover:bg-[var(--cmsr-surface-bright)]" href={owner.href}>
                  <span className="block text-xs font-bold text-[var(--cmsr-on-surface-variant)] uppercase">{owner.name}</span>
                  <span className="block text-xs font-bold text-[var(--cmsr-primary)]">{owner.phone}</span>
                  <span className="block text-[10px] text-[var(--cmsr-on-surface-variant)]">{owner.area}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="cmsr-card p-5 sm:p-8 lg:col-span-7">
          {sent ? (
            <div className="flex flex-col items-center gap-4 rounded-xl bg-[var(--cmsr-surface-container)] p-6 text-center sm:p-8">
              <div className="flex size-16 items-center justify-center rounded-full bg-[var(--cmsr-primary-container)] text-[var(--cmsr-on-primary-container)]">
                <CheckCircle2 className="size-9" aria-hidden="true" />
              </div>
              <h3 className="cmsr-h3">Quote Request Received!</h3>
              <p className="max-w-md text-[var(--cmsr-on-surface-variant)]">
                Thank you. Mike Jr or Matt is reviewing your property measurements and will contact you directly within 2 hours with an exact price estimate.
              </p>
              <p className="rounded bg-[var(--cmsr-surface-high)] p-3 font-mono text-xs text-[var(--cmsr-primary)]">
                Emergency? Call directly: Keswick (905) 868-7525 | Barrie (705) 988-1058 | Newmarket (905) 392-1705
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-5" onSubmit={onSubmit}>
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
                <p className="cmsr-display text-base font-semibold">Step 1 of 2: Project Specifications</p>
                <span className="font-mono text-xs font-bold text-[var(--cmsr-primary)] uppercase">Takes &lt; 60 Sec</span>
              </div>
              <fieldset className="space-y-2">
                <legend className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">1. Property Classification *</legend>
                <div className="grid gap-3 sm:grid-cols-3">
                  {propertyTypes.map((option) => {
                    const selected = property === option.value
                    return (
                      <label
                        key={option.value}
                        className={`cmsr-label flex cursor-pointer items-center gap-2 rounded p-3 text-[10px] ${
                          selected
                            ? 'bg-[var(--cmsr-primary-container)] text-[var(--cmsr-on-primary-container)]'
                            : 'bg-[var(--cmsr-surface-container)]'
                        }`}
                      >
                        <input
                          className="accent-[var(--cmsr-primary-container)]"
                          type="radio"
                          name="property_type"
                          value={option.value}
                          checked={selected}
                          onChange={() => setProperty(option.value)}
                        />
                        {option.label}
                      </label>
                    )
                  })}
                </div>
              </fieldset>
              <fieldset className="space-y-2">
                <legend className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">
                  2. Services Required (Select All That Apply) *
                </legend>
                <div className="grid gap-2 min-[420px]:grid-cols-2 sm:grid-cols-3">
                  {serviceOptions.map((option) => (
                    <label key={option.value} className="cmsr-label flex items-center gap-2 rounded bg-[var(--cmsr-surface-container)] p-2.5 text-[10px]">
                      <input className="accent-[var(--cmsr-primary)]" type="checkbox" name="services" value={option.value} defaultChecked={option.defaultChecked} />
                      {option.label}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-1">
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Approximate Size / Area</span>
                  <select className="cmsr-field" name="size" defaultValue="single">
                    <option value="single">Single / Double Car Driveway (&lt; 1,000 sq ft)</option>
                    <option value="estate">Large Estate Driveway (1,000 - 3,500 sq ft)</option>
                    <option value="small-lot">Small Commercial Lot (10 - 30 parking stalls)</option>
                    <option value="plaza">Medium Commercial Plaza (30 - 100 stalls)</option>
                    <option value="depot">Large Logistics / Industrial Depot (100+ stalls)</option>
                    <option value="unsure">Not Sure - Request On-Site Satellite Measurement</option>
                  </select>
                </label>
                <label className="space-y-1">
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Property Address *</span>
                  <input className="cmsr-field" name="address" required placeholder="e.g. 100 Vaughan Valley Blvd, Vaughan" />
                </label>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <label className="space-y-1">
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Full Name *</span>
                  <input className="cmsr-field" name="name" required placeholder="e.g. John Rossi" />
                </label>
                <label className="space-y-1">
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Phone Number *</span>
                  <input className="cmsr-field" name="phone" type="tel" required placeholder="(905) 555-0199" />
                </label>
                <label className="space-y-1">
                  <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Email Address *</span>
                  <input className="cmsr-field" name="email" type="email" required placeholder="john@company.com" />
                </label>
              </div>
              <label className="space-y-1">
                <span className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Project Notes / Specific Issues (Optional)</span>
                <textarea
                  id="cmsr-notes"
                  className="cmsr-field resize-y"
                  name="notes"
                  rows={3}
                  placeholder="Mention deep potholes, heavy truck turning areas, or timeline urgency..."
                />
              </label>
              <button className="cmsr-btn px-4 py-4" type="submit">
                Get My Free Quote Within 2 Hours
                <Send className="size-5" aria-hidden="true" />
              </button>
              <p className="text-center text-xs text-[var(--cmsr-on-surface-variant)]">
                Your information stays on this page. This demo does not send the form anywhere. Fully licensed & insured since 1991.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
