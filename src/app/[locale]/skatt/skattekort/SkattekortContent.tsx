'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function SkattekortContent() {
  const t = useTranslations('guides.skatt.skattekort');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const cardTypes = t.raw('cardTypes') as { type: string; desc: string }[];
  const whenToChangeList = t.raw('whenToChangeList') as string[];

  return (
    <GuideLayout
      guideId="skatt-skattekort"
      translationNamespace="guides.skatt.skattekort"
      parentHref="/skatt"
      parentLabelKey="skatt"
      categoryColor="bg-skatt-green hover:bg-green-700"
      totalTime="PT15M"
      steps={steps}
      showGuideTracker={true}
    >
      {/* What is a tax card */}
      <CollapsibleSection title={t('whatIsTitle')} className="mt-6 sm:mt-8" variant="green">
          <p className="text-gray-700 mb-4">
            {t('whatIsText')}
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {cardTypes.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-skatt-green">{item.type}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* When to change */}
      <CollapsibleSection title={t('whenToChangeTitle')} className="mt-6 sm:mt-8">
          <div className="space-y-3">
            {whenToChangeList.map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Too much/little tax */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card border border-gray-200 rounded-xl">
          <h3 className="text-lg font-bold mb-3">{t('tooMuchTaxTitle')}</h3>
          <p className="text-gray-700 mb-3">
            {t('tooMuchTaxText')}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Løsning:</strong> {t('tooMuchTaxSolution')}
          </p>
        </div>
        <div className="card border border-gray-200 rounded-xl">
          <h3 className="text-lg font-bold mb-3">{t('tooLittleTaxTitle')}</h3>
          <p className="text-gray-700 mb-3">
            {t('tooLittleTaxText')}
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Løsning:</strong> {t('tooLittleTaxSolution')}
          </p>
        </div>
      </div>

      {/* Tip */}
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
    </GuideLayout>
  );
}
