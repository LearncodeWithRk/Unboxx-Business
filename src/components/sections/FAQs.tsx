'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What review platforms does Unboxx Business monitor?',
    answer:
      'Google Business Profile, Facebook, leading education review sites, and other platforms where prospective students research universities. We add new sources based on client needs.',
  },
  {
    question: 'How do you handle student privacy in responses?',
    answer:
      'Our platform guides teams to never confirm student identity, move sensitive topics offline, and follow privacy-safe response protocols aligned with FERPA, GDPR, and DPDP principles.',
  },
  {
    question: 'Can we manage reviews across multiple countries?',
    answer:
      'Yes. Unboxx Business supports multi-region operations with time zone awareness, language support, and compliance considerations for India, EU, UK, US, and other markets.',
  },
  {
    question: 'Do you buy or incentivize reviews?',
    answer:
      'No. We do not support review gating, purchasing reviews, or policy-violating incentive practices. Our platform is built for ethical reputation management only.',
  },
  {
    question: 'How quickly can we get started?',
    answer:
      'Most universities are live within 2–4 weeks depending on campus count and integration requirements. We handle setup, training, and ongoing support.',
  },
  {
    question: "What if we don't have resources to respond to every review?",
    answer:
      'We offer optional managed services where our team drafts responses for your approval, following your brand voice and governance requirements.',
  },
];

export function FAQs() {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-primary">FAQs</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Questions? We got answers.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do you have more questions? Contact our support team at{' '}
            <a href="mailto:support@unboxx.com" className="text-primary hover:underline">
              support@unboxx.com
            </a>
          </p>
        </div>
        <Accordion type="single" collapsible className="mt-12 w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-lg border-border/20 bg-secondary/20 px-6 transition-all hover:bg-secondary/30"
            >
              <AccordionTrigger className="py-5 text-left font-medium text-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
