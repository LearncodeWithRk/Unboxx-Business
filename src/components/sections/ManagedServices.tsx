'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function ManagedServices() {
  const avatar1 = PlaceHolderImages.find(p => p.id === 'managed-services-avatar-1');
  const avatar2 = PlaceHolderImages.find(p => p.id === 'managed-services-avatar-2');
  const avatar3 = PlaceHolderImages.find(p => p.id === 'managed-services-avatar-3');

  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 md:grid-cols-2">
        <div className="flex flex-col gap-6 md:order-last">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            Step 7: Optional Managed Services
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Need help responding? We've got you.
          </h2>
          <p className="text-lg text-muted-foreground">
            Not every university has bandwidth to respond to hundreds of reviews. Our optional managed services team drafts responses for your approval, following your brand voice, governance rules, and privacy requirements. You stay in control. We handle the workload.
          </p>
        </div>

        <div className="relative flex h-80 w-full items-center justify-center scale-75 sm:scale-100">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_65%)]"></div>
            
            <div className="relative flex">
                {avatar1 && (
                    <Image
                        src={avatar1.imageUrl}
                        alt="Managed service team member"
                        width={128}
                        height={128}
                        className="h-32 w-32 rounded-full border-4 border-background object-cover shadow-lg"
                        data-ai-hint={avatar1.imageHint}
                    />
                )}
                {avatar2 && (
                    <Image
                        src={avatar2.imageUrl}
                        alt="Managed service team member"
                        width={128}
                        height={128}
                        className="-ml-8 h-32 w-32 rounded-full border-4 border-background object-cover shadow-lg"
                        data-ai-hint={avatar2.imageHint}
                    />
                )}
                 {avatar3 && (
                    <Image
                        src={avatar3.imageUrl}
                        alt="Managed service team member"
                        width={128}
                        height={128}
                        className="-ml-8 h-32 w-32 rounded-full border-4 border-background object-cover shadow-lg"
                        data-ai-hint={avatar3.imageHint}
                    />
                )}
            </div>
            
             <div className="absolute bottom-1/4 right-1/4 flex items-center gap-2 rounded-full border border-border bg-background/50 p-2 pr-4 shadow-lg backdrop-blur-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-foreground">Responses Drafted</p>
            </div>
        </div>
      </div>
    </section>
  );
}
