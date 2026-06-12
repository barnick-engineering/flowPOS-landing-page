import { Check } from 'lucide-react'
import { pricingPlans, getLandingText, landingCopy } from '@/data/site-content'
import { getAppLoginUrl } from '@/lib/app-url'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import type { Language } from '@/lib/preferences'

const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@flowpos.app'
const appLoginUrl = getAppLoginUrl()

export function PricingSection({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  return (
    <section id='pricing' className='scroll-mt-20 py-16 md:py-24'>
      <div className='container'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-medium text-amber-700'>
            {getLandingText(copy.pricing.kicker, language)}
          </p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
            {getLandingText(copy.pricing.title, language)}
          </h2>
          <p className='mt-3 text-muted-foreground'>
            {getLandingText(copy.pricing.description, language)}
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4'>
          {pricingPlans.map((plan) => (
            <Card
              key={plan.id}
              className={cn(
                plan.highlighted &&
                  'border-amber-500/50 shadow-md shadow-amber-500/10 ring-1 ring-amber-500/30',
              )}
            >
              <CardHeader>
                <div className='flex items-center justify-between gap-2'>
                  <CardTitle>{getLandingText(plan.name, language)}</CardTitle>
                  {plan.badge ? (
                    <Badge>{getLandingText(plan.badge, language)}</Badge>
                  ) : null}
                </div>
                <CardDescription>
                  {getLandingText(plan.description, language)}
                </CardDescription>
                <div className='pt-2'>
                  <span className='text-3xl font-bold tracking-tight'>
                    {plan.price}
                  </span>
                  <span className='block text-xs text-muted-foreground'>
                    {getLandingText(plan.period, language)}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2.5 text-sm'>
                  {plan.features.map((feature) => (
                    <li key={feature.en} className='flex gap-2'>
                      <Check className='mt-0.5 size-4 shrink-0 text-amber-600' />
                      <span className='text-muted-foreground'>
                        {getLandingText(feature, language)}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className='w-full'
                  variant={plan.highlighted ? 'default' : 'outline'}
                  asChild
                >
                  <a href='#contact'>{getLandingText(plan.cta, language)}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className='mt-8 text-center text-xs text-muted-foreground'>
          {getLandingText(copy.pricing.note, language)}
        </p>
      </div>
    </section>
  )
}

export function ContactSection({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  return (
    <section id='contact' className='scroll-mt-20 border-t border-border/60 bg-muted/20 py-16'>
      <div className='container max-w-xl text-center'>
        <h2 className='text-2xl font-bold tracking-tight'>
          {getLandingText(copy.contact.title, language)}
        </h2>
        <p className='mt-3 text-muted-foreground'>
          {getLandingText(copy.contact.description, language)}
        </p>
        <div className='mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Button size='lg' asChild>
            <a href={`mailto:${contactEmail}?subject=FlowPOS%20SaaS%20inquiry`}>
              {getLandingText(copy.contact.emailButton, language)}
            </a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a href={appLoginUrl}>
              {getLandingText(copy.contact.getStartedButton, language)}
            </a>
          </Button>
        </div>
        <p className='mt-4 text-sm text-muted-foreground'>{contactEmail}</p>
      </div>
    </section>
  )
}
