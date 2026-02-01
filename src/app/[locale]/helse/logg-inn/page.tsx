import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import HelseLoggInnContent from './HelseLoggInnContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.helse.loggInn' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse/logg-inn`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/helse/logg-inn`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/helse/logg-inn',
        'en': 'https://www.lettdigital.no/en/helse/logg-inn',
        'uk': 'https://www.lettdigital.no/uk/helse/logg-inn',
      },
    },
  };
}

export default function Page() {
  return <HelseLoggInnContent />;
}
