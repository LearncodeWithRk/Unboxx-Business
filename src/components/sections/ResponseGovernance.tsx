'use client';

import {
  ArrowRight,
  FileText,
  History,
  ShieldCheck,
  UserCheck,
} from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function ResponseGovernance() {
  const features = [
    {
      icon: FileText,
      title: 'Response templates',
      description: 'For common scenarios (positive, neutral, negative)',
    },
    {
      icon: UserCheck,
      title: 'Approval workflows',
      description: 'Multi-level approval workflows before publication',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance checks',
      description: 'Tone and compliance checks to protect student privacy',
    },
    {
      icon: History,
      title: 'Audit logs',
      description: 'Version history and audit logs for every response',
    },
  ];

  return (
    <section className="bg-[#02040c] py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Step 3: Respond
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Templates. Approvals. Brand voice consistency.
          </h2>
          <p className="text-lg text-muted-foreground">
            Your response is public. It represents your institution. Unboxx Business provides templates, approval workflows, and tone guidance so every response aligns with brand voice and privacy requirements. Draft, review, approve, publish—all tracked and auditable.
          </p>
          <div className="mt-2">
            <Button variant="link" className="px-0 text-primary">
                See governance features
                <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="relative flex items-start gap-6">
                {index < features.length - 1 && (
                  <div className="absolute left-6 top-12 h-full w-px border-l border-dashed border-border/50" />
                )}
                <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-background/50 text-primary shadow-lg">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}