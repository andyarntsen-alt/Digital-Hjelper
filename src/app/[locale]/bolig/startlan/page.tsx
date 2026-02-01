import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import StartlanContent from './StartlanContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.bolig.startlan' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/bolig/startlan`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/bolig/startlan' : `https://www.lettdigital.no/${locale}/bolig/startlan`,
      languages: {
        'nb': 'https://www.lettdigital.no/bolig/startlan',
        'en': 'https://www.lettdigital.no/en/bolig/startlan',
        'uk': 'https://www.lettdigital.no/uk/bolig/startlan',
      },
    },
  };
}

export default function Page() {
  return <StartlanContent />;
}
