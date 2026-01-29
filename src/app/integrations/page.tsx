import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { IntegrationsHero } from '@/components/sections/IntegrationsHero';
import { ReviewPlatformIntegrations } from '@/components/sections/ReviewPlatformIntegrations';
import { UniversitySystemIntegrations } from '@/components/sections/UniversitySystemIntegrations';
import { ApiAndDataAccess } from '@/components/sections/ApiAndDataAccess';
import { SecurityAndCompliance } from '@/components/sections/SecurityAndCompliance';
import { FAQs } from '@/components/sections/FAQs';
import { Schema } from '@/components/SEO/Schema';
import { siteConfig } from '@/config/site';

const integrationsFaqs = [
  {
    question: 'Do you integrate with all review platforms?',
    answer:
      'We integrate with Google Business Profile, Facebook, and leading education review sites. We add new sources based on client needs and API availability.',
  },
  {
    question: 'Can we connect Unboxx Business to our existing CRM?',
    answer:
      'Yes. We support integration with common university CRM systems to provide context about reviewers and trigger follow-up workflows.',
  },
  {
    question: 'How long does integration setup take?',
    answer:
      'Most integrations are configured during onboarding (2–4 weeks). Complex or custom integrations may require additional time.',
  },
  {
    question: 'Can we export review data for our own analysis?',
    answer: 'Yes. You can export data via the platform UI or use our API for programmatic access.',
  },
  {
    question: "What if a review platform doesn't have an API?",
    answer:
      "We work with you to find alternative solutions, including manual monitoring support where APIs aren't available.",
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Integrations | Unboxx Business';
  const description =
    'Unboxx Business integrates with review platforms like Google and Facebook, as well as your existing university CRM and SIS systems for seamless workflow.';

  return {
    title,
    description,
    alternates: {
      canonical: '/integrations',
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/integrations`,
    },
  };
}

export default function IntegrationsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: integrationsFaqs.map((faq) => ({
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
        <IntegrationsHero />
        <ReviewPlatformIntegrations />
        <UniversitySystemIntegrations />
        <ApiAndDataAccess />
        <SecurityAndCompliance />
        <FAQs faqs={integrationsFaqs} />
      </main>
      <Footer />
    </>
  );
}
