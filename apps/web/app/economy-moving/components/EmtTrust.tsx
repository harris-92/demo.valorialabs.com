const stats = [
  { value: '5.0', label: 'Star Rating', detail: 'Google & Thumbtack Top Pro' },
  { value: '5,000+', label: 'Successful Moves', detail: 'Waxhaw, Charlotte & Beyond' },
  { value: '99.8%', label: 'Damage-Free Rate', detail: 'Custom blanket padding protocol' },
  { value: '100%', label: 'Owner Involved', detail: 'Direct accountability with Dan' },
] as const

export default function EmtTrust() {
  return (
    <section className="bg-[var(--emt-navy-dark)] py-8 text-white" aria-label="Trust figures">
      <ul className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((item) => (
          <li key={item.label}>
            <p className="emt-display text-3xl font-extrabold text-[var(--emt-amber)]">{item.value}</p>
            <p className="mt-1 font-bold">{item.label}</p>
            <p className="text-sm text-[var(--emt-on-navy-muted)]">{item.detail}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
