import type { Metadata } from 'next'

import ApGate from './components/ApGate'
import ApPage from './components/ApPage'

export const metadata: Metadata = {
  title: 'Andrade Painting LLC — Charlotte NC (Demo)',
  description:
    'Residential and commercial painting across Charlotte and Mecklenburg County. Demo preview of the Andrade Painting homepage.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function AndradePaintingPage() {
  return (
    <ApGate>
      <ApPage />
    </ApGate>
  )
}
