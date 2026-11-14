import { tips } from '../lib/content'

export default function EmtTips() {
  return (
    <section id="moving-tips" className="bg-[var(--emt-surface-low)] px-4 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <p className="emt-kicker">Before Move Day</p>
        <h2 className="emt-h2 mt-2">Moving Checklist & Tips</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          {tips.map((tip, index) => (
            <li key={tip} className="emt-card emt-hover flex gap-4 p-5">
              <span className="emt-display flex size-9 shrink-0 items-center justify-center rounded-full bg-[var(--emt-navy)] text-sm font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-[var(--emt-ink)]">{tip}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
