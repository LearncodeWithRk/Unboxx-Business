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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Check, Mail, Phone, CalendarIcon } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import Link from 'next/link';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  universityName: z.string().min(1, 'University name is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  campusCount: z.string().min(1, 'Number of campuses is required'),
  phone: z.string().optional(),
  demoDate: z.date().optional(),
  howDidYouHear: z.string().optional(),
  anythingElse: z.string().optional(),
});

export function ContactFormAndDetails() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      universityName: '',
      jobTitle: '',
      campusCount: '',
      phone: '',
      howDidYouHear: '',
      anythingElse: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here you would typically send the form data to your backend
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
                    <a href="mailto:hello@unboxxbusiness.com" className="font-medium text-foreground hover:text-primary">hello@unboxxbusiness.com</a>
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
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Priya" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Sharma" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="jobTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Job title / Department*</FormLabel>
                          <FormControl>
                            <Input placeholder="Admissions Director" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="campusCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of campuses*</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="3" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                </div>

                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number (optional)</FormLabel>
                      <FormControl>
                        <Input type="tel" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                 <FormField
                  control={form.control}
                  name="demoDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Preferred demo date/time (optional)</FormLabel>
                       <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0,0,0,0))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="howDidYouHear"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>How did you hear about us? (optional)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="search">Search Engine (Google, etc.)</SelectItem>
                          <SelectItem value="social">Social Media</SelectItem>
                          <SelectItem value="conference">Conference/Event</SelectItem>
                          <SelectItem value="referral">Referral</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="anythingElse"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Anything we should know before the demo? (optional)</FormLabel>
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
