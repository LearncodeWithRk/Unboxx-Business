'use client';

import { Button } from '@/components/ui/button';
import { Briefcase, Settings, Smile, Users, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';

const stakeholders = [
  {
    icon: Users,
    title: 'Admissions & Enrollment',
    description: 'Convert more applicants by managing reputation at scale.',
    link: '#',
  },
  {
    icon: Smile,
    title: 'Student Experience',
    description: 'Use feedback to improve campus life, services, and outcomes.',
    link: '#',
  },
  {
    icon: Settings,
    title: 'Multi-Campus Operations',
    description: 'Centralize governance, reporting, and workflows across locations.',
    link: '#',
  },
  {
    icon: Briefcase,
    title: 'Leadership & Strategy',
    description: 'Get executive insights to protect brand health and drive growth.',
    link: '#',
  },
];


export function SolutionsHero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Solutions for every stakeholder
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you're in admissions, student experience, operations, or leadership—Unboxx Business gives you the tools to manage reputation, improve outcomes, and protect your institution's brand.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg">Book a demo</Button>
            <Button size="lg" variant="secondary">
              See the product
            </Button>
          </div>
        </div>

        <div className="relative mt-20 sm:mt-24">
           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {stakeholders.map((stakeholder) => {
                const Icon = stakeholder.icon;
                return (
                  <Link href={stakeholder.link} key={stakeholder.title} className="group">
                    <Card className="relative h-full overflow-hidden rounded-2xl border-border/20 bg-background/50 p-2 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 text-primary transition-colors group-hover:bg-primary/10">
                          <Icon className="h-6 w-6" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <h3 className="text-lg font-semibold text-foreground">{stakeholder.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground">{stakeholder.description}</p>
                        <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
           </div>
        </div>
         <div className="mt-16 text-center">
              <p className="text-sm text-muted-foreground">
                Serving premium universities across India and globally
              </p>
            </div>
      </div>
    </section>
  );
}
