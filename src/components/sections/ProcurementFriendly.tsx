'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const offerings = [
  'Annual or multi-year contract options',
  'Standard vendor compliance documentation',
  'Security and privacy questionnaires',
  'References and case study support',
  'Net-30 payment terms (or as required)',
  'Purchase order acceptance',
];

export function ProcurementFriendly() {
  return (
    <section className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Procurement-Friendly
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Built for university procurement processes
          </h2>
          <p className="text-lg text-muted-foreground">
            We understand institutional procurement. Unboxx Business works within your purchasing timelines, offers flexible contract terms, and provides documentation your procurement team needs.
          </p>
           <div className="mt-4">
            <Button variant="link" size="lg" className="text-primary px-0">
              Contact our sales team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col gap-8 rounded-2xl border border-border/20 bg-background/50 p-6 sm:p-8 shadow-lg">
           <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_45%)]"></div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">What we offer</h3>
            <ul className="mt-4 space-y-3">
              {offerings.map((offering, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70" />
                  <span className="text-sm text-muted-foreground">{offering}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
