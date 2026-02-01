import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NyINorgeContent from './NyINorgeContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.nyINorge' });
  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/ny-i-norge`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/ny-i-norge' : `https://www.lettdigital.no/${locale}/ny-i-norge`,
      languages: {
        'nb': 'https://www.lettdigital.no/ny-i-norge',
        'en': 'https://www.lettdigital.no/en/ny-i-norge',
        'uk': 'https://www.lettdigital.no/uk/ny-i-norge',
      },
    },
  };
}

export default function Page() {
  return <NyINorgeContent />;
}
