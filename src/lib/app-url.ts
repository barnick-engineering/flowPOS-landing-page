const defaultAppLoginUrl = 'http://localhost:5173/login'

/** App login URL — defaults to local POS app until a public demo exists. */
export function getAppLoginUrl(): string {
  const configured = import.meta.env.VITE_APP_URL?.trim()
  if (!configured) return defaultAppLoginUrl
  if (configured.endsWith('/login')) return configured
  return `${configured.replace(/\/$/, '')}/login`
}
