import type { Metadata } from 'next'

import HmtGate from './components/HmtGate'
import HmtPage from './components/HmtPage'

export const metadata: Metadata = {
  title: 'Harry Mobile Tire Service 24/7 — Milton & GTA (Demo)',
  description:
    '24/7 mobile tire repair, seasonal swaps, battery boosts, and roadside rescue across Milton, Oakville, Burlington, and the Greater Toronto Area.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function HarryMobileTirePage() {
  return (
    <HmtGate>
      <HmtPage />
    </HmtGate>
  )
}
