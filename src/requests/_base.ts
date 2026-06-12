import { ENV } from "@/shared/constants/env"
import { getCookieStorageSession } from "@/shared/cookie-storage/session"

type HttpRequest = {
  service: "MAIN"
  path: string
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH"
  headers?: Record<string, string>
  params?: Record<string, string>
  query?: Record<string, string>
  body?: unknown
}

type HttpRequestResponse<T> = {
  success: boolean
  data: T | null
}

export async function httpRequest<T>(params: HttpRequest): Promise<HttpRequestResponse<T>> {
  try {
    const serviceURL = {
      MAIN: ENV.MAIN_API_URL
    }

    const mountedUrl = new URL(params.path, serviceURL[params.service])

    const body = params.method !== "GET" ? JSON.stringify(params.body || {}) : undefined

    if (params.params) {
      Object.entries(params.params).forEach(([key, value]) => {
        mountedUrl.pathname = mountedUrl.pathname.replace(`:${key}`, value)
      })
    }

    if (params.query) {
      Object.entries(params.query).forEach(([key, value]) => {
        mountedUrl.searchParams.append(key, value)
      })
    }

    const sessionCookie = await getCookieStorageSession()
    const result = await fetch(mountedUrl.toString(), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionCookie?.access_token}`,
        ...params.headers
      },
      method: params.method,
      body
    })

    const resultJson = await result.json()

    return {
      success: resultJson?.success || result.ok,
      data: resultJson.data || resultJson || null
    }
  } catch (error) {
    console.error("Error fetching data:", error)
    return {
      success: false,
      data: null
    }
  }
}
