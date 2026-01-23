'use client';

import React from 'react';

export function OurMission() {
  return (
    <section className="relative overflow-hidden bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,hsl(var(--primary)/0.05),transparent_50%)] -z-0"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-border/20 bg-background/50 p-8 text-center shadow-lg backdrop-blur-sm sm:p-12">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            Why we exist
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Prospective students research universities through reviews. Parents compare feedback before making tuition investments. Alumni and donors notice reputation trends. Yet most universities lack systems to monitor, respond, and learn from this feedback at scale. Unboxx Business solves this problem with a platform built specifically for multi-campus institutions that value governance, privacy, and brand integrity.
          </p>
        </div>
      </div>
    </section>
  );
}
