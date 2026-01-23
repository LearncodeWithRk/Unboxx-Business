'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FooterCTA() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      <div className="container relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Help shape the future of university review management
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Unboxx Business evolves based on client feedback. We add features, integrations, and capabilities driven by the universities we serve. If you're looking for a partner who understands higher education and builds with your input, we'd love to work with you.
          </p>
          <div className="mt-10">
            <Button size="lg" asChild>
              <Link href="/contact#book-a-demo">Book a demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
