import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { AboutHero } from '@/components/sections/AboutHero';
import { OurMission } from '@/components/sections/OurMission';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurMission />
        {/* Content for the About page will be added here. */}
      </main>
      <Footer />
    </>
  );
}
