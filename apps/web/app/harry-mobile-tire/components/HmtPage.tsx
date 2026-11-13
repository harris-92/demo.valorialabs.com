import HmtAreas from './HmtAreas'
import HmtCta from './HmtCta'
import HmtFaq from './HmtFaq'
import HmtFooter from './HmtFooter'
import HmtGallery from './HmtGallery'
import HmtHeader from './HmtHeader'
import HmtHero from './HmtHero'
import HmtMobileBar from './HmtMobileBar'
import HmtModes from './HmtModes'
import HmtProcess from './HmtProcess'
import HmtReviews from './HmtReviews'
import HmtScrollMotion from './HmtScrollMotion'
import HmtServices from './HmtServices'

export default function HmtPage() {
  return (
    <div id="top" className="hmt-page pb-24 md:pb-0">
      <HmtScrollMotion />
      <HmtHeader />
      <main>
        <HmtHero />
        <HmtModes />
        <HmtServices />
        <HmtProcess />
        <HmtAreas />
        <HmtGallery />
        <HmtReviews />
        <HmtFaq />
        <HmtCta />
      </main>
      <HmtFooter />
      <HmtMobileBar />
    </div>
  )
}
