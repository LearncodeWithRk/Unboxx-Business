import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IntegrationsHero } from '@/components/sections/IntegrationsHero';
import { ReviewPlatformIntegrations } from '@/components/sections/ReviewPlatformIntegrations';
import { UniversitySystemIntegrations } from '@/components/sections/UniversitySystemIntegrations';

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        <IntegrationsHero />
        <ReviewPlatformIntegrations />
        <UniversitySystemIntegrations />
        {/* You can continue adding your integration components here. */}
      </main>
      <Footer />
    </>
  );
}
