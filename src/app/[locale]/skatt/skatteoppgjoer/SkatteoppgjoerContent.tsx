'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function SkatteoppgjoerContent() {
  const t = useTranslations('guides.skatt.skatteoppgjoer');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const whenList = t.raw('whenList') as { label: string; text: string }[];
  const moneyBackList = t.raw('moneyBackList') as string[];
  const additionalTaxList = t.raw('additionalTaxList') as { label: string; text: string }[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <GuideLayout
      guideId="skatt-skatteoppgjoer"
      translationNamespace="guides.skatt.skatteoppgjoer"
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
      {/* When does it come */}
      <CollapsibleSection title={t('whenTitle')} variant="blue" className="mt-6 sm:mt-8">
          <ul className="space-y-2 text-gray-700">
            {whenList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>{item.label}:</strong> {item.text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-gray-600">{t('whenNote')}</p>
      </CollapsibleSection>

      {/* Money back */}
      <CollapsibleSection title={t('moneyBackTitle')} className="mt-8" variant="green">
          <p className="text-gray-700 mb-4">
            {t('moneyBackText')}
          </p>
          <ul className="space-y-2 text-gray-700">
            {moneyBackList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Additional tax */}
      <CollapsibleSection title={t('additionalTaxTitle')} variant="yellow" className="mt-8">
          <p className="text-gray-700 mb-4">
            {t('additionalTaxText')}
          </p>
          <ul className="space-y-2 text-gray-700">
            {additionalTaxList.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-yellow-600 font-bold">•</span>
                <span>{item.label ? <><strong>{item.label}:</strong> {item.text}</> : item.text}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>
    </GuideLayout>
  );
}
