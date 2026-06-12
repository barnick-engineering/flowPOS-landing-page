export type ThemeMode = 'light' | 'dark' | 'system'
export type ResolvedTheme = 'light' | 'dark'
export type Language = 'en' | 'bn'

export type LocalizedText = Record<Language, string>

export const themeModes: ThemeMode[] = ['light', 'system', 'dark']
export const languages: Language[] = ['en', 'bn']

export const text = (en: string, bn: string): LocalizedText => ({ en, bn })

export const translate = (value: LocalizedText, language: Language) =>
  value[language]

export function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light'
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function resolveTheme(theme: ThemeMode): ResolvedTheme {
  return theme === 'system' ? getSystemTheme() : theme
}

