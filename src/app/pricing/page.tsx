import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function PricingPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Pricing
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Find a plan that's right for your institution.
                </p>
            </div>
            {/* You can start adding your pricing components here. */}
        </div>
      </main>
      <Footer />
    </>
  );
}
