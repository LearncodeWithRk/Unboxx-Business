import type {Metadata} from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/hooks/use-auth';
import { Toaster } from '@/components/ui/toaster';
import { BackToTopButton } from '@/components/ui/back-to-top-button';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CleanCanvas',
  description: 'A clean canvas for building beautiful interfaces.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <AuthProvider>
          <main>
            {children}
          </main>
          <Toaster />
        </AuthProvider>
        <BackToTopButton />
      </body>
    </html>
  );
}
