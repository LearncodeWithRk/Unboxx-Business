'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export function FromFeedbackToAction() {
  const dashboardImage = PlaceHolderImages.find(
    (p) => p.id === 'feedback-to-action-dashboard'
  );

  return (
    <section className="bg-secondary/20 py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="relative order-last lg:order-first">
          <div className="absolute -inset-8 rounded-3xl bg-primary/10 blur-2xl"></div>
          <Card className="relative overflow-hidden rounded-2xl border-border/20 bg-background/70 backdrop-blur-lg">
            <CardContent className="p-0">
              {dashboardImage && (
                <Image
                  src={dashboardImage.imageUrl}
                  alt={dashboardImage.description}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover"
                  data-ai-hint={dashboardImage.imageHint}
                />
              )}
            </CardContent>
          </Card>
        </div>
        <div className="flex flex-col justify-center gap-6">
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
      </div>
    </section>
  );
}
