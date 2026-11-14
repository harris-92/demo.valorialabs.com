import EmtAreas from './EmtAreas'
import EmtCompare from './EmtCompare'
import EmtCta from './EmtCta'
import EmtFaq from './EmtFaq'
import EmtFooter from './EmtFooter'
import EmtGallery from './EmtGallery'
import EmtHeader from './EmtHeader'
import EmtHero from './EmtHero'
import EmtMobileBar from './EmtMobileBar'
import EmtProtection from './EmtProtection'
import EmtReviews from './EmtReviews'
import EmtServices from './EmtServices'
import EmtTips from './EmtTips'
import EmtTrust from './EmtTrust'

export default function EmtPage() {
  return (
    <div id="top">
      <EmtHeader />
      <main>
        <EmtHero />
        <EmtTrust />
        <EmtServices />
        <EmtProtection />
        <EmtAreas />
        <EmtGallery />
        <EmtReviews />
        <EmtCompare />
        <EmtTips />
        <EmtFaq />
        <EmtCta />
      </main>
      <EmtFooter />
      <EmtMobileBar />
    </div>
  )
}
