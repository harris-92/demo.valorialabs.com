import CpmAreas from './CpmAreas'
import CpmEstimate from './CpmEstimate'
import CpmFaq from './CpmFaq'
import CpmFooter from './CpmFooter'
import CpmGallery from './CpmGallery'
import CpmHeader from './CpmHeader'
import CpmHero from './CpmHero'
import CpmMotion from './CpmMotion'
import CpmOffer from './CpmOffer'
import CpmReviews from './CpmReviews'
import CpmServices from './CpmServices'
import CpmWays from './CpmWays'
import CpmWhy from './CpmWhy'

export default function CpmPage() {
  return (
    <div id="top">
      <CpmMotion />
      <CpmHeader />
      <main>
        <CpmHero />
        <CpmWays />
        <CpmServices />
        <CpmOffer />
        <CpmWhy />
        <CpmGallery />
        <CpmAreas />
        <CpmReviews />
        <CpmFaq />
        <CpmEstimate />
      </main>
      <CpmFooter />
    </div>
  )
}
