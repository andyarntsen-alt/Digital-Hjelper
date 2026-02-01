import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import IDContent from './IDContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.id' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/id`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/id' : `https://www.lettdigital.no/${locale}/id`,
      languages: {
        'nb': 'https://www.lettdigital.no/id',
        'en': 'https://www.lettdigital.no/en/id',
        'uk': 'https://www.lettdigital.no/uk/id',
      },
    },
  };
}

export default function Page() {
  return <IDContent />;
}
