import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import SikkerhetContent from './SikkerhetContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services.sikkerhet' });

  const title = t('title');
  const description = t('description');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/sikkerhet`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/sikkerhet' : `https://www.lettdigital.no/${locale}/sikkerhet`,
      languages: {
        'nb': 'https://www.lettdigital.no/sikkerhet',
        'en': 'https://www.lettdigital.no/en/sikkerhet',
        'uk': 'https://www.lettdigital.no/uk/sikkerhet',
      },
    },
  };
}

export default function Page() {
  return <SikkerhetContent />;
}
