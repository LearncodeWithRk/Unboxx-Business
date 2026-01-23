import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IntegrationsHero } from '@/components/sections/IntegrationsHero';

export default function IntegrationsPage() {
  return (
    <>
      <Header />
      <main>
        <IntegrationsHero />
        {/* You can start adding your integration components here. */}
      </main>
      <Footer />
    </>
  );
}
