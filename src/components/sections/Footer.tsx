import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  product: [
    { name: 'Product', href: '/product' },
    { name: 'How it works', href: '/product' },
    { name: 'Features', href: '/product' },
    { name: 'Integrations', href: '/integrations' },
    { name: 'Security', href: '/product#governance' },
  ],
  solutions: [
    { name: 'For Universities', href: '/solutions' },
    { name: 'Admissions & Enrollment', href: '/solutions#admissions-enrollment' },
    { name: 'Student Experience', href: '/solutions#student-experience' },
    { name: 'Multi-campus Operations', href: '/solutions#multi-campus-operations' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Pricing', href: '/pricing' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1769703493/android-chrome-192x192_k8ouzu.png"
                alt="Unboxx Business Logo"
                width={32}
                height={32}
                className="rounded-md"
              />
              <span className="text-lg font-bold text-foreground">
                Unboxx Business
              </span>
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Product</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground">Solutions</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-border/20 pt-8 text-center text-sm text-muted-foreground">
          <p>Unboxx Business supports compliance-aware review management. Not legal advice.</p>
          <p>&copy; 2026 Unboxx Business. India + Global.</p>
        </div>
      </div>
    </footer>
  );
}
