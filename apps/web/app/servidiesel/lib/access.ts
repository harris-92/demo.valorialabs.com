/** Frontend-only demo gate. The value is visible in the client bundle. */
export const SD_PASSWORD = 'servidiesel'

export const SD_UNLOCK_KEY = 'servidiesel-demo-unlocked'

export function readSdUnlocked(): boolean {
  try {
    return sessionStorage.getItem(SD_UNLOCK_KEY) === '1'
  } catch {
    return false
  }
}

export function unlockSd(): void {
  sessionStorage.setItem(SD_UNLOCK_KEY, '1')
}
