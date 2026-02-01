import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import OsloContent from './OsloContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cities' });

  const cityName = t('oslo.name');
  const title = t('publicServicesIn', { city: cityName });
  const description = t('oslo.intro');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/byer/oslo`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/byer/oslo' : `https://www.lettdigital.no/${locale}/byer/oslo`,
      languages: {
        'nb': 'https://www.lettdigital.no/byer/oslo',
        'en': 'https://www.lettdigital.no/en/byer/oslo',
        'uk': 'https://www.lettdigital.no/uk/byer/oslo',
      },
    },
  };
}

export default function Page() {
  return <OsloContent />;
}
