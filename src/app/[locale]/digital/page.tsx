import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DigitalContent from './DigitalContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.digital' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/digital`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/digital`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/digital',
        'en': 'https://www.lettdigital.no/en/digital',
        'uk': 'https://www.lettdigital.no/uk/digital',
      },
    },
  };
}

export default function Page() {
  return <DigitalContent />;
}
