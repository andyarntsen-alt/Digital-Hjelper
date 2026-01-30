import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BytteFastlegeContent from './BytteFastlegeContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.helse.bytteFastlege' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse/bytte-fastlege`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/helse/bytte-fastlege`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/helse/bytte-fastlege',
        'en': 'https://www.lettdigital.no/en/helse/bytte-fastlege',
        'uk': 'https://www.lettdigital.no/uk/helse/bytte-fastlege',
      },
    },
  };
}

export default function Page() {
  return <BytteFastlegeContent />;
}
