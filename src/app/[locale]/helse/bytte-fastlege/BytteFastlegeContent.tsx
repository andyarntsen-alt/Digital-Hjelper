'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function BytteFastlegePage() {
  const t = useTranslations('guides.helse.bytteFastlege');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const goodToKnowList = t.raw('goodToKnowList') as string[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <GuideLayout
      guideId="helse-bytte-fastlege"
      translationNamespace="guides.helse.bytteFastlege"
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
      relatedGuides={{
        currentPath: '/helse/bytte-fastlege',
        category: 'helse',
      }}
    >
      {/* Good to know */}
      <CollapsibleSection title={t('goodToKnow')} className="mb-4">
          <ul className="space-y-2 text-gray-700">
            {goodToKnowList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>
    </GuideLayout>
  );
}
