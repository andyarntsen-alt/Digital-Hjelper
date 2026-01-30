import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SkattekortContent from './SkattekortContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.skatt.skattekort' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt/skattekort`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/skatt/skattekort`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/skatt/skattekort',
        'en': 'https://www.lettdigital.no/en/skatt/skattekort',
        'uk': 'https://www.lettdigital.no/uk/skatt/skattekort',
      },
    },
  };
}

export default function Page() {
  return <SkattekortContent />;
}
