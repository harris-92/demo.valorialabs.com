import FsAreas from './FsAreas'
import FsCompare from './FsCompare'
import FsEstimate from './FsEstimate'
import FsFaq from './FsFaq'
import FsFooter from './FsFooter'
import FsHeader from './FsHeader'
import FsHero from './FsHero'
import FsMotion from './FsMotion'
import FsReviews from './FsReviews'
import FsServices from './FsServices'
import FsShowcase from './FsShowcase'
import FsStats from './FsStats'

export default function FsPage() {
  return (
    <div id="top">
      <FsMotion />
      <FsHeader />
      <main>
        <FsHero />
        <FsStats />
        <FsServices />
        <FsShowcase />
        <FsCompare />
        <FsAreas />
        <FsReviews />
        <FsFaq />
        <FsEstimate />
      </main>
      <FsFooter />
    </div>
  )
}
