'use client'

import { useState, type FormEvent } from 'react'

import { EMT_PASSWORD, unlockEmt } from '../lib/access'

type EmtPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function EmtPasswordForm({ title, description, headingId, onSuccess }: EmtPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === EMT_PASSWORD) {
      unlockEmt()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="emt-card w-full max-w-md space-y-4 p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="space-y-2">
        <h2 id={headingId} className="emt-display text-xl font-bold text-[var(--emt-navy)]">
          {title}
        </h2>
        <p className="text-sm text-[var(--emt-muted)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="text-sm font-semibold text-[var(--emt-navy)]">Password</span>
        <input
          autoFocus
          className="emt-field"
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
        <p className="text-sm text-[#ba1a1a]" role="alert">
          {error}
        </p>
      ) : null}
      <button className="emt-btn w-full px-4 py-3" type="submit">
        Continue
      </button>
    </form>
  )
}
