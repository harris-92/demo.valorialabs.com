import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'

export const apDisplay = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-ap-display',
  display: 'swap',
})

export const apBody = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ap-body',
  display: 'swap',
})

export const apFontVars = `${apDisplay.variable} ${apBody.variable}`
