import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SvindelContent from './SvindelContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.sikkerhet.svindel' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/sikkerhet/svindel`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/sikkerhet/svindel' : `https://www.lettdigital.no/${locale}/sikkerhet/svindel`,
      languages: {
        'nb': 'https://www.lettdigital.no/sikkerhet/svindel',
        'en': 'https://www.lettdigital.no/en/sikkerhet/svindel',
        'uk': 'https://www.lettdigital.no/uk/sikkerhet/svindel',
      },
    },
  };
}

export default function Page() {
  return <SvindelContent />;
}
