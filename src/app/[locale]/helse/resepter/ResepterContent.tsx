'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function ResepterPage() {
  const t = useTranslations('guides.helse.resepter');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whatYouFind = t.raw('whatYouFind') as { label: string; desc: string }[];
  const prescriptionTypes = t.raw('prescriptionTypes') as { type: string; desc: string; color: string }[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <GuideLayout
      guideId="helse-resepter"
      translationNamespace="guides.helse.resepter"
      parentHref="/helse"
      parentLabelKey="helse"
      categoryColor="bg-helse-red hover:bg-red-700"
      totalTime="PT5M"
      steps={steps}
      showGuideTracker={true}
      faqSection={{
        titleKey: 'faqTitle',
        items: faq,
      }}
      relatedGuides={{
        currentPath: '/helse/resepter',
        category: 'helse',
      }}
    >
      {/* What you'll find - rendered before steps via children placed before guide-steps */}
      <CollapsibleSection title={t('whatYouFindTitle')} className="mb-4">
          <div className="grid md:grid-cols-2 gap-4">
            {whatYouFind.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="font-semibold">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Prescription types */}
      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">{t('prescriptionTypesTitle')}</h2>
        <div className="space-y-4">
          {prescriptionTypes.map((item, index) => (
            <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
              <p className="font-semibold">{item.type}</p>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tip box */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">{t('tipBoxTitle')}</p>
            <p className="text-gray-700">
              {t('tipBoxText')}
            </p>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
}
