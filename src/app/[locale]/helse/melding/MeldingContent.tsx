'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function MeldingPage() {
  const t = useTranslations('guides.helse.melding');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whenToUseGoodList = t.raw('whenToUseGoodList') as string[];
  const whenToUseBadList = t.raw('whenToUseBadList') as string[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <GuideLayout
      guideId="helse-melding"
      translationNamespace="guides.helse.melding"
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
    >
      {/* When to use - Good */}
      <CollapsibleSection title={t('whenToUseGood')} className="mb-4">
          <ul className="space-y-2 text-gray-700">
            {whenToUseGoodList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* When NOT to use */}
      <CollapsibleSection title={t('whenToUseBad')} className="mb-4">
          <ul className="space-y-2 text-gray-700">
            {whenToUseBadList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>
    </GuideLayout>
  );
}
