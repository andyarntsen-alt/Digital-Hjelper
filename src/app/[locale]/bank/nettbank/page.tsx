import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NettbankContent from './NettbankContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bank.nettbank' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bank/nettbank`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/bank/nettbank`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/bank/nettbank',
        'en': 'https://www.lettdigital.no/en/bank/nettbank',
        'uk': 'https://www.lettdigital.no/uk/bank/nettbank',
      },
    },
  };
}

export default function Page() {
  return <NettbankContent />;
}
