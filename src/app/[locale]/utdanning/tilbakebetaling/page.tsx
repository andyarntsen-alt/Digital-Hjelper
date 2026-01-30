import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TilbakebetalingContent from './TilbakebetalingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.utdanning.tilbakebetaling' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/utdanning/tilbakebetaling`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/utdanning/tilbakebetaling`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/utdanning/tilbakebetaling',
        'en': 'https://www.lettdigital.no/en/utdanning/tilbakebetaling',
        'uk': 'https://www.lettdigital.no/uk/utdanning/tilbakebetaling',
      },
    },
  };
}

export default function Page() {
  return <TilbakebetalingContent />;
}
