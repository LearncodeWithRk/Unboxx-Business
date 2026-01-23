import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero />
      </main>
      <Footer />
    </>
  );
}
