import Image, { type ImageProps } from 'next/image'

export default function EmtImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
