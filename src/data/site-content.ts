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
import { text, type Language, type LocalizedText, translate } from '@/lib/preferences'

export type OperationStep = {
  step: number
  title: LocalizedText
  summary: LocalizedText
  detail: LocalizedText
  icon: LucideIcon
}

export type PricingPlan = {
  id: string
  name: LocalizedText
  badge?: LocalizedText
  price: string
  period: LocalizedText
  description: LocalizedText
  features: LocalizedText[]
  cta: LocalizedText
  highlighted?: boolean
}

export type FeatureHighlight = {
  title: LocalizedText
  body: LocalizedText
  icon: LucideIcon
}

export const landingCopy = {
  header: {
    nav: {
      features: text('Features', 'ফিচার'),
      pricing: text('Pricing', 'মূল্য'),
      contact: text('Contact', 'যোগাযোগ'),
    },
    actions: {
      getStarted: text('Get started', 'শুরু করুন'),
    },
  },
  hero: {
    badge: text('Restaurant POS SaaS', 'রেস্তোরাঁ POS SaaS'),
    titlePrefix: text(
      'Run orders, kitchen, payments, and staff —',
      'অর্ডার, কিচেন, পেমেন্ট আর স্টাফ চালান —',
    ),
    titleHighlight: text('one cloud platform', 'একটি ক্লাউড প্ল্যাটফর্ম'),
    description: text(
      'FlowPOS is built for restaurants and food businesses in Bangladesh and beyond. Subscribe per branch, onboard your team, and operate from counter to back office without juggling separate tools.',
      'FlowPOS বাংলাদেশসহ নানা জায়গার রেস্তোরাঁ ও ফুড বিজনেসের জন্য বানানো। প্রতি শাখায় সাবস্ক্রাইব করুন, টিম অনবোর্ড করুন, আর কাউন্টার থেকে ব্যাক অফিস পর্যন্ত আলাদা টুল ছাড়াই কাজ করুন।',
    ),
    videoCaption: text(
      'See FlowPOS in action — POS, kitchen, payments, and reports',
      'FlowPOS দেখুন — POS, কিচেন, পেমেন্ট ও রিপোর্ট',
    ),
    ctaTrial: text('Start free trial', 'ফ্রি ট্রায়াল শুরু করুন'),
    ctaGetStarted: text('Get started', 'শুরু করুন'),
  },
  analytics: {
    kicker: text('Built into the product', 'প্রোডাক্টের ভেতরেই আছে'),
    title: text(
      'See how your restaurant is doing — at a glance',
      'আপনার রেস্তোরাঁ কেমন চলছে — এক নজরে',
    ),
    description: text(
      'Compact infographic dashboards and full reports. No spreadsheets. Amounts in ৳ Taka. Switch between English and বাংলা.',
      'কমপ্যাক্ট ইনফোগ্রাফিক ড্যাশবোর্ড ও পূর্ণ রিপোর্ট। স্প্রেডশিট নয়। সব অঙ্ক ৳ টাকায়। ইংরেজি ও বাংলায় স্যুইচ করুন।',
    ),
    snapshot: {
      title: text('Business Snapshot', 'ব্যবসার সারাংশ'),
      subtitle: text('Paid orders in this period', 'এই সময়ের পেইড অর্ডার'),
      copy: text(
        'Key numbers first — orders, sales, discounts, and average bill per paid order.',
        'প্রথমে মূল সংখ্যা — অর্ডার, বিক্রয়, ছাড়, আর প্রতি পেইড অর্ডারে গড় বিল।',
      ),
      chips: {
        today: text('Today', 'আজ'),
        last7: text('Last 7 days', 'গত ৭ দিন'),
        last30: text('Last 30 days', 'গত ৩০ দিন'),
      },
      metrics: {
        orders: text('Orders', 'অর্ডার'),
        totalSales: text('Total Sales', 'মোট বিক্রয়'),
        discounts: text('Discounts', 'ছাড়'),
        averageBill: text('Average Bill', 'গড় বিল'),
      },
    },
    moneyBreakdown: {
      title: text('Money Breakdown', 'টাকার বিভাজন'),
      subtitle: text('Total sales, costs, and what you keep', 'মোট বিক্রয়, খরচ, আর যা থাকে'),
      copy: text(
        'Owners see food cost, operating expenses, and net profit on one screen — not buried in Excel.',
        'মালিকরা এক স্ক্রিনে খাদ্য খরচ, অপারেটিং খরচ, আর নিট লাভ দেখেন — Excel-এ হারিয়ে নয়।',
      ),
      segments: {
        foodCost: text('Food Cost', 'খাদ্য খরচ'),
        shopExpenses: text('Shop Expenses', 'দোকানের খরচ'),
        netProfit: text('Net Profit', 'নিট লাভ'),
      },
      foodCostHint: text('ingredient & recipe cost', 'উপকরণ ও রেসিপি খরচ'),
      shopExpensesHint: text('rent, utilities, etc.', 'ভাড়া, ইউটিলিটি ইত্যাদি'),
      profitHint: text('of sales', 'বিক্রয়ের'),
    },
    trends: {
      title: text('Trends', 'ট্রেন্ড'),
      subtitle: text('Daily sales and how customers paid', 'দৈনিক বিক্রয় ও গ্রাহক কীভাবে পেমেন্ট করেছেন'),
      copy: text(
        'Understand daily rhythm and payment mix — essential for Bangladesh counters.',
        'দৈনিক ছন্দ ও পেমেন্ট মিক্স বুঝুন — বাংলাদেশের কাউন্টারের জন্য অপরিহার্য।',
      ),
      salesByDay: {
        title: text('Sales by Day', 'দিনভিত্তিক বিক্রয়'),
        subtitle: text('Orders and total sales each day', 'প্রতিদিন অর্ডার ও মোট বিক্রয়'),
      },
      paymentMix: {
        title: text('How Customers Paid', 'গ্রাহক কীভাবে পেমেন্ট করেছেন'),
        subtitle: text('Cash, card, and mobile', 'নগদ, কার্ড, ও মোবাইল'),
        cash: text('Cash', 'নগদ'),
        card: text('Card', 'কার্ড'),
        mobile: text('Mobile', 'মোবাইল'),
      },
    },
    fullReports: {
      title: text('Full reports', 'পূর্ণ রিপোর্ট'),
      subtitle: text('Categories, top items, staff sales, and expenses', 'ক্যাটাগরি, টপ আইটেম, স্টাফ বিক্রয়, ও খরচ'),
      items: [
        text('Sales by category (pie chart)', 'ক্যাটাগরি অনুযায়ী বিক্রয় (পাই চার্ট)'),
        text('Top items (horizontal bar — qty sold)', 'টপ আইটেম (অনুভূমিক বার — বিক্রিত পরিমাণ)'),
        text('Employee performance (orders & revenue by staff)', 'কর্মী পারফরম্যান্স (স্টাফ অনুযায়ী অর্ডার ও আয়)'),
        text('Expense summary by category', 'ক্যাটাগরি অনুযায়ী খরচের সারাংশ'),
        text('Item-wise sales with food cost & margin per menu item', 'আইটেমভিত্তিক বিক্রয় — প্রতি মেনু আইটেমে খাদ্য খরচ ও মার্জিন'),
      ],
      exportExcel: text('Excel', 'Excel'),
      exportPdf: text('PDF', 'PDF'),
      dateRange: text('Date range', 'তারিখের পরিসর'),
      cta: text('View reports', 'রিপোর্ট দেখুন'),
    },
    bangladesh: {
      taka: text('৳ Taka everywhere — POS, receipts, reports', '৳ টাকা সর্বত্র — POS, রসিদ, রিপোর্ট'),
      bilingual: text('বাংলা | English — operators toggle language in the sidebar', 'বাংলা | English — অপারেটর সাইডবারে ভাষা বদলান'),
      roles: text('Role-based views — cashiers see snapshot; owners see money breakdown + export', 'ভূমিকা-ভিত্তিক ভিউ — ক্যাশিয়ার সারাংশ দেখেন; মালিক টাকার বিভাজন + এক্সপোর্ট'),
      stock: text('Low stock alerts on dashboard when inventory is enabled', 'ইনভেন্টরি চালু থাকলে ড্যাশবোর্ডে লো স্টক অ্যালার্ট'),
    },
  },
  features: {
    kicker: text('Built into the product', 'প্রোডাক্টের ভেতরেই আছে'),
    title: text('What your team gets on day one', 'প্রথম দিনেই টিম যা পায়'),
    descriptionBeforeLink: text(
      'Inspired by modern restaurant platforms like ',
      'আধুনিক রেস্তোরাঁ প্ল্যাটফর্ম যেমন ',
    ),
    descriptionAfterLink: text(
      ', but shaped for FlowPOS workflows - open orders, partial pay, and optional kitchen in one stack.',
      ', কিন্তু FlowPOS workflow-এর জন্য সাজানো - খোলা অর্ডার, আংশিক পেমেন্ট, আর ঐচ্ছিক কিচেন এক স্ট্যাকে।',
    ),
    descriptionLink: 'ChillyPOS',
  },
  operations: {
    kicker: text('How FlowPOS runs', 'FlowPOS কীভাবে চলে'),
    title: text(
      'Clear path from first order to month-end',
      'প্রথম অর্ডার থেকে মাসের শেষ পর্যন্ত পরিষ্কার পথ',
    ),
    description: text(
      'Whether you run a busy dine-in floor or a takeaway counter, the same SaaS tenant follows one operational story - setup, sell, fulfill, pay, then manage stock and people.',
      'আপনি ব্যস্ত বসার-সেবার ফ্লোর চালান বা টেকঅ্যাওয়ে কাউন্টার, একই SaaS tenant একটি অপারেশনাল গল্পই অনুসরণ করে - সেটআপ, বিক্রি, প্রস্তুতকরণ, পেমেন্ট, তারপর স্টক আর কর্মী ব্যবস্থাপনা।',
    ),
    footnoteStrong: text('SaaS model:', 'SaaS মডেল:'),
    footnoteAfter: text(
      ' each restaurant (tenant) gets isolated data, configurable modules per employee, and optional kitchen mode - you pay per branch, not per receipt.',
      ' প্রতিটি রেস্তোরাঁ (tenant) আলাদা তথ্য পায়, কর্মীভেদে মডিউল কনফিগার করা যায়, আর ঐচ্ছিক কিচেন মোড থাকে - আপনি শাখাভিত্তিক পেমেন্ট করেন, রসিদভিত্তিক নয়।',
    ),
  },
  pricing: {
    kicker: text('SaaS packages', 'SaaS প্যাকেজ'),
    title: text('Sample plans per branch', 'প্রতি শাখার নমুনা প্ল্যান'),
    description: text(
      'Illustrative pricing for marketing - adjust before launch. All plans include cloud hosting, updates, and tenant isolation.',
      'মার্কেটিংয়ের জন্য নমুনা মূল্য - লঞ্চের আগে ঠিক করুন। সব প্ল্যানে ক্লাউড হোস্টিং, আপডেট, আর tenant isolation আছে।',
    ),
    note: text(
      '+ one-time onboarding & training available - 7-day trial on Starter & Growth - BDT shown as sample - USD invoicing on request',
      '+ একবারের অনবোর্ডিং ও ট্রেনিং পাওয়া যাবে - Starter ও Growth-এ 7 দিনের ট্রায়াল - BDT কেবল নমুনা, চাইলে USD-এ ইনভয়েস করা যাবে',
    ),
  },
  contact: {
    title: text('Start your tenant', 'আপনার tenant শুরু করুন'),
    description: text(
      'Tell us your restaurant name, branch count, and whether you need kitchen or counter-only mode. We will provision a sandbox tenant and walk you through setup.',
      'আপনার রেস্তোরাঁর নাম, শাখার সংখ্যা, আর কিচেন নাকি শুধু কাউন্টার মোড চান তা জানান। আমরা একটি স্যান্ডবক্স tenant প্রস্তুত করে সেটআপ দেখিয়ে দেব।',
    ),
    emailButton: text('Email sales', 'সেলসকে ইমেইল'),
    getStartedButton: text('Get started', 'শুরু করুন'),
  },
  footer: {
    copyright: text(
      'Restaurant POS SaaS',
      'রেস্তোরাঁ POS SaaS',
    ),
    process: text('Process', 'প্রক্রিয়া'),
    features: text('Features', 'ফিচার'),
    pricing: text('Pricing', 'মূল্য'),
    contact: text('Contact', 'যোগাযোগ'),
  },
}

