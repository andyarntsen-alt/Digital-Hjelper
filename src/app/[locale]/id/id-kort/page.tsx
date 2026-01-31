import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import IdKortContent from './IdKortContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.id.idKort' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/id/id-kort`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/id/id-kort`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/id/id-kort',
        'en': 'https://www.lettdigital.no/en/id/id-kort',
        'uk': 'https://www.lettdigital.no/uk/id/id-kort',
      },
    },
  };
}

export default function Page() {
  return <IdKortContent />;
}
