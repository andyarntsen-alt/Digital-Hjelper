'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function VideosamtalePage() {
  const t = useTranslations('guides.grunnleggende.videosamtale');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whyUseList = t.raw('whyUseList') as string[];
  const apps = t.raw('apps') as { name: string; desc: string }[];
  const troubleshooting = t.raw('troubleshooting') as { problem: string; solution: string }[];

  return (
    <GuideLayout
      guideId="grunnleggende-videosamtale"
      translationNamespace="guides.grunnleggende.videosamtale"
      parentHref="/grunnleggende"
      parentLabelKey="grunnleggende"
      categoryColor="bg-grunnleggende-purple hover:bg-purple-700"
      totalTime="PT10M"
      steps={steps}
    >
      {/* Collapsible: Hvorfor */}
      <CollapsibleSection title={t('whyUseTitle')} variant="green" className="mb-4">
          <ul className="space-y-2 text-gray-700">
            {whyUseList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Collapsible: Apper */}
      <CollapsibleSection title={t('appsTitle')} className="mb-6">
          <div className="grid md:grid-cols-2 gap-4">
            {apps.map((app, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-100">
                <p className="font-semibold text-grunnleggende-purple">{app.name}</p>
                <p className="text-gray-600 text-sm">{app.desc}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Feilsoking */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('troubleshootingTitle')}</h2>
        <div className="space-y-4">
          {troubleshooting.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">{item.problem}</p>
              <p className="text-gray-600 mt-1">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </GuideLayout>
  );
}
