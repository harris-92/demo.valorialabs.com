export default function HmtLogo() {
  return (
    <span className="flex min-w-0 items-center gap-2.5">
      <svg aria-hidden="true" className="size-9 shrink-0" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#f97316" />
        <circle cx="20" cy="20" r="11" fill="none" stroke="#341100" strokeWidth="3" />
        <circle cx="20" cy="20" r="4" fill="#341100" />
        <path d="M20 4v5M20 31v5M4 20h5M31 20h5M8.5 8.5l3.5 3.5M28 28l3.5 3.5M31.5 8.5 28 12M12 28l-3.5 3.5" stroke="#341100" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span className="hmt-logo-copy min-w-0 leading-tight">
        <span className="hmt-display block truncate text-[0.95rem] font-extrabold tracking-tight text-[var(--hmt-on)]">
          HARRY MOBILE TIRE
        </span>
        <span className="hmt-mono block truncate text-[0.62rem] text-[var(--hmt-primary)]">
          24/7 Roadside Rescue • Milton
        </span>
      </span>
    </span>
  )
}
