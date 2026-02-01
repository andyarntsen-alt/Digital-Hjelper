import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MeldekortContent from './MeldekortContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.meldekort' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/meldekort`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/nav/meldekort`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/nav/meldekort',
        'en': 'https://www.lettdigital.no/en/nav/meldekort',
        'uk': 'https://www.lettdigital.no/uk/nav/meldekort',
      },
    },
  };
}

export default function Page() {
  return <MeldekortContent />;
}
