/** Frontend-only demo gate. The value is visible in the client bundle. */
export const HMT_PASSWORD = 'harrytire'

export const HMT_UNLOCK_KEY = 'harry-tire-demo-unlocked'

export function readHmtUnlocked(): boolean {
  try {
    return sessionStorage.getItem(HMT_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockHmt(): void {
  sessionStorage.setItem(HMT_UNLOCK_KEY, '1')
}
