import type { ReactNode } from 'react'

import SdTheme from './components/SdTheme'
import { sdFontVars } from './lib/fonts'
import './styles/servidiesel.css'

export default function ServidieselLayout({ children }: { children: ReactNode }) {
  return <SdTheme className={`${sdFontVars} servidiesel`}>{children}</SdTheme>
}
