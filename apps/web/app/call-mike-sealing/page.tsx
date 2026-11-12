import type { Metadata } from 'next'

import CmsrGate from './components/CmsrGate'
import CmsrPage from './components/CmsrPage'

export const metadata: Metadata = {
  title: 'Call Mike Sealing & Pavement Repairs — Vaughan & GTA (Demo)',
  description:
    'Family-owned asphalt sealing, hot-pour crack repair, line striping, and pavement reconstruction across Vaughan, York Region, Simcoe, and the Greater Toronto Area since 1991.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CallMikeSealingPage() {
  return (
    <CmsrGate>
      <CmsrPage />
    </CmsrGate>
  )
}
