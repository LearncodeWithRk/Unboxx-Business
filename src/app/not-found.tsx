import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-400px)] flex-col items-center justify-center bg-background py-20 text-center">
        <div className="container max-w-md">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Button asChild>
              <Link href="/">Go back home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
