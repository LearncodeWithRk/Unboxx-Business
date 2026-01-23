'use client';

import { Boxes, MessagesSquare, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

const challenges = [
  {
    icon: Boxes,
    title: 'Scattered Platforms',
    description:
      'Reviews are scattered across Google, social media, and dozens of education portals with no central ownership.',
  },
  {
    icon: MessagesSquare,
    title: 'Inconsistent Responses',
    description:
      'Responses lack brand consistency, vary in tone, and often miss critical context from other departments.',
  },
  {
    icon: ShieldAlert,
    title: 'Hidden Risks',
    description:
      'Negative trends and recurring issues go unnoticed, creating blind spots that put your brand and enrollment at risk.',
  },
];

export function TheChallenge() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Your reputation is fragmented across campuses, platforms, and departments
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Prospective students and parents read reviews before they ever contact you. But with feedback scattered everywhere, it's impossible to maintain a consistent brand voice, spot trends, or prevent issues from slipping through the cracks.
          </p>
        </div>

        <div className="relative mt-20">
           <div className="absolute -inset-x-4 -top-24 h-[400px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={challenge.title}
                  className={cn(
                    'group relative flex flex-col overflow-hidden rounded-2xl border border-border/20 bg-background/50 p-6 shadow-lg'
                  )}
                >
                  <div className="relative z-10 flex flex-col">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{challenge.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{challenge.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
           <div className="mt-12 text-center">
             <p className="text-lg font-medium text-foreground/80">Unboxx Business solves this.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
