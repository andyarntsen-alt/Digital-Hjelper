import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import UforetrygdContent from './UforetrygdContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.uforetrygd' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/uforetrygd`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/nav/uforetrygd' : `https://www.lettdigital.no/${locale}/nav/uforetrygd`,
      languages: {
        'nb': 'https://www.lettdigital.no/nav/uforetrygd',
        'en': 'https://www.lettdigital.no/en/nav/uforetrygd',
        'uk': 'https://www.lettdigital.no/uk/nav/uforetrygd',
      },
    },
  };
}

export default function Page() {
  return <UforetrygdContent />;
}
