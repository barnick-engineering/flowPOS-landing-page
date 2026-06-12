import { type ReactNode } from 'react'
import { Moon, Sun } from 'lucide-react'
import { usePreferences } from '@/contexts/preferences-context'
import type { Language } from '@/lib/preferences'
import { cn } from '@/lib/utils'

function ToggleButton({
  active,
  onClick,
  children,
  ariaLabel,
}: {
  active: boolean
  onClick: () => void
  children: ReactNode
  ariaLabel: string
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      aria-label={ariaLabel}
      aria-pressed={active}
      className={cn(
        'inline-flex h-8 items-center justify-center gap-1 px-2.5 text-xs font-medium transition-colors',
        'first:rounded-l-md last:rounded-r-md',
        active
          ? 'bg-amber-500/15 text-amber-800'
          : 'text-muted-foreground hover:bg-accent hover:text-foreground',
      )}
    >
      {children}
    </button>
  )
}

export function PreferencesControls() {
  const { resolvedTheme, language, setTheme, setLanguage } = usePreferences()

  return (
    <div className='flex items-center gap-2'>
      <div
        className='inline-flex overflow-hidden rounded-md border border-border bg-background'
        role='group'
        aria-label='Theme'
      >
        <ToggleButton
          active={resolvedTheme === 'light'}
          onClick={() => setTheme('light')}
          ariaLabel='Light theme'
        >
          <Sun className='size-3.5' />
        </ToggleButton>
        <ToggleButton
          active={resolvedTheme === 'dark'}
          onClick={() => setTheme('dark')}
          ariaLabel='Dark theme'
        >
          <Moon className='size-3.5' />
        </ToggleButton>
      </div>

      <div
        className='inline-flex overflow-hidden rounded-md border border-border bg-background'
        role='group'
        aria-label='Language'
      >
        {(['en', 'bn'] as Language[]).map((lang) => (
          <ToggleButton
            key={lang}
            active={language === lang}
            onClick={() => setLanguage(lang)}
            ariaLabel={lang === 'en' ? 'English' : 'Bangla'}
          >
            {lang === 'en' ? 'EN' : 'বাংলা'}
          </ToggleButton>
        ))}
      </div>
    </div>
  )
}
