import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import StavangerContent from './StavangerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cities' });

  const cityName = t('stavanger.name');
  const title = t('publicServicesIn', { city: cityName });
  const description = t('stavanger.intro');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/byer/stavanger`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/byer/stavanger' : `https://www.lettdigital.no/${locale}/byer/stavanger`,
      languages: {
        'nb': 'https://www.lettdigital.no/byer/stavanger',
        'en': 'https://www.lettdigital.no/en/byer/stavanger',
        'uk': 'https://www.lettdigital.no/uk/byer/stavanger',
      },
    },
  };
}

export default function Page() {
  return <StavangerContent />;
}
