import Image, { type ImageProps } from 'next/image'

export default function ApImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
