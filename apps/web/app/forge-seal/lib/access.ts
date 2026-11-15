/** Frontend-only demo gate. The value is visible in the client bundle. */
export const FS_PASSWORD = 'forgeseal'

export const FS_UNLOCK_KEY = 'forge-seal-demo-unlocked'

export function readFsUnlocked(): boolean {
  try {
    return sessionStorage.getItem(FS_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockFs(): void {
  sessionStorage.setItem(FS_UNLOCK_KEY, '1')
}
