'use client';

import { useTranslations } from 'next-intl';
import CityLayout, { FAQData } from '@/components/layouts/CityLayout';
import { cityData } from '@/data/cityData';

export default function BergenContent() {
  const t = useTranslations('cities');

  const bergenFAQs: FAQData[] = [
    { question: t('bergen.faq1q'), answer: t('bergen.faq1a') },
    { question: t('bergen.faq2q'), answer: t('bergen.faq2a') },
    { question: t('bergen.faq3q'), answer: t('bergen.faq3a') },
  ];

  return (
    <CityLayout
      citySlug="bergen"
      cityData={cityData.bergen}
      faqs={bergenFAQs}
    />
  );
}
