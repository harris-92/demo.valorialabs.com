'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type BdnThemeValue = {
  dark: boolean
  setDark: (dark: boolean) => void
}

const BdnThemeContext = createContext<BdnThemeValue | null>(null)

export function useBdnTheme() {
  const value = useContext(BdnThemeContext)
  if (!value) {
    throw new Error('useBdnTheme must be used within BdnTheme')
  }
  return value
}

export default function BdnTheme({ children, className }: { children: ReactNode; className: string }) {
  const [dark, setDark] = useState(false)

  return (
    <BdnThemeContext.Provider value={{ dark, setDark }}>
      <div className={className} data-theme={dark ? 'dark' : 'light'}>
        {children}
      </div>
    </BdnThemeContext.Provider>
  )
}
