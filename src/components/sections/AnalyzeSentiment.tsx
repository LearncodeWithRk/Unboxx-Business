'use client';

import { BarChart, TrendingUp, Tags } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

        <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_65%)]"></div>
            
            <Card className="relative col-span-2 row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border-border/20 bg-background/50 p-4 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Sentiment Over Time
                    </CardTitle>
                    <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-grow items-end p-0">
                    <div className="flex h-full w-full items-end gap-2">
                        <div className="h-[40%] w-full rounded-t-sm bg-primary/20"></div>
                        <div className="h-[60%] w-full rounded-t-sm bg-primary/40"></div>
                        <div className="h-[50%] w-full rounded-t-sm bg-primary/30"></div>
                        <div className="h-[75%] w-full rounded-t-sm bg-primary/60"></div>
                        <div className="h-[80%] w-full rounded-t-sm bg-primary/70"></div>
                        <div className="h-[65%] w-full rounded-t-sm bg-primary/50"></div>
                    </div>
                </CardContent>
            </Card>

            <Card className="relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border-border/20 bg-background/50 p-4 shadow-lg">
                 <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Theme Extraction
                    </CardTitle>
                    <Tags className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-grow items-center p-0">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Faculty</Badge>
                        <Badge variant="secondary">Placements</Badge>
                        <Badge variant="secondary">Campus</Badge>
                        <Badge variant="secondary">Hostel</Badge>
                    </div>
                </CardContent>
            </Card>

            <Card className="relative col-span-1 row-span-1 flex flex-col justify-between overflow-hidden rounded-2xl border-border/20 bg-background/50 p-4 shadow-lg">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                        Campus Comparison
                    </CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-grow items-center p-0">
                     <div className="w-full space-y-2">
                        <div className="flex items-center gap-2">
                            <span className="w-12 text-xs text-muted-foreground">Mumbai</span>
                            <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-2 w-[85%] rounded-full bg-primary"></div></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-12 text-xs text-muted-foreground">Delhi</span>
                            <div className="h-2 flex-1 rounded-full bg-secondary"><div className="h-2 w-[70%] rounded-full bg-primary/70"></div></div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
