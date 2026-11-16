import Image, { type ImageProps } from 'next/image'

export default function CpmImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
