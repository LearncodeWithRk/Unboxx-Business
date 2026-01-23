import { Button } from '@/components/ui/button';
import { StakeholderOrbitAnimation } from './StakeholderOrbitAnimation';

export function SolutionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,hsl(var(--primary)/0.1),transparent_40%)]"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 lg:py-28">
          <div className="flex flex-col items-center gap-y-8 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Built for the way universities work
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Whether you're in admissions, student experience, operations, or leadership—Unboxx Business gives you the tools to manage reputation, improve outcomes, and protect your institution's brand.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button size="lg">Book a demo</Button>
              <Button size="lg" variant="secondary">
                See the product
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Serving premium universities across India and globally
              </p>
            </div>
          </div>
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
            <StakeholderOrbitAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
