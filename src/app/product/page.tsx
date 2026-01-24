import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ProductHero } from '@/components/sections/ProductHero';
import { RealTimeMonitoring } from '@/components/sections/RealTimeMonitoring';
import { AutomaticRouting } from '@/components/sections/AutomaticRouting';
import { ResponseGovernance } from '@/components/sections/ResponseGovernance';
import { AnalyzeSentiment } from '@/components/sections/AnalyzeSentiment';
import { EscalateAndResolve } from '@/components/sections/EscalateAndResolve';
import { ReportToLeadership } from '@/components/sections/ReportToLeadership';
import { ManagedServices } from '@/components/sections/ManagedServices';
import { FAQs } from '@/components/sections/FAQs';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { Schema } from '@/components/SEO/Schema';

const productFaqs = [
  {
    question: 'Can we customize response templates?',
    answer:
      'Yes. You can create unlimited templates, customize them by campus or department, and set approval requirements for each template type.',
  },
  {
    question: 'How does sentiment analysis work?',
    answer:
      'Our system uses natural language processing to score sentiment (positive, neutral, negative) and extract common themes like "campus facilities," "faculty quality," or "career support."',
  },
  {
    question: 'Can we respond directly from the platform?',
    answer:
      'Yes. Draft, edit, and publish responses without leaving Unboxx Business. All responses sync back to the original review platform.',
  },
  {
    question: 'What happens if someone posts false information?',
    answer:
      'You can flag reviews for escalation, respond publicly with factual corrections, and follow platform-specific reporting procedures for policy violations.',
  },
  {
    question: 'Do you train our team on the platform?',
    answer: 'Yes. We provide onboarding training, documentation, and ongoing support for all users.',
  },
];

export const metadata: Metadata = {
  title: 'Product Features | Unboxx Business',
  description:
    'Discover the features of Unboxx Business, from real-time monitoring and automated routing to response governance and executive reporting.',
  alternates: {
    canonical: '/product',
  },
};

export default function ProductPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: productFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
  return (
    <>
      <Schema data={faqSchema} />
      <Header />
      <main>
        <ProductHero />
        <RealTimeMonitoring />
        <AutomaticRouting />
        <ResponseGovernance />
        <AnalyzeSentiment />
        <EscalateAndResolve />
        <ReportToLeadership />
        <ManagedServices />
      </main>
      <FAQs faqs={productFaqs}/>
      <PremiumCTA />
      <Footer />
    </>
  );
}
