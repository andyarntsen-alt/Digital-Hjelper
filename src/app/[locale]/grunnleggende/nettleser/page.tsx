import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NettleserContent from './NettleserContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.grunnleggende.nettleser' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/grunnleggende/nettleser`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/grunnleggende/nettleser`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/grunnleggende/nettleser',
        'en': 'https://www.lettdigital.no/en/grunnleggende/nettleser',
        'uk': 'https://www.lettdigital.no/uk/grunnleggende/nettleser',
      },
    },
  };
}

export default function Page() {
  return <NettleserContent />;
}
