import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

export const emtDisplay = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-emt-display',
  display: 'swap',
})

export const emtBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-emt-body',
  display: 'swap',
})

export const emtFontVars = `${emtDisplay.variable} ${emtBody.variable}`
