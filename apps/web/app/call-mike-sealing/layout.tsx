import type { ReactNode } from 'react'
import { Inter, Montserrat } from 'next/font/google'

import './styles/call-mike-demo.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-cmsr-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cmsr-body',
  display: 'swap',
})

export default function CallMikeSealingLayout({ children }: { children: ReactNode }) {
  return <div className={`${montserrat.variable} ${inter.variable} call-mike-demo`}>{children}</div>
}
