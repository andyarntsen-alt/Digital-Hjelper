import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DagpengerContent from './DagpengerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.dagpenger' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/dagpenger`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/nav/dagpenger`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/nav/dagpenger',
        'en': 'https://www.lettdigital.no/en/nav/dagpenger',
        'uk': 'https://www.lettdigital.no/uk/nav/dagpenger',
      },
    },
  };
}

export default function DagpengerPage() {
  return <DagpengerContent />;
}
