'use client';

import React from 'react';
import { Star, ArrowRight, CircleDollarSign } from 'lucide-react';

export function JourneyAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8">
      <div className="flex w-full flex-col items-center justify-around gap-4 sm:flex-row sm:gap-2 md:gap-4 lg:gap-8">
        {/* Problem: Low Review */}
        <div 
            className="flex flex-col items-center gap-2 text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
        >
          <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-destructive/10 border border-destructive/20">
            <div className="flex gap-0.5">
              <Star className="h-5 w-5 md:h-6 md:w-6 text-destructive fill-destructive" />
              <Star className="h-5 w-5 md:h-6 md:w-6 text-destructive/30 fill-destructive/30" />
              <Star className="h-5 w-5 md:h-6 md:w-6 text-destructive/30 fill-destructive/30" />
            </div>
          </div>
          <p className="font-semibold text-destructive text-sm md:text-base">Low Reviews</p>
          <p className="text-xs text-muted-foreground max-w-24">Reputation at risk, losing applicants</p>
        </div>

        <ArrowRight 
            className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground shrink-0 -rotate-90 sm:rotate-0 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '0.5s' }}
        />

        {/* Solution: High Review */}
        <div 
            className="flex flex-col items-center gap-2 text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '0.8s' }}
        >
          <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-primary/10 border border-primary/20">
             <div className="flex gap-0.5">
                <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
                <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
                <Star className="h-5 w-5 md:h-6 md:w-6 text-primary fill-primary" />
             </div>
          </div>
          <p className="font-semibold text-primary text-sm md:text-base">High Reviews</p>
          <p className="text-xs text-muted-foreground max-w-24">Improved trust with Unboxx Business</p>
        </div>

        <ArrowRight 
            className="h-6 w-6 md:h-8 md:w-8 text-muted-foreground shrink-0 -rotate-90 sm:rotate-0 opacity-0 animate-fade-in-up" 
            style={{ animationDelay: '1.1s' }}
        />

        {/* Outcome: Revenue */}
        <div 
            className="flex flex-col items-center gap-2 text-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: '1.4s' }}
        >
          <div className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-chart-2/10 border border-chart-2/20">
            <CircleDollarSign className="h-8 w-8 md:h-10 md:w-10 text-chart-2" />
          </div>
          <p className="font-semibold text-chart-2 text-sm md:text-base">Revenue Growth</p>
           <p className="text-xs text-muted-foreground max-w-24">Increased enrollment and funding</p>
        </div>
      </div>
    </div>
  );
}
