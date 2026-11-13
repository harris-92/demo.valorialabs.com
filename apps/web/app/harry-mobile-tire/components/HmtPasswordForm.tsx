'use client'

import { useState, type FormEvent } from 'react'

import { HMT_PASSWORD, unlockHmt } from '../lib/access'

type HmtPasswordFormProps = {
  title: string
  description: string
  headingId?: string
  onSuccess: () => void
}

export default function HmtPasswordForm({
  title,
  description,
  headingId,
  onSuccess,
}: HmtPasswordFormProps) {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (value.trim() === HMT_PASSWORD) {
      unlockHmt()
      setError('')
      onSuccess()
      return
    }
    setError('That password is not correct.')
  }

  return (
    <form className="hmt-card w-full max-w-md space-y-4 p-6 sm:p-8" onSubmit={onSubmit}>
      <div className="space-y-2">
        <h2 id={headingId} className="hmt-display text-xl font-bold text-[var(--hmt-on)]">
          {title}
        </h2>
        <p className="text-sm text-[var(--hmt-on-variant)]">{description}</p>
      </div>
      <label className="block space-y-2">
        <span className="hmt-mono text-[var(--hmt-on-variant)]">Password</span>
        <input
          autoFocus
          className="hmt-field"
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
        <p className="text-sm text-[#b91c1c]" role="alert">
          {error}
        </p>
      ) : null}
      <button className="hmt-btn w-full px-4 py-3" type="submit">
        Continue
      </button>
    </form>
  )
}
