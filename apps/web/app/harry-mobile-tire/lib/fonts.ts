import { Inter, JetBrains_Mono, Montserrat } from 'next/font/google'

export const hmtDisplay = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-hmt-display',
  display: 'swap',
})

export const hmtBody = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-hmt-body',
  display: 'swap',
})

export const hmtLabel = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-hmt-label',
  display: 'swap',
})

export const hmtFontVars = `${hmtDisplay.variable} ${hmtBody.variable} ${hmtLabel.variable}`
