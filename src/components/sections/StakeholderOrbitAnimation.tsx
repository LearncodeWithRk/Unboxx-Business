'use client';

import React from 'react';
import { Briefcase, Settings, Smile, Users, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

const stakeholders = [
  { name: 'Admissions', icon: Users, orbit: 1, angle: 45, color: 'text-chart-1' },
  { name: 'Student Experience', icon: Smile, orbit: 2, angle: 135, color: 'text-chart-2' },
  { name: 'Operations', icon: Settings, orbit: 3, angle: 225, color: 'text-chart-3' },
  { name: 'Leadership', icon: Briefcase, orbit: 2, angle: 315, color: 'text-chart-4' },
];

const orbitRadii = [100, 160, 220];

export function StakeholderOrbitAnimation() {
  return (
    <div className="relative flex h-full w-full items-center justify-center scale-[0.7] sm:scale-75 md:scale-90 lg:scale-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(var(--primary)/0.1),transparent_60%)]"></div>

        {/* Orbit paths */}
        {orbitRadii.map((radius, i) => (
            <div
                key={`orbit-${i}`}
                className="absolute rounded-full border border-dashed border-border/30"
                style={{
                    width: radius * 2,
                    height: radius * 2,
                }}
            />
        ))}

        {/* Central Core */}
        <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-full bg-background border border-border shadow-lg">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
               <Network className="h-10 w-10 text-primary animate-pulse-glow" />
            </div>
             <p className="absolute -bottom-7 text-sm font-semibold text-foreground whitespace-nowrap">Unboxx Business</p>
        </div>
        
        {/* Stakeholder Icons */}
        <div className="absolute inset-0">
             {stakeholders.map((stakeholder, i) => {
                const Icon = stakeholder.icon;
                const radius = orbitRadii[stakeholder.orbit - 1];
                const animationDuration = 25 + stakeholder.orbit * 10;
                const animationDirection = i % 2 === 0 ? 'animate-orbit-1' : 'animate-orbit-2';
                
                return (
                    <div
                        key={stakeholder.name}
                        className={cn('absolute top-1/2 left-1/2 -m-7', animationDirection)}
                        style={{ animationDuration: `${animationDuration}s`, animationDelay: `-${i * 5}s` }}
                    >
                       <div
                            className="absolute"
                            style={{
                                transform: `rotate(${stakeholder.angle}deg) translate(${radius}px) rotate(-${stakeholder.angle}deg)`,
                            }}
                        >
                            <div className="group relative flex h-14 w-14 flex-col items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-md transition-all hover:scale-110 hover:border-primary/50">
                                <Icon className={cn('h-7 w-7', stakeholder.color)} />
                                <div className="absolute top-full mt-2 rounded-md bg-background px-2 py-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                                    {stakeholder.name}
                                </div>
                            </div>
                        </div>
                    </div>
                )
             })}
        </div>
    </div>
  );
}
