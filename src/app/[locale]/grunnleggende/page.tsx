import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import GrunnleggendeContent from './GrunnleggendeContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.grunnleggende' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/grunnleggende`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/grunnleggende' : `https://www.lettdigital.no/${locale}/grunnleggende`,
      languages: {
        'nb': 'https://www.lettdigital.no/grunnleggende',
        'en': 'https://www.lettdigital.no/en/grunnleggende',
        'uk': 'https://www.lettdigital.no/uk/grunnleggende',
      },
    },
  };
}

export default function Page() {
  return <GrunnleggendeContent />;
}
