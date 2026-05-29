import {
  BarChart3,
  ChefHat,
  CreditCard,
  LayoutGrid,
  Package,
  Users,
  UtensilsCrossed,
  type LucideIcon,
} from 'lucide-react'

export type OperationStep = {
  step: number
  title: string
  summary: string
  detail: string
  icon: LucideIcon
}

export const operationSteps: OperationStep[] = [
  {
    step: 1,
    title: 'Set up your venue',
    summary: 'Menu, tables, staff & roles',
    detail:
      'Configure categories, items with variants and add-ons, floor plans, and who can access POS, kitchen, reports, or HR.',
    icon: LayoutGrid,
  },
  {
    step: 2,
    title: 'Take orders at POS',
    summary: 'Dine-in, takeaway, open tabs',
    detail:
      'Fast cart flow with table selection, saved open orders, and optional kitchen send — or counter mode with save-and-pay only.',
    icon: UtensilsCrossed,
  },
  {
    step: 3,
    title: 'Kitchen or counter flow',
    summary: 'Cook, ready, disburse',
    detail:
      'When kitchen is enabled: items queue, status updates live, and staff disburse when food is ready — with payment prompts if needed.',
    icon: ChefHat,
  },
  {
    step: 4,
    title: 'Collect payment',
    summary: 'Cash, card, split, partial',
    detail:
      'Pay from POS or open-order details. Partial payments, discounts, loyalty, and receipt preview — built for busy counters.',
    icon: CreditCard,
  },
  {
    step: 5,
    title: 'Run the business',
    summary: 'Stock, reports, workforce',
    detail:
      'Inventory, purchase orders, P&L-style reports, geofenced attendance, leave, and payroll — one SaaS tenant per restaurant brand.',
    icon: BarChart3,
  },
]

export type PricingPlan = {
  id: string
  name: string
  badge?: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: '৳1,200',
    period: '/ branch / month',
    description: 'Single-location cafés and quick-service counters.',
    features: [
      'Unlimited orders & staff logins',
      'POS with save-and-pay (no kitchen required)',
      'Open orders & table management',
      'Basic sales reports',
      'Cloud backup per tenant',
    ],
    cta: 'Start free trial',
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most popular',
    price: '৳2,400',
    period: '/ branch / month',
    description: 'Full-service restaurants with kitchen and inventory.',
    features: [
      'Everything in Starter',
      'Kitchen display & disburse workflow',
      'Recipes, stock & purchase orders',
      'Customer loyalty & discounts',
      'Email support',
    ],
    cta: 'Start free trial',
    highlighted: true,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '৳3,800',
    period: '/ branch / month',
    description: 'Multi-module operators who need HR and deeper analytics.',
    features: [
      'Everything in Growth',
      'HR: attendance, leave, payroll',
      'Workforce KPI dashboards',
      'Role-based module access',
      'Priority onboarding',
    ],
    cta: 'Talk to sales',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Custom',
    period: 'multi-branch & groups',
    description: 'Chains, franchises, and custom integrations.',
    features: [
      'Multi-branch billing & admin',
      'Custom SLA & dedicated support',
      'API / integration roadmap',
      'Training & migration assistance',
      'Volume pricing',
    ],
    cta: 'Get a quote',
  },
]

export const featureHighlights = [
  {
    title: 'One POS, every shift',
    body: 'New orders, open tabs, and append-to-order without leaving the terminal.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Kitchen-aware or counter-only',
    body: 'Toggle kitchen workflow in settings — retail-style save & pay when you do not need a line.',
    icon: ChefHat,
  },
  {
    title: 'Inventory linked to menu',
    body: 'Recipes deduct stock; purchase orders bring supply back in sync.',
    icon: Package,
  },
  {
    title: 'Team & payroll',
    body: 'Check-in with geofence, approve leave, generate monthly payroll from attendance.',
    icon: Users,
  },
]
