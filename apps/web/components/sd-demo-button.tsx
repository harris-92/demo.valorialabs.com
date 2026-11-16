'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/servidiesel/styles/servidiesel.css'
import { readSdUnlocked } from '@/app/servidiesel/lib/access'
import { sdFontVars } from '@/app/servidiesel/lib/fonts'
import SdPasswordForm from '@/app/servidiesel/components/SdPasswordForm'

export default function SdDemoButton() {
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
    if (readSdUnlocked()) {
      router.push('/servidiesel')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        Servidiesel demo
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${sdFontVars} servidiesel servidiesel-dialog w-full max-w-md rounded-xl`}
          >
            <SdPasswordForm
              headingId={titleId}
              title="Servidiesel Inc"
              description="Enter the password to open the Servidiesel demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/servidiesel')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--sd-muted)]"
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
