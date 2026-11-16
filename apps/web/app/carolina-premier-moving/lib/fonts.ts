import { Plus_Jakarta_Sans, Sora } from 'next/font/google'

export const cpmDisplay = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-cpm-display',
  display: 'swap',
})

export const cpmBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cpm-body',
  display: 'swap',
})

export const cpmFontVars = `${cpmDisplay.variable} ${cpmBody.variable}`
