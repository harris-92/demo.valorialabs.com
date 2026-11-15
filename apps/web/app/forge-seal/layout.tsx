import type { ReactNode } from 'react'

import { fsFontVars } from './lib/fonts'
import './styles/screen.css'

export default function ForgeSealLayout({ children }: { children: ReactNode }) {
  return <div className={`${fsFontVars} fs-skin forge-seal`}>{children}</div>
}
