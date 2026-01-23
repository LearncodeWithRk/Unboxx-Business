import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';
import { RealTimeMonitoring } from '@/components/sections/RealTimeMonitoring';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero />
        <RealTimeMonitoring />
      </main>
      <Footer />
    </>
  );
}
