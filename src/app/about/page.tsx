import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { AboutHero } from '@/components/sections/AboutHero';
import { OurMission } from '@/components/sections/OurMission';
import { OurValues } from '@/components/sections/OurValues';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurMission />
        <OurValues />
      </main>
      <Footer />
    </>
  );
}
