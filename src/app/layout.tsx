import './globals.css';

import Footer from '@/components/ui/footer';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import { Urbanist } from 'next/font/google';
import { seo } from '@/configs/seo.config';

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['200', '400', '600'],
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.openGraph.title,
    description: seo.openGraph.description,
    url: seo.openGraph.url,
    images: [
      {
        url: seo.openGraph.image.url,
        width: seo.openGraph.image.width,
        height: seo.openGraph.image.height,
        alt: seo.openGraph.image.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.twitter.title,
    description: seo.twitter.description,
    images: [seo.twitter.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${urbanist.className} antialiased bg-black overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
