import { Header } from '@/components/sections/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-background">
        <div className="container px-4 text-center md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl">
            Build Your Next App Faster
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-muted-foreground">
            You've got a beautiful header. Now, let's build the rest.
          </p>
        </div>
      </main>
    </>
  );
}
