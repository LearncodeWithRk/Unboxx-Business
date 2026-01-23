'use client';

import { ShieldCheck, Lock, Globe, Handshake } from 'lucide-react';
import React from 'react';

const coreValues = [
    {
        icon: ShieldCheck,
        title: 'Ethics first',
        description: 'We never support review manipulation, gating, or policy violations. Our platform enables ethical reputation management only.',
    },
    {
        icon: Lock,
        title: 'Privacy always',
        description: 'Student privacy is non-negotiable. We build tools and training to protect it in every response.',
    },
    {
        icon: Globe,
        title: 'Global perspective',
        description: 'Universities operate across borders. We support multi-region institutions with compliance awareness for India, EU, US, and beyond.',
    },
    {
        icon: Handshake,
        title: 'Partnership approach',
        description: "We're not just a vendor. We work alongside your teams, understanding your challenges and helping you succeed.",
    }
];

export function OurValues() {
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 lg:py-32">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.05),transparent_60%)] -z-0"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            How we work
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our values guide every decision we make, from product development to client support. We are committed to ethical practices, unwavering privacy, a global outlook, and true partnership.
          </p>
        </div>
        
        <div className="relative mt-20">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {coreValues.map((value) => {
                    const Icon = value.icon;
                    return (
                        <div key={value.title} className="relative flex flex-col items-start text-left rounded-2xl border border-border/10 bg-secondary/20 p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:bg-secondary/30 hover:-translate-y-1">
                             <div className="flex h-12 w-12 items-center justify-center rounded-lg border-2 border-primary/20 bg-primary/10 text-primary">
                                <Icon className="h-6 w-6" />
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
