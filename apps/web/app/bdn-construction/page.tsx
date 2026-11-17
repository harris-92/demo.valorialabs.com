import type { Metadata } from 'next'

import BdnGate from './components/BdnGate'
import BdnPage from './components/BdnPage'

export const metadata: Metadata = {
  title: 'BDN Construction — Oakville (Demo)',
  description:
    'ICI construction, retail and restaurant fit-outs, and commercial renovations across Oakville and the GTA. Demo preview of the BDN Construction homepage.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function BdnConstructionPage() {
  return (
    <BdnGate>
      <BdnPage />
    </BdnGate>
  )
}
