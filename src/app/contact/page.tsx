import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactHero } from '@/components/sections/ContactHero';
import { ContactFormAndDetails } from '@/components/sections/ContactFormAndDetails';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactHero />
        <ContactFormAndDetails />
      </main>
      <Footer />
    </>
  );
}
