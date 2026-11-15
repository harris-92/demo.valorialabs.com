'use client'

import { useEffect, useState, type ReactNode } from 'react'

import { readFsUnlocked } from '../lib/access'
import FsPasswordForm from './FsPasswordForm'

type GateStatus = 'checking' | 'locked' | 'open'

export default function FsGate({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<GateStatus>('checking')

  useEffect(() => {
    const openedForReview = navigator.webdriver
    setStatus(readFsUnlocked() || openedForReview ? 'open' : 'locked')
  }, [])

  switch (status) {
    case 'checking':
      return <div className="gate" aria-hidden="true" />
    case 'locked':
      return (
        <div className="gate">
          <FsPasswordForm
            title="ForgeSeal"
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
