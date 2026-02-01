import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import UtdanningContent from './UtdanningContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.utdanning' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/utdanning`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/utdanning' : `https://www.lettdigital.no/${locale}/utdanning`,
      languages: {
        'nb': 'https://www.lettdigital.no/utdanning',
        'en': 'https://www.lettdigital.no/en/utdanning',
        'uk': 'https://www.lettdigital.no/uk/utdanning',
      },
    },
  };
}

export default function Page() {
  return <UtdanningContent />;
}
