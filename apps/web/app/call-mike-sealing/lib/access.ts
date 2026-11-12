/** Frontend-only demo gate. The value is visible in the client bundle. */
export const CMSR_PASSWORD = 'callmike'

export const CMSR_UNLOCK_KEY = 'cmsr-demo-unlocked'

export function readCmsrUnlocked(): boolean {
  try {
    return sessionStorage.getItem(CMSR_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockCmsr(): void {
  sessionStorage.setItem(CMSR_UNLOCK_KEY, '1')
}
