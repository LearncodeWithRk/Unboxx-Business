'use client';

import {
  GitBranch,
  ClipboardList,
  Users,
  Eye,
} from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';

export function EscalateAndResolve() {
  const features = [
    {
      icon: GitBranch,
      title: 'Escalation workflows',
      description: 'For urgent or sensitive reviews.',
    },
    {
      icon: ClipboardList,
      title: 'Internal case tracking',
      description: 'Separate from public responses.',
    },
    {
      icon: Users,
      title: 'Team assignment',
      description: 'To student services, facilities, or other teams.',
    },
    {
      icon: Eye,
      title: 'Resolution status',
      description: 'Visible to leadership.',
    },
  ];

  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:order-last">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Step 5: Escalate & Resolve
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Turn negative signals into resolution workflows
          </h2>
          <p className="text-lg text-muted-foreground">
            A one-star review about campus safety needs more than a public response. Unboxx Business lets you escalate issues to internal resolution teams, track follow-up actions, and close the loop. Protect enrollment outcomes by addressing problems before they spread.
          </p>
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
