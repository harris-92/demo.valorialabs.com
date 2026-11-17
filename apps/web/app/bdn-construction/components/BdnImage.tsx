import Image, { type ImageProps } from 'next/image'

export default function BdnImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
