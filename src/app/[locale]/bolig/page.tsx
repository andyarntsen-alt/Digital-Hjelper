import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BoligContent from './BoligContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.bolig' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bolig`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/bolig`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/bolig',
        'en': 'https://www.lettdigital.no/en/bolig',
        'uk': 'https://www.lettdigital.no/uk/bolig',
      },
    },
  };
}

export default function Page() {
  return <BoligContent />;
}
