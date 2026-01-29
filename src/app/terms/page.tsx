import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { TermsOfService } from '@/components/sections/TermsOfService';
import { siteConfig } from '@/config/site';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Terms of Service | Unboxx Business';
  const description =
    'Read the Unboxx Business Terms of Service. By using our services, you agree to these terms.';

  return {
    title,
    description,
    alternates: {
      canonical: '/terms',
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/terms`,
    },
  };
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main>
        <TermsOfService />
      </main>
      <Footer />
    </>
  );
}
