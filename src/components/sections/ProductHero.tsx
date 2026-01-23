'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';
import React from 'react';

const UnboxxLogo = () => (
  <svg
    width="64"
    height="64"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" className="fill-primary" />
    <path
      d="M8 18L12 14L16 18L20 14L24 18"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FloatingVisual = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Base */}
            <div className="absolute bottom-[25%] w-56 h-4 rounded-[50%] bg-black/50 blur-xl" />

            {/* Cylinder with overflow hidden to contain the glow */}
            <div className="relative w-48 h-64 overflow-hidden">
                {/* Cylinder Shape */}
                <div className="absolute inset-0 bg-white/5 border-2 border-white/10 rounded-t-[100px] rounded-b-[20px]" />
                
                {/* Top ellipse to give 3D effect */}
                <div className="absolute top-0 left-0 w-full h-8 bg-white/10 rounded-[50%] border-t-2 border-white/20" />

                {/* Floating logo inside */}
                <div 
                    className="absolute inset-0 flex items-center justify-center animate-premium-float"
                    style={{ animationDuration: '10s' }}
                >
                    <div 
                        className="relative animate-pulse-glow"
                        style={{ animationDuration: '6s' }}
                    >
                        <UnboxxLogo />
                    </div>
                </div>

                {/* Light Sweep Effect */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-t-[100px] rounded-b-[20px]">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[200%] bg-white/10 rotate-[25deg] animate-light-sweep" />
                </div>
            </div>
        </div>
    );
};


export function ProductHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#02040c] py-20 sm:py-28 lg:py-32">
       {/* Dotted Grid Pattern */}
       <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 25px 25px, hsl(var(--border)) 1px, transparent 0)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Top Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-full max-w-[1200px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_0%,transparent_60%)] z-0" />
        
      <div className="container relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col items-center gap-y-6 text-center md:items-start md:text-left">
            <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>How Unboxx works</Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                One platform. Every review. Complete control.
            </h1>
            <p className="max-w-xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                From monitoring to response to insights—everything your university needs to manage reputation across campuses, departments, and review platforms.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button size="lg" className="transition-all duration-300 hover:shadow-primary/50 hover:shadow-lg hover:scale-105">Book a demo</Button>
              <Button size="lg" variant="outline">
                View pricing
              </Button>
            </div>

            <div className="pt-6 text-left animate-fade-in-up" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary" />
                    <span>Built for premium universities worldwide</span>
                </div>
                <div className="mt-4 flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                    <p className="text-sm text-muted-foreground">Trusted by teams at 50+ institutions</p>
                </div>
            </div>
          </div>
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
            <FloatingVisual />
          </div>
      </div>
    </section>
  );
}
