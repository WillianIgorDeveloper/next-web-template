export const ROUTES = new Map([
  ["*", { needsAuth: false, onlyPublic: false }],
  ["/", { needsAuth: false, onlyPublic: false }],
  ["/auth", { needsAuth: false, onlyPublic: true }],
  ["/dashboard", { needsAuth: true, onlyPublic: false }]
])

export const PATHS = {
  NOT_FOUND: "*",
  LANDING: "/",
  AUTH: "/auth",
  DASHBOARD: "/dashboard"
}
