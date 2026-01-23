import { BuiltForUniversities } from '@/components/sections/BuiltForUniversities';
import { FAQs } from '@/components/sections/FAQs';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';
import { FromFeedbackToAction } from '@/components/sections/FromFeedbackToAction';
import { GetStarted } from '@/components/sections/GetStarted';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { KeyOutcomes } from '@/components/sections/KeyOutcomes';
import { TheChallenge } from '@/components/sections/TheChallenge';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TheChallenge />
      <HowItWorks />
      <BuiltForUniversities />
      <FromFeedbackToAction />
      <KeyOutcomes />
      <FAQs />
      <GetStarted />
      <FinalCTA />
      <Footer />
    </>
  );
}
