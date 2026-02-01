import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';
import HjelpereContent from './HjelpereContent';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Only available in Norwegian
  if (locale !== 'no') {
    return {};
  }

  const t = await getTranslations({ locale, namespace: 'services.hjelpere' });

  const title = t('metaTitle');
  const description = t('metaDescription');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'https://www.lettdigital.no/no/hjelpere',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: 'https://www.lettdigital.no/no/hjelpere',
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;

  // Redirect non-Norwegian locales to homepage
  if (locale !== 'no') {
    redirect(`/${locale}`);
  }

  return <HjelpereContent />;
}
