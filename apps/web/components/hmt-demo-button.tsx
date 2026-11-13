'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/harry-mobile-tire/styles/harry-tire-demo.css'
import { readHmtUnlocked } from '@/app/harry-mobile-tire/lib/access'
import { hmtFontVars } from '@/app/harry-mobile-tire/lib/fonts'
import HmtPasswordForm from '@/app/harry-mobile-tire/components/HmtPasswordForm'

export default function HmtDemoButton() {
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
    if (readHmtUnlocked()) {
      router.push('/harry-mobile-tire')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        my Demo Tire
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${hmtFontVars} harry-tire-demo w-full max-w-md rounded-xl`}
          >
            <HmtPasswordForm
              headingId={titleId}
              title="my Demo Tire"
              description="Enter the password to open the Harry Mobile Tire demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/harry-mobile-tire')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--hmt-on-variant)]"
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
