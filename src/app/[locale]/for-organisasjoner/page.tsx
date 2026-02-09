import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import OrganisasjonerContent from './OrganisasjonerContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'organizations' });

  const title = t('metaTitle');
  const description = t('metaDescription');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.lettdigital.no/${locale}/for-organisasjoner`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: locale === 'no' ? 'https://www.lettdigital.no/for-organisasjoner' : `https://www.lettdigital.no/${locale}/for-organisasjoner`,
      languages: {
        'nb': 'https://www.lettdigital.no/for-organisasjoner',
        'en': 'https://www.lettdigital.no/en/for-organisasjoner',
        'uk': 'https://www.lettdigital.no/uk/for-organisasjoner',
      },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <OrganisasjonerContent />;
}
