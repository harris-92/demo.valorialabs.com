import { Manrope, Montserrat } from 'next/font/google'

export const bdnDisplay = Montserrat({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-bdn-display',
  display: 'swap',
})

export const bdnBody = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bdn-body',
  display: 'swap',
})

export const bdnFontVars = `${bdnDisplay.variable} ${bdnBody.variable}`
