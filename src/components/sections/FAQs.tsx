'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';

type FAQ = {
  question: string;
  answer: string;
};

const defaultFaqs: FAQ[] = [
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
    answer:
      'Yes. We provide onboarding training, documentation, and ongoing support for all users.',
  },
];

interface FAQsProps {
  faqs?: FAQ[];
}

export function FAQs({ faqs = defaultFaqs }: FAQsProps) {
  return (
    <section className="bg-background py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="outline" className="w-fit border-primary/50 bg-primary/10 text-primary">
            FAQs
          </Badge>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
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
              className="rounded-lg border bg-secondary px-6 transition-all hover:bg-secondary/80"
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
