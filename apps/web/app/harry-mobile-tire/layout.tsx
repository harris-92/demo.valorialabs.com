import type { ReactNode } from 'react'

import { hmtFontVars } from './lib/fonts'
import './styles/harry-tire-demo.css'

export default function HarryMobileTireLayout({ children }: { children: ReactNode }) {
  return <div className={`${hmtFontVars} harry-tire-demo`}>{children}</div>
}
