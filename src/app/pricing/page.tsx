import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PricingHero } from '@/components/sections/PricingHero';
import { PricingTiers } from '@/components/sections/PricingTiers';
import { ProcurementFriendly } from '@/components/sections/ProcurementFriendly';
import { FAQs } from '@/components/sections/FAQs';
import { Schema } from '@/components/SEO/Schema';
import { siteConfig } from '@/config/site';

const pricingFaqs = [
  {
    question: 'How is pricing calculated?',
    answer:
      'Pricing is based on the number of campus locations, review volume, and the plan tier you select. Contact us for a custom quote.',
  },
  {
    question: 'Can we start with one campus and add more later?',
    answer:
      'Yes. Many universities start with a pilot campus and expand. We support phased rollouts with pricing that scales as you grow.',
  },
  {
    question: 'Do you offer discounts for annual contracts?',
    answer: 'Yes. We offer discounted rates for annual and multi-year commitments.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept purchase orders, wire transfers, ACH, and credit cards. Net-30 terms available for qualified institutions.',
  },
  {
    question: 'Is there a setup fee?',
    answer:
      'Setup and onboarding are included in all plans. Complex integrations or custom configurations may have additional costs, discussed upfront.',
  },
  {
    question: 'Can we cancel anytime?',
    answer:
      'Contract terms vary by plan. We offer month-to-month options for Starter plans and annual contracts for Professional and Enterprise tiers.',
  },
  {
    question: 'Do you offer non-profit or educational discounts?',
    answer: 'Our pricing is designed for educational institutions. Contact us to discuss your specific needs.',
  },
];

export async function generateMetadata(): Promise<Metadata> {
  const title = 'Pricing | Unboxx Business';
  const description =
    'Explore pricing plans for Unboxx Business. We offer flexible, procurement-friendly pricing that scales with your university, from single campuses to global institutions.';

  return {
    title,
    description,
    alternates: {
      canonical: '/pricing',
    },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/pricing`,
    },
  };
}

export default function PricingPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((faq) => ({
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
        <PricingHero />
        <PricingTiers />
        <ProcurementFriendly />
        <FAQs faqs={pricingFaqs} />
      </main>
      <Footer />
    </>
  );
}
