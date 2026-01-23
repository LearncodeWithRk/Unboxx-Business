export function TheChallenge() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 lg:py-32">
      <div className="absolute -inset-x-4 -top-48 h-[600px] bg-[radial-gradient(circle_at_50%_0%,hsl(var(--primary)/0.1),transparent_50%)] -z-0"></div>
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-2xl border border-primary/30 bg-background/50 p-6 sm:p-8 text-center shadow-2xl shadow-primary/10 backdrop-blur-sm">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Your reputation is fragmented across campuses, platforms, and
            departments
          </h2>
          <p className="mt-6 text-base text-muted-foreground">
            Prospective students and parents read reviews before they ever
            contact you. But with feedback scattered everywhere, it's
            impossible to maintain a consistent brand voice, spot trends, or
            prevent issues from slipping through the cracks. Unboxx Business
            solves this.
          </p>
        </div>
      </div>
    </section>
  );
}
