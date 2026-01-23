import { Button } from '@/components/ui/button';
import { ReviewOrbitAnimation } from './ReviewOrbitAnimation';

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,hsl(var(--primary)/0.1),transparent_40%)]"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 lg:py-24">
          <div className="flex flex-col items-start gap-y-8">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              All Reviews. One Dashboard.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Manage Google, CollegeDunia, Shiksha & more — from one place.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg">Book a demo</Button>
              <Button size="lg" variant="secondary">
                See how it works
              </Button>
            </div>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground">
                Trusted by premium universities across India and globally
              </p>
            </div>
          </div>
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
            <ReviewOrbitAnimation />
          </div>
        </div>
      </div>
    </section>
  );
}