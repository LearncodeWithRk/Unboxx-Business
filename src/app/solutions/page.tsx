import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { SolutionsHero } from '@/components/sections/SolutionsHero';
import { AdmissionsEnrollment } from '@/components/sections/AdmissionsEnrollment';
import { StudentExperience } from '@/components/sections/StudentExperience';
import { MultiCampusOperations } from '@/components/sections/MultiCampusOperations';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main>
        <SolutionsHero />
        <AdmissionsEnrollment />
        <StudentExperience />
        <MultiCampusOperations />
      </main>
      <PremiumCTA />
      <Footer />
    </>
  );
}
