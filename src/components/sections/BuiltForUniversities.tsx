'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  { text: 'Multi-campus management with location-specific routing' },
  { text: 'Response templates with approval workflows' },
  { text: 'Sentiment analysis by program, department, and campus' },
  { text: 'Privacy-safe responses that never confirm student identity' },
  { text: 'FERPA-aware, GDPR-aware, DPDP-aware compliance support' },
];

export function BuiltForUniversities() {
  return (
    <section className="bg-secondary/20 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="flex flex-col justify-center gap-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Not just monitoring.
            <br />
            Complete review governance.
          </h2>
          <p className="text-lg text-muted-foreground">
            Your admissions team shouldn't access alumni feedback. Your IT
            department shouldn't approve marketing responses. Unboxx Business
            provides role-based permissions, multi-level approvals, and brand
            voice controls designed for institutions that operate across
            regions, time zones, and compliance frameworks.
          </p>
          <div className="mt-4">
            <Button variant="link" className="px-0 text-lg text-primary">
              Explore solutions for universities
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl"></div>
          <Card className="relative rounded-2xl border-border/20 bg-background/70 backdrop-blur-lg">
            <CardContent className="p-8">
              <div className="flex flex-col gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <p className="text-lg text-foreground">{feature.text}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
