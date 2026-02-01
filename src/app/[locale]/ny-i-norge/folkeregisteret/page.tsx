import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FolkeregisteretContent from './FolkeregisteretContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nyINorge.folkeregisteret' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/ny-i-norge/folkeregisteret`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/ny-i-norge/folkeregisteret`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/ny-i-norge/folkeregisteret',
        'en': 'https://www.lettdigital.no/en/ny-i-norge/folkeregisteret',
        'uk': 'https://www.lettdigital.no/uk/ny-i-norge/folkeregisteret',
      },
    },
  };
}

export default function Page() {
  return <FolkeregisteretContent />;
}
