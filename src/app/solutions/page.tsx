import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { SolutionsHero } from '@/components/sections/SolutionsHero';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsHero />
      </main>
      <PremiumCTA />
      <Footer />
    </>
  );
}
