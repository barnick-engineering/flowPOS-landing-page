import { Button } from '@/components/ui/button'
import { PreferencesControls } from '@/components/landing/preferences-controls'
import { getAppLoginUrl } from '@/lib/app-url'
import { getLandingText } from '@/data/site-content'
import type { Language } from '@/lib/preferences'
import { landingCopy } from '@/data/site-content'

const appLoginUrl = getAppLoginUrl()

const navItems = (copy: typeof landingCopy, language: Language) => [
  { label: getLandingText(copy.header.nav.features, language), href: '#features' },
  { label: getLandingText(copy.header.nav.pricing, language), href: '#pricing' },
  { label: getLandingText(copy.header.nav.contact, language), href: '#contact' },
]

export function SiteHeader({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  return (
    <header className='sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md'>
      <div className='container grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-2'>
        <a
          href='#'
          className='flex items-center gap-2 font-semibold tracking-tight justify-self-start'
        >
          <span className='flex size-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-stone-950'>
            F
          </span>
          <span className='hidden sm:inline'>FlowPOS</span>
        </a>

        <nav className='flex items-center justify-center gap-3 text-xs text-muted-foreground sm:gap-6 sm:text-sm'>
          {navItems(copy, language).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='whitespace-nowrap transition-colors hover:text-foreground'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center justify-self-end gap-1 sm:gap-2'>
          <PreferencesControls />
          <Button size='sm' asChild>
            <a href={appLoginUrl}>
              {getLandingText(copy.header.actions.getStarted, language)}
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}
