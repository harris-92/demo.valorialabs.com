/** Frontend-only demo gate. The value is visible in the client bundle. */
export const CPM_PASSWORD = 'carolinapremier'

export const CPM_UNLOCK_KEY = 'carolina-premier-moving-demo-unlocked'

export function readCpmUnlocked(): boolean {
  try {
    return sessionStorage.getItem(CPM_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockCpm(): void {
  sessionStorage.setItem(CPM_UNLOCK_KEY, '1')
}
