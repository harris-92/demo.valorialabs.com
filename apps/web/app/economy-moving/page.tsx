import type { Metadata } from 'next'

import EmtGate from './components/EmtGate'
import EmtPage from './components/EmtPage'

export const metadata: Metadata = {
  title: 'Economy Moving and Trucking — Waxhaw & Charlotte (Demo)',
  description:
    'Careful residential, commercial, and interstate moving across Waxhaw, Charlotte, and the Carolinas. Owner Dan on every stage. Demo preview.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function EconomyMovingPage() {
  return (
    <EmtGate>
      <EmtPage />
    </EmtGate>
  )
}
