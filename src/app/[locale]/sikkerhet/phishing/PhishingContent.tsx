'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function PhishingPage() {
  const t = useTranslations('guides.sikkerhet.phishing');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const warningSignsRaw = t.raw('warningSigns') as string[];

  return (
    <GuideLayout
      guideId="sikkerhet-phishing"
      translationNamespace="guides.sikkerhet.phishing"
      parentHref="/sikkerhet"
      parentLabelKey="sikkerhet"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
    >
      {/* Examples */}
      <CollapsibleSection title={t('examplesTitle')} className="mb-4 -mt-2">
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200 rounded-xl">
              <p className="text-sm text-gray-500 mb-1">{t('examplePostTitle')}</p>
              <p className="italic text-gray-700">{t('examplePostText')}</p>
              <p className="text-red-600 text-sm mt-2">{t('examplePostWarning')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 rounded-xl">
              <p className="text-sm text-gray-500 mb-1">{t('exampleBankTitle')}</p>
              <p className="italic text-gray-700">{t('exampleBankText')}</p>
              <p className="text-red-600 text-sm mt-2">{t('exampleBankWarning')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 rounded-xl">
              <p className="text-sm text-gray-500 mb-1">{t('exampleNavTitle')}</p>
              <p className="italic text-gray-700">{t('exampleNavText')}</p>
              <p className="text-red-600 text-sm mt-2">{t('exampleNavWarning')}</p>
            </div>
          </div>
      </CollapsibleSection>

      {/* Warning Signs */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('warningSignsTitle')}</h2>
        <ul className="space-y-2">
          {warningSignsRaw.map((sign, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <span className="text-gray-700">{sign}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* If Clicked */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('ifClickedTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('ifClickedText')}</p>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
          <li>{t('ifClicked1')}</li>
          <li>{t('ifClicked2')}</li>
          <li>{t('ifClicked3')}</li>
          <li>{t('ifClicked4')}</li>
          <li>{t('ifClicked5')}</li>
        </ol>
      </div>
    </GuideLayout>
  );
}
