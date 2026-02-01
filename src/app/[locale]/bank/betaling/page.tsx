import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BetalingContent from './BetalingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bank.betaling' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bank/betaling`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/bank/betaling' : `https://www.lettdigital.no/${locale}/bank/betaling`,
      languages: {
        'nb': 'https://www.lettdigital.no/bank/betaling',
        'en': 'https://www.lettdigital.no/en/bank/betaling',
        'uk': 'https://www.lettdigital.no/uk/bank/betaling',
      },
    },
  };
}

export default function Page() {
  return <BetalingContent />;
}
