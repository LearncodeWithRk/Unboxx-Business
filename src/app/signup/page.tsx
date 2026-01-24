'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from '@/lib/firebase';
import { createUserInDB } from '@/lib/rtdb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Sign Up',
  robots: {
    index: false,
    follow: true,
  },
};

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.35 11.1H12.18V13.83H18.68C18.43 15.63 17.25 17.1 15.38 17.1C13.1 17.1 11.2 15.21 11.2 12.92C11.2 10.63 13.1 8.74 15.38 8.74C16.5 8.74 17.43 9.17 18.2 9.88L20.27 7.82C18.88 6.58 17.23 6 15.38 6C12.03 6 9.25 8.44 9.25 12.92C9.25 17.4 12.03 19.84 15.38 19.84C18.9 19.84 21.45 17.42 21.45 13.2C21.45 12.5 21.4 11.79 21.35 11.1Z" />
    </svg>
);


export default function SignUpPage() {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFirebaseConfigured || !auth) {
        toast({ variant: 'destructive', title: 'Sign up failed', description: 'Firebase is not configured. Please set environment variables.' });
        return;
    }
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName });
      await createUserInDB(userCredential.user);
      router.push('/');
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Sign up failed',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    if (!isFirebaseConfigured || !auth) {
        toast({ variant: 'destructive', title: 'Google sign up failed', description: 'Firebase is not configured. Please set environment variables.' });
        return;
    }
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      await createUserInDB(result.user);
      router.push('/');
    } catch (error: any) {
       toast({
        variant: 'destructive',
        title: 'Google sign up failed',
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
           <Link href="/" className="flex items-center gap-2 justify-center mb-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rounded-md"
              >
                <rect width="32" height="32" rx="8" className="fill-primary" />
                <path
                  d="M8 18L12 14L16 18L20 14L24 18"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-lg font-bold text-foreground">
                Unboxx Business
              </span>
            </Link>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>Enter your details to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignUp} className="space-y-4">
             <div className="space-y-2">
              <Label htmlFor="displayName">Full Name</Label>
              <Input
                id="displayName"
                type="text"
                placeholder="Priya Sharma"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
            </div>
            <Button type="submit" className="w-full" disabled={loading || !isFirebaseConfigured}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
           <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={loading || !isFirebaseConfigured}>
                <GoogleIcon className="mr-2 h-4 w-4" />
                Sign up with Google
            </Button>
            <p className="mt-4 text-center text-sm text-muted-foreground">
                Already have an account?{' '}
                <Link href="/login" className="font-medium text-primary hover:underline">
                    Sign in
                </Link>
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
