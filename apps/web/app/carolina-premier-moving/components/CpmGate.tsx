'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { readCpmUnlocked } from '../lib/access'
import CpmPasswordForm from './CpmPasswordForm'

type GateStatus = 'checking' | 'locked' | 'open'

export default function CpmGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<GateStatus>('checking')

  useEffect(() => {
    setStatus(readCpmUnlocked() ? 'open' : 'locked')
  }, [])

  switch (status) {
    case 'checking':
      return <div className="min-h-svh" aria-hidden="true" />
    case 'locked':
      return (
        <div className="flex min-h-svh items-center justify-center px-4 py-16">
          <CpmPasswordForm
            title="Carolina Premier Moving"
            description="Enter the password to open this demo."
            onSuccess={() => setStatus('open')}
          />
        </div>
      )
    case 'open':
      return children
    default: {
      const unreachable: never = status
      return unreachable
    }
  }
}
