import type { Metadata } from 'next'

import MeDemoPage from './components/MeDemoPage'

export const metadata: Metadata = {
  title: 'Maverick Epoxy — Epoxy Flooring in Robbins, NC (Demo)',
  description:
    'Epoxy garage floor coatings in Robbins, North Carolina. Flake, metallic, quartz, and solid-color floors for homes and businesses in Carthage, Pinehurst, Southern Pines, Aberdeen, Vass, and Cameron.',
  keywords: [
    'epoxy flooring Robbins NC',
    'garage floor coating Robbins',
    'epoxy garage floor Moore County',
    'flake epoxy Pinehurst NC',
    'metallic epoxy Southern Pines',
    'quartz floor coating Carthage NC',
    'concrete coating Aberdeen NC',
  ],
  robots: {
    index: false,
    follow: false,
  },
}

export default function MaverickEpoxyPage() {
  return <MeDemoPage />
}
