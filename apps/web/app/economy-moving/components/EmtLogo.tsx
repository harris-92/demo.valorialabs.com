type EmtLogoProps = {
  tone?: 'dark' | 'light'
}

export default function EmtLogo({ tone = 'dark' }: EmtLogoProps) {
  const title = tone === 'light' ? 'text-white' : 'text-[var(--emt-navy)]'
  const kicker = tone === 'light' ? 'text-[var(--emt-amber)]' : 'text-[var(--emt-amber-ink)]'

  return (
    <span className="flex items-center gap-2">
      <svg className="size-8 shrink-0" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="#0d2b4f" />
        <path d="M5.5 20.5V12.5h12.2v8" fill="none" stroke="#f59e0b" strokeWidth="1.7" />
        <path d="M17.7 15.2h4.1l3.2 3.1v2.2h-7.3" fill="none" stroke="#ffffff" strokeWidth="1.6" />
        <circle cx="10.2" cy="22.2" r="1.7" fill="#f59e0b" />
        <circle cx="21.4" cy="22.2" r="1.7" fill="#f59e0b" />
      </svg>
      <span className="flex min-w-0 flex-col leading-none">
        <span className={`emt-display text-base font-bold tracking-tight ${title}`}>Economy Moving</span>
        <span className={`mt-1 text-[10px] font-bold tracking-[0.16em] uppercase ${kicker}`}>& Trucking NC</span>
      </span>
    </span>
  )
}
