'use client';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const pricingTiers = [
  {
    name: 'Starter',
    description: 'Single campus or pilot program',
    features: [
      'Up to 3 campus locations',
      'Essential monitoring and response workflows',
      'Basic sentiment analysis',
      'Standard reporting',
      'Role-based access controls',
      'Email support',
    ],
    cta: 'Request a quote',
    recommended: false,
  },
  {
    name: 'Professional',
    description: 'Multi-campus institutions',
    features: [
      'Up to 15 campus locations',
      'Advanced routing and escalation workflows',
      'Multi-level approval processes',
      'Theme extraction and trend analysis',
      'Campus comparison dashboards',
      'Custom response templates',
      'Integration support',
      'Priority email and chat support',
    ],
    cta: 'Request a quote',
    recommended: true,
  },
  {
    name: 'Enterprise',
    description: 'Large institutions and global universities',
    features: [
      'Unlimited campus locations',
      'Full governance and compliance controls',
      'Advanced analytics and custom reporting',
      'API access for integrations',
      'SSO and enterprise security features',
      'Regional data residency options',
      'Optional managed response services',
      'Dedicated success manager',
      'Phone and priority support',
    ],
    cta: 'Request a quote',
    recommended: false,
  },
];

export function PricingTiers() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="relative">
          <div className="absolute -inset-x-8 -inset-y-16 -z-10 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.03),transparent_50%)]"></div>
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={cn(
                  'relative flex h-full flex-col rounded-2xl border-2 shadow-xl transition-transform duration-300 lg:hover:scale-105',
                  tier.recommended
                    ? 'border-primary bg-primary'
                    : 'border-border/20 bg-secondary/20'
                )}
              >
                {tier.recommended && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-3.5 right-6 z-10"
                  >
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="pb-8 pt-10">
                  <CardTitle
                    className={cn(
                      'text-2xl font-semibold',
                      tier.recommended && 'text-secondary-foreground'
                    )}
                  >
                    {tier.name}
                  </CardTitle>
                   <CardDescription
                    className={cn(
                      'pt-1',
                      tier.recommended && 'text-secondary-foreground/80'
                    )}
                  >
                    Best for {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                    <p className={cn("text-sm font-semibold uppercase tracking-wider", tier.recommended ? "text-secondary-foreground/80" : "text-muted-foreground")}>What's included</p>
                    <ul className="mt-6 flex-1 space-y-4">
                        {tier.features.map((feature) => (
                        <li
                            key={feature}
                            className={cn(
                            'flex items-start gap-3',
                            tier.recommended && 'text-secondary-foreground/90'
                            )}
                        >
                            <Check
                            className={cn(
                                'mt-1 h-5 w-5 flex-shrink-0',
                                tier.recommended
                                ? 'text-secondary-foreground'
                                : 'text-primary'
                            )}
                            />
                            <span>{feature}</span>
                        </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter className="mt-8">
                  <Button
                    asChild
                    size="lg"
                    className="w-full"
                    variant={tier.recommended ? 'secondary' : 'default'}
                  >
                    <Link href="/contact#book-a-demo">
                      {tier.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
