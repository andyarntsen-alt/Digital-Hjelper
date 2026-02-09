'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function GjeldPage() {
  const t = useTranslations('guides.bank.gjeld');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const signsRaw = t.raw('signs') as string[];
  const avoidItemsRaw = t.raw('avoidItems') as string[];

  return (
    <GuideLayout
      guideId="bank-gjeld"
      translationNamespace="guides.bank.gjeld"
      parentHref="/bank"
      parentLabelKey="bank"
      totalTime="PT10M"
      steps={steps}
    >
      {/* Important info */}
      <CollapsibleSection title={t('importantTitle')} className="mb-4">
          <p className="text-gray-700">{t('importantText')}</p>
      </CollapsibleSection>

      {/* Warning signs */}
      <CollapsibleSection title={t('signsTitle')} className="mb-4">
          <ul className="space-y-2">
            {signsRaw.map((sign, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <span>{sign}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Help resources */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('helpTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpNAV')}</p>
            <p className="text-gray-600">{t('helpNAVDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpKommune')}</p>
            <p className="text-gray-600">{t('helpKommuneDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpOkonomirad')}</p>
            <p className="text-gray-600">{t('helpOkonomiradDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpGjeldsofre')}</p>
            <p className="text-gray-600">{t('helpGjeldsofferDesc')}</p>
          </div>
        </div>
      </div>

      {/* Things to avoid */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('avoidTitle')}</h2>
        <ul className="space-y-2">
          {avoidItemsRaw.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </GuideLayout>
  );
}
