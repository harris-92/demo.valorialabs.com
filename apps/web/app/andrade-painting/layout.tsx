import type { ReactNode } from 'react'

import ApTheme from './components/ApTheme'
import { apFontVars } from './lib/fonts'
import './styles/andrade-painting.css'

export default function AndradePaintingLayout({ children }: { children: ReactNode }) {
  return <ApTheme className={`${apFontVars} andrade-painting`}>{children}</ApTheme>
}
