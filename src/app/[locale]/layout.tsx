import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import '../globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AccessibilityToolbar from '@/components/AccessibilityToolbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LettDigital - Enkel veiledning for offentlige tjenester',
  description: 'Vi gjør det enklere for alle å bruke NAV, Skatteetaten og Helsenorge. Steg-for-steg veiledninger med store fonter og enkelt språk.',
  keywords: 'NAV hjelp, Skatteetaten veiledning, Helsenorge guide, digital hjelp eldre, offentlige tjenester, LettDigital',
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
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir}>
      <body className={`${inter.className} bg-gray-50 min-h-screen flex flex-col`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <AccessibilityToolbar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
