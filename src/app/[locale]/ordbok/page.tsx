import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import OrdbokContent from './OrdbokContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ordbok' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/ordbok`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/ordbok' : `https://www.lettdigital.no/${locale}/ordbok`,
      languages: {
        'nb': 'https://www.lettdigital.no/ordbok',
        'en': 'https://www.lettdigital.no/en/ordbok',
        'uk': 'https://www.lettdigital.no/uk/ordbok',
      },
    },
  };
}

export default function Page() {
  return <OrdbokContent />;
}
