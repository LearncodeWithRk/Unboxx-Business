import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IntegrationsHero } from '@/components/sections/IntegrationsHero';
import { ReviewPlatformIntegrations } from '@/components/sections/ReviewPlatformIntegrations';

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        <IntegrationsHero />
        <ReviewPlatformIntegrations />
        {/* You can start adding your integration components here. */}
      </main>
      <Footer />
    </>
  );
}
