import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PostenContent from './PostenContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.digital.posten' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/digital/posten`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/digital/posten`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/digital/posten',
        'en': 'https://www.lettdigital.no/en/digital/posten',
        'uk': 'https://www.lettdigital.no/uk/digital/posten',
      },
    },
  };
}

export default function Page() {
  return <PostenContent />;
}
