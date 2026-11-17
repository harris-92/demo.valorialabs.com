/** Frontend-only demo gate. The value is visible in the client bundle. */
export const BDN_PASSWORD = 'bdnconstruction'

export const BDN_UNLOCK_KEY = 'bdn-construction-demo-unlocked'

export function readBdnUnlocked(): boolean {
  try {
    return sessionStorage.getItem(BDN_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockBdn(): void {
  sessionStorage.setItem(BDN_UNLOCK_KEY, '1')
}
