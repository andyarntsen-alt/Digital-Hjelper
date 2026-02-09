'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function PassordHjelpPage() {
  const t = useTranslations('guides.grunnleggende.passordHjelp');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const goodPasswordTips = t.raw('goodPasswordTips') as string[];

  return (
    <GuideLayout
      guideId="grunnleggende-passord"
      translationNamespace="guides.grunnleggende.passordHjelp"
      parentHref="/grunnleggende"
      parentLabelKey="grunnleggende"
      categoryColor="bg-grunnleggende-purple hover:bg-purple-700"
      totalTime="PT10M"
      steps={steps}
    >
      {/* Collapsible: Hvorfor viktig */}
      <CollapsibleSection title={t('whyImportantTitle')} className="mb-4">
          <p className="text-gray-700">{t('whyImportantText')}</p>
      </CollapsibleSection>

      {/* Collapsible: Gode passord */}
      <CollapsibleSection title={t('goodPasswordTitle')} variant="green" className="mb-6">
          <ul className="space-y-2 text-gray-700">
            {goodPasswordTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* BankID merknad */}
      <div className="mt-8 card border border-gray-200 rounded-xl">
        <h2 className="text-xl font-bold mb-2">{t('bankidNoteTitle')}</h2>
        <p className="text-gray-700">{t('bankidNoteText')}</p>
      </div>
    </GuideLayout>
  );
}
