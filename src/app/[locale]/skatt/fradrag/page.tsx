'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

export default function FradragPage() {
  const t = useTranslations('guides.skatt.fradrag');
  const tNav = useTranslations('header');
  const locale = useLocale();

  // Build steps array from translations
  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get deduction categories from translations
  const deductionCategories = t.raw('deductionCategories') as {
    category: string;
    items: { name: string; description: string; amount: string }[];
  }[];

  const howToSteps = stepsRaw.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
    <HowToSchema
      name={t('title')}
      description={t('longDescription')}
      steps={howToSteps}
      totalTime="PT10M"
      locale={locale}
    />
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('skatt'), href: '/skatt' },
          { label: t('title') }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t('time')}</span>
          <span className="mx-2">•</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <FavoriteButton guideId="skatt-fradrag" title={t('title')} />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Hva er fradrag */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">💡 {t('whatIsTitle')}</h2>
        <p className="text-gray-700 mb-4">
          {t('whatIsText')}
        </p>
        <div className="bg-white p-4 rounded-lg">
          <p className="font-semibold mb-2">{t('exampleTitle')}</p>
          <p className="text-gray-700">
            {t('exampleText')}
          </p>
        </div>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Alle fradrag */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">📋 {t('allDeductionsTitle')}</h2>
        <p className="text-gray-600 mb-8">{t('allDeductionsText')}</p>

        {deductionCategories.map((kategori, index) => (
          <div key={index} className="card mb-6">
            <h3 className="text-xl font-bold mb-4 text-skatt-green">{kategori.category}</h3>
            <div className="space-y-4">
              {kategori.items.map((item, fIndex) => (
                <div key={fIndex} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <p className="font-semibold text-lg">{item.name}</p>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      {item.amount}
                    </span>
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-8 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">{t('tipTitle')}</p>
            <p className="text-green-700">
              {t('tipText')}
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
