import { ContactSection, PricingSection } from '@/components/landing/pricing-section'
import { FeaturesGrid } from '@/components/landing/features-grid'
import { HeroVideo } from '@/components/landing/hero-video'
import { OperationFlow } from '@/components/landing/operation-flow'
import { SiteFooter } from '@/components/landing/site-footer'
import { SiteHeader } from '@/components/landing/site-header'

export function LandingPage() {
  return (
    <div className='flex min-h-svh flex-col'>
      <SiteHeader />
      <main className='flex-1'>
        <HeroVideo />
        <OperationFlow />
        <FeaturesGrid />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}
