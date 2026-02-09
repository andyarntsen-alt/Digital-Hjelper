import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PersonvernContent from './PersonvernContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'privacy' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/personvern`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/personvern' : `https://www.lettdigital.no/${locale}/personvern`,
      languages: {
        'nb': 'https://www.lettdigital.no/personvern',
        'en': 'https://www.lettdigital.no/en/personvern',
        'uk': 'https://www.lettdigital.no/uk/personvern',
      },
    },
  };
}

export default function Page() {
  return <PersonvernContent />;
}
