import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';

export default function ProductPage() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto py-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Product Page
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              You can start designing your product page components here.
            </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
