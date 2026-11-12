'use client'

import { useEffect, useId, useState } from 'react'
import { Inter, Montserrat } from 'next/font/google'
import { useRouter } from 'next/navigation'

import { Button } from '@workspace/ui/components/button'

import '@/app/call-mike-sealing/styles/call-mike-demo.css'
import { readCmsrUnlocked } from '@/app/call-mike-sealing/lib/access'
import CmsrPasswordForm from '@/app/call-mike-sealing/components/CmsrPasswordForm'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-cmsr-display',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cmsr-body',
})

export default function CmsrDemoButton() {
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
    if (readCmsrUnlocked()) {
      router.push('/call-mike-sealing')
      return
    }
    setOpen(true)
  }

  return (
    <>
      <Button type="button" onClick={openDemo}>
        my Demo CMSR
      </Button>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className={`${montserrat.variable} ${inter.variable} call-mike-demo w-full max-w-md rounded-xl`}
          >
            <CmsrPasswordForm
              headingId={titleId}
              title="my Demo CMSR"
              description="Enter the password to open the Call Mike Sealing demo."
              onSuccess={() => {
                setOpen(false)
                router.push('/call-mike-sealing')
              }}
            />
            <button
              className="mt-3 w-full text-center text-sm text-[var(--cmsr-on-surface-variant)]"
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
