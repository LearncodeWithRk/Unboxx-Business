'use client';

import {
  GitBranch,
  FileCheck2,
  BarChartHorizontal,
  Shield,
  Landmark,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';

const universityFeatures = [
  {
    icon: GitBranch,
    title: 'Multi-Campus Ready',
    description: 'Manage reviews with location-specific routing for each campus.',
  },
  {
    icon: FileCheck2,
    title: 'Approval Workflows',
    description: 'Use response templates with multi-level approval processes.',
  },
  {
    icon: BarChartHorizontal,
    title: 'Advanced Analytics',
    description: 'Sentiment analysis by program, department, and campus.',
  },
  {
    icon: Shield,
    title: 'Privacy-Focused',
    description: 'Privacy-safe responses that never confirm student identity.',
  },
  {
    icon: Landmark,
    title: 'Compliance Built-In',
    description: 'FERPA-aware, GDPR-aware, and DPDP-aware compliance support.',
  },
];

export function BuiltForUniversities() {
  return (
    <section className="bg-secondary/20 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Not just monitoring.
            <br />
            Complete review governance.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Your admissions team shouldn't access alumni feedback. Your IT
            department shouldn't approve marketing responses. Unboxx Business
            provides role-based permissions, multi-level approvals, and brand
            voice controls designed for institutions that operate across
            regions, time zones, and compliance frameworks.
          </p>
          <div className="mt-8">
            <Button asChild variant="link" className="px-0 text-lg text-primary">
              <Link href="/solutions">
                Explore solutions for universities
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.05),transparent_50%)]"></div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {universityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/20 bg-background/50 p-6 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1'
                  )}
                >
                  <div className="relative z-10 flex flex-col">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
