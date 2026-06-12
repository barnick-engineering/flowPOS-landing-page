import { useState, type ComponentType } from 'react'
import {
  Banknote,
  Calendar,
  FileSpreadsheet,
  FileText,
  Globe,
  Languages,
  Receipt,
  ShoppingBag,
  Tag,
  Users,
  Wallet,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getLandingText, landingCopy } from '@/data/site-content'
import { cn } from '@/lib/utils'
import type { Language } from '@/lib/preferences'

type DatePreset = 'today' | 'last7' | 'last30'

const snapshotData: Record<DatePreset, { orders: number; sales: string; discounts: string; avg: string }> = {
  today: { orders: 18, sales: '৳11,840.00', discounts: '৳320.00', avg: '৳658.00' },
  last7: { orders: 128, sales: '৳84,200.00', discounts: '৳2,100.00', avg: '৳658.00' },
  last30: { orders: 542, sales: '৳356,400.00', discounts: '৳8,450.00', avg: '৳658.00' },
}

const salesDays = [
  { label: 'Mon', sales: 9800, orders: 14 },
  { label: 'Tue', sales: 11200, orders: 17 },
  { label: 'Wed', sales: 10500, orders: 16 },
  { label: 'Thu', sales: 12800, orders: 19 },
  { label: 'Fri', sales: 14200, orders: 22 },
  { label: 'Sat', sales: 15600, orders: 24 },
  { label: 'Sun', sales: 10100, orders: 16 },
]

const paymentSegments = [
  { key: 'cash', pct: 52, amount: '৳43,784', color: 'oklch(0.72 0.17 75)' },
  { key: 'card', pct: 28, amount: '৳23,576', color: 'oklch(0.65 0.14 55)' },
  { key: 'mobile', pct: 20, amount: '৳16,840', color: 'oklch(0.55 0.12 250)' },
] as const

function MetricTile({
  icon: Icon,
  label,
  value,
  valueClassName,
  hint,
}: {
  icon: ComponentType<{ className?: string }>
  label: string
  value: string
  valueClassName?: string
  hint?: string
}) {
  return (
    <div className='rounded-lg border bg-card p-4 shadow-none'>
      <div className='flex items-center gap-2'>
        <div className='flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary'>
          <Icon className='size-4' />
        </div>
        <p className='text-xs text-muted-foreground'>{label}</p>
      </div>
      <p className={cn('mt-2 text-lg font-bold tabular-nums', valueClassName)}>{value}</p>
      {hint ? <p className='mt-0.5 text-xs text-muted-foreground'>{hint}</p> : null}
    </div>
  )
}

function SalesLineChart() {
  const width = 320
  const height = 140
  const padX = 28
  const padY = 16
  const maxSales = Math.max(...salesDays.map((d) => d.sales))
  const chartW = width - padX * 2
  const chartH = height - padY * 2

  const salesPoints = salesDays
    .map((d, i) => {
      const x = padX + (i / (salesDays.length - 1)) * chartW
      const y = padY + chartH - (d.sales / maxSales) * chartH
      return `${x},${y}`
    })
    .join(' ')

  const orderMax = Math.max(...salesDays.map((d) => d.orders))
  const orderPoints = salesDays
    .map((d, i) => {
      const x = padX + (i / (salesDays.length - 1)) * chartW
      const y = padY + chartH - (d.orders / orderMax) * chartH
      return `${x},${y}`
    })
    .join(' ')

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className='h-auto w-full' aria-hidden>
      {[0, 0.5, 1].map((t) => {
        const y = padY + chartH * (1 - t)
        return (
          <line
            key={t}
            x1={padX}
            y1={y}
            x2={width - padX}
            y2={y}
            stroke='currentColor'
            strokeOpacity={0.08}
          />
        )
      })}
      <polyline
        fill='none'
        stroke='oklch(0.72 0.17 75)'
        strokeWidth={2.5}
        strokeLinejoin='round'
        strokeLinecap='round'
        points={salesPoints}
      />
      <polyline
        fill='none'
        stroke='oklch(0.55 0.12 250)'
        strokeWidth={2}
        strokeDasharray='4 3'
        strokeLinejoin='round'
        strokeLinecap='round'
        points={orderPoints}
      />
      {salesDays.map((d, i) => {
        const x = padX + (i / (salesDays.length - 1)) * chartW
        return (
          <text
            key={d.label}
            x={x}
            y={height - 2}
            textAnchor='middle'
            className='fill-muted-foreground text-[9px]'
          >
            {d.label}
          </text>
        )
      })}
    </svg>
  )
}

