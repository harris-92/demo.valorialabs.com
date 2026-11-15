import type { ReactNode } from 'react'

import { fsFontVars } from './lib/fonts'
import './styles/screen.css'

const themeBoot = `(function(){try{if(localStorage.getItem('forge-seal-theme')==='light'){document.currentScript.parentElement.setAttribute('data-theme','light')}}catch(e){}})()`

export default function ForgeSealLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${fsFontVars} fs-skin forge-seal`} suppressHydrationWarning>
      <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      {children}
    </div>
  )
}
