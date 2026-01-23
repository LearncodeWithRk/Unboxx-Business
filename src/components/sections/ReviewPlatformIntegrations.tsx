'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

const supportedPlatforms = [
  'Google Business Profile (primary focus)',
  'Facebook Reviews',
  'Leading education review platforms',
  'Region-specific review sources',
  'Custom sources based on client needs',
];

export function ReviewPlatformIntegrations() {
  return (
    <section className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Review Platform Integrations
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            We monitor where prospective students research
          </h2>
          <p className="text-lg text-muted-foreground">
            Reviews live across multiple platforms. Unboxx Business connects to Google Business Profile, Facebook, education-specific review sites, and other sources where prospective students and parents research universities. See all reviews in one dashboard. Respond without switching platforms.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 rounded-2xl border border-border/20 bg-background/50 p-6 sm:p-8 shadow-lg">
           <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_45%)]"></div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">Supported platforms</h3>
            <ul className="mt-4 space-y-3">
              {supportedPlatforms.map((platform, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70" />
                  <span className="text-sm text-muted-foreground">{platform}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">How it works</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We connect via official APIs where available, maintaining real-time sync for new reviews, responses, and rating updates. All responses publish directly to the original platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
