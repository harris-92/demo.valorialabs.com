import { stats } from '../lib/content'

export default function FsStats() {
  return (
    <section className="border-y border-[var(--fs-line)] bg-[var(--fs-pitch)]" aria-label="Company figures">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <li key={stat.label}>
            <p className="fs-display text-3xl text-[var(--fs-orange)]">{stat.value}</p>
            <p className="fs-display mt-1 text-sm">{stat.label}</p>
            <p className="mt-1 text-sm text-[var(--fs-muted)]">{stat.note}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
