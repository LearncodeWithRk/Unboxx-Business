import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IntegrationsHero } from '@/components/sections/IntegrationsHero';
import { ReviewPlatformIntegrations } from '@/components/sections/ReviewPlatformIntegrations';
import { UniversitySystemIntegrations } from '@/components/sections/UniversitySystemIntegrations';
import { ApiAndDataAccess } from '@/components/sections/ApiAndDataAccess';
import { SecurityAndCompliance } from '@/components/sections/SecurityAndCompliance';

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        <IntegrationsHero />
        <ReviewPlatformIntegrations />
        <UniversitySystemIntegrations />
        <ApiAndDataAccess />
        <SecurityAndCompliance />
      </main>
      <Footer />
    </>
  );
}
