import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, MessageSquare, PlusCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero-graphic');
const heroAvatar = PlaceHolderImages.find(p => p.id === 'hero-avatar');

const socialProofIcons = [
  { name: 'Google', icon: <svg key="google" className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.35,11.1H12.18V13.83H18.68C18.43,15.63 17.25,17.1 15.38,17.1C13.1,17.1 11.2,15.21 11.2,12.92C11.2,10.63 13.1,8.74 15.38,8.74C16.5,8.74 17.43,9.17 18.2,9.88L20.27,7.82C18.88,6.58 17.23,6 15.38,6C12.03,6 9.25,8.44 9.25,12.92C9.25,17.4 12.03,19.84 15.38,19.84C18.9,19.84 21.45,17.42 21.45,13.2C21.45,12.5 21.4,11.79 21.35,11.1Z"/></svg> },
  { name: 'Shopify', icon: <svg key="shopify" className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.923 8.30078C12.4381 7.02878 11.238 6.45278 9.9246 6.45278C8.1633 6.45278 7.3323 7.80478 7.3323 9.40478C7.3323 11.0048 8.1633 12.3568 9.9246 12.3568C11.238 12.3568 12.4381 11.7808 12.923 10.5088H15.6669V12.3868C14.7712 13.5628 13.0691 14.4748 10.8753 14.4748C6.6789 14.4748 4 12.2308 4 9.40478C4 6.57878 6.6789 4.33478 10.8753 4.33478C13.0691 4.33478 14.7712 5.24678 15.6669 6.42278V8.30078H12.923Z"/></svg> },
  { name: 'WooCommerce', icon: <svg key="woo" className="h-6 w-6 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.28 17.49L12.41 14.49L10.54 17.49H7.3L11.47 11.42L8.2 5.49H11.41L13.28 8.49L15.15 5.49H18.37L14.2 11.42L18.47 17.49H14.28Z" /></svg> },
];

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,hsl(var(--primary)/0.1),transparent_40%)]"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 py-16 md:grid-cols-2 lg:py-24">
          <div className="flex flex-col items-start gap-y-8">
            <Badge variant="outline" className="border-blue-400/50 bg-blue-400/10 py-1 text-sm font-medium text-blue-300">
              #1 Highest Rated Ad Tracking Software For Shopify & WooCommerce
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Losing 60% of ad spend? Get every conversion back.
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              The only solution that pushes 100% accurate data into your ads manager. Raise ROAS by 50% in just 1 week.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Start 14 day free trial</Button>
              <Button size="lg" variant="secondary">
                Book a demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Set up in 5 minutes</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>No coding required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Exceptional 24/7 support</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                    {socialProofIcons.map((item) => item.icon)}
                </div>
                <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-sm text-muted-foreground">
                    4.9/5 from 1553 reviews
                </p>
            </div>
          </div>
          <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
            {heroImage && (
                 <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={800}
                    height={800}
                    data-ai-hint={heroImage.imageHint}
                    className="h-auto w-full max-w-lg object-contain"
                />
            )}
            
            <div className="absolute bottom-1/4 right-0 flex w-60 flex-col gap-3 rounded-lg border border-border/20 bg-card/50 p-3 shadow-2xl backdrop-blur-sm md:w-64">
              <div className="flex items-center gap-3">
                {heroAvatar && (
                  <Avatar className="h-12 w-12 border-2 border-background">
                    <AvatarImage src={heroAvatar.imageUrl} alt={heroAvatar.description} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Chelsea N.</p>
                  <p className="text-muted-foreground">21 sec ago</p>
                </div>
              </div>
              <Button variant="destructive" size="sm">
                <PlusCircle />
                ADD TO CART
              </Button>
            </div>

            <Button size="icon" className="absolute bottom-4 right-4 h-14 w-14 rounded-full bg-blue-600 shadow-lg hover:bg-blue-700">
                <MessageSquare className="h-7 w-7 text-white" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
