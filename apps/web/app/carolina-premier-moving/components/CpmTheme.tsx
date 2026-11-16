'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type CpmThemeValue = {
  dark: boolean
  setDark: (dark: boolean) => void
}

const CpmThemeContext = createContext<CpmThemeValue | null>(null)

export function useCpmTheme() {
  const value = useContext(CpmThemeContext)
  if (!value) {
    throw new Error('useCpmTheme must be used within CpmTheme')
  }
  return value
}

export default function CpmTheme({ children, className }: { children: ReactNode; className: string }) {
  const [dark, setDark] = useState(false)

  return (
    <CpmThemeContext.Provider value={{ dark, setDark }}>
      <div className={className} data-theme={dark ? 'dark' : 'light'}>
        {children}
      </div>
    </CpmThemeContext.Provider>
  )
}
