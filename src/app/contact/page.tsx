import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactHero } from '@/components/sections/ContactHero';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        {/* Components will be added here */}
      </main>
      <Footer />
    </>
  );
}
