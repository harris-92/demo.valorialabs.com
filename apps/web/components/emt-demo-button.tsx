'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/economy-moving/styles/economy-moving-demo.css'
import { readEmtUnlocked } from '@/app/economy-moving/lib/access'
import { emtFontVars } from '@/app/economy-moving/lib/fonts'
import EmtPasswordForm from '@/app/economy-moving/components/EmtPasswordForm'

export default function EmtDemoButton() {
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
    if (readEmtUnlocked()) {
      router.push('/economy-moving')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        my Demo Economy
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${emtFontVars} economy-moving w-full max-w-md rounded-xl`}
          >
            <EmtPasswordForm
              headingId={titleId}
              title="my Demo Economy"
              description="Enter the password to open the Economy Moving demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/economy-moving')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--emt-muted)]"
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
