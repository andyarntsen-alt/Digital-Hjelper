import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import AltinnContent from './AltinnContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.digital.altinn' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/digital/altinn`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/digital/altinn`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/digital/altinn',
        'en': 'https://www.lettdigital.no/en/digital/altinn',
        'uk': 'https://www.lettdigital.no/uk/digital/altinn',
      },
    },
  };
}

export default function Page() {
  return <AltinnContent />;
}
