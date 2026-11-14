import type { ReactNode } from 'react'

import { emtFontVars } from './lib/fonts'
import './styles/economy-moving-demo.css'

export default function EconomyMovingLayout({ children }: { children: ReactNode }) {
  return <div className={`${emtFontVars} economy-moving`}>{children}</div>
}
