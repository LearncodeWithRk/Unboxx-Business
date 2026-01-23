import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PremiumCTA } from '@/components/sections/PremiumCTA';

export default function SolutionsPage() {
  return (
    <>
      <Header />
      <main className="bg-background">
        <section className="py-20 sm:py-28 lg:py-32">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Solutions
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground">
                    Explore our tailored solutions for universities and educational institutions.
                    </p>
                </div>
            </div>
        </section>
      </main>
      <PremiumCTA />
      <Footer />
    </>
  );
}
