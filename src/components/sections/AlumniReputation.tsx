'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function AlumniReputation() {
  const useCases = [
    'Monitor reviews across education platforms, Google, and social media',
    'Respond to reviews that impact alumni perception or donor confidence',
    'Provide board-level reporting on reputation metrics and trends',
    'Track sentiment during reputation-sensitive events (accreditation, rankings, crises)',
    'Demonstrate ethical review management to stakeholders (no gating, no fake reviews)',
  ];

  const keyCapabilities = [
    'Executive dashboards with ratings, volume, and sentiment trends',
    'Exportable reports for board meetings and strategic planning',
    'Crisis escalation workflows for urgent reputation issues',
    'Ethical review management aligned with platform policies',
  ];

  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            For Alumni & Reputation
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Protect long-term reputation and stakeholder confidence
          </h2>
          <p className="text-lg text-muted-foreground">
            Your institution's reputation extends beyond current students. Alumni networks, donors, and industry partners all see public reviews. Unboxx Business helps communications and leadership teams monitor brand perception, respond strategically, and report reputation trends to governance bodies.
          </p>
           <div className="mt-4">
            <Button variant="link" size="lg" className="text-primary px-0">
              See executive reporting features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col gap-10 rounded-2xl border border-border/20 bg-secondary/20 p-8 shadow-lg">
           <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_45%)]"></div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">Use cases</h3>
            <ul className="mt-4 space-y-3">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70" />
                  <span className="text-sm text-muted-foreground">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">Key capabilities</h3>
            <ul className="mt-4 space-y-3">
              {keyCapabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70" />
                  <span className="text-sm text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
