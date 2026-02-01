import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import VideosamtaleContent from './VideosamtaleContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.grunnleggende.videosamtale' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/grunnleggende/videosamtale`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/grunnleggende/videosamtale`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/grunnleggende/videosamtale',
        'en': 'https://www.lettdigital.no/en/grunnleggende/videosamtale',
        'uk': 'https://www.lettdigital.no/uk/grunnleggende/videosamtale',
      },
    },
  };
}

export default function Page() {
  return <VideosamtaleContent />;
}
