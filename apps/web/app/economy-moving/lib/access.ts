/** Frontend-only demo gate. The value is visible in the client bundle. */
export const EMT_PASSWORD = 'economymoving'

export const EMT_UNLOCK_KEY = 'economy-moving-demo-unlocked'

export function readEmtUnlocked(): boolean {
  try {
    return sessionStorage.getItem(EMT_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockEmt(): void {
  sessionStorage.setItem(EMT_UNLOCK_KEY, '1')
}
