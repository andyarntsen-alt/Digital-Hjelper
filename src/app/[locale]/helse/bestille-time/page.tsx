import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BestilleTimeContent from './BestilleTimeContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.helse.bestilleTime' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse/bestille-time`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/helse/bestille-time`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/helse/bestille-time',
        'en': 'https://www.lettdigital.no/en/helse/bestille-time',
        'uk': 'https://www.lettdigital.no/uk/helse/bestille-time',
      },
    },
  };
}

export default function Page() {
  return <BestilleTimeContent />;
}
