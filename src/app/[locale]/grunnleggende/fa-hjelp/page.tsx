import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FaHjelpContent from './FaHjelpContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.grunnleggende.faHjelp' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/grunnleggende/fa-hjelp`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/grunnleggende/fa-hjelp`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/grunnleggende/fa-hjelp',
        'en': 'https://www.lettdigital.no/en/grunnleggende/fa-hjelp',
        'uk': 'https://www.lettdigital.no/uk/grunnleggende/fa-hjelp',
      },
    },
  };
}

export default function Page() {
  return <FaHjelpContent />;
}
