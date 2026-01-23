import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';
import { RealTimeMonitoring } from '@/components/sections/RealTimeMonitoring';
import { AutomaticRouting } from '@/components/sections/AutomaticRouting';
import { ResponseGovernance } from '@/components/sections/ResponseGovernance';
import { AnalyzeSentiment } from '@/components/sections/AnalyzeSentiment';

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
      </main>
      <Footer />
    </>
  );
}
