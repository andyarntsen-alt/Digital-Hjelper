'use client';

import { useTranslations } from 'next-intl';
import CityLayout, { FAQData } from '@/components/layouts/CityLayout';
import { cityData } from '@/data/cityData';

export default function TrondheimContent() {
  const t = useTranslations('cities');

  const trondheimFAQs: FAQData[] = [
    { question: t('trondheim.faq1q'), answer: t('trondheim.faq1a') },
    { question: t('trondheim.faq2q'), answer: t('trondheim.faq2a') },
    { question: t('trondheim.faq3q'), answer: t('trondheim.faq3a') },
  ];

  return (
    <CityLayout
      citySlug="trondheim"
      cityData={cityData.trondheim}
      faqs={trondheimFAQs}
    />
  );
}
