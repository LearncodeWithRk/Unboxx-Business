'use client';

import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="relative container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_60%)]"></div>
        <div className="relative flex flex-col items-center gap-6 rounded-2xl border border-border/20 bg-background/50 p-12 text-center shadow-lg backdrop-blur-sm">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Ready to unify your reputation?
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            See how Unboxx Business can transform your review management process
            and turn your institution's reputation into a competitive
            advantage.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Button size="lg">Book a demo</Button>
            <Button size="lg" variant="secondary">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
