'use client'

import { useState, type FormEvent } from 'react'

import { AP_PASSWORD, unlockAp } from '../lib/access'

type ApPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function ApPasswordForm({ title, description, headingId, onSuccess }: ApPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === AP_PASSWORD) {
      unlockAp()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="ap-card w-full max-w-md space-y-4 p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="space-y-2">
        <p className="ap-kicker">Andrade Painting</p>
        <h1 id={headingId} className="ap-display text-2xl font-bold text-[var(--ap-ink)]">
          {title}
        </h1>
        <p className="text-sm text-[var(--ap-muted)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--ap-ink)]">Password</span>
        <input
          autoFocus
          className="ap-field"
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
      <button className="ap-btn w-full" type="submit">
        Continue
      </button>
    </form>
  )
}
