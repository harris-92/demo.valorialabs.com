import Image, { type ImageProps } from 'next/image'

export default function HmtImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
