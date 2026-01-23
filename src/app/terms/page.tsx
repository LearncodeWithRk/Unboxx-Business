import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { TermsOfService } from '@/components/sections/TermsOfService';

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
