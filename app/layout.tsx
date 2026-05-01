import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ease Your Tease | AI Transformation Company',
  description: 'We build AI-native systems that automate operations, empower teams, and drive measurable growth across corporates, schools, and institutes.',
  keywords: ['AI transformation', 'AI systems', 'corporate AI', 'school AI', 'NEP 2020', 'AI consulting'],
  authors: [{ name: 'Ease Your Tease' }],
  openGraph: {
    title: 'Ease Your Tease | AI Transformation Company',
    description: 'We build AI-native systems that automate operations, empower teams, and drive measurable growth.',
    url: 'https://easeyourtease.com',
    siteName: 'Ease Your Tease',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ease Your Tease | AI Transformation Company',
    description: 'We build AI-native systems that automate operations, empower teams, and drive measurable growth.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bg text-slate-200 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
