import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <ProductHero />
        <div className="container mx-auto py-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              More product content coming soon
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              You can continue designing your product page components here.
            </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
