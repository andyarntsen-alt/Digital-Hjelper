'use client';

import { useTranslations } from 'next-intl';
import CityLayout, { FAQData } from '@/components/layouts/CityLayout';
import { cityData } from '@/data/cityData';

export default function StavangerContent() {
  const t = useTranslations('cities');

  const stavangerFAQs: FAQData[] = [
    { question: t('stavanger.faq1q'), answer: t('stavanger.faq1a') },
    { question: t('stavanger.faq2q'), answer: t('stavanger.faq2a') },
    { question: t('stavanger.faq3q'), answer: t('stavanger.faq3a') },
  ];

  return (
    <CityLayout
      citySlug="stavanger"
      cityData={cityData.stavanger}
      faqs={stavangerFAQs}
    />
  );
}
