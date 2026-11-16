import SdAreas from './SdAreas'
import SdCallBar from './SdCallBar'
import SdEstimate from './SdEstimate'
import SdFaq from './SdFaq'
import SdFooter from './SdFooter'
import SdGallery from './SdGallery'
import SdHeader from './SdHeader'
import SdHero from './SdHero'
import SdMotion from './SdMotion'
import SdOffer from './SdOffer'
import SdReviews from './SdReviews'
import SdServices from './SdServices'
import SdWays from './SdWays'
import SdWhy from './SdWhy'

export default function SdPage() {
  return (
    <div id="top" className="sd-shell">
      <SdMotion />
      <SdHeader />
      <main>
        <SdHero />
        <SdWays />
        <SdServices />
        <SdOffer />
        <SdWhy />
        <SdGallery />
        <SdAreas />
        <SdReviews />
        <SdFaq />
        <SdEstimate />
      </main>
      <SdFooter />
      <SdCallBar />
    </div>
  )
}
