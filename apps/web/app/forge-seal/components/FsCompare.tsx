import { cheapPoints, forgePoints } from '../lib/content'
import FsIcon from './FsIcon'

export default function FsCompare() {
  return (
    <section id="difference" className="scroll-mt-32 mx-auto max-w-7xl px-4 py-16 md:px-8">
      <p className="text-xs font-semibold tracking-[0.16em] text-[var(--fs-orange)]">Why Quality Matters in Ontario</p>
      <h2 className="mt-3 max-w-4xl text-4xl">The ForgeSeal Standard vs. Cheap Spray Contractors</h2>
      <p className="mt-4 max-w-3xl text-[var(--fs-muted)]">
        Many fly-by-night operators use heavily watered-down coal tar emulsions that peel after the first winter frost. Here
        is why property managers and homeowners choose ForgeSeal:
      </p>
      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <article className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-line)] bg-[var(--fs-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--fs-dim)]">The Risk</p>
          <h3 className="mt-2 text-2xl">Cheap Spray Operators</h3>
          <ul className="mt-5 grid gap-4 text-sm leading-6 text-[var(--fs-muted)]">
            {cheapPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <FsIcon name="close" className="mt-1 h-4 w-4 shrink-0 text-[var(--fs-danger)]" />
                {point}
              </li>
            ))}
          </ul>
        </article>
        <article className="fs-card overflow-hidden rounded-3xl border border-[var(--fs-orange)] bg-[var(--fs-surface)] p-6">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--fs-orange)]">The Benchmark</p>
          <h3 className="mt-2 text-2xl">The ForgeSeal Standard</h3>
          <ul className="mt-5 grid gap-4 text-sm leading-6">
            {forgePoints.map((point) => (
              <li key={point} className="flex gap-3">
                <FsIcon name="check" className="mt-1 h-4 w-4 shrink-0 text-[var(--fs-green)]" />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
