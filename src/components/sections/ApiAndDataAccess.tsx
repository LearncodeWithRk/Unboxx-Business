'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check, Code } from 'lucide-react';
import Link from 'next/link';

const apiCapabilities = [
  'Retrieve review data, sentiment scores, and metadata',
  'Trigger workflows based on review criteria',
  'Export data for custom reporting or analysis',
  'Webhook support for real-time event notifications',
];

export function ApiAndDataAccess() {
  return (
    <section className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            API & Data Access
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Your data. Your control.
          </h2>
          <p className="text-lg text-muted-foreground">
            Need to pull review data into your own analytics platform? Want to trigger workflows in other systems? Unboxx Business provides API access for universities that need programmatic control over review data and workflows.
          </p>
        </div>

        <div className="relative flex flex-col gap-8 rounded-2xl border border-border/20 bg-background/50 p-6 sm:p-8 shadow-lg">
           <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_45%)]"></div>
          <div>
            <h3 className="text-base font-semibold uppercase tracking-wider text-primary">API Capabilities</h3>
            <ul className="mt-4 space-y-3">
              {apiCapabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary/70" />
                  <span className="text-sm text-muted-foreground">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button asChild>
            <Link href="/contact">
              <Code className="mr-2 h-4 w-4" />
              Request API Documentation
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
