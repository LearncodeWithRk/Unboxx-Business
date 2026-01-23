import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { TheChallenge } from '@/components/sections/TheChallenge';
import { HowItWorks } from '@/components/sections/HowItWorks';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TheChallenge />
      <HowItWorks />
    </>
  );
}
