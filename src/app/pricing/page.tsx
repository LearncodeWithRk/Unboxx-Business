import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PricingHero } from '@/components/sections/PricingHero';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            {/* You can start adding your pricing components here. */}
        </div>
      </main>
      <Footer />
    </>
  );
}
