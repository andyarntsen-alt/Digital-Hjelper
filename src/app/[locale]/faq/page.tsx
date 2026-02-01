import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FaqContent from './FaqContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'faq' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/faq`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/faq' : `https://www.lettdigital.no/${locale}/faq`,
      languages: {
        'nb': 'https://www.lettdigital.no/faq',
        'en': 'https://www.lettdigital.no/en/faq',
        'uk': 'https://www.lettdigital.no/uk/faq',
      },
    },
  };
}

export default function Page() {
  return <FaqContent />;
}
