import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { AboutHero } from '@/components/sections/AboutHero';
import { OurMission } from '@/components/sections/OurMission';
import { OurValues } from '@/components/sections/OurValues';
import { FooterCTA } from '@/components/sections/FooterCTA';
import { FAQs } from '@/components/sections/FAQs';

const aboutFaqs = [
  {
    question: 'Do you work with universities outside India?',
    answer:
      'Yes. We serve universities globally, with support for multiple regions, time zones, languages, and compliance frameworks.',
  },
  {
    question: 'Do you work with other industries?',
    answer:
      'No. Unboxx Business is built exclusively for universities. This focus allows us to serve higher education better than generalist platforms.',
  },
  {
    question: 'How do you stay up to date on review platform policies?',
    answer:
      'We monitor Google, Facebook, and other platforms for policy changes and update our guidance, templates, and training materials accordingly.',
  },
  {
    question: 'Can we influence your product roadmap?',
    answer:
      'Yes. Client feedback directly shapes our development priorities. Many features exist because clients requested them.',
  },
  {
    question: 'How do we get support?',
    answer:
      'All plans include email support. Professional and Enterprise plans include chat and phone support. Enterprise clients have dedicated success managers.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <OurMission />
        <OurValues />
        <FAQs faqs={aboutFaqs} />
      </main>
      <FooterCTA />
      <Footer />
    </>
  );
}
