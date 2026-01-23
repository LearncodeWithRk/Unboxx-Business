'use client';

import { Button } from '@/components/ui/button';
import { JourneyAnimation } from './JourneyAnimation';
import Link from 'next/link';

export function SolutionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--primary)/0.05),transparent_40%)]"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 lg:py-28">
          <div className="flex flex-col items-center gap-y-8 text-center md:items-start md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              From Reviews to Revenue
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Unboxx Business helps you turn student feedback into a powerful engine for growth. Improve your reputation, increase enrollment, and secure your institution's future.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <Button size="lg" asChild>
                <Link href="/contact#book-a-demo">Book a demo</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/product">See the product</Link>
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Serving premium universities across India and globally
              </p>
            </div>
          </div>
          <div className="relative flex h-full min-h-[300px] w-full items-center justify-center md:min-h-[400px]">
            <JourneyAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}