function PaymentDonutChart() {
  const size = 120
  const stroke = 18
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius
  let offset = 0

  return (
    <div className='relative mx-auto size-[120px]'>
      <svg width={size} height={size} className='-rotate-90' aria-hidden>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill='none'
          stroke='currentColor'
          strokeOpacity={0.08}
          strokeWidth={stroke}
        />
        {paymentSegments.map((seg) => {
          const dash = (seg.pct / 100) * circumference
          const circle = (
            <circle
              key={seg.key}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill='none'
              stroke={seg.color}
              strokeWidth={stroke}
              strokeDasharray={`${dash} ${circumference - dash}`}
              strokeDashoffset={-offset}
              strokeLinecap='butt'
            />
          )
          offset += dash
          return circle
        })}
      </svg>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center'>
        <span className='text-xs text-muted-foreground'>Total</span>
        <span className='text-sm font-bold tabular-nums'>৳84,200</span>
      </div>
    </div>
  )
}

export function AnalyticsSection({
  copy,
  language,
}: {
  copy: typeof landingCopy
  language: Language
}) {
  const [preset, setPreset] = useState<DatePreset>('last7')
  const data = snapshotData[preset]
  const ac = copy.analytics

  const totalSales = 84200
  const foodCost = 31500
  const shopExpenses = 8200
  const netProfit = 44500
  const profitPct = ((netProfit / totalSales) * 100).toFixed(1)

  const barSegments = [
    { pct: (foodCost / totalSales) * 100, color: 'bg-amber-500', label: getLandingText(ac.moneyBreakdown.segments.foodCost, language) },
    { pct: (shopExpenses / totalSales) * 100, color: 'bg-orange-500', label: getLandingText(ac.moneyBreakdown.segments.shopExpenses, language) },
    { pct: (netProfit / totalSales) * 100, color: 'bg-emerald-500', label: getLandingText(ac.moneyBreakdown.segments.netProfit, language) },
  ]

  const dateChips: { id: DatePreset; label: string }[] = [
    { id: 'today', label: getLandingText(ac.snapshot.chips.today, language) },
    { id: 'last7', label: getLandingText(ac.snapshot.chips.last7, language) },
    { id: 'last30', label: getLandingText(ac.snapshot.chips.last30, language) },
  ]

  const paymentLabels = {
    cash: getLandingText(ac.trends.paymentMix.cash, language),
    card: getLandingText(ac.trends.paymentMix.card, language),
    mobile: getLandingText(ac.trends.paymentMix.mobile, language),
  }

  const bangladeshBullets = [
    { icon: Wallet, text: getLandingText(ac.bangladesh.taka, language) },
    { icon: Languages, text: getLandingText(ac.bangladesh.bilingual, language) },
    { icon: Users, text: getLandingText(ac.bangladesh.roles, language) },
    { icon: Globe, text: getLandingText(ac.bangladesh.stock, language) },
  ]

  return (
    <section id='analytics' className='scroll-mt-20 border-y border-border/60 bg-muted/20 py-16 md:py-24'>
      <div className='container space-y-14'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-medium text-amber-700'>
            {getLandingText(ac.kicker, language)}
          </p>
          <h2 className='mt-2 text-3xl font-bold tracking-tight md:text-4xl'>
            {getLandingText(ac.title, language)}
          </h2>
          <p className='mt-3 text-muted-foreground'>
            {getLandingText(ac.description, language)}
          </p>
        </div>

        {/* Block 1 — Business Snapshot */}
        <div>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>
              {getLandingText(ac.snapshot.title, language)}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {getLandingText(ac.snapshot.subtitle, language)}
            </p>
          </div>
          <Card className='shadow-none'>
            <CardContent className='space-y-4 pt-6'>
              <div className='flex flex-wrap gap-2'>
                {dateChips.map((chip) => (
                  <button
                    key={chip.id}
                    type='button'
                    onClick={() => setPreset(chip.id)}
                    className={cn(
                      'rounded-full border px-3 py-1 text-xs font-medium transition-colors',
                      preset === chip.id
                        ? 'border-amber-500/50 bg-amber-500/15 text-amber-800'
                        : 'border-border bg-background text-muted-foreground hover:text-foreground',
                    )}
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
              <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
                <MetricTile
                  icon={ShoppingBag}
                  label={getLandingText(ac.snapshot.metrics.orders, language)}
                  value={String(data.orders)}
                />
                <MetricTile
                  icon={Banknote}
                  label={getLandingText(ac.snapshot.metrics.totalSales, language)}
                  value={data.sales}
                />
                <MetricTile
                  icon={Tag}
                  label={getLandingText(ac.snapshot.metrics.discounts, language)}
                  value={data.discounts}
                />
                <MetricTile
                  icon={Receipt}
                  label={getLandingText(ac.snapshot.metrics.averageBill, language)}
                  value={data.avg}
                />
              </div>
            </CardContent>
          </Card>
          <p className='mt-3 text-sm text-muted-foreground'>
            {getLandingText(ac.snapshot.copy, language)}
          </p>
        </div>

        {/* Block 2 — Money Breakdown */}
        <div>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>
              {getLandingText(ac.moneyBreakdown.title, language)}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {getLandingText(ac.moneyBreakdown.subtitle, language)}
            </p>
          </div>
          <Card className='shadow-none'>
            <CardContent className='space-y-4 pt-6'>
              <div className='flex h-5 w-full overflow-hidden rounded-full'>
                {barSegments.map((seg) => (
                  <div
                    key={seg.label}
                    className={cn(seg.color, 'h-full')}
                    style={{ width: `${seg.pct}%` }}
                    title={seg.label}
                  />
                ))}
              </div>
              <div className='flex flex-wrap gap-x-5 gap-y-2 text-xs'>
                <span className='flex items-center gap-1.5'>
                  <span className='size-2.5 rounded-full bg-amber-500' />
                  {getLandingText(ac.moneyBreakdown.segments.foodCost, language)} — ৳31,500.00
                  <span className='text-muted-foreground'>
                    ({getLandingText(ac.moneyBreakdown.foodCostHint, language)})
                  </span>
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='size-2.5 rounded-full bg-orange-500' />
                  {getLandingText(ac.moneyBreakdown.segments.shopExpenses, language)} — ৳8,200.00
                  <span className='text-muted-foreground'>
                    ({getLandingText(ac.moneyBreakdown.shopExpensesHint, language)})
                  </span>
                </span>
                <span className='flex items-center gap-1.5'>
                  <span className='size-2.5 rounded-full bg-emerald-500' />
                  {getLandingText(ac.moneyBreakdown.segments.netProfit, language)} — ৳44,500.00
                </span>
              </div>
              <div className='grid grid-cols-2 gap-3 md:grid-cols-4'>
                <MetricTile
                  icon={Banknote}
                  label={getLandingText(ac.snapshot.metrics.totalSales, language)}
                  value='৳84,200.00'
                />
                <MetricTile
                  icon={Tag}
                  label={getLandingText(ac.moneyBreakdown.segments.foodCost, language)}
                  value='৳31,500.00'
                />
                <MetricTile
                  icon={Receipt}
                  label={getLandingText(ac.moneyBreakdown.segments.shopExpenses, language)}
                  value='৳8,200.00'
                />
                <MetricTile
                  icon={Wallet}
                  label={getLandingText(ac.moneyBreakdown.segments.netProfit, language)}
                  value='৳44,500.00'
                  valueClassName='text-emerald-600'
                  hint={`${profitPct}% ${getLandingText(ac.moneyBreakdown.profitHint, language)}`}
                />
              </div>
            </CardContent>
          </Card>
          <p className='mt-3 text-sm text-muted-foreground'>
            {getLandingText(ac.moneyBreakdown.copy, language)}
          </p>
        </div>

        {/* Block 3 — Trends */}
        <div>
          <div className='mb-4'>
            <h3 className='text-lg font-semibold'>
              {getLandingText(ac.trends.title, language)}
            </h3>
            <p className='text-sm text-muted-foreground'>
              {getLandingText(ac.trends.subtitle, language)}
            </p>
          </div>
          <div className='grid gap-4 lg:grid-cols-2'>
            <Card className='shadow-none'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-base'>
                  {getLandingText(ac.trends.salesByDay.title, language)}
                </CardTitle>
                <CardDescription>
                  {getLandingText(ac.trends.salesByDay.subtitle, language)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className='mb-3 flex gap-4 text-xs text-muted-foreground'>
                  <span className='flex items-center gap-1.5'>
                    <span className='h-0.5 w-4 bg-amber-500' />
                    {getLandingText(ac.snapshot.metrics.totalSales, language)}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <span className='h-0.5 w-4 border-t-2 border-dashed border-indigo-400' />
                    {getLandingText(ac.snapshot.metrics.orders, language)}
                  </span>
                </div>
                <SalesLineChart />
                <p className='mt-2 text-right text-[10px] text-muted-foreground'>৳ axis</p>
              </CardContent>
            </Card>

            <Card className='shadow-none'>
              <CardHeader className='pb-2'>
                <CardTitle className='text-base'>
                  {getLandingText(ac.trends.paymentMix.title, language)}
                </CardTitle>
                <CardDescription>
                  {getLandingText(ac.trends.paymentMix.subtitle, language)}
                </CardDescription>
              </CardHeader>
              <CardContent className='flex flex-col items-center gap-4 sm:flex-row sm:items-start'>
                <PaymentDonutChart />
                <ul className='w-full space-y-2 text-sm'>
                  {paymentSegments.map((seg) => (
                    <li key={seg.key} className='flex items-center justify-between gap-2'>
                      <span className='flex items-center gap-2'>
                        <span
                          className='size-2.5 rounded-full'
                          style={{ backgroundColor: seg.color }}
                        />
                        {paymentLabels[seg.key]}
                      </span>
                      <span className='tabular-nums text-muted-foreground'>
                        {seg.pct}% · {seg.amount}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <p className='mt-3 text-sm text-muted-foreground'>
            {getLandingText(ac.trends.copy, language)}
          </p>
        </div>

        {/* Block 4 — Full reports hub */}
        <Card className='shadow-none'>
          <CardHeader>
            <CardTitle>{getLandingText(ac.fullReports.title, language)}</CardTitle>
            <CardDescription>
              {getLandingText(ac.fullReports.subtitle, language)}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            <ul className='grid gap-2 text-sm text-muted-foreground sm:grid-cols-2'>
              {ac.fullReports.items.map((item) => (
                <li key={item.en} className='flex gap-2'>
                  <span className='text-amber-600'>•</span>
                  {getLandingText(item, language)}
                </li>
              ))}
            </ul>
            <div className='flex flex-wrap items-center gap-2'>
              <span className='inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-xs font-medium'>
                <FileSpreadsheet className='size-3.5 text-emerald-600' />
                {getLandingText(ac.fullReports.exportExcel, language)}
              </span>
              <span className='inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-xs font-medium'>
                <FileText className='size-3.5 text-red-600' />
                {getLandingText(ac.fullReports.exportPdf, language)}
              </span>
              <span className='inline-flex items-center gap-1.5 rounded-md border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground'>
                <Calendar className='size-3.5' />
                {getLandingText(ac.fullReports.dateRange, language)}
              </span>
            </div>
            <Button variant='outline' asChild>
              <a href='#contact'>{getLandingText(ac.fullReports.cta, language)}</a>
            </Button>
          </CardContent>
        </Card>

        {/* Block 5 — Bangladesh callout + dark-mode preview */}
        <div className='grid gap-4 lg:grid-cols-[1fr_auto]'>
          <div className='rounded-xl border bg-card p-4 shadow-none md:p-5'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              {bangladeshBullets.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.text} className='flex gap-3'>
                    <div className='flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary'>
                      <Icon className='size-4' />
                    </div>
                    <p className='text-sm leading-snug text-muted-foreground'>{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>

          <div
            data-theme='dark'
            className='w-full max-w-xs rounded-xl border border-border bg-background p-4 shadow-none lg:w-56'
          >
            <p className='text-xs text-muted-foreground'>
              {getLandingText(ac.snapshot.title, language)}
            </p>
            <p className='mt-1 text-lg font-bold tabular-nums text-foreground'>৳84,200.00</p>
            <p className='text-xs text-muted-foreground'>
              {getLandingText(ac.snapshot.metrics.totalSales, language)}
            </p>
            <div className='mt-3 flex h-2 overflow-hidden rounded-full'>
              <div className='h-full w-[37%] bg-amber-500' />
              <div className='h-full w-[10%] bg-orange-500' />
              <div className='h-full w-[53%] bg-emerald-500' />
            </div>
            <p className='mt-2 text-[10px] text-muted-foreground'>Dark theme preview</p>
          </div>
        </div>
      </div>
    </section>
  )
}
