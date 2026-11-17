import BdnAreas from './BdnAreas'
import BdnEstimate from './BdnEstimate'
import BdnFaq from './BdnFaq'
import BdnFooter from './BdnFooter'
import BdnGallery from './BdnGallery'
import BdnHeader from './BdnHeader'
import BdnHero from './BdnHero'
import BdnIndustries from './BdnIndustries'
import BdnMarquee from './BdnMarquee'
import BdnMotion from './BdnMotion'
import BdnProcess from './BdnProcess'
import BdnProjects from './BdnProjects'
import BdnReviews from './BdnReviews'
import BdnServices from './BdnServices'
import BdnWays from './BdnWays'
import BdnWhy from './BdnWhy'

export default function BdnPage() {
  return (
    <div id="top">
      <BdnMotion />
      <BdnHeader />
      <main>
        <BdnHero />
        <BdnMarquee />
        <BdnWays />
        <BdnServices />
        <BdnIndustries />
        <BdnProjects />
        <BdnWhy />
        <BdnProcess />
        <BdnGallery />
        <BdnAreas />
        <BdnReviews />
        <BdnFaq />
        <BdnEstimate />
      </main>
      <BdnFooter />
    </div>
  )
}
