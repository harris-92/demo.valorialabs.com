import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

export const sdDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-sd-display',
  display: 'swap',
})

export const sdBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sd-body',
  display: 'swap',
})

export const sdFontVars = `${sdDisplay.variable} ${sdBody.variable}`
