import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BergenContent from './BergenContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cities' });

  const cityName = t('bergen.name');
  const title = t('publicServicesIn', { city: cityName });
  const description = t('bergen.intro');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/byer/bergen`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/byer/bergen`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/byer/bergen',
        'en': 'https://www.lettdigital.no/en/byer/bergen',
        'uk': 'https://www.lettdigital.no/uk/byer/bergen',
      },
    },
  };
}

export default function Page() {
  return <BergenContent />;
}
