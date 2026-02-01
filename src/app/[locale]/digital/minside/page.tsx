import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MinsideContent from './MinsideContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.digital.minside' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/digital/minside`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/digital/minside`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/digital/minside',
        'en': 'https://www.lettdigital.no/en/digital/minside',
        'uk': 'https://www.lettdigital.no/uk/digital/minside',
      },
    },
  };
}

export default function Page() {
  return <MinsideContent />;
}
