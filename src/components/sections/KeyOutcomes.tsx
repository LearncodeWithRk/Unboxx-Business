'use client';

import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const outcomes = [
  {
    text: 'Reduced response time from days to hours across 12 campuses',
  },
  {
    text: 'Improved Google ratings while maintaining brand voice consistency',
  },
  {
    text: 'Gave leadership visibility into reputation trends for the first time',
  },
];

export function KeyOutcomes() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={index}
              className={cn(
                'group relative flex flex-col justify-start overflow-hidden rounded-2xl border border-border/20 bg-background/50 p-8 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1'
              )}
            >
               <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-start text-left">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 text-primary">
                  <Trophy className="h-6 w-6" />
                </div>
                <p className="mt-6 text-lg font-medium text-foreground">{outcome.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
