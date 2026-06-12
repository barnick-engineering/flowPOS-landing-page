import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { getAppLoginUrl } from '@/lib/app-url'
import { getLandingText, landingCopy } from '@/data/site-content'
import type { Language } from '@/lib/preferences'

const appLoginUrl = getAppLoginUrl()

export function HeroVideo({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  return (
    <section className='bg-gradient-to-b from-amber-500/8 via-background to-background pt-10 pb-12 md:pt-14 md:pb-14'>
      <div className='container flex flex-col items-center text-center'>
        <Badge className='mb-4'>{getLandingText(copy.hero.badge, language)}</Badge>

        <h1 className='max-w-3xl text-3xl font-bold tracking-tight text-balance md:text-4xl lg:text-5xl'>
          {getLandingText(copy.hero.titlePrefix, language)}{' '}
          <span className='text-amber-600'>
            {getLandingText(copy.hero.titleHighlight, language)}
          </span>
        </h1>
        <p className='mt-4 max-w-2xl text-base text-muted-foreground text-pretty md:text-lg'>
          {getLandingText(copy.hero.description, language)}
        </p>

        <div className='mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Button size='lg' asChild>
            <a href='#contact'>{getLandingText(copy.hero.ctaTrial, language)}</a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a href={appLoginUrl}>{getLandingText(copy.hero.ctaGetStarted, language)}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
