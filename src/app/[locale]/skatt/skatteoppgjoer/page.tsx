import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SkatteoppgjoerContent from './SkatteoppgjoerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.skatt.skatteoppgjoer' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt/skatteoppgjoer`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/skatt/skatteoppgjoer' : `https://www.lettdigital.no/${locale}/skatt/skatteoppgjoer`,
      languages: {
        'nb': 'https://www.lettdigital.no/skatt/skatteoppgjoer',
        'en': 'https://www.lettdigital.no/en/skatt/skatteoppgjoer',
        'uk': 'https://www.lettdigital.no/uk/skatt/skatteoppgjoer',
      },
    },
  };
}

export default function Page() {
  return <SkatteoppgjoerContent />;
}
