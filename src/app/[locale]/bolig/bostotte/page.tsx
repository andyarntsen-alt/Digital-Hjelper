import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BostotteContent from './BostotteContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bolig.bostotte' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bolig/bostotte`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/bolig/bostotte`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/bolig/bostotte',
        'en': 'https://www.lettdigital.no/en/bolig/bostotte',
        'uk': 'https://www.lettdigital.no/uk/bolig/bostotte',
      },
    },
  };
}

export default function Page() {
  return <BostotteContent />;
}
