import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PrivacyPolicy } from '@/components/sections/PrivacyPolicy';

export const metadata: Metadata = {
  title: 'Privacy Policy | Unboxx Business',
  description: 'Read the Unboxx Business privacy policy to understand how we collect, use, and protect your data in compliance with GDPR, DPDP, and FERPA.',
  alternates: {
    canonical: '/privacy',
  },
};

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
