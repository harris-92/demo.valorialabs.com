import type { ReactNode } from 'react'

import CpmTheme from './components/CpmTheme'
import { cpmFontVars } from './lib/fonts'
import './styles/carolina-premier.css'

export default function CarolinaPremierLayout({ children }: { children: ReactNode }) {
  return <CpmTheme className={`${cpmFontVars} carolina-premier`}>{children}</CpmTheme>
}
