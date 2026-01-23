'use client';

import React from 'react';

const socialProofs = [
  {
    text: "Cut review response time by 70% while improving approval compliance",
  },
  {
    text: "Identified facility issues across 8 campuses before they impacted enrollment",
  },
  {
    text: "Gave department heads visibility they never had before",
  },
];

export function SocialProof() {
  return (
    <section className="bg-secondary/20 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Real results, real impact
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Outcomes are anonymized to protect client privacy, but the impact is real. Here's what our partners have achieved.
          </p>
        </div>
        <div className="relative mt-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {socialProofs.map((proof) => (
                    <div key={proof.text} className="relative flex flex-col justify-center rounded-2xl border border-border/20 bg-background/50 p-6 text-center shadow-lg min-h-[160px]">
                        <div className="flex-grow flex items-center justify-center">
                            <p className="text-lg font-medium text-foreground">"{proof.text}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
