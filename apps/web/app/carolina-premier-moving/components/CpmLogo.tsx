import { cpmImages } from '../lib/images'
import CpmImage from './CpmImage'

export default function CpmLogo() {
  return (
    <span className="inline-flex items-center rounded-xl bg-white px-2 py-1 shadow-sm">
      <CpmImage
        src={cpmImages.logo.src}
        alt={cpmImages.logo.alt}
        width={cpmImages.logo.width}
        height={cpmImages.logo.height}
        className="h-12 w-auto sm:h-14"
      />
    </span>
  )
}
