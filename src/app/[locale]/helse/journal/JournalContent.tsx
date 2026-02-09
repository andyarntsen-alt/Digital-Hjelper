'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function JournalPage() {
  const t = useTranslations('guides.helse.journal');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whatYouFind = t.raw('whatYouFind') as string[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <GuideLayout
      guideId="helse-journal"
      translationNamespace="guides.helse.journal"
      parentHref="/helse"
      parentLabelKey="helse"
      categoryColor="bg-helse-red hover:bg-red-700"
      totalTime="PT10M"
      steps={steps}
      showGuideTracker={true}
      faqSection={{
        titleKey: 'faqTitle',
        items: faq,
      }}
    >
      {/* What you'll find */}
      <CollapsibleSection title={t('whatYouFindTitle')} className="mb-4">
          <ul className="space-y-2 text-gray-700">
            {whatYouFind.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>
    </GuideLayout>
  );
}
