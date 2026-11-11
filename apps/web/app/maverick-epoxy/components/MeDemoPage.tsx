'use client'

import MeAbout from './MeAbout'
import MeContact from './MeContact'
import MeFaq from './MeFaq'
import MeFooter from './MeFooter'
import MeHero from './MeHero'
import MeHeroNav from './MeHeroNav'
import MeGallery from './MeGallery'
import MeLocations from './MeLocations'
import MeOtherServices from './MeOtherServices'
import MeReviews from './MeReviews'

export default function MeDemoPage() {
  return (
    <>
      <MeHeroNav />
      <main className="relative w-full overflow-x-clip">
        <MeHero />
        <MeAbout />
        <MeOtherServices />
        <MeLocations />
        <MeGallery />
        <MeReviews />
        <MeFaq />
        <MeContact />
      </main>
      <MeFooter />
    </>
  )
}
