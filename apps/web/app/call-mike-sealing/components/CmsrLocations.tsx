import { MapPin } from 'lucide-react'

const areas = ['Woodbridge', 'Maple', 'Thornhill', 'Kleinburg', 'Concord', 'Vaughan Mills'] as const

const mapsUrl =
  'https://www.google.com/maps/place/Call+Mike+Sealing+%26+Pavement+Repairs/data=!4m7!3m6!1s0x882ad1a08aaa5853:0x235f759d830114!8m2!3d45.0088186!4d-80.9719983!16s%2Fg%2F11jfq7gg0s!19sChIJU1iqiqDRKogRFAGDnXVfIwA?authuser=0&hl=en&g_ep=EgoyMDI2MTAxOS4wIJJjKgBIAVAD&rclk=1'

const mapEmbed = 'https://maps.google.com/maps?q=45.0088186,-80.9719983&z=11&hl=en&output=embed'

export default function CmsrLocations() {
  return (
    <section id="locations" className="bg-[var(--cmsr-surface-container)] py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-stretch gap-8 px-4 lg:grid-cols-12 lg:gap-10 lg:px-12">
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="space-y-3">
            <p className="cmsr-label text-[var(--cmsr-primary)]">Vaughan and nearby</p>
            <h2 className="cmsr-h2">We Offer the Best Pavement Services Across Canada</h2>
            <p className="text-sm leading-relaxed text-[var(--cmsr-on-surface-variant)]">
              Vaughan is the main yard. Woodbridge, Maple, Thornhill, Kleinburg, Concord, and Vaughan Mills are the nearby service area.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((name) => (
              <li
                key={name}
                className="cmsr-node flex items-start gap-2.5 px-3 pt-5 pb-3"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-[var(--cmsr-on-surface)]">{name}</span>
                  <span className="block text-xs text-[var(--cmsr-on-surface-variant)]">Pavement service area</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="cmsr-node flex items-start gap-2.5 px-4 pt-5 pb-3">
            <MapPin className="mt-0.5 size-4 shrink-0 text-[var(--cmsr-primary)]" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm font-semibold text-[var(--cmsr-on-surface)]">Vaughan · Main location</p>
              <p className="text-xs text-[var(--cmsr-on-surface-variant)]">
                <a className="hover:text-[var(--cmsr-primary)]" href="tel:9053921705">
                  (905) 392-1705
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="cmsr-node relative min-h-80 overflow-hidden rounded-2xl lg:col-span-6 lg:min-h-[28rem]">
          <iframe
            title="Call Mike Sealing and Pavement Repairs on Google Maps"
            src={mapEmbed}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="absolute inset-x-3 bottom-3 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[color-mix(in_srgb,var(--cmsr-surface-lowest)_92%,transparent)] px-3 py-3 backdrop-blur-md">
            <p className="min-w-0 text-sm font-semibold text-[var(--cmsr-on-surface)]">
              Call Mike Sealing & Pavement Repairs
            </p>
            <a className="cmsr-btn shrink-0 px-3 py-2 text-[11px]" href={mapsUrl} target="_blank" rel="noreferrer">
              Open Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
