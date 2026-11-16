import { sdImages } from '../lib/images'
import SdImage from './SdImage'

export default function SdLogo() {
  return (
    <span className="inline-flex items-center rounded-xl bg-white px-2 py-1">
      <SdImage
        src={sdImages.logo.src}
        alt={sdImages.logo.alt}
        width={sdImages.logo.width}
        height={sdImages.logo.height}
        className="h-10 w-auto sm:h-12"
      />
    </span>
  )
}
