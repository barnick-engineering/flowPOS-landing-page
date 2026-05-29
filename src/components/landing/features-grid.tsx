import { featureHighlights } from '@/data/site-content'

export function FeaturesGrid() {
  return (
    <section id='features' className='scroll-mt-20 border-y border-border/60 bg-muted/30 py-16 md:py-24'>
      <div className='container'>
        <div className='max-w-2xl'>
          <p className='text-sm font-medium text-amber-700'>Built into the product</p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight'>
            What your team gets on day one
          </h2>
          <p className='mt-3 text-muted-foreground'>
            Inspired by modern restaurant platforms like{' '}
            <a
              href='https://chillypos.com/'
              className='font-medium text-foreground underline-offset-4 hover:underline'
              target='_blank'
              rel='noreferrer'
            >
              ChillyPOS
            </a>
            , but shaped for FlowPOS workflows — open orders, partial pay, and
            optional kitchen in one stack.
          </p>
        </div>

        <div className='mt-10 grid gap-5 sm:grid-cols-2'>
          {featureHighlights.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className='rounded-2xl border bg-card p-6 shadow-sm'
              >
                <div className='flex size-10 items-center justify-center rounded-lg bg-amber-500/15 text-amber-800'>
                  <Icon className='size-5' />
                </div>
                <h3 className='mt-4 font-semibold'>{item.title}</h3>
                <p className='mt-2 text-sm text-muted-foreground'>{item.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
