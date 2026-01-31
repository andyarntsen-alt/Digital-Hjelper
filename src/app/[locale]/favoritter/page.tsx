import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FavoritterContent from './FavoritterContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'favorites' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/favoritter`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/favoritter`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/favoritter',
        'en': 'https://www.lettdigital.no/en/favoritter',
        'uk': 'https://www.lettdigital.no/uk/favoritter',
      },
    },
  };
}

export default function Page() {
  return <FavoritterContent />;
}
