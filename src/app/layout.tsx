import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import ServiceWorkerRegistration from '@/components/ServiceWorkerRegistration';
import './globals.css';

const GA_MEASUREMENT_ID = 'G-Q0S1HYEQ9T';

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="google-site-verification" content="googlefccdb0e4ab7784ab" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e3a5f" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="LettDigital" />
      </head>
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <noscript>
          <div style={{
            padding: '1.5rem',
            backgroundColor: '#fef3c7',
            textAlign: 'center',
            fontSize: '1.125rem',
            borderBottom: '2px solid #f59e0b'
          }}>
            <strong>JavaScript er deaktivert.</strong>
            <br />
            LettDigital fungerer best med JavaScript aktivert, men du kan fortsatt lese innholdet på sidene.
          </div>
        </noscript>
        {children}
        <Analytics />
        <ServiceWorkerRegistration />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
