import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PricingHero } from '@/components/sections/PricingHero';
import { PricingTiers } from '@/components/sections/PricingTiers';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <PricingHero />
        <PricingTiers />
      </main>
      <Footer />
    </>
  );
}
