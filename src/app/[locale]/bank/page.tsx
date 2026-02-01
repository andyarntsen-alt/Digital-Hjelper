import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BankContent from './BankContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.bank' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bank`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/bank' : `https://www.lettdigital.no/${locale}/bank`,
      languages: {
        'nb': 'https://www.lettdigital.no/bank',
        'en': 'https://www.lettdigital.no/en/bank',
        'uk': 'https://www.lettdigital.no/uk/bank',
      },
    },
  };
}

export default function Page() {
  return <BankContent />;
}
