import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BankidContent from './BankidContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.sikkerhet.bankid' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/sikkerhet/bankid`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/sikkerhet/bankid' : `https://www.lettdigital.no/${locale}/sikkerhet/bankid`,
      languages: {
        'nb': 'https://www.lettdigital.no/sikkerhet/bankid',
        'en': 'https://www.lettdigital.no/en/sikkerhet/bankid',
        'uk': 'https://www.lettdigital.no/uk/sikkerhet/bankid',
      },
    },
  };
}

export default function Page() {
  return <BankidContent />;
}
