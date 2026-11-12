'use client'

import { useMemo, useState } from 'react'
import { ArrowRight, BadgeCheck, Gauge, Ruler, Scaling } from 'lucide-react'

type CrackSeverity = 'light' | 'moderate' | 'severe'

const presets = [
  { label: 'Residential Driveway', detail: '2-4 Cars (~1,200 sq ft)', sqft: 1200, commercial: false },
  { label: 'Estate Driveway', detail: '6+ Cars (~2,800 sq ft)', sqft: 2800, commercial: false },
  { label: 'Commercial Plaza', detail: '25-40 Stalls (~12,000 sq ft)', sqft: 12000, commercial: true },
  { label: 'Logistics & Fleet Yard', detail: 'Truck Depot (~32,000 sq ft)', sqft: 32000, commercial: true },
] as const

function contextFor(sqft: number): string {
  if (sqft < 1500) return 'Standard Suburban 2-4 Car Driveway'
  if (sqft < 4000) return 'Estate / Circular Long Driveway'
  if (sqft < 15000) return 'Commercial Plaza (~20-50 Stalls)'
  return 'Industrial Fleet Depot / Logistics Center'
}

function money(value: number): string {
  return Math.round(value).toLocaleString('en-CA')
}

export default function CmsrEstimator() {
  const [sqft, setSqft] = useState(1200)
  const [seal, setSeal] = useState(true)
  const [crack, setCrack] = useState(true)
  const [severity, setSeverity] = useState<CrackSeverity>('light')
  const [striping, setStriping] = useState(false)
  const [basin, setBasin] = useState(false)

  const estimate = useMemo(() => {
    const area = Math.min(50000, Math.max(500, sqft || 500))
    let low = 0
    let high = 0
    if (seal) {
      if (area <= 1500) {
        low += 160
        high += 210
      } else if (area <= 4000) {
        low += area * 0.14
        high += area * 0.18
      } else if (area <= 15000) {
        low += area * 0.1
        high += area * 0.14
      } else {
        low += area * 0.08
        high += area * 0.11
      }
    }
    if (crack) {
      if (severity === 'light') {
        low += 60
        high += 90
      } else if (severity === 'moderate') {
        low += 140
        high += 220
      } else {
        low += 280
        high += 420
      }
    }
    if (striping) {
      low += Math.max(120, area * 0.04)
      high += Math.max(180, area * 0.06)
    }
    if (basin) {
      low += 650
      high += 950
    }
    low = Math.max(low, 150)
    high = Math.max(high, 210)
    const lines: { label: string; note: string }[] = []
    if (seal) lines.push({ label: `100% Oil-Base Sealing (${area.toLocaleString('en-CA')} sq ft)`, note: 'Product #1999' })
    if (crack) lines.push({ label: `Hot-Pour Rubberized Crack Infill (${severity.toUpperCase()})`, note: '380°F Spec' })
    if (striping) lines.push({ label: 'Precision Line Striping & AODA Stencils', note: 'High-Traffic Paint' })
    if (basin) lines.push({ label: 'Catch Basin Collar Reconstruction', note: 'Structural Repair' })
    lines.push({ label: 'High-Velocity Power Prep & Oil-Stain Priming', note: 'Included' })
    return { low, high, lines, area, range: `$${money(low)} – $${money(high)}` }
  }, [basin, crack, seal, severity, sqft, striping])

  function applyPreset(nextSqft: number, commercial: boolean) {
    setSqft(nextSqft)
    if (commercial) setStriping(true)
  }

  function lockEstimate() {
    const notes = document.querySelector<HTMLTextAreaElement>('#cmsr-notes')
    if (notes) {
      notes.value = `Pre-calculated estimate: ${estimate.area.toLocaleString('en-CA')} sq ft (${estimate.range}). Please confirm on-site audit schedule.`
    }
  }

  return (
    <section id="estimator" className="border-y border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-lowest)] py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 lg:px-12">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl space-y-2">
            <p className="cmsr-label inline-flex items-center gap-2 text-[var(--cmsr-primary)]">
              <Gauge className="size-4" aria-hidden="true" />
              Real-Time Cost Transparency
            </p>
            <h2 className="cmsr-h2">Interactive Asphalt Square Footage Estimator</h2>
            <p className="text-[var(--cmsr-on-surface-variant)]">
              Select your property type, adjust square footage, and choose repair specifications for instant Ontario cost transparency.
            </p>
          </div>
          <p className="inline-flex shrink-0 items-center gap-2 rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-container)] px-3.5 py-2 text-xs text-[var(--cmsr-on-surface-variant)]">
            <Ruler className="size-4 text-[var(--cmsr-primary)]" aria-hidden="true" />
            100% Commercial Grade Spec • Product #1999
          </p>
        </div>
        <div className="space-y-2">
          <p className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Select Quick Property Preset</p>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {presets.map((preset) => (
              <button
                key={preset.label}
                type="button"
                className="cmsr-node px-3 pt-5 pb-3 text-left"
                onClick={() => applyPreset(preset.sqft, preset.commercial)}
              >
                <span className="cmsr-label block text-[10px] text-[var(--cmsr-primary)]">{preset.label}</span>
                <span className="text-xs text-[var(--cmsr-on-surface-variant)]">{preset.detail}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="cmsr-card flex flex-col gap-6 p-5 sm:p-8 lg:col-span-7">
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="cmsr-label flex items-center gap-2" htmlFor="cmsr-sqft">
                  <Scaling className="size-5 text-[var(--cmsr-primary)]" aria-hidden="true" />
                  Pavement Area (Square Feet)
                </label>
                <div className="flex items-center gap-1.5 rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-lowest)] px-3 py-1.5">
                  <input
                    id="cmsr-sqft"
                    className="w-20 bg-transparent text-right text-lg font-bold text-[var(--cmsr-primary)] outline-none"
                    type="number"
                    min={500}
                    max={50000}
                    step={100}
                    value={sqft}
                    onChange={(event) => setSqft(Number(event.target.value))}
                  />
                  <span className="font-mono text-xs text-[var(--cmsr-on-surface-variant)]">SQ FT</span>
                </div>
              </div>
              <input
                className="h-2 w-full cursor-pointer accent-[var(--cmsr-primary-container)]"
                type="range"
                min={500}
                max={50000}
                step={100}
                value={Math.min(50000, Math.max(500, sqft || 500))}
                aria-label="Pavement area"
                onChange={(event) => setSqft(Number(event.target.value))}
              />
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[var(--cmsr-on-surface-variant)]">
                <span>500 sq ft (Compact)</span>
                <span className="font-bold text-[var(--cmsr-primary)] uppercase">{contextFor(estimate.area)}</span>
                <span>50,000 sq ft (Industrial)</span>
              </div>
            </div>
            <fieldset className="space-y-3 border-t border-[var(--cmsr-surface-high)] pt-4">
              <legend className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Select Treatment Specifications</legend>
              <label className="flex items-start justify-between gap-4 rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-low)] p-3.5">
                <span className="flex items-start gap-3">
                  <input className="mt-1 accent-[var(--cmsr-primary)]" type="checkbox" checked={seal} onChange={(event) => setSeal(event.target.checked)} />
                  <span>
                    <span className="cmsr-display block text-sm font-semibold">100% Oil-Base Liquid Asphalt (#1999)</span>
                    <span className="text-xs text-[var(--cmsr-on-surface-variant)]">Rehydrates dried bitumen aggregate, UV barrier, rich jet-black finish.</span>
                  </span>
                </span>
                <span className="font-mono text-xs whitespace-nowrap text-[var(--cmsr-primary)]">Base Spec</span>
              </label>
              <div className="rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-low)] p-3.5">
                <label className="flex items-start gap-3">
                  <input className="mt-1 accent-[var(--cmsr-primary)]" type="checkbox" checked={crack} onChange={(event) => setCrack(event.target.checked)} />
                  <span>
                    <span className="cmsr-display block text-sm font-semibold">Municipal Hot-Pour Crack Infill</span>
                    <span className="text-xs text-[var(--cmsr-on-surface-variant)]">380°F vulcanized rubberized infill halts water infiltration into sub-base.</span>
                  </span>
                </label>
                <div className={`mt-3 grid gap-2 pl-0 sm:grid-cols-3 sm:pl-7 ${crack ? '' : 'pointer-events-none opacity-40'}`}>
                  {(['light', 'moderate', 'severe'] as const).map((level) => (
                    <label key={level} className="cmsr-label flex items-center gap-2 rounded bg-[var(--cmsr-surface-container)] p-2 text-[10px]">
                      <input
                        type="radio"
                        name="crack_severity"
                        value={level}
                        checked={severity === level}
                        disabled={!crack}
                        onChange={() => setSeverity(level)}
                      />
                      {level === 'light' ? 'Light (<50 ft)' : level === 'moderate' ? 'Moderate' : 'Severe'}
                    </label>
                  ))}
                </div>
              </div>
              <label className="flex items-start justify-between gap-4 rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-low)] p-3.5">
                <span className="flex items-start gap-3">
                  <input className="mt-1 accent-[var(--cmsr-primary)]" type="checkbox" checked={striping} onChange={(event) => setStriping(event.target.checked)} />
                  <span>
                    <span className="cmsr-display block text-sm font-semibold">Precision Line Striping & AODA Stall Markings</span>
                    <span className="text-xs text-[var(--cmsr-on-surface-variant)]">High-solids traffic paint, stall boundaries, handicap stencils, stop bars.</span>
                  </span>
                </span>
                <span className="font-mono text-xs whitespace-nowrap text-[var(--cmsr-on-surface-variant)]">+$0.05/sq ft</span>
              </label>
              <label className="flex items-start justify-between gap-4 rounded border border-[var(--cmsr-surface-high)] bg-[var(--cmsr-surface-low)] p-3.5">
                <span className="flex items-start gap-3">
                  <input className="mt-1 accent-[var(--cmsr-primary)]" type="checkbox" checked={basin} onChange={(event) => setBasin(event.target.checked)} />
                  <span>
                    <span className="cmsr-display block text-sm font-semibold">Catch Basin Collar Excavation & Concrete Rebuild</span>
                    <span className="text-xs text-[var(--cmsr-on-surface-variant)]">Collapsing perimeter masonry repair, ring mortar, hot-mix apron tie-in.</span>
                  </span>
                </span>
                <span className="font-mono text-xs whitespace-nowrap text-[var(--cmsr-on-surface-variant)]">+$650 / basin</span>
              </label>
            </fieldset>
          </div>
          <aside className="cmsr-card relative flex flex-col gap-6 overflow-hidden border-[color-mix(in_srgb,var(--cmsr-primary-container)_30%,transparent)] p-5 sm:p-8 lg:col-span-5">
            <div className="flex items-center justify-between gap-3 border-b border-[var(--cmsr-surface-high)] pb-4">
              <p className="cmsr-display text-base font-semibold">Estimated Investment</p>
              <span className="cmsr-label rounded bg-[var(--cmsr-primary-container)] px-2.5 py-0.5 text-[10px] text-[var(--cmsr-on-primary-container)]">CAD Pricing</span>
            </div>
            <div>
              <p className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Anticipated Cost Range (Tax Incl. Scope)</p>
              <p className="cmsr-display mt-1 text-[clamp(1.75rem,6vw,2.75rem)] leading-none font-extrabold text-[var(--cmsr-primary)]">{estimate.range}</p>
              <p className="mt-2 text-xs text-[var(--cmsr-on-surface-variant)]">Exact quote confirmed via satellite imagery & site visit within 2 hours.</p>
            </div>
            <div className="space-y-2 border-t border-[var(--cmsr-surface-high)] pt-4">
              <p className="cmsr-label text-[10px] text-[var(--cmsr-on-surface-variant)]">Included in This Estimate:</p>
              {estimate.lines.map((line) => (
                <div key={line.label} className="flex items-center justify-between gap-3 rounded bg-[var(--cmsr-surface-container)] p-2 text-xs">
                  <span className="min-w-0">• {line.label}</span>
                  <span className="shrink-0 font-mono text-[var(--cmsr-primary)]">{line.note}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 pt-2">
              <a className="cmsr-btn w-full px-4 py-4 text-center" href="#quote" onClick={lockEstimate}>
                Lock In Estimate & Pre-Fill Booking
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
              <p className="flex items-center justify-center gap-2 text-center text-xs text-[var(--cmsr-on-surface-variant)]">
                <BadgeCheck className="size-4 text-[var(--cmsr-primary)]" aria-hidden="true" />
                No commitment • Guaranteed 100% pure petroleum liquid
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
