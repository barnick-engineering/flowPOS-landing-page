import { Button } from '@/components/ui/button'

const appUrl = import.meta.env.VITE_APP_URL ?? 'http://localhost:5173'

const nav = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md'>
      <div className='container flex h-14 items-center justify-between gap-4'>
        <a href='#' className='flex items-center gap-2 font-semibold tracking-tight'>
          <span className='flex size-8 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-stone-950'>
            F
          </span>
          FlowPOS
        </a>
        <nav className='hidden items-center gap-6 text-sm text-muted-foreground md:flex'>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='transition-colors hover:text-foreground'
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className='flex items-center gap-2'>
          <Button variant='ghost' size='sm' asChild>
            <a href={`${appUrl}/login`}>Log in</a>
          </Button>
          <Button size='sm' asChild>
            <a href={`${appUrl}/login`}>Open app</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
