
import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Reema Alsawalma | Entrepreneur & Media Personality',
  description: 'Official website of Reema Alsawalma, entrepreneur, media personality, and founder of La Donna di Ferro and ORA GOLD Real Estate.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Hero /> {/* Keep or remove this line depending on whether you want Hero on every page */}
        {children}
        <Footer />
      </body>
    </html>
  );
}