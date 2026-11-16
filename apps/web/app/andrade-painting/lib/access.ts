/** Frontend-only demo gate. The value is visible in the client bundle. */
export const AP_PASSWORD = 'andradepainting'

export const AP_UNLOCK_KEY = 'andrade-painting-demo-unlocked'

export function readApUnlocked(): boolean {
  try {
    return sessionStorage.getItem(AP_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockAp(): void {
  sessionStorage.setItem(AP_UNLOCK_KEY, '1')
}
