import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import StipendContent from './StipendContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.utdanning.stipend' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/utdanning/stipend`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/utdanning/stipend`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/utdanning/stipend',
        'en': 'https://www.lettdigital.no/en/utdanning/stipend',
        'uk': 'https://www.lettdigital.no/uk/utdanning/stipend',
      },
    },
  };
}

export default function Page() {
  return <StipendContent />;
}
