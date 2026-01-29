'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  universityName: z.string().min(1, 'University name is required'),
  message: z.string().optional(),
});

const encode = (data: { [key: string]: any }) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export function ContactFormAndDetails() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      email: '',
      universityName: '',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        toast({
          title: 'Form submitted!',
          description: 'Thanks for reaching out. We will get back to you shortly.',
        });
        form.reset();
      })
      .catch((error) => {
        toast({
          variant: 'destructive',
          title: 'Uh oh! Something went wrong.',
          description: 'There was a problem submitting your form. Please try again.',
        });
      });
  }

  return (
    <section className="bg-background py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto grid max-w-7xl grid-cols-1 gap-16 px-4 md:grid-cols-2">
        {/* Left Column: What to expect & other ways to reach */}
        <div className="flex flex-col gap-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What happens in a demo
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our demos are tailored to your university. We'll ask about your campus structure, review volume, stakeholder needs, and governance requirements. Then we'll walk through how Unboxx Business addresses your specific challenges.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="font-semibold text-foreground">Demo agenda:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">Your current review management challenges (5 min)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">Platform walkthrough focused on your needs (15 min)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">Q&A and next steps (10 min)</span>
                </li>
              </ul>
            </div>
             <div className="mt-8">
              <h3 className="font-semibold text-foreground">Who should attend:</h3>
              <p className="mt-2 text-muted-foreground">Admissions, marketing, student experience, IT, compliance—whoever is involved in reputation management or will use the platform.</p>
            </div>
          </div>

          <div className="rounded-2xl border border-border/20 bg-secondary/20 p-8">
             <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Prefer to email or call?
            </h2>
            <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary"/>
                    <a href="mailto:hello@unboxxbusiness.live" className="font-medium text-foreground hover:text-primary">hello@unboxxbusiness.live</a>
                </div>
                 <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary"/>
                    <span className="font-medium text-foreground">Phone available upon request</span>
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                    Office hours: Monday–Friday, 9 AM–6 PM IST (we support global time zones)
                </p>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <Card id="book-a-demo" className="bg-secondary/20 border-border/20 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Book your demo</CardTitle>
            <CardDescription>We'll confirm your demo time via email within 1 business day.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form 
                name="contact"
                data-netlify="true"
                onSubmit={form.handleSubmit(onSubmit)} 
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Priya Sharma" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address*</FormLabel>
                      <FormControl>
                        <Input placeholder="you@university.edu" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="universityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University name*</FormLabel>
                      <FormControl>
                        <Input placeholder="University of India" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Please share anything that will help us prepare for our meeting. (optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., We are particularly interested in multi-campus governance features."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full">Book my demo</Button>
              </form>
            </Form>
             <p className="mt-6 text-center text-xs text-muted-foreground">
                We never share your information. See our{' '}
                <Link href="/privacy" className="underline hover:text-primary">
                    Privacy Policy
                </Link>.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
