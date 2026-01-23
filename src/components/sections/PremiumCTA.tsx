'use client';

import { Button } from '@/components/ui/button';
import { Check, Globe } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

// Re-using the same SVG logo from Header/Footer
const UnboxxLogo = () => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="32" height="32" rx="8" fill="hsl(var(--primary))" />
    <path
      d="M8 18L12 14L16 18L20 14L24 18"
      stroke="hsl(var(--primary-foreground))"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.61 19.52h2.554L7.546 3.32h-2.76l12.446 17.354z"/>
    </svg>
);


const BackgroundIcon = ({ icon: Icon, className, style }: { icon: React.ElementType, className?: string, style?: React.CSSProperties }) => (
    <div className={cn('absolute', className)} style={style}>
        <Icon className="h-8 w-8 text-white/5" />
    </div>
);

export function PremiumCTA() {
  const trustIndicators = [
    'Multi-Campus Ready',
    'Privacy-Focused',
    'Compliance Built-In',
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#080c17] to-background py-24 sm:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[600px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1)_0%,transparent_60%)] animate-beam-sweep" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'hsl(var(--border))\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />

        {/* Floating Icons */}
        <BackgroundIcon icon={FacebookIcon} className="top-[15%] left-[10%] animate-premium-float" style={{ animationDuration: '20s' }} />
        <BackgroundIcon icon={Globe} className="top-[25%] right-[15%] animate-premium-float" style={{ animationDuration: '18s', animationDelay: '3s' }} />
        <BackgroundIcon icon={XIcon} className="bottom-[20%] left-[20%] animate-premium-float" style={{ animationDuration: '22s', animationDelay: '5s' }}/>
      </div>

      <div className="container relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        {/* Central Logo */}
        <div className="mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative rounded-full p-2 animate-premium-pulse">
             <UnboxxLogo />
          </div>
        </div>

        {/* Content */}
        <h2 
          className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '0.4s' }}
        >
          See <span className="text-primary">Unboxx Business</span> in action
        </h2>
        <p 
          className="mt-6 max-w-2xl text-lg text-muted-foreground opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '0.6s' }}
        >
          Schedule a personalized demo to see how our platform can help you centralize review management, gain actionable insights, and protect your brand across all your campuses.
        </p>
        <div 
          className="mt-10 opacity-0 animate-fade-in-up" 
          style={{ animationDelay: '0.8s' }}
        >
          <Button size="lg" className="transition-all duration-300 hover:shadow-primary/50 hover:shadow-lg hover:scale-105">Book a demo</Button>
        </div>

        {/* Trust Indicators */}
        <div 
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8"
        >
          {trustIndicators.map((text, i) => (
            <div 
              key={text} 
              className="flex items-center gap-2 text-sm text-muted-foreground opacity-0 animate-fade-in-up" 
              style={{ animationDelay: `${1 + i * 0.2}s` }}
            >
              <Check className="h-4 w-4 text-primary" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
