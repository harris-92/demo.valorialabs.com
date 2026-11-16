'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/carolina-premier-moving/styles/carolina-premier.css'
import { readCpmUnlocked } from '@/app/carolina-premier-moving/lib/access'
import { cpmFontVars } from '@/app/carolina-premier-moving/lib/fonts'
import CpmPasswordForm from '@/app/carolina-premier-moving/components/CpmPasswordForm'

export default function CpmDemoButton() {
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
    if (readCpmUnlocked()) {
      router.push('/carolina-premier-moving')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        Carolina Premier demo
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${cpmFontVars} carolina-premier w-full max-w-md rounded-xl`}
          >
            <CpmPasswordForm
              headingId={titleId}
              title="Carolina Premier Moving"
              description="Enter the password to open the Carolina Premier demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/carolina-premier-moving')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--cpm-muted)]"
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
