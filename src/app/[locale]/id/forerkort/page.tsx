import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ForerkortContent from './ForerkortContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.id.forerkort' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/id/forerkort`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/id/forerkort' : `https://www.lettdigital.no/${locale}/id/forerkort`,
      languages: {
        'nb': 'https://www.lettdigital.no/id/forerkort',
        'en': 'https://www.lettdigital.no/en/id/forerkort',
        'uk': 'https://www.lettdigital.no/uk/id/forerkort',
      },
    },
  };
}

export default function Page() {
  return <ForerkortContent />;
}
