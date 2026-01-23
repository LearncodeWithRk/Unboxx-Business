import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { BuiltForUniversities } from '@/components/sections/BuiltForUniversities';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { Button } from '@/components/ui/button';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative w-full overflow-hidden bg-background py-16 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,hsl(var(--primary)/0.1),transparent_40%)]"></div>
          <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              One platform. Every review. Complete control.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              From monitoring to response to insights—everything your university needs to manage reputation across campuses, departments, and review platforms.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg">Book a demo</Button>
              <Button size="lg" variant="secondary">
                View pricing
              </Button>
            </div>
             <div className="mt-8">
              <p className="text-sm text-muted-foreground">
                Built for premium universities worldwide
              </p>
            </div>
          </div>
        </section>
        <HowItWorks />
        <BuiltForUniversities />
        <PremiumCTA />
      </main>
      <Footer />
    </>
  );
}
