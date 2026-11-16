import ApAreas from './ApAreas'
import ApEstimate from './ApEstimate'
import ApFaq from './ApFaq'
import ApFooter from './ApFooter'
import ApGallery from './ApGallery'
import ApHeader from './ApHeader'
import ApMotion from './ApMotion'
import ApHero from './ApHero'
import ApOffer from './ApOffer'
import ApReviews from './ApReviews'
import ApServices from './ApServices'
import ApWays from './ApWays'
import ApWhy from './ApWhy'

export default function ApPage() {
  return (
    <div id="top">
      <ApMotion />
      <ApHeader />
      <main>
        <ApHero />
        <ApWays />
        <ApServices />
        <ApOffer />
        <ApWhy />
        <ApGallery />
        <ApAreas />
        <ApReviews />
        <ApFaq />
        <ApEstimate />
      </main>
      <ApFooter />
    </div>
  )
}
