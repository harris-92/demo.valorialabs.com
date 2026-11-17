import { processSteps } from '../lib/content'

export default function BdnProcess() {
  return (
    <section id="process" className="bg-[var(--bdn-navy)] py-16 text-white lg:py-20">
      <div className="bdn-wrap">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-bold tracking-[0.08em] text-[var(--bdn-gold)] uppercase">How a job runs</p>
          <h2 className="bdn-h2 mt-2">From the first call to the day you open</h2>
        </div>
        <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item) => (
            <li key={item.step} className="bdn-lift rounded-[var(--bdn-radius)] bg-white/10 p-5 ring-1 ring-white/15">
              <p className="bdn-display text-sm font-bold text-[var(--bdn-gold)]">{item.step}</p>
              <h3 className="bdn-h3 mt-2 text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-[var(--bdn-on-dark-muted)]">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
