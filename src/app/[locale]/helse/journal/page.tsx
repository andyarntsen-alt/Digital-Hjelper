import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import JournalContent from './JournalContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.helse.journal' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse/journal`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/helse/journal' : `https://www.lettdigital.no/${locale}/helse/journal`,
      languages: {
        'nb': 'https://www.lettdigital.no/helse/journal',
        'en': 'https://www.lettdigital.no/en/helse/journal',
        'uk': 'https://www.lettdigital.no/uk/helse/journal',
      },
    },
  };
}

export default function Page() {
  return <JournalContent />;
}
