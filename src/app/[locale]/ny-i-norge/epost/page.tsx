import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import EpostContent from './EpostContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nyINorge.epost' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/ny-i-norge/epost`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/ny-i-norge/epost' : `https://www.lettdigital.no/${locale}/ny-i-norge/epost`,
      languages: {
        'nb': 'https://www.lettdigital.no/ny-i-norge/epost',
        'en': 'https://www.lettdigital.no/en/ny-i-norge/epost',
        'uk': 'https://www.lettdigital.no/uk/ny-i-norge/epost',
      },
    },
  };
}

export default function Page() {
  return <EpostContent />;
}
