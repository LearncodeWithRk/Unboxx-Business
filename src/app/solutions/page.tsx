import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { PremiumCTA } from '@/components/sections/PremiumCTA';
import { SolutionsHero } from '@/components/sections/SolutionsHero';
import { AdmissionsEnrollment } from '@/components/sections/AdmissionsEnrollment';
import { StudentExperience } from '@/components/sections/StudentExperience';
import { MultiCampusOperations } from '@/components/sections/MultiCampusOperations';
import { AlumniReputation } from '@/components/sections/AlumniReputation';
import { FAQs } from '@/components/sections/FAQs';
import { Schema } from '@/components/SEO/Schema';

const solutionsFaqs = [
  {
    question: 'Which stakeholders typically use Unboxx Business?',
    answer:
      'Admissions, marketing, student experience, communications, campus operations, IT, and compliance teams. We configure access and permissions based on your organizational structure.',
  },
  {
    question: 'Can different campuses have different approval workflows?',
    answer: 'Yes. You can customize routing, templates, and approval requirements by campus, region, or department.',
  },
  {
    question: 'How do we ensure brand voice consistency across teams?',
    answer:
      'Use approved templates, tone guidance, and multi-level reviews before publication. All responses are logged and auditable.',
  },
  {
    question: 'Can we track ROI from review management?',
    answer:
      'You can track metrics like response rate, sentiment improvement, ratings trends, and resolution outcomes. Many universities correlate these with enrollment and retention data.',
  },
  {
    question: 'Do you work with universities outside India?',
    answer: 'Yes. We serve universities globally with support for multiple regions, time zones, languages, and compliance frameworks.',
  },
];

export const metadata: Metadata = {
  title: 'Solutions for Universities | Unboxx Business',
  description:
    'Explore solutions for admissions, student experience, and multi-campus operations. Unboxx Business helps universities turn feedback into a growth engine.',
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: solutionsFaqs.map((faq) => ({
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
        <SolutionsHero />
        <AdmissionsEnrollment />
        <StudentExperience />
        <MultiCampusOperations />
        <AlumniReputation />
        <FAQs faqs={solutionsFaqs} />
      </main>
      <PremiumCTA />
      <Footer />
    </>
  );
}
