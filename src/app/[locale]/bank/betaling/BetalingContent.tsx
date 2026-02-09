'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function BetalingPage() {
  const t = useTranslations('guides.bank.betaling');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whatYouNeedRaw = t.raw('whatYouNeed') as string[];

  return (
    <GuideLayout
      guideId="bank-betaling"
      translationNamespace="guides.bank.betaling"
      parentHref="/bank"
      parentLabelKey="bank"
      totalTime="PT10M"
      steps={steps}
    >
      {/* What you need */}
      <CollapsibleSection title={t('whatYouNeedTitle')} className="mb-4">
          <ul className="space-y-2">
            {whatYouNeedRaw.map((item, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Important terms */}
      <CollapsibleSection title={t('importantTermsTitle')} className="mb-4">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('termKID')}</p>
              <p className="text-gray-600">{t('termKIDDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('termKonto')}</p>
              <p className="text-gray-600">{t('termKontoDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('termBelop')}</p>
              <p className="text-gray-600">{t('termBelopDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('termFrist')}</p>
              <p className="text-gray-600">{t('termFristDesc')}</p>
            </div>
          </div>
      </CollapsibleSection>

      {/* AvtaleGiro */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('avtaleGiroTitle')}</h2>
        <p className="text-gray-700">{t('avtaleGiroText')}</p>
      </div>

      {/* eFaktura */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('efakturaTitle')}</h2>
        <p className="text-gray-700">{t('efakturaText')}</p>
      </div>
    </GuideLayout>
  );
}
