import { FS_MAPS, FS_PHONE_TEL, regions } from '../lib/content'
import FsIcon from './FsIcon'

export default function FsAreas() {
  return (
    <section id="areas" className="scroll-mt-32 bg-[var(--fs-pitch)] px-4 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Regional Dispatch Coverage</p>
        <h2 className="mt-3 text-4xl">Serving Central Ontario Communities</h2>
        <p className="mt-4 flex items-center gap-2 text-sm text-[var(--fs-muted)]">
          <FsIcon name="pin" className="h-4 w-4 text-[var(--fs-orange)]" />
          Free On-Site Pavement Measurements Anywhere in Zone
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {regions.map((region) => (
            <article key={region.name} className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-5">
              <h3 className="text-2xl">{region.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[var(--fs-orange)]">{region.role}</p>
              <p className="mt-3 text-sm text-[var(--fs-muted)]">{region.note}</p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                {region.towns.map((town) => (
                  <li key={town}>{town}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-5 flex flex-col gap-4 fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="fs-display flex items-center gap-2 text-lg">
              <FsIcon name="map" className="h-5 w-5 text-[var(--fs-orange)]" />
              ForgeSeal Asphalt Maintenance • Barrie HQ
            </p>
            <p className="mt-2 text-sm text-[var(--fs-muted)]">
              Verified Google Business Profile • Commercial dispatch serving Simcoe, York & Dufferin
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="fs-btn inline-flex" href={FS_PHONE_TEL}>
              Dispatch Mobile Crew
            </a>
            <a className="fs-btn fs-btn--line inline-flex" href={FS_MAPS} target="_blank" rel="noreferrer">
              Open Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
