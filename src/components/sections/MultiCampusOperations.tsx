'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function MultiCampusOperations() {
  const useCases = [
    'Route reviews automatically to campus-specific teams without manual triage',
    'Set approval requirements by location, department, or review severity',
    'Enforce brand voice consistency across all campuses and languages',
    'Track response rates and compliance by campus or region',
    'Generate performance scorecards for campus directors',
  ];

  const keyCapabilities = [
    'Multi-campus routing and permissions',
    'Customizable approval workflows by location',
    'Brand voice templates and tone guidance',
    'Audit logs for compliance and accountability',
    'Regional time zone and language support',
  ];

  return (
    <section className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="relative flex flex-col gap-10 rounded-2xl border border-border/20 bg-background/50 p-8 shadow-lg">
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
        
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            For Multi-Campus Operations
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Govern reputation across locations, departments, and time zones
          </h2>
          <p className="text-lg text-muted-foreground">
            Managing reviews for one campus is simple. Managing reviews for ten campuses across multiple countries requires governance. Unboxx Business provides role-based access, location-specific routing, approval workflows, and brand voice controls so every response meets institutional standards.
          </p>
           <div className="mt-4">
            <Button variant="link" size="lg" className="text-primary px-0">
              Explore multi-campus governance
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
