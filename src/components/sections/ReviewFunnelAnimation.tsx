'use client';

import React from 'react';
import { FileCheck2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Icons are self-contained here
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
            <radialGradient id="insta-gradient-funnel" cx="0.3" cy="1" r="1">
                <stop offset="0" stopColor="#FFD600"/>
                <stop offset="0.5" stopColor="#FF7A00"/>
                <stop offset="1" stopColor="#D62976"/>
            </radialGradient>
        </defs>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" fill="url(#insta-gradient-funnel)" stroke="none"/>
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
  { icon: GoogleIcon, x: '15%', delay: '0s' },
  { icon: ShikshaIcon, x: '75%', delay: '1.2s' },
  { icon: FacebookIcon, x: '5%', delay: '2.4s' },
  { icon: JustdialIcon, x: '85%', delay: '3.6s' },
  { icon: XIcon, x: '25%', delay: '4.8s' },
  { icon: CollegeDuniaIcon, x: '65%', delay: '6.0s' },
  { icon: InstagramIcon, x: '50%', delay: '7.2s' },
  { icon: WhatsAppIcon, x: '35%', delay: '8.4s' },
];

const FunnelIcon = ({ icon: Icon, style }: { icon: React.ElementType, style: React.CSSProperties }) => {
    return (
        <div className="absolute top-0 h-10 w-10 animate-funnel-drop rounded-full bg-background/50 backdrop-blur-sm border border-border/30 shadow-lg flex items-center justify-center" style={style}>
            <Icon className="h-6 w-6" />
        </div>
    );
};

export function ReviewFunnelAnimation() {
  return (
    <div className="relative flex h-full min-h-[400px] w-full items-center justify-center lg:min-h-[500px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.05),transparent_65%)]"></div>

        {/* Funnel Shape */}
        <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="funnelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary)/0.2)' }} />
                        <stop offset="50%" style={{ stopColor: 'hsl(var(--primary)/0.05)' }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--primary)/0.2)' }} />
                    </linearGradient>
                </defs>
                <polygon points="0,0 100,0 70,100 30,100" fill="url(#funnelGradient)" stroke="hsl(var(--primary)/0.3)" strokeWidth="0.5" />
            </svg>
            
            {/* Animated Icons */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                 {platforms.map((platform, i) => (
                     <FunnelIcon
                        key={i}
                        icon={platform.icon}
                        style={{
                            left: platform.x,
                            animationDelay: platform.delay,
                        }}
                    />
                ))}
            </div>
        </div>

        {/* Funnel Output */}
        <div className="absolute bottom-[20%] flex flex-col items-center">
             <div className="relative z-10 flex h-16 w-16 flex-col items-center justify-center rounded-full bg-primary/20 backdrop-blur-sm border border-primary/50 shadow-lg">
                <div className="animate-pulse-glow h-12 w-12 rounded-full bg-primary/80 shadow-2xl shadow-primary/50 flex items-center justify-center">
                   <FileCheck2 className="h-7 w-7 text-primary-foreground" />
                </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground">Unified Review</p>
        </div>
    </div>
  );
}
