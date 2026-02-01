import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import KommunalBoligContent from './KommunalBoligContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bolig.kommunalBolig' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bolig/kommunal-bolig`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/bolig/kommunal-bolig' : `https://www.lettdigital.no/${locale}/bolig/kommunal-bolig`,
      languages: {
        'nb': 'https://www.lettdigital.no/bolig/kommunal-bolig',
        'en': 'https://www.lettdigital.no/en/bolig/kommunal-bolig',
        'uk': 'https://www.lettdigital.no/uk/bolig/kommunal-bolig',
      },
    },
  };
}

export default function Page() {
  return <KommunalBoligContent />;
}
