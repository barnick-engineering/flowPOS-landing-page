import * as React from 'react'
import {
  getSystemTheme,
  resolveTheme,
  type Language,
  type ResolvedTheme,
  type ThemeMode,
} from '@/lib/preferences'

const THEME_STORAGE_KEY = 'flowpos-theme'
const LANGUAGE_STORAGE_KEY = 'flowpos-language'

type PreferencesContextValue = {
  theme: ThemeMode
  resolvedTheme: ResolvedTheme
  language: Language
  setTheme: (theme: ThemeMode) => void
  setLanguage: (language: Language) => void
}

const PreferencesContext = React.createContext<PreferencesContextValue | null>(
  null,
)

function readThemePreference(): ThemeMode {
  if (typeof window === 'undefined') return 'system'

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored
  }

  return 'system'
}

function readLanguagePreference(): Language {
  if (typeof window === 'undefined') return 'en'

  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  return stored === 'bn' ? 'bn' : 'en'
}

function applyTheme(theme: ThemeMode) {
  if (typeof document === 'undefined') return

  const resolvedTheme = resolveTheme(theme)
  document.documentElement.dataset.theme = resolvedTheme
  document.documentElement.style.colorScheme = resolvedTheme
}

function applyLanguage(language: Language) {
  if (typeof document === 'undefined') return

  document.documentElement.lang = language
}

export function initializePreferences() {
  const theme = readThemePreference()
  const language = readLanguagePreference()

  applyTheme(theme)
  applyLanguage(language)
}

export function PreferencesProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setThemeState] = React.useState<ThemeMode>(() =>
    readThemePreference(),
  )
  const [language, setLanguageState] = React.useState<Language>(() =>
    readLanguagePreference(),
  )
  const [resolvedTheme, setResolvedTheme] = React.useState<ResolvedTheme>(() =>
    resolveTheme(readThemePreference()),
  )

  React.useEffect(() => {
    const updateTheme = () => {
      const nextResolvedTheme = resolveTheme(theme)
      setResolvedTheme(nextResolvedTheme)
      applyTheme(theme)
    }

    updateTheme()

    if (theme !== 'system') {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = () => {
      const nextResolvedTheme = getSystemTheme()
      setResolvedTheme(nextResolvedTheme)
      applyTheme('system')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [theme])

  React.useEffect(() => {
    applyLanguage(language)
  }, [language])

  const setTheme = React.useCallback((nextTheme: ThemeMode) => {
    setThemeState(nextTheme)
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
  }, [])

  const setLanguage = React.useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
  }, [])

  const value = React.useMemo(
    () => ({
      theme,
      resolvedTheme,
      language,
      setTheme,
      setLanguage,
    }),
    [language, resolvedTheme, setLanguage, setTheme, theme],
  )

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  )
}

export function usePreferences() {
  const context = React.useContext(PreferencesContext)

  if (!context) {
    throw new Error('usePreferences must be used within PreferencesProvider')
  }

  return context
}

