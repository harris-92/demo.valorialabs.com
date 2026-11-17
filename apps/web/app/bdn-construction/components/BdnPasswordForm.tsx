'use client'

import { useState, type FormEvent } from 'react'

import { BDN_PASSWORD, unlockBdn } from '../lib/access'

type BdnPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function BdnPasswordForm({ title, description, headingId, onSuccess }: BdnPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === BDN_PASSWORD) {
      unlockBdn()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="bdn-card w-full max-w-md space-y-4 p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="space-y-2">
        <p className="bdn-kicker">BDN Construction</p>
        <h1 id={headingId} className="bdn-display text-2xl font-bold text-[var(--bdn-ink)]">
          {title}
        </h1>
        <p className="text-sm text-[var(--bdn-muted)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--bdn-ink)]">Password</span>
        <input
          autoFocus
          className="bdn-field"
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
      <p className="min-h-5 text-sm text-[var(--bdn-danger)]" role="alert">
        {error}
      </p>
      <button className="bdn-btn w-full" type="submit">
        Continue
      </button>
    </form>
  )
}
