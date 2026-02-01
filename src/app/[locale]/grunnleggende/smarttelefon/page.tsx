import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SmarttelefonContent from './SmarttelefonContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.grunnleggende.smarttelefon' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/grunnleggende/smarttelefon`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/grunnleggende/smarttelefon' : `https://www.lettdigital.no/${locale}/grunnleggende/smarttelefon`,
      languages: {
        'nb': 'https://www.lettdigital.no/grunnleggende/smarttelefon',
        'en': 'https://www.lettdigital.no/en/grunnleggende/smarttelefon',
        'uk': 'https://www.lettdigital.no/uk/grunnleggende/smarttelefon',
      },
    },
  };
}

export default function Page() {
  return <SmarttelefonContent />;
}
