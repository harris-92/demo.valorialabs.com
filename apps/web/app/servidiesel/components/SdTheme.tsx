'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type SdThemeValue = {
  dark: boolean
  setDark: (dark: boolean) => void
}

const SdThemeContext = createContext<SdThemeValue | null>(null)

export function useSdTheme() {
  const value = useContext(SdThemeContext)
  if (!value) {
    throw new Error('useSdTheme must be used within SdTheme')
  }
  return value
}

export default function SdTheme({ children, className }: { children: ReactNode; className: string }) {
  const [dark, setDark] = useState(false)

  return (
    <SdThemeContext.Provider value={{ dark, setDark }}>
      <div className={className} data-theme={dark ? 'dark' : 'light'}>
        {children}
      </div>
    </SdThemeContext.Provider>
  )
}
