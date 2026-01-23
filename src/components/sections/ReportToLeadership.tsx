'use client';

import { ArrowRight, BarChart, FileDown, LayoutGrid, Users } from 'lucide-react';
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reportFeatures = [
    {
        icon: LayoutGrid,
        text: 'Executive summary dashboards',
    },
    {
        icon: Users,
        text: 'Department and campus scorecards',
    },
    {
        icon: BarChart,
        text: 'Program-level performance comparisons',
    },
    {
        icon: FileDown,
        text: 'Exportable reports for planning',
    },
];

export function ReportToLeadership() {
return (
    <section className="bg-secondary/20 py-20 sm:py-28 lg:py-32">
    <div className="container mx-auto max-w-5xl px-4 text-center">
        <Badge variant="outline" className="border-primary/50 bg-primary/10 text-primary">
        Step 6: Report
        </Badge>
        <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Executive dashboards. Department scorecards. Trend visibility.
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
        Leadership needs to see reputation trends without digging through individual reviews. Unboxx Business provides executive dashboards with key metrics, department-level scorecards, and comparison reports. Make data-driven decisions about student experience and resource allocation.
        </p>
    </div>

    <div className="container relative mx-auto mt-16 max-w-5xl px-4">
        <div className="absolute -inset-24 top-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_50%)] -z-0"></div>
        <Card className="relative overflow-hidden rounded-2xl border-border/20 bg-background/50 shadow-2xl shadow-primary/10 backdrop-blur-md">
        <CardHeader className="flex flex-row items-center justify-between border-b border-border/20 p-4">
            <CardTitle className="text-base font-semibold">Leadership Report: Q3 2026</CardTitle>
            <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Generated: 1 Oct 2026</span>
                <Button variant="outline" size="sm">
                    <FileDown className="mr-2 h-4 w-4" />
                    Export
                </Button>
            </div>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-8 p-6 md:grid-cols-3">
            {/* Left Column: Key Metrics */}
            <div className="flex flex-col gap-6 md:col-span-1">
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">Overall Rating</p>
                    <p className="text-3xl font-bold">4.3/5</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">Total Reviews</p>
                    <p className="text-3xl font-bold">1,204</p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm text-muted-foreground">Sentiment</p>
                     <div className="flex items-center gap-2">
                        <span className="w-16 text-xs text-muted-foreground">Positive</span>
                        <div className="h-2 flex-1 rounded-full bg-secondary">
                            <div className="h-2 w-[75%] rounded-full bg-primary"></div>
                        </div>
                     </div>
                </div>
            </div>

            {/* Right Column: Chart and Features */}
            <div className="flex flex-col gap-6 md:col-span-2">
                <div className="h-40 w-full rounded-lg bg-secondary/50 p-4">
                    <p className="text-sm font-medium text-muted-foreground">Rating Trend</p>
                    <div className="flex h-full w-full items-end gap-2 pt-2">
                        <div className="h-[50%] w-full rounded-t-sm bg-primary/20"></div>
                        <div className="h-[65%] w-full rounded-t-sm bg-primary/30"></div>
                        <div className="h-[60%] w-full rounded-t-sm bg-primary/40"></div>
                        <div className="h-[75%] w-full rounded-t-sm bg-primary/60"></div>
                        <div className="h-[85%] w-full rounded-t-sm bg-primary/70"></div>
                        <div className="h-[90%] w-full rounded-t-sm bg-primary"></div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                    {reportFeatures.map((feature) => {
                        const Icon = feature.icon;
                        return (
                            <div key={feature.text} className="flex items-center gap-3">
                                <Icon className="h-5 w-5 text-primary" />
                                <span className="text-sm text-muted-foreground">{feature.text}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </CardContent>
        </Card>
    </div>
    <div className="mt-16 text-center">
        <Button variant="link" size="lg" className="text-primary">
            Book a demo to see reporting
            <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
    </div>
    </section>
);
}
