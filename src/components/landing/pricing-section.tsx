import { Check } from 'lucide-react'
import { pricingPlans } from '@/data/site-content'
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

const contactEmail =
  import.meta.env.VITE_CONTACT_EMAIL ?? 'hello@flowpos.app'

export function PricingSection() {
  return (
    <section id='pricing' className='scroll-mt-20 py-16 md:py-24'>
      <div className='container'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-medium text-amber-700'>SaaS packages</p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
            Sample plans per branch
          </h2>
          <p className='mt-3 text-muted-foreground'>
            Illustrative pricing for marketing — adjust before launch. All plans
            include cloud hosting, updates, and tenant isolation.
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
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.badge ? <Badge>{plan.badge}</Badge> : null}
                </div>
                <CardDescription>{plan.description}</CardDescription>
                <div className='pt-2'>
                  <span className='text-3xl font-bold tracking-tight'>
                    {plan.price}
                  </span>
                  <span className='block text-xs text-muted-foreground'>
                    {plan.period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className='space-y-2.5 text-sm'>
                  {plan.features.map((feature) => (
                    <li key={feature} className='flex gap-2'>
                      <Check className='mt-0.5 size-4 shrink-0 text-amber-600' />
                      <span className='text-muted-foreground'>{feature}</span>
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
                  <a href={`#contact`}>{plan.cta}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className='mt-8 text-center text-xs text-muted-foreground'>
          + one-time onboarding & training available · 7-day trial on Starter &
          Growth · BDT shown as sample — USD invoicing on request
        </p>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id='contact' className='scroll-mt-20 border-t border-border/60 bg-muted/20 py-16'>
      <div className='container max-w-xl text-center'>
        <h2 className='text-2xl font-bold tracking-tight'>Start your tenant</h2>
        <p className='mt-3 text-muted-foreground'>
          Tell us your restaurant name, branch count, and whether you need kitchen
          or counter-only mode. We will provision a sandbox tenant and walk you
          through setup.
        </p>
        <div className='mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row'>
          <Button size='lg' asChild>
            <a href={`mailto:${contactEmail}?subject=FlowPOS%20SaaS%20inquiry`}>
              Email sales
            </a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a href={import.meta.env.VITE_APP_URL ?? 'http://localhost:5173'}>
              Open demo app
            </a>
          </Button>
        </div>
        <p className='mt-4 text-sm text-muted-foreground'>{contactEmail}</p>
      </div>
    </section>
  )
}
