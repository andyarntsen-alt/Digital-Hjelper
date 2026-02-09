import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import KristiansandContent from './KristiansandContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cities' });

  const cityName = t('kristiansand.name');
  const title = t('publicServicesIn', { city: cityName });
  const description = t('kristiansand.intro');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/byer/kristiansand`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/byer/kristiansand' : `https://www.lettdigital.no/${locale}/byer/kristiansand`,
      languages: {
        'nb': 'https://www.lettdigital.no/byer/kristiansand',
        'en': 'https://www.lettdigital.no/en/byer/kristiansand',
        'uk': 'https://www.lettdigital.no/uk/byer/kristiansand',
      },
    },
  };
}

export default function Page() {
  return <KristiansandContent />;
}
