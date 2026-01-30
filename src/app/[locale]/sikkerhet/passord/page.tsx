import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PassordContent from './PassordContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.sikkerhet.passord' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/sikkerhet/passord`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}/sikkerhet/passord`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/sikkerhet/passord',
        'en': 'https://www.lettdigital.no/en/sikkerhet/passord',
        'uk': 'https://www.lettdigital.no/uk/sikkerhet/passord',
      },
    },
  };
}

export default function Page() {
  return <PassordContent />;
}
