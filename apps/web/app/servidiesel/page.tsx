import type { Metadata } from 'next'

import SdGate from './components/SdGate'
import SdPage from './components/SdPage'

export const metadata: Metadata = {
  title: 'Servidiesel Inc — Barrie ON (Demo)',
  description:
    'Mobile mechanic, heavy diesel, truck, excavator, and hydraulic repair in Barrie. Demo preview of the Servidiesel homepage.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ServidieselPage() {
  return (
    <SdGate>
      <SdPage />
    </SdGate>
  )
}
