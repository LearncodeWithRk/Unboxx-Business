'use client';

import { ShieldCheck, BarChart3, GitBranch } from 'lucide-react';
import React from 'react';

const coreValues = [
    {
        icon: GitBranch,
        title: 'For the Multi-Campus Reality',
        description: 'Built for institutions that operate across regions, time zones, and compliance frameworks.',
    },
    {
        icon: ShieldCheck,
        title: 'With Governance at the Core',
        description: 'Enabling brand consistency, approval workflows, and privacy-aware responses at every level.',
    },
    {
        icon: BarChart3,
        title: 'To Turn Feedback into Insight',
        description: 'Helping universities monitor, respond, and learn from feedback to improve the student experience.',
    }
]

export function OurMission() {
  return (
    <section className="relative overflow-hidden bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0,hsl(var(--primary)/0.05),transparent_60%)] -z-0"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Why we exist
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Prospective students, parents, and alumni all rely on reviews. Yet most universities lack systems to manage this feedback effectively. Unboxx Business was built to solve this problem.
          </p>
        </div>
        
        <div className="relative mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {coreValues.map((value) => {
                    const Icon = value.icon;
                    return (
                        <div key={value.title} className="relative flex flex-col items-center text-center rounded-2xl border border-border/10 bg-background/30 p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-background/50 hover:-translate-y-1">
                             <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10 text-primary">
                                <Icon className="h-7 w-7" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-foreground">{value.title}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>

      </div>
    </section>
  );
}
