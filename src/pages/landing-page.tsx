import { ContactSection, PricingSection } from '@/components/landing/pricing-section'
import { AnalyticsSection } from '@/components/landing/analytics-section'
import { FeaturesGrid } from '@/components/landing/features-grid'
import { DemoVideoSection } from '@/components/landing/demo-video-section'
import { HeroVideo } from '@/components/landing/hero-video'
import { OperationFlow } from '@/components/landing/operation-flow'
import { landingCopy } from '@/data/site-content'
import { usePreferences } from '@/contexts/preferences-context'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export function LandingPage() {
  const { language } = usePreferences()
  const copy = landingCopy

  return (
    <div className='flex min-h-svh flex-col'>
      <SiteHeader copy={copy} language={language} />
      <main className='flex-1'>
        <HeroVideo copy={copy} language={language} />
        <DemoVideoSection copy={copy} language={language} />
        <OperationFlow copy={copy} language={language} />
        <AnalyticsSection copy={copy} language={language} />
        <FeaturesGrid copy={copy} language={language} />
        <PricingSection copy={copy} language={language} />
        <ContactSection copy={copy} language={language} />
      </main>
      <SiteFooter copy={copy} language={language} />
    </div>
  )
}
