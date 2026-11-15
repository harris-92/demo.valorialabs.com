type IconName = 'pin' | 'clock' | 'mail' | 'phone' | 'shield' | 'flame' | 'drop' | 'star' | 'check' | 'close' | 'map' | 'menu' | 'chevron'

const paths: Record<IconName, string> = {
  pin: 'M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 11h-5V7h2v4h3v2z',
  mail: 'M3 5h18v14H3V5zm9 7L4.5 7h15L12 12z',
  phone: 'M7 3h3l1.5 4-2 1.5a12 12 0 0 0 6 6L17 13l4 1.5V18a2 2 0 0 1-2 2A15 15 0 0 1 4 5a2 2 0 0 1 2-2z',
  shield: 'M12 2l8 3v6c0 5.25-3.4 8.9-8 11-4.6-2.1-8-5.75-8-11V5l8-3z',
  flame: 'M12 2s6 6 6 11a6 6 0 1 1-12 0c0-2 1-4 2-5 0 2 2 3 2 3s0-4 2-9z',
  drop: 'M12 2s7 8 7 12a7 7 0 1 1-14 0c0-4 7-12 7-12z',
  star: 'M12 2l2.7 6.4L21.5 9l-5 4.4L18 20l-6-3.6L6 20l1.5-6.6L2.5 9l6.8-.6L12 2z',
  check: 'M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z',
  close: 'M18.3 5.7L12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3 1.4 1.4z',
  map: 'M15 3l6 2v16l-6-2-6 2-6-2V3l6 2 6-2zm0 2.2v12.1l4 1.3V6.5l-4-1.3zM9 6.5L5 5.2v12.1l4 1.3V6.5z',
  menu: 'M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z',
  chevron: 'M7 10l5 5 5-5H7z',
}

export default function FsIcon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  )
}
