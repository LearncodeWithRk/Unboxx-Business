'use client';

import { Star, TrendingDown, ShieldAlert } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

const chartData = [
  { month: 'January', mentions: 186 },
  { month: 'February', mentions: 205 },
  { month: 'March', mentions: 137 },
  { month: 'April', mentions: 173 },
  { month: 'May', mentions: 209 },
];

const chartConfig = {
  mentions: {
    label: 'Mentions',
    color: 'hsl(var(--primary))',
  },
};

const WidgetCard = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      'rounded-2xl border border-border/20 bg-background/50 p-4 shadow-lg backdrop-blur-sm transition-all hover:border-primary/50 hover:shadow-primary/20',
      className
    )}
  >
    {children}
  </div>
);

const GoogleReviewsWidget = () => (
  <WidgetCard className="col-span-2 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <h3 className="font-semibold text-foreground">Google Reviews</h3>
      <div className="flex items-center gap-1 text-sm text-destructive">
        <ShieldAlert className="h-4 w-4" />
        <span>2 Unresolved</span>
      </div>
    </div>
    <div className="space-y-3">
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn('h-3.5 w-3.5', i < 2 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50')} />
          ))}
        </div>
        <p className="flex-1 text-xs text-muted-foreground">"The campus facilities are outdated..."</p>
      </div>
      <div className="flex items-start gap-3">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn('h-3.5 w-3.5', i < 1 ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/50')} />
          ))}
        </div>
        <p className="flex-1 text-xs text-muted-foreground">"Admissions office was not helpful."</p>
      </div>
    </div>
  </WidgetCard>
);

const SocialMentionsWidget = () => (
  <WidgetCard>
    <h3 className="font-semibold text-foreground">Social Mentions</h3>
    <p className="text-xs text-muted-foreground mb-2">Sentiment is dropping</p>
    <div className="h-[100px] w-full blur-sm grayscale opacity-60">
      <ChartContainer config={chartConfig} className="h-full w-full">
        <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
          <YAxis tickLine={false} axisLine={false} tickMargin={8} fontSize={10} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
          <Bar dataKey="mentions" fill="var(--color-mentions)" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  </WidgetCard>
);

const PlatformRankingsWidget = () => (
  <WidgetCard>
    <h3 className="font-semibold text-foreground">Platform Rankings</h3>
    <div className="mt-2 space-y-2">
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">Shiksha</span>
        <div className="flex items-center text-destructive">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>-8%</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">CollegeDunia</span>
        <div className="flex items-center text-destructive">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>-5%</span>
        </div>
      </div>
      <div className="flex items-center justify-between text-xs">
        <span className="text-muted-foreground">JustDial</span>
        <div className="flex items-center text-destructive">
          <TrendingDown className="h-4 w-4 mr-1" />
          <span>-12%</span>
        </div>
      </div>
    </div>
  </WidgetCard>
);


export function TheChallenge() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
       <div className="absolute -inset-x-4 -top-48 h-[600px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_50%)] -z-0"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-6 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Your reputation is fragmented across campuses, platforms, and departments
            </h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
             Prospective students and parents read reviews before they ever contact you. But with feedback scattered everywhere, it's impossible to maintain a consistent brand voice, spot trends, or prevent issues from slipping through the cracks. Unboxx Business solves this.
            </p>
          </div>

          {/* Right Column */}
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center">
             <div
                className="relative grid w-full max-w-lg grid-cols-2 gap-4"
                style={{
                    transform: 'perspective(1200px) rotateX(10deg) rotateY(-20deg) rotateZ(-3deg) scale(0.9)',
                    transformStyle: 'preserve-3d',
                }}
            >
                <div className="col-span-2">
                    <GoogleReviewsWidget />
                </div>
                <div>
                    <SocialMentionsWidget />
                </div>
                <div>
                    <PlatformRankingsWidget />
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
