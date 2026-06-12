import { LandingPage } from '@/pages/landing-page'
import { PreferencesProvider } from '@/contexts/preferences-context'

export function App() {
  return (
    <PreferencesProvider>
      <LandingPage />
    </PreferencesProvider>
  )
}
