import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import OmContent from './OmContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/om`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/om`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/om',
        'en': 'https://www.lettdigital.no/en/om',
        'uk': 'https://www.lettdigital.no/uk/om',
      },
    },
  };
}

export default function Page() {
  return <OmContent />;
}
