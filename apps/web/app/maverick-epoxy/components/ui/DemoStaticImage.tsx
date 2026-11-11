import Image, { type ImageProps } from 'next/image'

/**
 * Drop-in replacement for `next/image` for demo routes. Vercel Image Optimization
 * can return 402 on some plans; local `public/maverick-epoxy/...` assets load correctly as
 * static files, so we set `unoptimized` for those (and for static imports).
 */
function shouldUnoptimize(src: ImageProps['src']): boolean {
  if (typeof src === 'string') {
    return src.startsWith('/maverick-epoxy/')
  }
  if (typeof src === 'object' && src !== null && 'src' in src) {
    return true
  }
  return false
}

export type DemoStaticImageProps = ImageProps

export default function DemoStaticImage({ unoptimized, src, ...rest }: DemoStaticImageProps) {
  const resolvedUnoptimized = unoptimized ?? shouldUnoptimize(src)
  return <Image src={src} {...rest} unoptimized={resolvedUnoptimized} />
}
