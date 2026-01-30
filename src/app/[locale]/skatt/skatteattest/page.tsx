import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SkatteattestContent from './SkatteattestContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.skatt.skatteattest' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/skatt/skatteattest`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/skatt/skatteattest`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/skatt/skatteattest',
        'en': 'https://www.lettdigital.no/en/skatt/skatteattest',
        'uk': 'https://www.lettdigital.no/uk/skatt/skatteattest',
      },
    },
  };
}

export default function Page() {
  return <SkatteattestContent />;
}
