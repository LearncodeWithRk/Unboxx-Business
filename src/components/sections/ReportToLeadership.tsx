'use client';

import { ArrowRight, BarChart, FileDown, LayoutGrid, Users } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reportFeatures = [
    {
        icon: LayoutGrid,
        text: 'Executive summary dashboards with ratings, volume, and sentiment',
    },
    {
        icon: Users,
        text: 'Department and campus scorecards for accountability',
    },
    {
        icon: BarChart,
        text: 'Program-level performance comparisons',
    },
    {
        icon: FileDown,
        text: 'Exportable reports for board meetings and strategic planning',
    },
];

export function ReportToLeadership() {
return (
    <section className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-8">
            <div>
                <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
                Step 6: Report
                </Badge>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                    Executive dashboards. Department scorecards. Trend visibility.
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                    Leadership needs to see reputation trends without digging through individual reviews. Unboxx Business provides executive dashboards with key metrics, department-level scorecards, and comparison reports. Make data-driven decisions about student experience and resource allocation.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {reportFeatures.map((feature) => {
                    const Icon = feature.icon;
                    return (
                        <div key={feature.text} className="flex items-start gap-3">
                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-background text-primary border border-border">
                                <Icon className="h-5 w-5" />
                            </div>
                            <span className="text-sm text-muted-foreground mt-1">{feature.text}</span>
                        </div>
                    );
                })}
            </div>
             <div className="mt-4">
                <Button variant="link" size="lg" className="text-primary px-0">
                    Book a demo to see reporting
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
        </div>

        <div className="relative grid grid-cols-2 gap-4">
            <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_65%)]"></div>
            
            <Card className="relative col-span-2 rounded-2xl border-border/20 bg-background/50 p-6 shadow-lg">
                <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-base font-medium text-muted-foreground">
                        Rating Trend
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="flex h-32 w-full items-end gap-2 pt-2">
                        <div className="h-[50%] w-full rounded-t-sm bg-primary/20"></div>
                        <div className="h-[65%] w-full rounded-t-sm bg-primary/30"></div>
                        <div className="h-[60%] w-full rounded-t-sm bg-primary/40"></div>
                        <div className="h-[75%] w-full rounded-t-sm bg-primary/60"></div>
                        <div className="h-[85%] w-full rounded-t-sm bg-primary/70"></div>
                        <div className="h-[90%] w-full rounded-t-sm bg-primary"></div>
                    </div>
                </CardContent>
            </Card>

            <Card className="relative rounded-2xl border-border/20 bg-background/50 p-6 shadow-lg">
                 <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-base font-medium text-muted-foreground">
                        Overall Rating
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-4xl font-bold">4.3<span className="text-2xl text-muted-foreground">/5</span></p>
                </CardContent>
            </Card>

            <Card className="relative rounded-2xl border-border/20 bg-background/50 p-6 shadow-lg">
                <CardHeader className="p-0 pb-2">
                    <CardTitle className="text-base font-medium text-muted-foreground">
                        Total Reviews
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-4xl font-bold">1,204</p>
                </CardContent>
            </Card>
        </div>

      </div>
    </section>
);
}
