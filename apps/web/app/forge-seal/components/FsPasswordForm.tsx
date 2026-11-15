'use client'

import { useState, type FormEvent } from 'react'

import { FS_PASSWORD, unlockFs } from '../lib/access'

type FsPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function FsPasswordForm({ title, description, headingId, onSuccess }: FsPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === FS_PASSWORD) {
      unlockFs()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="fs-card grid w-full gap-5 overflow-hidden rounded-3xl bg-[var(--fs-surface)] p-6" onSubmit={onSubmit}>
      <div>
        <p className="fs-display text-xs tracking-[0.16em] text-[var(--fs-orange)]">ForgeSeal</p>
        <h1 id={headingId} className="mt-2 text-3xl">
          {title}
        </h1>
        <p className="mt-2 text-sm text-[var(--fs-muted)]">{description}</p>
      </div>
      <label className="fs-field">
        <span>Password</span>
        <input
          autoFocus
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
      <p className="min-h-5 text-sm text-[var(--fs-danger)]" role="alert">
        {error}
      </p>
      <button className="fs-btn inline-flex" type="submit">
        Continue
      </button>
    </form>
  )
}
