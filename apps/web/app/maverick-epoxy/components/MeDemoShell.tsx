import type { ReactNode } from 'react'

export default function MeDemoShell({ children }: { children: ReactNode }) {
  return <div className="maverick-epoxy-demo relative min-h-screen antialiased">{children}</div>
}
