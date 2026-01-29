'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';

const integrationCapabilities = [
    'CRM integration for applicant and student context',
    'Single Sign-On (SSO) for secure access',
    'Email and notification routing via existing systems',
    'Escalation handoffs to ticketing or case management systems',
    'Data export to analytics or reporting platforms',
];

export function UniversitySystemIntegrations() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="relative flex flex-col gap-8 rounded-2xl border border-border/20 bg-secondary/20 p-6 sm:p-8 shadow-lg">
           <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_45%)]"></div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">Integration capabilities</h3>
            <ul className="mt-4 space-y-3">
              {integrationCapabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70" />
                  <span className="text-sm text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">How it works</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              We offer API access, webhook support, and pre-built connectors for common university systems. Our team handles technical setup and testing during onboarding.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            University System Integrations
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Works with the tools you already use
          </h2>
          <p className="text-lg text-muted-foreground">
            Unboxx Business can integrate with your CRM, student information system, helpdesk, or communication tools to provide context, streamline workflows, and trigger follow-up actions. We support common university technology stacks with flexible integration options.
          </p>
           <div className="mt-4">
            <Button asChild variant="link" size="lg" className="text-primary px-0">
              <Link href="/contact">
                Discuss your integration needs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
