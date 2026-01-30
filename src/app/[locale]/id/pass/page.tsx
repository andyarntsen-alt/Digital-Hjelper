import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PassContent from './PassContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.id.pass' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/id/pass`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/id/pass`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/id/pass',
        'en': 'https://www.lettdigital.no/en/id/pass',
        'uk': 'https://www.lettdigital.no/uk/id/pass',
      },
    },
  };
}

export default function Page() {
  return <PassContent />;
}
