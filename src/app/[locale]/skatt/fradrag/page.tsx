import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FradragContent from './FradragContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.skatt.fradrag' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt/fradrag`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/skatt/fradrag' : `https://www.lettdigital.no/${locale}/skatt/fradrag`,
      languages: {
        'nb': 'https://www.lettdigital.no/skatt/fradrag',
        'en': 'https://www.lettdigital.no/en/skatt/fradrag',
        'uk': 'https://www.lettdigital.no/uk/skatt/fradrag',
      },
    },
  };
}

export default function Page() {
  return <FradragContent />;
}
