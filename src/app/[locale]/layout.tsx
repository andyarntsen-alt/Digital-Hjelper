import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { OrganizationSchema, WebSiteSchema } from '@/components/StructuredData';
import LanguageHtmlUpdater from '@/components/LanguageHtmlUpdater';
import HreflangTags from '@/components/HreflangTags';
import { ToastProvider } from '@/contexts/ToastContext';

// Dynamic imports for better performance - these load after initial page render
const AccessibilityToolbar = dynamic(() => import('@/components/AccessibilityToolbar'), {
  ssr: false,
});
const CookieBanner = dynamic(() => import('@/components/CookieBanner'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Lett Digital - Digital hjelp for eldre og nye i Norge | NAV, Skatt, Helse',
  description: 'Gratis veiledning for eldre, seniorer og nye i Norge. Lær å bruke NAV, Skatteetaten og Helsenorge med enkle steg-for-steg guider på norsk, engelsk og ukrainsk.',
  keywords: 'Lett Digital, lett digital, LettDigital, digital hjelp eldre, NAV hjelp nye i Norge, Skatteetaten veiledning innvandrere, Helsenorge guide ukrainsk, offentlige tjenester forklart enkelt, NAV på engelsk, digital hjelp seniorer',
  metadataBase: new URL('https://www.lettdigital.no'),
  openGraph: {
    title: 'Lett Digital - Digital hjelp for eldre og nye i Norge',
    description: 'Gratis veiledning for eldre og nye i Norge. NAV, Skatteetaten og Helsenorge forklart enkelt på norsk, engelsk og ukrainsk.',
    url: 'https://www.lettdigital.no',
    siteName: 'Lett Digital',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Lett Digital - Digital hjelp for eldre og nye i Norge',
      },
    ],
    locale: 'nb_NO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lett Digital - Digital hjelp for eldre og nye i Norge',
    description: 'Gratis veiledning på norsk, engelsk og ukrainsk. NAV, Skatt og Helse forklart enkelt.',
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
      <ToastProvider>
        <LanguageHtmlUpdater />
        <HreflangTags />
        <OrganizationSchema locale={locale} />
        <WebSiteSchema locale={locale} />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <AccessibilityToolbar />
          <CookieBanner />
        </div>
      </ToastProvider>
    </NextIntlClientProvider>
  );
}
