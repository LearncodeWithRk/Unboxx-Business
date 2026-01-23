'use client';

import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

// SVG Icons for different platforms
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.35 11.1H12.18V13.83H18.68C18.43 15.63 17.25 17.1 15.38 17.1C13.1 17.1 11.2 15.21 11.2 12.92C11.2 10.63 13.1 8.74 15.38 8.74C16.5 8.74 17.43 9.17 18.2 9.88L20.27 7.82C18.88 6.58 17.23 6 15.38 6C12.03 6 9.25 8.44 9.25 12.92C9.25 17.4 12.03 19.84 15.38 19.84C18.9 19.84 21.45 17.42 21.45 13.2C21.45 12.5 21.4 11.79 21.35 11.1Z" />
    </svg>
);

const CollegeDuniaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke='none' fill='#F0592A'/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="white" className="font-bold">CD</text>
    </svg>
);

const ShikshaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke='none' fill='#F18235' />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="white" className="font-bold">S</text>
    </svg>
);

const JustdialIcon = (props: React.SVGProps<SVGSVGElement>) => (
     <svg {...props} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke='none' fill='#FFC000'/>
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="black" className="font-bold">Jd</text>
    </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v7.028C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <defs>
            <radialGradient id="insta-gradient" cx="0.3" cy="1" r="1">
                <stop offset="0" stopColor="#FFD600"/>
                <stop offset="0.5" stopColor="#FF7A00"/>
                <stop offset="1" stopColor="#D62976"/>
            </radialGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#insta-gradient)" stroke="none"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke='white' />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" stroke='white'/>
    </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 7.184L18.901 1.153zm-1.61 19.52h2.554L7.546 3.32h-2.76l12.446 17.354z"/>
    </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.29-1.38c1.37.72 2.93 1.15 4.59 1.15h.11c5.46 0 9.91-4.45 9.91-9.91s-4.45-9.91-9.91-9.91zM17.02 14.14c-.16.27-.58.52-1.04.69-.47.18-1.03.22-1.57.12-.59-.1-1.25-.38-2.22-1.25-1.57-1.38-2.58-3.13-2.73-3.4-.15-.27-.03-1.04.14-1.24.16-.2.38-.28.53-.28h.36c.2 0 .42.02.6.28.16.27.52 1.25.56 1.35.04.1.06.22 0 .37-.06.15-.2.27-.36.42-.16.15-.3.26-.42.36-.12.1-.24.22-.1.42.14.2.66 1.13 1.44 1.84.99.9 1.75.99 2.02 1.1.27.1.42.09.57-.06.15-.15.65-.77.83-.97.18-.2.37-.15.57-.05.2.1.88.42 1.04.5.16.08.28.12.33.18.05.06.02.48-.14.75z"/>
    </svg>
);

const platforms = [
  { name: 'Google My Business', icon: GoogleIcon, orbit: 1, angle: 30, color: 'text-red-500' },
  { name: 'CollegeDunia', icon: CollegeDuniaIcon, orbit: 2, angle: 90, color: 'text-orange-500' },
  { name: 'Shiksha', icon: ShikshaIcon, orbit: 3, angle: 150, color: 'text-blue-500' },
  { name: 'Justdial', icon: JustdialIcon, orbit: 4, angle: 210, color: 'text-yellow-400' },
  { name: 'Facebook', icon: FacebookIcon, orbit: 2, angle: 270, color: 'text-blue-600' },
  { name: 'Instagram', icon: InstagramIcon, orbit: 3, angle: 330, color: 'text-pink-500' },
  { name: 'Twitter (X)', icon: XIcon, orbit: 1, angle: 240, color: 'text-white' },
  { name: 'WhatsApp', icon: WhatsAppIcon, orbit: 4, angle: 60, color: 'text-green-500' },
];

const orbitRadii = [90, 140, 190, 240];

const ReviewCard = () => {
    const avatar = PlaceHolderImages.find(p => p.id === 'review-avatar');

    return (
        <div className="animate-float-in opacity-0 absolute bottom-0 -right-8 sm:right-0 z-10 w-64 rounded-xl bg-background/50 p-4 shadow-2xl backdrop-blur-lg border border-border">
            <div className="flex items-start gap-4">
                 {avatar && (
                    <Image
                        src={avatar.imageUrl}
                        alt="Reviewer"
                        width={44}
                        height={44}
                        className="rounded-full"
                        data-ai-hint={avatar.imageHint}
                    />
                )}
                <div className="flex-1">
                    <p className="font-semibold text-foreground">Priya Sharma</p>
                    <p className="text-xs text-muted-foreground">21 sec ago</p>
                     <div className="mt-1 flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
            <Button size="sm" className="mt-3 w-full">Reply / Manage Review</Button>
        </div>
    );
};

export function ReviewOrbitAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center scale-[0.6] sm:scale-75 md:scale-90 lg:scale-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.15),transparent_55%)]"></div>

        {/* Orbit paths */}
        {orbitRadii.map((radius, i) => (
            <div
                key={`orbit-${i}`}
                className="absolute rounded-full border border-border/20"
                style={{
                    width: radius * 2,
                    height: radius * 2,
                }}
            />
        ))}

        {/* Central Core */}
        <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30">
            <div className="animate-pulse-glow h-16 w-16 rounded-full bg-primary/80 shadow-2xl shadow-primary/50 flex items-center justify-center">
               <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" className="fill-primary-foreground" />
                     <path d="M8 18L12 14L16 18L20 14L24 18" stroke="#050505" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
             <p className="absolute -bottom-7 text-xs text-center font-semibold text-foreground whitespace-nowrap">Unified Review Manager</p>
        </div>
        
        {/* Platform Icons */}
        <div className="absolute inset-0">
             {platforms.map((platform, i) => {
                const Icon = platform.icon;
                const radius = orbitRadii[platform.orbit - 1];
                const animationDuration = 20 + platform.orbit * 10;
                const animationDirection = i % 2 === 0 ? 'animate-orbit-1' : 'animate-orbit-2';
                
                return (
                    <div
                        key={platform.name}
                        className={cn('absolute top-1/2 left-1/2 -m-6', animationDirection)}
                        style={{ animationDuration: `${animationDuration}s` }}
                    >
                       <div
                            className="absolute"
                            style={{
                                transform: `rotate(${platform.angle}deg) translate(${radius}px) rotate(-${platform.angle}deg)`,
                            }}
                        >
                            <div className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-background/50 backdrop-blur-sm border border-border/30 shadow-lg transition-all hover:scale-110">
                                <Icon className={cn('h-7 w-7', platform.color)} />
                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full rounded-md bg-background px-2 py-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                    {platform.name}
                                </div>
                            </div>
                        </div>
                    </div>
                )
             })}
        </div>

        <ReviewCard />
    </div>
  );
}