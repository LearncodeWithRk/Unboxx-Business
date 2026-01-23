'use client';

import { Button } from '@/components/ui/button';
import { Check, Network, Headset, Star, BadgePercent, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const stats = [
  { value: '7000+', label: 'Brands thriving with us', icon: Network },
  { value: '24/7', label: 'Exceptional support', icon: Headset },
  { value: '4.9/5', label: 'Avg. rating by our users', icon: Star },
  { value: '64%', label: 'Savings in ad spend', icon: BadgePercent },
  { value: '3x', label: 'Revenue from ads', icon: TrendingUp },
];

const features = [
  'Set up in 5 minutes',
  'No coding required',
  'Exceptional 24/7 support',
];

const MetaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const ShopifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="#96BF48" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.434 8.25c-1.425-2.01-3.795-3.225-6.435-3.225-4.17 0-7.755 2.76-8.895 6.57 2.19-2.07 5.175-3.375 8.535-3.375 1.56 0 3.06.33 4.41 1.005l-2.055 3.51V9.3h-2.145v4.5h.015l.03-.015c.015.015.015.015 0 0h-.015a.43.43 0 00-.015.015c-.015.015-.015.015 0 0l2.13 3.66a.22.22 0 00.195.105h.03a.227.227 0 00.195-.12l2.355-4.005c.825 1.155 1.29 2.505 1.29 3.96 0 1.905-.72 3.66-1.92 5.025-2.325 2.655-5.64 4.29-9.33 4.29-6.39 0-11.625-5.235-11.625-11.625S5.61 1.025 12 1.025c3.345 0 6.375 1.44 8.52 3.78l-1.08 1.44Zm-4.995 12.045c-2.43 0-4.41-1.98-4.41-4.41s1.98-4.41 4.41-4.41 4.41 1.98 4.41 4.41-1.98 4.41-4.41 4.41Z"/>
    </svg>
);


export function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,hsl(var(--primary)/0.2),transparent_50%)]"></div>

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">

            <div className="relative mb-8 flex items-center justify-center">
                 <div className="absolute -inset-4 rounded-full bg-primary/10 blur-2xl"></div>
                 <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-slate-900/80 shadow-2xl backdrop-blur-md border border-slate-800">
                    <svg
                        width="48"
                        height="48"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="rounded-md"
                    >
                        <rect width="32" height="32" rx="8" className="fill-primary" />
                        <path
                        d="M8 18L12 14L16 18L20 14L24 18"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        />
                    </svg>
                </div>
                 <div className="absolute -left-20 sm:-left-32 -top-4 h-16 w-16 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700">
                    <MetaIcon className="h-8 w-8 text-primary"/>
                 </div>
                 <div className="absolute -right-20 sm:-right-32 top-0 h-16 w-16 rounded-full bg-slate-800/50 backdrop-blur-sm flex items-center justify-center shadow-lg border border-slate-700">
                    <ShopifyIcon className="h-8 w-8"/>
                </div>
            </div>
            
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Get started in less than <span className="text-primary">5 minutes</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            And reveal your store's full potential with reliable adblock-proof ad tracking.
          </p>
          <div className="mt-8">
            <Button size="lg">Start 14 day free trial</Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80 text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-4xl font-bold tracking-tight text-foreground">{stat.value}</p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
