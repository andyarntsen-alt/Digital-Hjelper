'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function FradragContent() {
  const t = useTranslations('guides.skatt.fradrag');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
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

  return (
    <GuideLayout
      guideId="skatt-fradrag"
      translationNamespace="guides.skatt.fradrag"
      parentHref="/skatt"
      parentLabelKey="skatt"
      categoryColor="bg-skatt-green hover:bg-green-700"
      totalTime="PT10M"
      steps={steps}
    >
      {/* Hva er fradrag */}
      <CollapsibleSection title={t('whatIsTitle')} className="mt-6 sm:mt-8">
          <p className="text-gray-700 mb-4">
            {t('whatIsText')}
          </p>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold mb-2">{t('exampleTitle')}</p>
            <p className="text-gray-700">
              {t('exampleText')}
            </p>
          </div>
      </CollapsibleSection>

      {/* Alle fradrag */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-6">{t('allDeductionsTitle')}</h2>
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
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">{t('tipTitle')}</p>
            <p className="text-gray-700">
              {t('tipText')}
            </p>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
}
