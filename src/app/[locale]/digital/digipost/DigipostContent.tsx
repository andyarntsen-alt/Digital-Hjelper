'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function DigipostContent() {
  const t = useTranslations('guides.digital.digipost');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const benefitsRaw = t.raw('benefits') as string[];
  const tipsRaw = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="digital-digipost"
      translationNamespace="guides.digital.digipost"
      parentHref="/digital"
      parentLabelKey="digital"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      relatedGuides={{
        currentPath: '/digital/digipost',
        category: 'digital',
        crossCategoryLinks: [
          {
            href: '/nav/logg-inn',
            titleKey: 'nav.loggInn.title',
            descriptionKey: 'nav.loggInn.description',
          },
          {
            href: '/skatt/skattemelding',
            titleKey: 'skatt.skattemelding.title',
            descriptionKey: 'skatt.skattemelding.description',
          },
        ],
      }}
    >
      {/* Benefits */}
      <CollapsibleSection title={t('benefitsTitle')} className="mb-4 -mt-2">
          <ul className="space-y-2">
            {benefitsRaw.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3 text-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
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
