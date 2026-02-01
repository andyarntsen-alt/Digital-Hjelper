import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SykepengerContent from './SykepengerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.sykepenger' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/sykepenger`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/nav/sykepenger' : `https://www.lettdigital.no/${locale}/nav/sykepenger`,
      languages: {
        'nb': 'https://www.lettdigital.no/nav/sykepenger',
        'en': 'https://www.lettdigital.no/en/nav/sykepenger',
        'uk': 'https://www.lettdigital.no/uk/nav/sykepenger',
      },
    },
  };
}

export default function SykepengerPage() {
  return <SykepengerContent />;
}
