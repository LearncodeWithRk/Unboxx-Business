import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PrivacyPolicy } from '@/components/sections/PrivacyPolicy';
import { siteConfig } from '@/config/site';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Privacy Policy | Unboxx Business';
  const description =
    'Read the Unboxx Business privacy policy to understand how we collect, use, and protect your data in compliance with GDPR, DPDP, and FERPA.';

  return {
    title,
    description,
    alternates: {
      canonical: '/privacy',
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/privacy`,
    },
  };
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}
