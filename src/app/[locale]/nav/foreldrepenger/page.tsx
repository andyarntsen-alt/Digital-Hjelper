import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ForeldrepengerContent from './ForeldrepengerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.foreldrepenger' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/foreldrepenger`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/nav/foreldrepenger`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/nav/foreldrepenger',
        'en': 'https://www.lettdigital.no/en/nav/foreldrepenger',
        'uk': 'https://www.lettdigital.no/uk/nav/foreldrepenger',
      },
    },
  };
}

export default function Page() {
  return <ForeldrepengerContent />;
}
