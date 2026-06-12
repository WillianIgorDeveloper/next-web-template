import { cookies } from "next/headers"
import { ENV } from "@/shared/constants/env"
import type { Session } from "@/shared/types/session"

export async function getCookieStorageSession(): Promise<Session | null> {
  const cookieStore = await cookies()
  const cookie = cookieStore.get(ENV.COOKIE_STORAGE_SESSION as string)
  if (!cookie) return null
  try {
    return JSON.parse(decodeURIComponent(cookie.value)) as Session
  } catch {
    return null
  }
}

export async function updateCookieStorageSession(session: Session) {
  const cookieStore = await cookies()
  const sessionValue = encodeURIComponent(JSON.stringify(session))
  cookieStore.set({
    name: ENV.COOKIE_STORAGE_SESSION as string,
    value: sessionValue,
    path: "/",
    httpOnly: true,
    secure: true,
    sameSite: "strict"
  })
}

export async function removeCookieStorageSession() {
  const cookieStore = await cookies()
  cookieStore.delete(ENV.COOKIE_STORAGE_SESSION as string)
}
