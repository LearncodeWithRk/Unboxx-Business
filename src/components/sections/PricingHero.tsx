'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import React from 'react';

export function PricingHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#02040c] py-20 sm:py-28 lg:py-32">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px)',
          backgroundSize: '2rem 2rem',
        }}
      />
      {/* Top Light Beams */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-[1200px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_0%,transparent_60%)] z-0" />
      <div className="absolute top-0 left-1/2 -translate-x-1/4 h-[500px] w-full max-w-[1200px] bg-[radial-gradient(circle,hsl(var(--primary)/0.05)_0%,transparent_70%)] z-0 opacity-50" />

      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <div className="flex flex-col items-center gap-y-6 text-center">
          <Badge
            variant="outline"
            className="border-primary/50 bg-primary/10 text-primary animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Pricing
          </Badge>
          <h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            Pricing that scales with your institution
          </h1>
          <p
            className="max-w-2xl text-lg text-muted-foreground animate-fade-in-up"
            style={{ animationDelay: '0.6s' }}
          >
            Whether you're managing one campus or twenty, Unboxx Business offers flexible pricing based on your review volume, campus count, and feature needs. All plans include training and support.
          </p>

          <div
            className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up md:justify-start"
            style={{ animationDelay: '0.8s' }}
          >
            <Button
              size="lg"
              className="transition-all duration-300 hover:shadow-primary/50 hover:shadow-lg hover:scale-105"
            >
              Get a quote
            </Button>
            <Button size="lg" variant="outline">
              Book a demo
            </Button>
          </div>

          <div
            className="pt-6 text-left animate-fade-in-up"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-primary" />
              <span>Procurement-friendly. No hidden fees.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
