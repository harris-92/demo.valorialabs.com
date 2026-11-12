import Image, { type ImageProps } from 'next/image'

export default function CmsrImage(props: ImageProps) {
  return <Image {...props} unoptimized />
}
