import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LettDigital - Enkel veiledning for offentlige tjenester',
  description: 'Vi gjør det enklere for alle å bruke NAV, Skatteetaten og Helsenorge.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="googlefccdb0e4ab7784ab" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LettDigital" />
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        {children}
        <Analytics />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
