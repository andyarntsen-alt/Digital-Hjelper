'use client';

import { useTranslations } from 'next-intl';
import CityLayout, { FAQData } from '@/components/layouts/CityLayout';
import { cityData } from '@/data/cityData';

export default function KristiansandContent() {
  const t = useTranslations('cities');

  const kristiansandFAQs: FAQData[] = [
    { question: t('kristiansand.faq1q'), answer: t('kristiansand.faq1a') },
    { question: t('kristiansand.faq2q'), answer: t('kristiansand.faq2a') },
    { question: t('kristiansand.faq3q'), answer: t('kristiansand.faq3a') },
  ];

  return (
    <CityLayout
      citySlug="kristiansand"
      cityData={cityData.kristiansand}
      faqs={kristiansandFAQs}
    />
  );
}
