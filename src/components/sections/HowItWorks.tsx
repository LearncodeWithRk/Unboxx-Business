'use client';

import {
  ArrowRight,
  LayoutDashboard,
  GitMerge,
  ShieldCheck,
  Smile,
  TriangleAlert,
  FileText,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

const features = [
  {
    icon: LayoutDashboard,
    title: 'Unified Dashboard',
    description: 'Monitor Google Business Profile and leading review platforms in one dashboard.',
    className: 'lg:col-span-2 lg:row-span-2',
    background: <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />,
  },
  {
    icon: GitMerge,
    title: 'Automated Routing',
    description: 'Route reviews automatically to the right campus or department.',
    className: 'lg:col-span-1',
  },
  {
    icon: ShieldCheck,
    title: 'Response Governance',
    description: 'Approve responses before publication with templates and tone guidance.',
    className: 'lg:col-span-1',
  },
  {
    icon: Smile,
    title: 'Sentiment Analysis',
    description: 'Surface sentiment trends and recurring themes across programs and locations.',
    className: 'lg:col-span-1',
  },
  {
    icon: TriangleAlert,
    title: 'Issue Escalation',
    description: 'Escalate issues to resolution workflows before they impact enrollment.',
    className: 'lg:col-span-1',
  },
  {
    icon: FileText,
    title: 'Executive Reporting',
    description: 'Report outcomes to leadership with executive dashboards.',
    className: 'lg:col-span-1',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[56px] font-bold tracking-tight text-foreground">
            One system.
            <br />
            Every review. Every campus.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Unboxx Business centralizes review monitoring, routing, response workflows, and reporting for universities with multiple campuses or departments. Your team responds faster, with consistency, and under governance controls that protect student privacy and brand voice.
          </p>
          <div className="mt-8">
            <Button variant="link" className="text-lg text-primary">
              See the product
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative mt-20">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
          <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:grid-rows-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={cn(
                    'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/20 bg-background/50 p-6 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1',
                    feature.className
                  )}
                >
                  <div className="relative z-10 flex flex-col">
                     <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 text-primary">
                        <Icon className="h-6 w-6" />
                      </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                   {feature.background}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
