import { Button } from '@/components/ui/button';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.1),transparent_60%)]"></div>
      <div className="container relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          See Unboxx Business in action
        </h2>
        <div className="mt-10">
          <Button size="lg" className="shadow-lg transition-all hover:shadow-primary/40 hover:-translate-y-0.5">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
}
