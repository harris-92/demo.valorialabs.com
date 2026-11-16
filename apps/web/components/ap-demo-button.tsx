'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/andrade-painting/styles/andrade-painting.css'
import { readApUnlocked } from '@/app/andrade-painting/lib/access'
import { apFontVars } from '@/app/andrade-painting/lib/fonts'
import ApPasswordForm from '@/app/andrade-painting/components/ApPasswordForm'

export default function ApDemoButton() {
  const router = useRouter()
  const titleId = useId()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  function openDemo() {
    if (readApUnlocked()) {
      router.push('/andrade-painting')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        Andrade Painting demo
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${apFontVars} andrade-painting w-full max-w-md rounded-xl`}
          >
            <ApPasswordForm
              headingId={titleId}
              title="Andrade Painting"
              description="Enter the password to open the Andrade Painting demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/andrade-painting')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--ap-muted)]"
              type="button"
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
