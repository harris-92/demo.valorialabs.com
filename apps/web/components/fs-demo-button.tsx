'use client'

import { useEffect, useId, useState } from 'react'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/forge-seal/styles/screen.css'
import { readFsUnlocked } from '@/app/forge-seal/lib/access'
import { fsFontVars } from '@/app/forge-seal/lib/fonts'
import FsPasswordForm from '@/app/forge-seal/components/FsPasswordForm'

export default function FsDemoButton() {
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
    if (readFsUnlocked()) {
      router.push('/forge-seal')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        ForgeSeal demo
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${fsFontVars} fs-skin w-full max-w-md border border-[var(--fs-line)] bg-[var(--fs-base)]`}
          >
            <FsPasswordForm
              headingId={titleId}
              title="ForgeSeal"
              description="Enter the password to open the ForgeSeal demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/forge-seal')
              }}
            />
            <button className="fs-btn fs-btn--line inline-flex w-full" type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}
