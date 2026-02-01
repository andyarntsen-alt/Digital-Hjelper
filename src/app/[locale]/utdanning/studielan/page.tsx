import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import StudielanContent from './StudielanContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.utdanning.studielan' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/utdanning/studielan`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/utdanning/studielan' : `https://www.lettdigital.no/${locale}/utdanning/studielan`,
      languages: {
        'nb': 'https://www.lettdigital.no/utdanning/studielan',
        'en': 'https://www.lettdigital.no/en/utdanning/studielan',
        'uk': 'https://www.lettdigital.no/uk/utdanning/studielan',
      },
    },
  };
}

export default function Page() {
  return <StudielanContent />;
}
