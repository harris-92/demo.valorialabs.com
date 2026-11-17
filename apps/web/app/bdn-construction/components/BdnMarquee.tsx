import { partners } from '../lib/content'

function LogoRow({ hidden }: { hidden?: boolean }) {
  return (
    <ul className={`flex items-center ${hidden ? 'bdn-marquee-clone' : ''}`} aria-hidden={hidden || undefined}>
      {partners.map((partner) => (
        <li key={`${hidden ? 'clone-' : ''}${partner.name}`} className="px-3">
          <div className="flex h-20 w-44 items-center justify-center rounded-2xl bg-white px-4 shadow-sm">
            {/* Partner marks are raster logos with uneven padding; img keeps them from being cropped by the image optimizer. */}
            <img src={partner.src} alt={hidden ? '' : partner.name} className="max-h-12 w-auto max-w-full object-contain" />
          </div>
        </li>
      ))}
    </ul>
  )
}

export default function BdnMarquee() {
  return (
    <section className="border-y border-[var(--bdn-line)] bg-[var(--bdn-bg)] py-8" aria-label="Companies we have built for">
      <div className="bdn-wrap mb-5">
        <p className="bdn-kicker">Built for these brands</p>
        <h2 className="bdn-h3 mt-1">Companies we have worked with</h2>
      </div>
      <div className="bdn-marquee">
        <div className="bdn-marquee-track">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  )
}
