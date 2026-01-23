import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';
import { RealTimeMonitoring } from '@/components/sections/RealTimeMonitoring';
import { AutomaticRouting } from '@/components/sections/AutomaticRouting';
import { ResponseGovernance } from '@/components/sections/ResponseGovernance';
import { AnalyzeSentiment } from '@/components/sections/AnalyzeSentiment';
import { EscalateAndResolve } from '@/components/sections/EscalateAndResolve';
import { ReportToLeadership } from '@/components/sections/ReportToLeadership';
import { ManagedServices } from '@/components/sections/ManagedServices';
import { FAQs } from '@/components/sections/FAQs';
import { PremiumCTA } from '@/components/sections/PremiumCTA';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero />
        <RealTimeMonitoring />
        <AutomaticRouting />
        <ResponseGovernance />
        <AnalyzeSentiment />
        <EscalateAndResolve />
        <ReportToLeadership />
        <ManagedServices />
      </main>
      <FAQs />
      <PremiumCTA />
      <Footer />
    </>
  );
}
