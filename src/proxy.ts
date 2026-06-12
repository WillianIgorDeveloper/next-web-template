import { getCookieStorageSession } from "@/shared/cookie-storage/session"
import { PATHS, ROUTES } from "@/shared/constants/routes"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function proxy(request: NextRequest) {
  const sessionCookie = await getCookieStorageSession()
  const hasSession = sessionCookie?.access_token
  const path = request.nextUrl.pathname
  const currentRoute = ROUTES.get(path)

  if (currentRoute?.needsAuth && !hasSession) {
    return NextResponse.redirect(new URL(PATHS.AUTH, request.url))
  }

  if (currentRoute?.onlyPublic && hasSession) {
    return NextResponse.redirect(new URL(PATHS.DASHBOARD, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"]
}
