import Link from 'next/link';

const footerNav = [
  {
    category: 'Product',
    items: ['Features', 'Pricing', 'Integrations', 'Security', 'Solutions'],
  },
  {
    category: 'Resources',
    items: ['Blog', 'Case Studies', 'Documentation', 'About'],
  },
  {
    category: 'Legal',
    items: ['Privacy Policy', 'Terms of Service', 'Compliance'],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-12 lg:flex-row">
          <div className="flex-shrink-0">
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
              <span className="text-lg font-bold text-foreground">
                Unboxx Business
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Complete review governance for premium universities.
            </p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((section) => (
              <div key={section.category}>
                <h3 className="font-semibold text-foreground">
                  {section.category}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 border-t border-border/40 pt-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Unboxx Business. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
