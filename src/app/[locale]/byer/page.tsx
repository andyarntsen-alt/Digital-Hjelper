import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ByerContent from './ByerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'cities' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/byer`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/byer`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/byer',
        'en': 'https://www.lettdigital.no/en/byer',
        'uk': 'https://www.lettdigital.no/uk/byer',
      },
    },
  };
}

export default function Page() {
  return <ByerContent />;
}
