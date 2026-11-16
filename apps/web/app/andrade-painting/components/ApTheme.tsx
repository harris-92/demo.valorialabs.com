'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type ApThemeValue = {
  dark: boolean
  setDark: (dark: boolean) => void
}

const ApThemeContext = createContext<ApThemeValue | null>(null)

export function useApTheme() {
  const value = useContext(ApThemeContext)
  if (!value) {
    throw new Error('useApTheme must be used within ApTheme')
  }
  return value
}

export default function ApTheme({ children, className }: { children: ReactNode; className: string }) {
  const [dark, setDark] = useState(false)

  return (
    <ApThemeContext.Provider value={{ dark, setDark }}>
      <div className={className} data-theme={dark ? 'dark' : 'light'}>
        {children}
      </div>
    </ApThemeContext.Provider>
  )
}
