import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';
import CookieBanner from '@/components/CookieBanner';

export const metadata: Metadata = {
  title: 'LettDigital - Enkel veiledning for offentlige tjenester',
  description: 'Vi gjør det enklere for alle å bruke NAV, Skatteetaten og Helsenorge. Steg-for-steg veiledninger med store fonter og enkelt språk.',
  keywords: 'NAV hjelp, Skatteetaten veiledning, Helsenorge guide, digital hjelp eldre, offentlige tjenester, LettDigital',
  metadataBase: new URL('https://lettdigital.no'),
  openGraph: {
    title: 'LettDigital - Enkel veiledning for alle',
    description: 'Steg-for-steg veiledninger for NAV, Skatteetaten og Helsenorge. Enkelt språk og store bokstaver.',
    url: 'https://lettdigital.no',
    siteName: 'LettDigital',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'LettDigital - Enkel veiledning for offentlige tjenester',
      },
    ],
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LettDigital - Enkel veiledning for alle',
    description: 'Steg-for-steg veiledninger for NAV, Skatteetaten og Helsenorge.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AccessibilityToolbar />
        <CookieBanner />
      </div>
    </NextIntlClientProvider>
  );
}