export const operationSteps: OperationStep[] = [
  {
    step: 1,
    title: text('Set up your venue', 'ভেন্যু সেটআপ করুন'),
    summary: text('Menu, tables, staff & roles', 'মেনু, টেবিল, স্টাফ ও রোল'),
    detail: text(
      'Configure categories, items with variants and add-ons, floor plans, and who can access POS, kitchen, reports, or HR.',
      'ক্যাটাগরি, ভ্যারিয়েন্ট ও অ্যাড-অনসহ আইটেম, ফ্লোর প্ল্যান, আর POS, কিচেন, রিপোর্ট বা HR কারা ব্যবহার করবে তা কনফিগার করুন।',
    ),
    icon: LayoutGrid,
  },
  {
    step: 2,
    title: text('Take orders at POS', 'POS-এ অর্ডার নিন'),
    summary: text('Dine-in, takeaway, open tabs', 'বসে খাওয়া, নিয়ে যাওয়া, খোলা ট্যাব'),
    detail: text(
      'Fast cart flow with table selection, saved open orders, and optional kitchen send - or counter mode with save-and-pay only.',
      'টেবিল নির্বাচন, সংরক্ষিত খোলা অর্ডার, আর ঐচ্ছিক কিচেন সেন্ডসহ দ্রুত কার্ট ফ্লো - অথবা শুধু সংরক্ষণ-ও-পেমেন্টসহ কাউন্টার মোড।',
    ),
    icon: UtensilsCrossed,
  },
  {
    step: 3,
    title: text('Kitchen or counter flow', 'কিচেন বা কাউন্টার ফ্লো'),
    summary: text('Cook, ready, disburse', 'রান্না, প্রস্তুত, বিতরণ'),
    detail: text(
      'When kitchen is enabled: items queue, status updates live, and staff disburse when food is ready - with payment prompts if needed.',
      'কিচেন চালু থাকলে: আইটেম কিউ হয়, স্ট্যাটাস লাইভ আপডেট হয়, আর খাবার প্রস্তুত হলে স্টাফ বিতরণ করে - দরকার হলে পেমেন্ট প্রম্পটসহ।',
    ),
    icon: ChefHat,
  },
  {
    step: 4,
    title: text('Collect payment', 'পেমেন্ট সংগ্রহ করুন'),
    summary: text('Cash, card, split, partial', 'নগদ, কার্ড, ভাগ, আংশিক'),
    detail: text(
      'Pay from POS or open-order details. Partial payments, discounts, loyalty, and receipt preview - built for busy counters.',
      'POS বা খোলা অর্ডারের বিবরণ থেকে পেমেন্ট করুন। আংশিক পেমেন্ট, ছাড়, লয়্যালটি, আর রসিদ প্রিভিউ - ব্যস্ত কাউন্টারের জন্য তৈরি।',
    ),
    icon: CreditCard,
  },
  {
    step: 5,
    title: text('Run the business', 'ব্যবসা চালান'),
    summary: text('Stock, reports, workforce', 'স্টক, রিপোর্ট, কর্মীবাহিনী'),
    detail: text(
      'Inventory, purchase orders, P&L-style reports, geofenced attendance, leave, and payroll - one SaaS tenant per restaurant brand.',
      'ইনভেন্টরি, ক্রয় আদেশ, P&L-স্টাইল রিপোর্ট, জিওফেন্সড উপস্থিতি, ছুটি, আর payroll - প্রতিটি রেস্তোরাঁ ব্র্যান্ডের জন্য একটি SaaS tenant।',
    ),
    icon: BarChart3,
  },
]

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: text('Starter', 'Starter'),
    price: '৳1,200',
    period: text('/ branch / month', '/ শাখা / মাস'),
    description: text(
      'Single-location cafés and quick-service counters.',
      'একক-শাখার ক্যাফে আর দ্রুত-সেবা কাউন্টার।',
    ),
    features: [
      text('Unlimited orders & staff logins', 'আনলিমিটেড অর্ডার ও স্টাফ লগইন'),
      text(
        'POS with save-and-pay (no kitchen required)',
        'সংরক্ষণ-ও-পেমেন্টসহ POS (কিচেন দরকার নেই)',
      ),
      text('Open orders & table management', 'খোলা অর্ডার ও টেবিল ম্যানেজমেন্ট'),
      text('Basic sales reports', 'বেসিক বিক্রয় রিপোর্ট'),
      text('Cloud backup per tenant', 'প্রতি tenant-এ ক্লাউড ব্যাকআপ'),
    ],
    cta: text('Start free trial', 'ফ্রি ট্রায়াল শুরু করুন'),
  },
  {
    id: 'growth',
    name: text('Growth', 'Growth'),
    badge: text('Most popular', 'সবচেয়ে জনপ্রিয়'),
    price: '৳2,400',
    period: text('/ branch / month', '/ শাখা / মাস'),
    description: text(
      'Full-service restaurants with kitchen and inventory.',
      'কিচেন ও ইনভেন্টরি-সহ পূর্ণ-সেবা রেস্তোরাঁ।',
    ),
    features: [
      text('Everything in Starter', 'Starter-এর সবকিছু'),
      text('Kitchen display & disburse workflow', 'কিচেন ডিসপ্লে ও বিতরণ workflow'),
      text('Recipes, stock & purchase orders', 'রেসিপি, স্টক ও ক্রয় আদেশ'),
      text('Customer loyalty & discounts', 'গ্রাহক লয়্যালটি ও ছাড়'),
      text('Email support', 'ইমেইল সাপোর্ট'),
    ],
    cta: text('Start free trial', 'ফ্রি ট্রায়াল শুরু করুন'),
    highlighted: true,
  },
  {
    id: 'pro',
    name: text('Pro', 'Pro'),
    price: '৳3,800',
    period: text('/ branch / month', '/ শাখা / মাস'),
    description: text(
      'Multi-module operators who need HR and deeper analytics.',
      'HR আর গভীর বিশ্লেষণ দরকার এমন বহু-মডিউল অপারেটর।',
    ),
    features: [
      text('Everything in Growth', 'Growth-এর সবকিছু'),
      text('HR: attendance, leave, payroll', 'HR: attendance, leave, payroll'),
      text(
        'Dashboard infographics, P&L breakdown, and Excel/PDF report export',
        'ড্যাশবোর্ড ইনফোগ্রাফিক, P&L বিভাজন, ও Excel/PDF রিপোর্ট এক্সপোর্ট',
      ),
      text('Workforce KPI dashboards', 'কর্মীবাহিনীর KPI ড্যাশবোর্ড'),
      text('Role-based module access', 'ভূমিকা-ভিত্তিক মডিউল অ্যাক্সেস'),
      text('Priority onboarding', 'অগ্রাধিকার অনবোর্ডিং'),
    ],
    cta: text('Talk to sales', 'সেলসের সাথে কথা বলুন'),
  },
  {
    id: 'enterprise',
    name: text('Enterprise', 'Enterprise'),
    price: 'Custom',
    period: text('multi-branch & groups', 'একাধিক শাখা ও গ্রুপ'),
    description: text(
      'Chains, franchises, and custom integrations.',
      'চেইন, ফ্র্যাঞ্চাইজি, আর কাস্টম ইন্টিগ্রেশন।',
    ),
    features: [
      text('Multi-branch billing & admin', 'একাধিক শাখার বিলিং ও অ্যাডমিন'),
      text('Custom SLA & dedicated support', 'কাস্টম SLA ও নিবেদিত সাপোর্ট'),
      text('API / integration roadmap', 'API / integration roadmap'),
      text('Training & migration assistance', 'ট্রেনিং ও মাইগ্রেশন সহায়তা'),
      text('Volume pricing', 'ভলিউম প্রাইসিং'),
    ],
    cta: text('Get a quote', 'কোটেশন নিন'),
  },
]

