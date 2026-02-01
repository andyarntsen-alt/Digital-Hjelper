import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PensjonContent from './PensjonContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.pensjon' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/pensjon`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/nav/pensjon' : `https://www.lettdigital.no/${locale}/nav/pensjon`,
      languages: {
        'nb': 'https://www.lettdigital.no/nav/pensjon',
        'en': 'https://www.lettdigital.no/en/nav/pensjon',
        'uk': 'https://www.lettdigital.no/uk/nav/pensjon',
      },
    },
  };
}

export default function Page() {
  return <PensjonContent />;
}
