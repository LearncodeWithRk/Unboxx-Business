import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { SolutionsHero } from '@/components/sections/SolutionsHero';
import { AdmissionsEnrollment } from '@/components/sections/AdmissionsEnrollment';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsHero />
        <AdmissionsEnrollment />
      </main>
      <PremiumCTA />
      <Footer />
    </>
  );
}
