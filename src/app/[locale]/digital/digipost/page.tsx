import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import DigipostContent from './DigipostContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.digital.digipost' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/digital/digipost`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/digital/digipost' : `https://www.lettdigital.no/${locale}/digital/digipost`,
      languages: {
        'nb': 'https://www.lettdigital.no/digital/digipost',
        'en': 'https://www.lettdigital.no/en/digital/digipost',
        'uk': 'https://www.lettdigital.no/uk/digital/digipost',
      },
    },
  };
}

export default function Page() {
  return <DigipostContent />;
}
