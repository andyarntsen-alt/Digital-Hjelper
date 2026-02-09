'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function FolkeregisteretContent() {
  const t = useTranslations('guides.nyINorge.folkeregisteret');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const typesRaw = t.raw('types') as { type: string; description: string }[];

  return (
    <GuideLayout
      guideId="ny-i-norge-folkeregisteret"
      translationNamespace="guides.nyINorge.folkeregisteret"
      parentHref="/ny-i-norge"
      parentLabelKey="nyINorge"
      totalTime="PT20M"
      steps={steps}
    >
      {/* Collapsible: What Is */}
      <CollapsibleSection title={t('whatIsTitle')} className="mb-4">
          <p className="text-gray-700">{t('whatIsText')}</p>
      </CollapsibleSection>

      {/* Collapsible: Types */}
      <CollapsibleSection title={t('typesTitle')} className="mb-6">
          <p className="text-gray-700 mb-4">{t('typesText')}</p>
          <div className="space-y-4">
            {typesRaw.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="font-semibold text-gray-800">{item.type}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Tip */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">{t('tipTitle')}</p>
            <p className="text-gray-700">{t('tipText')}</p>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
}
