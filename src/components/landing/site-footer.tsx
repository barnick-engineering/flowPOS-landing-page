import { getLandingText, landingCopy } from '@/data/site-content'
import type { Language } from '@/lib/preferences'

export function SiteFooter({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  const year = new Date().getFullYear()
  return (
    <footer className='border-t border-border py-10'>
      <div className='container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row'>
        <p>
          © {year} FlowPOS · Barnick Labs · {getLandingText(copy.footer.copyright, language)}
        </p>
        <nav className='flex flex-wrap justify-center gap-6'>
          <a href='#how-it-works' className='hover:text-foreground'>
            {getLandingText(copy.footer.process, language)}
          </a>
          <a href='#features' className='hover:text-foreground'>
            {getLandingText(copy.footer.features, language)}
          </a>
          <a href='#pricing' className='hover:text-foreground'>
            {getLandingText(copy.footer.pricing, language)}
          </a>
          <a href='#contact' className='hover:text-foreground'>
            {getLandingText(copy.footer.contact, language)}
          </a>
        </nav>
      </div>
    </footer>
  )
}
