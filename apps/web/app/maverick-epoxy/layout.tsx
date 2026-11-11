import type { ReactNode } from 'react'

import MeDemoShell from './components/MeDemoShell'
import './styles/maverick-epoxy-demo.css'

export default function MaverickEpoxyLayout({ children }: { children: ReactNode }) {
  return <MeDemoShell>{children}</MeDemoShell>
}
