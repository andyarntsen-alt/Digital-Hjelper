import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HelseContent from './HelseContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.helse' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/helse' : `https://www.lettdigital.no/${locale}/helse`,
      languages: {
        'nb': 'https://www.lettdigital.no/helse',
        'en': 'https://www.lettdigital.no/en/helse',
        'uk': 'https://www.lettdigital.no/uk/helse',
      },
    },
  };
}

export default function Page() {
  return <HelseContent />;
}
