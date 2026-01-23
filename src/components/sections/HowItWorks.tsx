import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const features = [
  {
    title: 'Unified Dashboard',
    description: 'Monitor Google Business Profile and leading review platforms in one dashboard.',
    imageId: 'how-it-works-dashboard',
  },
  {
    title: 'Automated Routing',
    description: 'Route reviews automatically to the right campus or department.',
    imageId: 'how-it-works-routing',
  },
  {
    title: 'Response Governance',
    description: 'Approve responses before publication with templates and tone guidance.',
    imageId: 'how-it-works-approval',
  },
  {
    title: 'Sentiment Analysis',
    description: 'Surface sentiment trends and recurring themes across programs and locations.',
    imageId: 'how-it-works-sentiment',
  },
  {
    title: 'Issue Escalation',
    description: 'Escalate issues to resolution workflows before they impact enrollment.',
    imageId: 'how-it-works-escalation',
  },
  {
    title: 'Executive Reporting',
    description: 'Report outcomes to leadership with executive dashboards.',
    imageId: 'how-it-works-reporting',
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            One system. Every review. Every campus.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Unboxx Business centralizes review monitoring, routing, response workflows, and reporting for universities with multiple campuses or departments. Your team responds faster, with consistency, and under governance controls that protect student privacy and brand voice.
          </p>
          <div className="mt-8">
            <Button variant="link" className="text-lg text-primary">
              See the product
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_50%)]"></div>
          <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const image = PlaceHolderImages.find(p => p.id === feature.imageId);
              return (
                <div key={feature.title} className="flex flex-col gap-6 rounded-xl border border-border/20 bg-background/50 p-6 shadow-lg transition-all hover:border-primary/30 hover:shadow-primary/10">
                  <div className="aspect-video overflow-hidden rounded-lg border border-border/30 bg-muted/30">
                    {image ? (
                      <Image
                        src={image.imageUrl}
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                        data-ai-hint={image.imageHint}
                      />
                    ) : (
                        <div className="h-full w-full bg-muted"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
