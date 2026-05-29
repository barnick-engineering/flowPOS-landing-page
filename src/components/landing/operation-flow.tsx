import { operationSteps } from '@/data/site-content'
import { cn } from '@/lib/utils'

export function OperationFlow() {
  return (
    <section id='how-it-works' className='scroll-mt-20 py-16 md:py-24'>
      <div className='container'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-medium text-amber-700'>How FlowPOS runs</p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
            Clear path from first order to month-end
          </h2>
          <p className='mt-3 text-muted-foreground'>
            Whether you run a busy dine-in floor or a takeaway counter, the same
            SaaS tenant follows one operational story — setup, sell, fulfill, pay,
            then manage stock and people.
          </p>
        </div>

        <ol className='relative mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-1'>
          {operationSteps.map((item, index) => {
            const Icon = item.icon
            const isLast = index === operationSteps.length - 1
            return (
              <li
                key={item.step}
                className={cn(
                  'relative flex gap-5 rounded-2xl border bg-card p-5 shadow-sm md:p-6',
                  'md:items-start',
                )}
              >
                {!isLast && (
                  <span
                    className='absolute top-full left-8 hidden h-6 w-px bg-border md:block'
                    aria-hidden
                  />
                )}
                <div className='flex size-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/15 text-amber-800'>
                  <Icon className='size-6' />
                </div>
                <div className='min-w-0 flex-1 text-start'>
                  <div className='flex flex-wrap items-center gap-2'>
                    <span className='text-xs font-semibold text-amber-700'>
                      Step {item.step}
                    </span>
                    <span className='text-xs text-muted-foreground'>
                      {item.summary}
                    </span>
                  </div>
                  <h3 className='mt-1 text-lg font-semibold'>{item.title}</h3>
                  <p className='mt-2 text-sm leading-relaxed text-muted-foreground'>
                    {item.detail}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>

        <div className='mx-auto mt-10 max-w-3xl rounded-xl border border-dashed border-amber-500/40 bg-amber-500/5 px-5 py-4 text-center text-sm text-muted-foreground'>
          <strong className='text-foreground'>SaaS model:</strong> each restaurant
          (tenant) gets isolated data, configurable modules per employee, and
          optional kitchen mode — you pay per branch, not per receipt.
        </div>
      </div>
    </section>
  )
}
