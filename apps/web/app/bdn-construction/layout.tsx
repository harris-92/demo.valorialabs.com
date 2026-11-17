import type { ReactNode } from 'react'

import BdnTheme from './components/BdnTheme'
import { bdnFontVars } from './lib/fonts'
import './styles/bdn-construction.css'

export default function BdnConstructionLayout({ children }: { children: ReactNode }) {
  return <BdnTheme className={`${bdnFontVars} bdn-construction`}>{children}</BdnTheme>
}
