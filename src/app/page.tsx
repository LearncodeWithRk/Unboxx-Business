import { BuiltForUniversities } from '@/components/sections/BuiltForUniversities';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TheChallenge } from '@/components/sections/TheChallenge';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TheChallenge />
      <HowItWorks />
      <BuiltForUniversities />
    </>
  );
}
