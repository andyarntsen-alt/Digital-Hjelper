import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PassordHjelpContent from './PassordHjelpContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.grunnleggende.passordHjelp' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/grunnleggende/passord-hjelp`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/grunnleggende/passord-hjelp`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/grunnleggende/passord-hjelp',
        'en': 'https://www.lettdigital.no/en/grunnleggende/passord-hjelp',
        'uk': 'https://www.lettdigital.no/uk/grunnleggende/passord-hjelp',
      },
    },
  };
}

export default function Page() {
  return <PassordHjelpContent />;
}
