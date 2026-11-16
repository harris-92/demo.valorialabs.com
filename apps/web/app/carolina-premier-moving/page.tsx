import type { Metadata } from 'next'

import CpmGate from './components/CpmGate'
import CpmPage from './components/CpmPage'

export const metadata: Metadata = {
  title: 'Carolina Premier Moving & Hauling — Charlotte NC (Demo)',
  description:
    'Local moving, packing, labor-only help, and junk hauling across Charlotte and Matthews. Demo preview of the Carolina Premier homepage.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CarolinaPremierPage() {
  return (
    <CpmGate>
      <CpmPage />
    </CpmGate>
  )
}
