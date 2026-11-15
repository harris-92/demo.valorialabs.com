import type { Metadata } from 'next'

import FsGate from './components/FsGate'
import FsPage from './components/FsPage'

export const metadata: Metadata = {
  title: 'ForgeSeal Asphalt Maintenance — Simcoe, York and Dufferin (Demo)',
  description:
    'Commercial and residential asphalt maintenance across Simcoe, York, Dufferin and surrounding towns. Demo preview.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ForgeSealPage() {
  return (
    <FsGate>
      <FsPage />
    </FsGate>
  )
}
