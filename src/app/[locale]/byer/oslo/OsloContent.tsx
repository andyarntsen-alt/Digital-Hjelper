'use client';

import { useTranslations } from 'next-intl';
import CityLayout, { FAQData } from '@/components/layouts/CityLayout';
import { cityData } from '@/data/cityData';

export default function OsloContent() {
  const t = useTranslations('cities');

  const osloFAQs: FAQData[] = [
    { question: t('oslo.faq1q'), answer: t('oslo.faq1a') },
    { question: t('oslo.faq2q'), answer: t('oslo.faq2a') },
    { question: t('oslo.faq3q'), answer: t('oslo.faq3a') },
    { question: t('oslo.faq4q'), answer: t('oslo.faq4a') },
    { question: t('oslo.faq5q'), answer: t('oslo.faq5a') },
  ];

  return (
    <CityLayout
      citySlug="oslo"
      cityData={cityData.oslo}
      faqs={osloFAQs}
    />
  );
}
