'use client'

import { useState, type FormEvent } from 'react'

import { SD_PASSWORD, unlockSd } from '../lib/access'

type SdPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function SdPasswordForm({ title, description, headingId, onSuccess }: SdPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === SD_PASSWORD) {
      unlockSd()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="sd-card w-full max-w-md space-y-4 p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="space-y-2">
        <p className="sd-kicker">Servidiesel Inc</p>
        <h1 id={headingId} className="sd-display text-2xl font-bold text-[var(--sd-ink)]">
          {title}
        </h1>
        <p className="text-sm text-[var(--sd-muted)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--sd-ink)]">Password</span>
        <input
          autoFocus
          className="sd-field"
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
      <button className="sd-btn w-full" type="submit">
        Continue
      </button>
    </form>
  )
}
