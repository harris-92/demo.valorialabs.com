import CmsrAreas from './CmsrAreas'
import CmsrClients from './CmsrClients'
import CmsrCompare from './CmsrCompare'
import CmsrEstimator from './CmsrEstimator'
import CmsrFooter from './CmsrFooter'
import CmsrGallery from './CmsrGallery'
import CmsrHeader from './CmsrHeader'
import CmsrHero from './CmsrHero'
import CmsrLocations from './CmsrLocations'
import CmsrProcess from './CmsrProcess'
import CmsrQuote from './CmsrQuote'
import CmsrReviews from './CmsrReviews'
import CmsrServices from './CmsrServices'

export default function CmsrPage() {
  return (
    <div id="top">
      <CmsrHeader />
      <main>
        <CmsrHero />
        <CmsrCompare />
        <CmsrServices />
        <CmsrLocations />
        <CmsrProcess />
        <CmsrGallery />
        <CmsrClients />
        <CmsrAreas />
        <CmsrReviews />
        <CmsrEstimator />
        <CmsrQuote />
      </main>
      <CmsrFooter />
    </div>
  )
}
