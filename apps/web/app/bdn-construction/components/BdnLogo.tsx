import { bdnImages } from '../lib/images'
import BdnImage from './BdnImage'

export default function BdnLogo() {
  return (
    <BdnImage
      src={bdnImages.logo.src}
      alt={bdnImages.logo.alt}
      width={168}
      height={61}
      className="h-11 w-auto"
    />
  )
}
