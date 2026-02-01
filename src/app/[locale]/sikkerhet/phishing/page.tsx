import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PhishingContent from './PhishingContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'guides.sikkerhet.phishing' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: `${title} | LettDigital`,
    description,
    openGraph: {
      title: `${title} | LettDigital`,
      description,
      url: `https://www.lettdigital.no/${locale}/sikkerhet/phishing`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | LettDigital`,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/sikkerhet/phishing' : `https://www.lettdigital.no/${locale}/sikkerhet/phishing`,
      languages: {
        'nb': 'https://www.lettdigital.no/sikkerhet/phishing',
        'en': 'https://www.lettdigital.no/en/sikkerhet/phishing',
        'uk': 'https://www.lettdigital.no/uk/sikkerhet/phishing',
      },
    },
  };
}

export default function Page() {
  return <PhishingContent />;
}
