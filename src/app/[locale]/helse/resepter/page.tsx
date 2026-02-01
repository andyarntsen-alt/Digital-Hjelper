import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ResepterContent from './ResepterContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.helse.resepter' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/helse/resepter`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/helse/resepter' : `https://www.lettdigital.no/${locale}/helse/resepter`,
      languages: {
        'nb': 'https://www.lettdigital.no/helse/resepter',
        'en': 'https://www.lettdigital.no/en/helse/resepter',
        'uk': 'https://www.lettdigital.no/uk/helse/resepter',
      },
    },
  };
}

export default function Page() {
  return <ResepterContent />;
}
