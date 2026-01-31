import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SkattContent from './SkattContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.skatt' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/skatt`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/skatt',
        'en': 'https://www.lettdigital.no/en/skatt',
        'uk': 'https://www.lettdigital.no/uk/skatt',
      },
    },
  };
}

export default function Page() {
  return <SkattContent />;
}
