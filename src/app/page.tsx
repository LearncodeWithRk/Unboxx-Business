import type { Metadata } from 'next';
import { BuiltForUniversities } from '@/components/sections/BuiltForUniversities';
import { FAQs } from '@/components/sections/FAQs';
import { Footer } from '@/components/sections/Footer';
import { FromFeedbackToAction } from '@/components/sections/FromFeedbackToAction';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TheChallenge } from '@/components/sections/TheChallenge';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { SocialProof } from '@/components/sections/SocialProof';
import { Schema } from '@/components/SEO/Schema';
import { siteConfig } from '@/config/site';

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Unboxx Business | Turn Reviews Into Revenue';
  const description =
    'Monitor every review, route to the right team, and respond with brand consistency. Unboxx Business is the leading review management platform for multi-campus universities.';

  return {
    title,
    description,
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      url: siteConfig.url,
    },
  };
}

export default function Home() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Unboxx Business',
    url: siteConfig.url,
    logo: siteConfig.ogImage,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-000-000-0000',
      contactType: 'Customer Service',
      email: 'hello@unboxxbusiness.live',
    },
    sameAs: [siteConfig.links.twitter],
  };

  return (
    <>
      <Schema data={organizationSchema} />
      <Header />
      <Hero />
      <TheChallenge />
      <HowItWorks />
      <BuiltForUniversities />
      <FromFeedbackToAction />
      <SocialProof />
      <FAQs />
      <PremiumCTA />
      <Footer />
    </>
  );
}
