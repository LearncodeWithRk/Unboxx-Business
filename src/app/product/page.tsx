import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';
import { RealTimeMonitoring } from '@/components/sections/RealTimeMonitoring';
import { AutomaticRouting } from '@/components/sections/AutomaticRouting';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero />
        <RealTimeMonitoring />
        <AutomaticRouting />
      </main>
      <Footer />
    </>
  );
}
