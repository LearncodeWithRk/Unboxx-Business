import { Header } from '@/components/sections/Header';
import { Footer } from '@/components/sections/Footer';
import { ContactHero } from '@/components/sections/ContactHero';
import { ContactFormAndDetails } from '@/components/sections/ContactFormAndDetails';
import { FAQs } from '@/components/sections/FAQs';

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

export default function ContactPage() {
  return (
    <>
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