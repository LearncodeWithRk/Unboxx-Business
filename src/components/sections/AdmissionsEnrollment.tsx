'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export function AdmissionsEnrollment() {
  const useCases = [
    'Monitor reviews during peak admission cycles and respond within hours',
    'Compare program ratings to identify competitive strengths and weaknesses',
    'Surface common objections in reviews (location, facilities, cost) for marketing to address',
    'Track sentiment trends before and after campus visit events',
    'Respond to negative reviews with privacy-safe messaging that moves conversations offline',
  ];

  const keyCapabilities = [
    'Real-time alerts during admission deadlines',
    'Program-level sentiment comparison',
    'Response templates approved by admissions leadership',
    'Integration with CRM data for context on reviewers',
  ];

  return (
    <section id="admissions-enrollment" className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            For Admissions & Enrollment
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Turn review insights into enrollment advantage
          </h2>
          <p className="text-lg text-muted-foreground">
            Prospective students read reviews before applying. Parents compare feedback across campuses. Unboxx Business helps admissions teams monitor what applicants see, respond with brand consistency, and surface insights that improve conversion from inquiry to enrollment.
          </p>
           <div className="mt-4">
            <Button asChild variant="link" size="lg" className="text-primary px-0">
              <Link href="/solutions#admissions-enrollment">
                See how admissions teams use Unboxx Business
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative flex flex-col gap-10 rounded-2xl border border-border/20 bg-background/50 p-6 sm:p-8 shadow-lg">
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
