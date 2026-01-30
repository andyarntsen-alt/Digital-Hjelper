import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SkattemeldingContent from './SkattemeldingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.skatt.skattemelding' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt/skattemelding`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/skatt/skattemelding`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/skatt/skattemelding',
        'en': 'https://www.lettdigital.no/en/skatt/skattemelding',
        'uk': 'https://www.lettdigital.no/uk/skatt/skattemelding',
      },
    },
  };
}

export default function Page() {
  return <SkattemeldingContent />;
}
