import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PrivacyPolicy } from '@/components/sections/PrivacyPolicy';

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
