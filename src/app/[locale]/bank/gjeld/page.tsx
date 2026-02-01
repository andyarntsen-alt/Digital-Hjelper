import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import GjeldContent from './GjeldContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bank.gjeld' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bank/gjeld`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/bank/gjeld' : `https://www.lettdigital.no/${locale}/bank/gjeld`,
      languages: {
        'nb': 'https://www.lettdigital.no/bank/gjeld',
        'en': 'https://www.lettdigital.no/en/bank/gjeld',
        'uk': 'https://www.lettdigital.no/uk/bank/gjeld',
      },
    },
  };
}

export default function Page() {
  return <GjeldContent />;
}
