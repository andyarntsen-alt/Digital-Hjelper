import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BetalingsutsettelsesContent from './BetalingsutsettelsesContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.utdanning.betalingsutsettelse' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/utdanning/betalingsutsettelse`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/utdanning/betalingsutsettelse' : `https://www.lettdigital.no/${locale}/utdanning/betalingsutsettelse`,
      languages: {
        'nb': 'https://www.lettdigital.no/utdanning/betalingsutsettelse',
        'en': 'https://www.lettdigital.no/en/utdanning/betalingsutsettelse',
        'uk': 'https://www.lettdigital.no/uk/utdanning/betalingsutsettelse',
      },
    },
  };
}

export default function Page() {
  return <BetalingsutsettelsesContent />;
}
