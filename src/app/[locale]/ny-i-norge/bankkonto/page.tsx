import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BankkontoContent from './BankkontoContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nyINorge.bankkonto' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/ny-i-norge/bankkonto`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/ny-i-norge/bankkonto' : `https://www.lettdigital.no/${locale}/ny-i-norge/bankkonto`,
      languages: {
        'nb': 'https://www.lettdigital.no/ny-i-norge/bankkonto',
        'en': 'https://www.lettdigital.no/en/ny-i-norge/bankkonto',
        'uk': 'https://www.lettdigital.no/uk/ny-i-norge/bankkonto',
      },
    },
  };
}

export default function Page() {
  return <BankkontoContent />;
}
