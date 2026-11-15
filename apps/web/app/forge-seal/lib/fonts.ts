import { Inter, Oswald } from 'next/font/google'

export const fsDisplay = Oswald({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-fs-display',
})

export const fsBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-fs-body',
})

export const fsFontVars = `${fsDisplay.variable} ${fsBody.variable}`
