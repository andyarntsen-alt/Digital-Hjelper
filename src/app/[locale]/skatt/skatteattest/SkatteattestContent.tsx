'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function SkatteattestContent() {
  const t = useTranslations('guides.skatt.skatteattest');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const whatIsNeededForList = t.raw('whatIsNeededForList') as string[];
  const importantList = t.raw('importantList') as { label: string; text: string }[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <GuideLayout
      guideId="skatt-skatteattest"
      translationNamespace="guides.skatt.skatteattest"
      parentHref="/skatt"
      parentLabelKey="skatt"
      categoryColor="bg-skatt-green hover:bg-green-700"
      totalTime="PT5M"
      steps={steps}
      showGuideTracker={true}
      faqSection={{
        titleKey: 'faqTitle',
        items: faq,
      }}
    >
      {/* What is a tax certificate */}
      <CollapsibleSection title={t('whatIsTitle')} variant="blue" className="mt-6 sm:mt-8">
          <p className="text-gray-700 mb-4">
            {t('whatIsText')}
          </p>
          <p className="text-gray-700 font-medium">{t('whatIsNeededFor')}</p>
          <ul className="space-y-2 text-gray-700 mt-2">
            {whatIsNeededForList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Important to know */}
      <CollapsibleSection title={t('importantTitle')} variant="yellow" className="mt-8">
          <ul className="space-y-3 text-gray-700">
            {importantList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span><strong>{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>
    </GuideLayout>
  );
}
