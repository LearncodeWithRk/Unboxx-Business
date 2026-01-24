import type { Metadata } from 'next';
import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactHero } from '@/components/sections/ContactHero';
import { ContactFormAndDetails } from '@/components/sections/ContactFormAndDetails';
import { FAQs } from '@/components/sections/FAQs';
import { Schema } from '@/components/SEO/Schema';

const contactFaqs = [
  {
    question: 'Do I need to prepare anything before the demo?',
    answer:
      'No preparation needed. If you have specific questions or scenarios, feel free to share them in the form so we can tailor the demo.',
  },
  {
    question: 'How long is the demo?',
    answer: '30 minutes. We can extend if you have additional questions.',
  },
  {
    question: 'Can multiple people from my team join?',
    answer:
      'Absolutely. We encourage cross-functional attendance so everyone understands how the platform works.',
  },
  {
    question: 'Will you pressure us to buy during the demo?',
    answer:
      'No. Our goal is to show you how Unboxx Business works and answer your questions. You decide next steps.',
  },
  {
    question: 'What happens after the demo?',
    answer:
      "We'll send a follow-up email with a recap, pricing information, and next steps if you're interested. No pushy sales tactics.",
  },
];

export const metadata: Metadata = {
  title: 'Contact Us | Book a Demo with Unboxx Business',
  description:
    'Get in touch with the Unboxx Business team. Book a personalized demo to see how our review management platform can help your university.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: contactFaqs.map((faq) => ({
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
        <ContactHero />
        <ContactFormAndDetails />
        <FAQs faqs={contactFaqs} />
      </main>
      <Footer />
    </>
  );
}
