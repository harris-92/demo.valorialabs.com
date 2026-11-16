import Image, { type ImageProps } from 'next/image'

export default function SdImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
