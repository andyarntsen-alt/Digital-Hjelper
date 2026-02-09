'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function MinsideContent() {
  const t = useTranslations('guides.digital.minside');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const tipsRaw = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="digital-minside"
      translationNamespace="guides.digital.minside"
      parentHref="/digital"
      parentLabelKey="digital"
      totalTime="PT10M"
      steps={steps}
    >
      {/* Intro */}
      <CollapsibleSection title={t('introTitle')} className="mb-4 -mt-2">
          <p className="text-gray-700">{t('introText')}</p>
      </CollapsibleSection>

      {/* Services */}
      <CollapsibleSection title={t('servicesTitle')} className="mb-4">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('serviceNAV')}</p>
              <p className="text-gray-600">{t('serviceNAVDesc')}</p>
              <p className="text-blue-600 text-sm mt-1">{t('serviceNAVUrl')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('serviceSkatt')}</p>
              <p className="text-gray-600">{t('serviceSkattDesc')}</p>
              <p className="text-blue-600 text-sm mt-1">{t('serviceSkattUrl')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('serviceHelse')}</p>
              <p className="text-gray-600">{t('serviceHelseDesc')}</p>
              <p className="text-blue-600 text-sm mt-1">{t('serviceHelseUrl')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('serviceAltinn')}</p>
              <p className="text-gray-600">{t('serviceAltinnDesc')}</p>
              <p className="text-blue-600 text-sm mt-1">{t('serviceAltinnUrl')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold text-gray-800">{t('serviceDigipost')}</p>
              <p className="text-gray-600">{t('serviceDigipostDesc')}</p>
              <p className="text-blue-600 text-sm mt-1">{t('serviceDigipostUrl')}</p>
            </div>
          </div>
      </CollapsibleSection>

      {/* Tips */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('tipsTitle')}</h2>
        <ul className="space-y-2">
          {tipsRaw.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </GuideLayout>
  );
}
