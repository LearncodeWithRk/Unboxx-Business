'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  BarChart3,
  ShieldAlert,
  ArrowRight,
  ClipboardCheck,
  Siren,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const insightCards = [
  {
    title: 'Student Priorities',
    icon: ClipboardCheck,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    content: (
      <div className="flex flex-wrap gap-2">
        <Badge variant="secondary">Campus Life</Badge>
        <Badge variant="secondary">Faculty Support</Badge>
        <Badge variant="secondary">Placements</Badge>
        <Badge variant="secondary">Coursework</Badge>
      </div>
    ),
  },
  {
    title: 'Campus Friction Points',
    icon: Siren,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    content: (
      <ul className="space-y-2 text-sm text-muted-foreground">
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          Admissions Process
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
          Hostel Facilities
        </li>
        <li className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500"></span>
          Fee Payment Portal
        </li>
      </ul>
    ),
  },
  {
    title: 'Program Performance',
    icon: BarChart3,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    content: (
      <div className="w-full space-y-3">
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">B.Tech</span>
          <div className="h-2 flex-1 rounded-full bg-secondary">
            <div className="h-2 w-[85%] rounded-full bg-primary"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">MBA</span>
          <div className="h-2 flex-1 rounded-full bg-secondary">
            <div className="h-2 w-[70%] rounded-full bg-primary/70"></div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-16 text-xs text-muted-foreground">B.Com</span>
          <div className="h-2 flex-1 rounded-full bg-secondary">
            <div className="h-2 w-[60%] rounded-full bg-primary/50"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Negative Signals',
    icon: ShieldAlert,
    colSpan: 'col-span-1',
    rowSpan: 'row-span-1',
    content: (
      <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
        <div className="text-center">
          <p className="font-semibold text-foreground">Low Rating</p>
        </div>
        <ArrowRight className="mx-2 h-5 w-5 flex-shrink-0 text-primary sm:mx-4" />
        <div className="text-center">
          <p className="font-semibold text-foreground">Route to Dept.</p>
        </div>
      </div>
    ),
  },
];

export function FromFeedbackToAction() {
  return (
    <section className="bg-secondary/20 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Don't just collect reviews. Use them to improve.
          </h2>
          <p className="text-lg text-muted-foreground">
            Surface what prospective students care about. Identify friction
            points in campus visits. Compare program performance. Route
            negative signals to resolution teams before issues escalate. Unboxx
            Business turns scattered feedback into actionable insights that
            improve student experience and enrollment outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
          {insightCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card
                key={card.title}
                className={cn(
                  'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border/20 bg-background/50 p-4 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-primary/20 hover:-translate-y-1 sm:p-6',
                  card.colSpan,
                  card.rowSpan
                )}
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {card.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent className="flex flex-grow items-center p-0">
                  {card.content}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
