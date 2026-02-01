import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NavContent from './NavContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.nav' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/nav' : `https://www.lettdigital.no/${locale}/nav`,
      languages: {
        'nb': 'https://www.lettdigital.no/nav',
        'en': 'https://www.lettdigital.no/en/nav',
        'uk': 'https://www.lettdigital.no/uk/nav',
      },
    },
  };
}

export default function Page() {
  return <NavContent />;
}
