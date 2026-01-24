import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { TermsOfService } from '@/components/sections/TermsOfService';

export const metadata: Metadata = {
  title: 'Terms of Service | Unboxx Business',
  description: 'Read the Unboxx Business Terms of Service. By using our services, you agree to these terms.',
  alternates: {
    canonical: '/terms',
  },
};

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
