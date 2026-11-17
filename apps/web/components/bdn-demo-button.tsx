'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/bdn-construction/styles/bdn-construction.css'
import { readBdnUnlocked } from '@/app/bdn-construction/lib/access'
import { bdnFontVars } from '@/app/bdn-construction/lib/fonts'
import BdnPasswordForm from '@/app/bdn-construction/components/BdnPasswordForm'

export default function BdnDemoButton() {
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
    if (readBdnUnlocked()) {
      router.push('/bdn-construction')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        BDN Construction demo
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${bdnFontVars} bdn-construction w-full max-w-md rounded-xl`}
          >
            <BdnPasswordForm
              headingId={titleId}
              title="BDN Construction"
              description="Enter the password to open the BDN Construction demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/bdn-construction')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--bdn-muted)]"
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
