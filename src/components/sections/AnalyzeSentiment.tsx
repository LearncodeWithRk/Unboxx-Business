'use client';

import { BarChart3, Smile, Tags, TrendingUp } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const features = [
  {
    icon: Smile,
    title: 'Sentiment scoring across campuses and programs',
    content: (
      <div className="w-full space-y-2 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">Positive</span>
          <div className="h-2 flex-1 rounded-full bg-secondary">
            <div className="h-2 w-[75%] rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">Neutral</span>
          <div className="h-2 flex-1 rounded-full bg-secondary">
            <div className="h-2 w-[15%] rounded-full bg-chart-4"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">Negative</span>
          <div className="h-2 flex-1 rounded-full bg-secondary">
            <div className="h-2 w-[10%] rounded-full bg-destructive"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: Tags,
    title: 'Theme extraction to identify recurring topics',
    content: (
      <div className="flex flex-wrap gap-2 pt-2">
        <Badge variant="secondary">Faculty</Badge>
        <Badge variant="secondary">Placements</Badge>
        <Badge variant="secondary">Campus Life</Badge>
        <Badge variant="secondary">Infrastructure</Badge>
        <Badge variant="secondary">Coursework</Badge>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: 'Comparison views to benchmark performance',
    content: (
      <div className="w-full space-y-2 pt-2">
        <div className="flex items-center gap-2">
          <span className="w-12 text-xs text-muted-foreground">Mumbai</span>
          <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-2 w-[85%] rounded-full bg-primary"></div></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-12 text-xs text-muted-foreground">Delhi</span>
          <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-2 w-[70%] rounded-full bg-primary/70"></div></div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-12 text-xs text-muted-foreground">Pune</span>
          <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-2 w-[78%] rounded-full bg-primary/80"></div></div>
        </div>
      </div>
    ),
  },
  {
    icon: TrendingUp,
    title: 'Time-based trend analysis to track improvement',
    content: (
      <div className="flex h-full w-full items-end gap-1 pt-2">
        <div className="h-[40%] w-full rounded-t-sm bg-primary/20"></div>
        <div className="h-[60%] w-full rounded-t-sm bg-primary/40"></div>
        <div className="h-[50%] w-full rounded-t-sm bg-primary/30"></div>
        <div className="h-[75%] w-full rounded-t-sm bg-primary/60"></div>
        <div className="h-[80%] w-full rounded-t-sm bg-primary/70"></div>
        <div className="h-[65%] w-full rounded-t-sm bg-primary/50"></div>
        <div className="h-[90%] w-full rounded-t-sm bg-primary/80"></div>
      </div>
    ),
  },
];


export function AnalyzeSentiment() {
  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="relative flex flex-col gap-6 md:order-last">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Step 4: Analyze
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Surface what matters. Compare performance.
          </h2>
          <p className="text-lg text-muted-foreground">
            Which campus has the best facilities feedback? Which program gets complaints about career support? Unboxx Business analyzes sentiment and themes across reviews, surfacing trends by location, department, program, and time period. Turn feedback into improvement priorities.
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_65%)]"></div>
            
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  className="group relative flex flex-col justify-start overflow-hidden rounded-2xl border border-border/20 bg-background/50 p-4 shadow-lg"
                >
                  <CardHeader className="flex flex-row items-start justify-between space-y-0 p-0 pb-2 gap-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {feature.title}
                    </CardTitle>
                    <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  </CardHeader>
                   <CardContent className="flex flex-grow items-center p-0">
                    {feature.content}
                   </CardContent>
                </Card>
              );
            })}
        </div>
      </div>
    </section>
  );
}
