import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TrondheimContent from './TrondheimContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cities' });

  const cityName = t('trondheim.name');
  const title = t('publicServicesIn', { city: cityName });
  const description = t('trondheim.intro');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/byer/trondheim`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/byer/trondheim`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/byer/trondheim',
        'en': 'https://www.lettdigital.no/en/byer/trondheim',
        'uk': 'https://www.lettdigital.no/uk/byer/trondheim',
      },
    },
  };
}

export default function Page() {
  return <TrondheimContent />;
}
