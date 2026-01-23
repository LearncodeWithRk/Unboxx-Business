'use client';

import { GitMerge, MapPin, KeyRound, TriangleAlert, Users } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export function AutomaticRouting() {
  const destinations = [
    { icon: MapPin, className: 'top-0 left-1/2 -translate-x-1/2 -translate-y-3/4' },
    { icon: Users, className: 'right-0 top-1/2 -translate-y-1/2 translate-x-3/4' },
    { icon: TriangleAlert, className: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-3/4' },
    { icon: KeyRound, className: 'left-0 top-1/2 -translate-y-1/2 -translate-x-3/4' },
  ];

  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:order-last">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Step 2: Route
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Automatic routing. No manual triage.
          </h2>
          <p className="text-lg text-muted-foreground">
            A review about campus housing in Mumbai shouldn't go to your Delhi admissions team. Unboxx Business routes reviews based on location, keywords, department, or rating threshold. The right people see the right reviews without manual sorting.
          </p>
        </div>

        <div className="relative flex h-80 w-full items-center justify-center scale-75 sm:scale-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_65%)]"></div>
            
            <div className="absolute h-px w-full max-w-xs bg-border/50"></div>
            <div className="absolute h-full max-h-xs w-px bg-border/50"></div>
            
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-background border border-border">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
                    <GitMerge className="h-8 w-8 text-primary" />
                </div>
            </div>

            {destinations.map((dest, index) => {
                const Icon = dest.icon;
                return (
                    <div key={index} className={cn("absolute flex h-14 w-14 items-center justify-center rounded-full bg-background border border-border", dest.className)}>
                       <Icon className="h-6 w-6 text-muted-foreground" />
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
