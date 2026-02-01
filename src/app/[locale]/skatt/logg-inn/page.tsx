import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SkattLoggInnContent from './SkattLoggInnContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.skatt.loggInn' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt/logg-inn`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/skatt/logg-inn' : `https://www.lettdigital.no/${locale}/skatt/logg-inn`,
      languages: {
        'nb': 'https://www.lettdigital.no/skatt/logg-inn',
        'en': 'https://www.lettdigital.no/en/skatt/logg-inn',
        'uk': 'https://www.lettdigital.no/uk/skatt/logg-inn',
      },
    },
  };
}

export default function Page() {
  return <SkattLoggInnContent />;
}
