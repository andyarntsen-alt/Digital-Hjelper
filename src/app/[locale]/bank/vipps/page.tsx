import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import VippsContent from './VippsContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bank.vipps' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bank/vipps`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/bank/vipps' : `https://www.lettdigital.no/${locale}/bank/vipps`,
      languages: {
        'nb': 'https://www.lettdigital.no/bank/vipps',
        'en': 'https://www.lettdigital.no/en/bank/vipps',
        'uk': 'https://www.lettdigital.no/uk/bank/vipps',
      },
    },
  };
}

export default function Page() {
  return <VippsContent />;
}
