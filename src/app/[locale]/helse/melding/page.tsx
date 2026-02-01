import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import MeldingContent from './MeldingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.helse.melding' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse/melding`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/helse/melding`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/helse/melding',
        'en': 'https://www.lettdigital.no/en/helse/melding',
        'uk': 'https://www.lettdigital.no/uk/helse/melding',
      },
    },
  };
}

export default function Page() {
  return <MeldingContent />;
}
