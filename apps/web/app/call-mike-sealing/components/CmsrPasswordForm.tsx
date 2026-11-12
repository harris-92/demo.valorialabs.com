'use client'

import { useState, type FormEvent } from 'react'

import { CMSR_PASSWORD, unlockCmsr } from '../lib/access'

type CmsrPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function CmsrPasswordForm({
  title,
  description,
  headingId,
  onSuccess,
}: CmsrPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === CMSR_PASSWORD) {
      unlockCmsr()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form
      className="cmsr-card w-full max-w-md space-y-4 p-6 sm:p-8"
      onSubmit={onSubmit}
    >
      <div className="space-y-2">
        <h2 id={headingId} className="cmsr-h3 text-[var(--cmsr-on-surface)]">
          {title}
        </h2>
        <p className="text-sm text-[var(--cmsr-on-surface-variant)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="cmsr-label text-[var(--cmsr-on-surface-variant)]">Password</span>
        <input
          autoFocus
          className="cmsr-field"
          type="password"
          name="password"
          autoComplete="current-password"
          value={value}
          aria-invalid={error ? true : undefined}
          onChange={(event) => {
            setValue(event.target.value)
            if (error) setError('')
          }}
        />
      </label>
      {error ? (
        <p className="text-sm text-[var(--cmsr-error)]" role="alert">
          {error}
        </p>
      ) : null}
      <button className="cmsr-btn w-full px-4 py-3" type="submit">
        Continue
      </button>
    </form>
  )
}
