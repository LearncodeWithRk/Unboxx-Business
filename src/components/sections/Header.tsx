'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useAuth } from '@/hooks/use-auth';
import { UserNav } from '@/components/auth/UserNav';
import { Skeleton } from '../ui/skeleton';

const navItems = [
  { name: 'Product', href: '/product', hasDropdown: false },
  { name: 'Solutions', href: '/solutions', hasDropdown: true },
  { name: 'Integrations', href: '#', hasDropdown: false },
  { name: 'Security', href: '#', hasDropdown: false },
  { name: 'Pricing', href: '#', hasDropdown: false },
  { name: 'About', href: '#', hasDropdown: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, loading } = useAuth();

  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b border-border/40 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rounded-md"
            >
              <rect width="32" height="32" rx="8" className="fill-primary" />
              <path
                d="M8 18L12 14L16 18L20 14L24 18"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="hidden text-lg font-bold text-foreground sm:inline-block">
              Unboxx Business
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-x-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
              {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
           <div className="hidden items-center gap-2 md:flex">
             {loading ? (
                <Skeleton className="h-10 w-24" />
             ) : user ? (
                <UserNav />
             ) : (
                <Button variant="ghost" asChild>
                    <Link href="/login">Sign in</Link>
                </Button>
             )}
             <Button>Book a demo</Button>
           </div>
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className="absolute inset-x-0 top-16 z-40 w-full origin-top transform bg-background shadow-lg md:hidden"
        >
          <div className="space-y-4 px-4 pb-4 pt-2">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="ml-auto h-4 w-4" />}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 border-t border-border pt-4">
               {loading ? (
                  <Skeleton className="h-10 w-full" />
               ) : user ? (
                  <>
                    <p className="text-center text-sm font-medium">{user.displayName}</p>
                    <Button variant="outline" className="w-full" onClick={() => { auth.signOut(); setMobileMenuOpen(false); }}>Sign out</Button>
                  </>
               ) : (
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>Sign in</Link>
                  </Button>
               )}
               <Button className="w-full">Book a demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
