import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ArbeidsledigContent from './ArbeidsledigContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.nav.arbeidsledig' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/nav/arbeidsledig`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/nav/arbeidsledig' : `https://www.lettdigital.no/${locale}/nav/arbeidsledig`,
      languages: {
        'nb': 'https://www.lettdigital.no/nav/arbeidsledig',
        'en': 'https://www.lettdigital.no/en/nav/arbeidsledig',
        'uk': 'https://www.lettdigital.no/uk/nav/arbeidsledig',
      },
    },
  };
}

export default function Page() {
  return <ArbeidsledigContent />;
}