export const featureHighlights: FeatureHighlight[] = [
  {
    title: text('One POS, every shift', 'এক POS, সব শিফট'),
    body: text(
      'New orders, open tabs, and append-to-order without leaving the terminal.',
      'টার্মিনাল ছাড়াই নতুন অর্ডার, খোলা ট্যাব, আর অর্ডারে যোগ করা যায়।',
    ),
    icon: UtensilsCrossed,
  },
  {
    title: text(
      'Kitchen-aware or counter-only',
      'কিচেনসহ বা শুধু কাউন্টার',
    ),
    body: text(
      'Toggle kitchen workflow in settings - retail-style save & pay when you do not need a line.',
      'সেটিংসে কিচেন workflow চালু বা বন্ধ করুন - লাইন না লাগলে খুচরা-ধাঁচের সংরক্ষণ ও পেমেন্ট ব্যবহার করুন।',
    ),
    icon: ChefHat,
  },
  {
    title: text('Inventory linked to menu', 'মেনুর সাথে যুক্ত inventory'),
    body: text(
      'Recipes deduct stock; purchase orders bring supply back in sync.',
      'রেসিপি স্টক কেটে দেয়; ক্রয় আদেশ আবার সরবরাহ মিলিয়ে আনে।',
    ),
    icon: Package,
  },
  {
    title: text('Team & payroll', 'টিম ও payroll'),
    body: text(
      'Check-in with geofence, approve leave, generate monthly payroll from attendance.',
      'জিওফেন্স দিয়ে চেক-ইন, ছুটি অনুমোদন, আর উপস্থিতি থেকে মাসিক payroll তৈরি করুন।',
    ),
    icon: Users,
  },
]

export function getLandingText<T extends LocalizedText>(
  value: T,
  language: Language,
) {
  return translate(value, language)
}
