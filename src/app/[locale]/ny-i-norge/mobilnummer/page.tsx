import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MobilnummerContent from './MobilnummerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nyINorge.mobilnummer' });
  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/ny-i-norge/mobilnummer`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/ny-i-norge/mobilnummer' : `https://www.lettdigital.no/${locale}/ny-i-norge/mobilnummer`,
      languages: {
        'nb': 'https://www.lettdigital.no/ny-i-norge/mobilnummer',
        'en': 'https://www.lettdigital.no/en/ny-i-norge/mobilnummer',
        'uk': 'https://www.lettdigital.no/uk/ny-i-norge/mobilnummer',
      },
    },
  };
}

export default function Page() {
  return <MobilnummerContent />;
}
