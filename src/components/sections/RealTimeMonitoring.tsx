'use client';

import { Rss, Bell, Filter, Smartphone } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: Rss,
    title: 'Real-time monitoring',
    description: 'Across Google and leading review platforms',
  },
  {
    icon: Bell,
    title: 'Smart alerts',
    description: 'Delivered to the right teams via email or in-app',
  },
  {
    icon: Filter,
    title: 'Custom filters',
    description: 'By location, rating, keyword, or date range',
  },
  {
    icon: Smartphone,
    title: 'Mobile access',
    description: 'For on-the-go review management',
  },
];

export function RealTimeMonitoring() {
  return (
    <section className="bg-[#02040c] py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Never miss a review, anywhere
          </h2>
          <p className="text-lg text-muted-foreground">
            Reviews arrive on Google Business Profile, Facebook, education platforms, and beyond. Unboxx Business monitors them all in one dashboard. See new reviews in real time. Filter by campus, program, department, or sentiment. Your team always knows what prospective students are saying.
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
