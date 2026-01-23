import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IntegrationsHero } from '@/components/sections/IntegrationsHero';
import { ReviewPlatformIntegrations } from '@/components/sections/ReviewPlatformIntegrations';
import { UniversitySystemIntegrations } from '@/components/sections/UniversitySystemIntegrations';
import { ApiAndDataAccess } from '@/components/sections/ApiAndDataAccess';

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        <IntegrationsHero />
        <ReviewPlatformIntegrations />
        <UniversitySystemIntegrations />
        <ApiAndDataAccess />
      </main>
      <Footer />
    </>
  );
}
