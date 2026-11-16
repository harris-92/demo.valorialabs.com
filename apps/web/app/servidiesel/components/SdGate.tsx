'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { readSdUnlocked } from '../lib/access'
import SdPasswordForm from './SdPasswordForm'

type GateStatus = 'checking' | 'locked' | 'open'

export default function SdGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<GateStatus>('checking')

  useEffect(() => {
    setStatus(readSdUnlocked() ? 'open' : 'locked')
  }, [])

  switch (status) {
    case 'checking':
      return <div className="min-h-svh" aria-hidden="true" />
    case 'locked':
      return (
        <div className="flex min-h-svh items-center justify-center px-4 py-16">
          <SdPasswordForm
            title="Servidiesel Inc"
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
