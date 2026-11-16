'use client'

import { useState, type FormEvent } from 'react'

import { CPM_PASSWORD, unlockCpm } from '../lib/access'

type CpmPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function CpmPasswordForm({ title, description, headingId, onSuccess }: CpmPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === CPM_PASSWORD) {
      unlockCpm()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="cpm-card w-full max-w-md space-y-4 p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="space-y-2">
        <p className="cpm-kicker">Carolina Premier</p>
        <h1 id={headingId} className="cpm-display text-2xl font-bold text-[var(--cpm-ink)]">
          {title}
        </h1>
        <p className="text-sm text-[var(--cpm-muted)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--cpm-ink)]">Password</span>
        <input
          autoFocus
          className="cpm-field"
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
      <p className="min-h-5 text-sm text-[#ba1a1a]" role="alert">
        {error}
      </p>
      <button className="cpm-btn w-full" type="submit">
        Continue
      </button>
    </form>
  )
}
