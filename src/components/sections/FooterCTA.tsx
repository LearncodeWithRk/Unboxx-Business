'use client';

import { Button } from '@/components/ui/button';

export function FooterCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            See Unboxx Business in action
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Schedule a personalized demo to see how our platform can help you centralize review management, gain actionable insights, and protect your brand across all your campuses.
          </p>
          <div className="mt-10">
            <Button size="lg">Book a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
